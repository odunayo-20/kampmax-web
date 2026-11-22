import { ApiError, apiFetch, resolveMediaUrl } from "@/lib/api"
import { formatPrice } from "@/lib/format-price"
import { idFromSlug, slugWithId } from "@/lib/slug"
import { cleanText } from "@/lib/text"
import type {
  AccommodationCategory,
  AccommodationDetail,
  AccommodationListing,
  AccommodationPage,
  AccommodationSearch,
  Furnishing,
  PaymentFrequency,
} from "@/types/accommodation"

/** Listings change by the hour; a minute-old page is fine and keeps the API calm. */
const REVALIDATE_SECONDS = 60
export const PAGE_SIZE = 12

type ApiCard = {
  id: string
  title: string
  category: { name: string; slug: string } | null
  neighbourhood: string | null
  city: string
  state: string
  campus: { id: string; name: string } | null
  rentAmount: number
  paymentFrequency: PaymentFrequency
  totalUpfrontCost: number
  bedrooms: number
  bathrooms: number
  furnishingStatus: Furnishing
  coverImage: string | null
  agent: { id: string; name: string }
}

type ApiDetail = ApiCard & {
  description: string
  landmark: string | null
  charges: AccommodationDetail["charges"]
  media: { url: string; type: string }[]
  amenities: { name: string; slug: string }[]
  mapPoint: { latitude: number; longitude: number } | null
  agentProfile: {
    id: string
    name: string
    photoUrl: string | null
    memberSince: string | null
    activeListings: number
    reply: { answeredRate: number | null; typicalReplyHours: number | null }
  }
}

const FREQUENCY_LABELS: Record<PaymentFrequency, string> = {
  MONTHLY: "per month",
  QUARTERLY: "per quarter",
  BIANNUALLY: "every 6 months",
  ANNUALLY: "per year",
  PER_SEMESTER: "per semester",
  PER_NIGHT: "per night",
}

const FURNISHING_LABELS: Record<Furnishing, string> = {
  FURNISHED: "Furnished",
  SEMI_FURNISHED: "Semi-furnished",
  UNFURNISHED: "Unfurnished",
}

export const frequencyLabel = (frequency: PaymentFrequency): string =>
  FREQUENCY_LABELS[frequency] ?? "per year"

export const furnishingLabel = (furnishing: Furnishing): string =>
  FURNISHING_LABELS[furnishing] ?? ""

export const furnishingOptions = Object.entries(FURNISHING_LABELS).map(([value, label]) => ({
  value: value as Furnishing,
  label,
}))

/** "₦250,000 per year". */
export function rentLabel(
  listing: Pick<AccommodationListing, "rent" | "paymentFrequency">
): string {
  return `${formatPrice(listing.rent)} ${frequencyLabel(listing.paymentFrequency)}`
}

/** "Ugbokolo, Okpokwu", or just the city or state when the neighbourhood is missing. */
export function placeLabel(
  listing: Pick<AccommodationListing, "neighbourhood" | "city" | "state">
): string {
  return [listing.neighbourhood, listing.city || listing.state].filter(Boolean).join(", ")
}

/** "2 bed · 1 bath", or "Single room" when there is no separate bedroom. */
export function sizeLabel({
  bedrooms,
  bathrooms,
}: Pick<AccommodationListing, "bedrooms" | "bathrooms">): string {
  const beds = bedrooms === 0 ? "Single room" : `${bedrooms} bed`
  return bathrooms > 0 ? `${beds} · ${bathrooms} bath` : beds
}

function toListing(item: ApiCard): AccommodationListing {
  const title = cleanText(item.title)
  return {
    id: item.id,
    slug: slugWithId(title, item.id),
    title,
    categoryName: item.category?.name,
    categorySlug: item.category?.slug,
    neighbourhood: cleanText(item.neighbourhood) || undefined,
    city: item.city,
    state: item.state,
    campusId: item.campus?.id,
    campusName: item.campus?.name,
    rent: Number(item.rentAmount),
    paymentFrequency: item.paymentFrequency,
    totalUpfrontCost: Number(item.totalUpfrontCost),
    bedrooms: item.bedrooms,
    bathrooms: item.bathrooms,
    furnishing: item.furnishingStatus,
    image: resolveMediaUrl(item.coverImage),
    agentId: item.agent.id,
    agentName: item.agent.name,
  }
}

/** One page of live listings matching the filters in `search`. */
export async function getListings(
  search: AccommodationSearch = {}
): Promise<AccommodationPage> {
  const result = await apiFetch<{
    items: ApiCard[]
    meta: { total: number; page: number; totalPages: number }
  }>("/accommodation/listings", {
    revalidate: REVALIDATE_SECONDS,
    query: { ...search, page: search.page ?? 1, limit: PAGE_SIZE },
  })
  return {
    items: result.items.map(toListing),
    total: result.meta.total,
    page: result.meta.page,
    totalPages: result.meta.totalPages,
  }
}

export async function getAccommodationCategories(): Promise<AccommodationCategory[]> {
  const items = await apiFetch<AccommodationCategory[]>("/accommodation/categories", {
    revalidate: 3600,
  })
  return items.map(({ name, slug }) => ({ name, slug }))
}

/** One live listing from a URL segment, or `null` when it is gone (taken, expired or removed). */
export async function getListing(slug: string): Promise<AccommodationDetail | null> {
  const id = idFromSlug(slug)
  if (!id) return null
  try {
    const item = await apiFetch<ApiDetail>(`/accommodation/listings/${id}`, {
      revalidate: REVALIDATE_SECONDS,
    })
    const agent = item.agentProfile
    return {
      ...toListing(item),
      description: cleanText(item.description),
      landmark: cleanText(item.landmark) || undefined,
      charges: item.charges,
      images: item.media
        .filter((m) => m.type === "IMAGE")
        .map((m) => resolveMediaUrl(m.url))
        .filter((url): url is string => Boolean(url)),
      amenities: item.amenities,
      mapPoint: item.mapPoint ?? undefined,
      agent: {
        id: agent.id,
        name: agent.name,
        photoUrl: resolveMediaUrl(agent.photoUrl),
        memberSince: agent.memberSince ?? undefined,
        activeListings: agent.activeListings,
        typicalReplyHours: agent.reply.typicalReplyHours ?? undefined,
        answeredRate: agent.reply.answeredRate ?? undefined,
      },
    }
  } catch (error) {
    if (error instanceof ApiError && (error.status === 404 || error.status === 400)) return null
    throw error
  }
}

type RawParams = Record<string, string | string[] | undefined>

/** Reads the filters out of a page's `?query=string`. Unknown or malformed values are dropped. */
export function parseSearch(params: RawParams): AccommodationSearch {
  const one = (key: string): string | undefined => {
    const value = params[key]
    const text = (Array.isArray(value) ? value[0] : value)?.trim()
    return text ? text : undefined
  }
  const whole = (key: string, max: number): number | undefined => {
    const raw = one(key)
    if (raw === undefined) return undefined
    const n = Number(raw)
    return Number.isFinite(n) && n >= 0 && n <= max ? Math.floor(n) : undefined
  }
  const sort = one("sort")
  const furnishing = one("furnishing")
  const campusId = one("campusId")
  const page = whole("page", 500)
  return {
    q: one("q")?.slice(0, 100),
    campusId: campusId && /^[0-9a-f-]{36}$/i.test(campusId) ? campusId : undefined,
    category: one("category")?.slice(0, 80),
    minRent: whole("minRent", 1e9),
    maxRent: whole("maxRent", 1e9),
    bedrooms: whole("bedrooms", 50),
    furnishing:
      furnishing && furnishing in FURNISHING_LABELS ? (furnishing as Furnishing) : undefined,
    sort: sort === "price_asc" || sort === "price_desc" ? sort : undefined,
    page: page && page > 0 ? page : undefined,
  }
}
