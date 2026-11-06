import { ApiError, apiFetch, resolveMediaUrl } from "@/lib/api"
import { idFromSlug, slugify, slugWithId } from "@/lib/slug"
import type { Campus } from "@/types/campus"
import type { Service, ServiceCategory } from "@/types/service"

/** Backend category shape (`GET /categories?type=SERVICE`). */
type ApiCategory = {
  id: string
  name: string
  slug: string
  isActive: boolean
}

type ApiServiceCategory = {
  id: string
  name: string
}

type ApiServicePackage = {
  id: string
  name: string
  description: string | null
  price: number | null
  currency: string
  deliveryDays: number | null
  revisions: number | null
  features: string[] | null
}

type ApiServiceFreelancer = {
  id: string
  name: string
  avatar: string | null
}

type ApiFreelancerProfile = {
  id: string
  fullName: string
  avatar: string | null
  campusId: string | null
}

/** Backend shape (`GET /services/public`). */
type ApiService = {
  id: string
  freelancerId: string
  title: string
  slug: string
  description: string | null
  shortDescription: string | null
  category: ApiServiceCategory | null
  startingPrice: number | null
  currency: string
  deliveryDays: number | null
  status: string
  isPublished: boolean
  skills: string[]
  pricingModel: string
  priceMax: number | null
  deliveryValue: number | null
  deliveryUnit: string
  revisions: number | null
  deliverables: string[]
  coverImageUrl: string | null
  packages?: ApiServicePackage[]
  freelancer?: ApiServiceFreelancer
  createdAt: string
  updatedAt: string
}

type ApiPage<T> = {
  items: T[]
  meta: { totalPages: number }
}

const PAGE_SIZE = 100 // The backend caps `limit` at 100.
const MAX_PAGES = 3

function toService(
  item: ApiService,
  campuses: Campus[],
  freelancerMap?: Map<string, ApiFreelancerProfile>
): Service {
  const profile = item.freelancerId && freelancerMap ? freelancerMap.get(item.freelancerId) : undefined
  const providerName = item.freelancer?.name ?? profile?.fullName
  const providerAvatar = resolveMediaUrl(item.freelancer?.avatar ?? profile?.avatar)
  const providerSlug =
    item.freelancerId && providerName
      ? slugWithId(providerName, item.freelancerId)
      : undefined

  let campusSlug: string | undefined
  if (profile?.campusId) {
    campusSlug = campuses.find((c) => c.id === profile.campusId)?.slug
  }

  const categorySlug = item.category?.name ? slugify(item.category.name) : "general"

  return {
    slug: slugWithId(item.title, item.id),
    name: item.title,
    description: item.description ?? item.shortDescription ?? "",
    categorySlug,
    categoryName: item.category?.name,
    image: resolveMediaUrl(item.coverImageUrl),
    providerName,
    providerAvatar,
    providerSlug,
    campusSlug,
    priceFrom: item.startingPrice !== null && item.startingPrice !== undefined ? Number(item.startingPrice) : undefined,
    pricingModel: item.pricingModel,
    currency: item.currency,
    deliveryDays: item.deliveryDays ?? undefined,
    skills: item.skills ?? [],
    deliverables: item.deliverables ?? [],
    packages: item.packages?.map((pkg) => ({
      id: pkg.id,
      name: pkg.name,
      description: pkg.description ?? undefined,
      price: pkg.price !== null && pkg.price !== undefined ? Number(pkg.price) : undefined,
      currency: pkg.currency,
      deliveryDays: pkg.deliveryDays ?? undefined,
      revisions: pkg.revisions ?? undefined,
      features: pkg.features ?? undefined,
    })),
  }
}

/** Public services, newest first. `campuses` resolves provider campus slugs. */
export async function getServices(campuses: Campus[] = []): Promise<Service[]> {
  const services: ApiService[] = []

  for (let page = 1; page <= MAX_PAGES; page++) {
    const result = await apiFetch<ApiPage<ApiService>>("/services/public", {
      query: { page, limit: PAGE_SIZE, sort: "newest" },
    })
    services.push(...result.items)
    if (page >= result.meta.totalPages) break
  }

  // Resolve freelancer profile data (e.g. campus) for active services
  const freelancerIds = [...new Set(services.map((s) => s.freelancerId).filter(Boolean))]
  const profiles = await Promise.all(
    freelancerIds.map((id) =>
      apiFetch<ApiFreelancerProfile>(`/freelancers/${id}`).catch(() => null)
    )
  )
  const freelancerMap = new Map(
    profiles.filter((p): p is ApiFreelancerProfile => p !== null).map((p) => [p.id, p])
  )

  return services.map((service) => toService(service, campuses, freelancerMap))
}

/** A single published service by URL segment, or `null` when it does not exist. */
export async function getService(
  slug: string,
  campuses: Campus[] = []
): Promise<Service | null> {
  const id = idFromSlug(slug)

  let item: ApiService | null = null

  if (id) {
    try {
      item = await apiFetch<ApiService>(`/services/public/${id}`)
    } catch (error) {
      if (!(error instanceof ApiError && error.status === 404)) {
        throw error
      }
    }
  }

  if (!item) {
    try {
      item = await apiFetch<ApiService>(`/services/slug/${encodeURIComponent(slug)}`)
    } catch (error) {
      if (error instanceof ApiError && error.status === 404) {
        return null
      }
      throw error
    }
  }

  if (!item) return null

  let freelancerProfile: ApiFreelancerProfile | null = null
  if (item.freelancerId) {
    try {
      freelancerProfile = await apiFetch<ApiFreelancerProfile>(`/freelancers/${item.freelancerId}`)
    } catch {
      // Freelancer profile read failed; fall back to the basic info in the service item
    }
  }

  const map = freelancerProfile ? new Map([[freelancerProfile.id, freelancerProfile]]) : undefined
  return toService(item, campuses, map)
}

/** Public services offered by a specific freelancer profile. */
export async function getServicesByFreelancer(
  freelancerId: string,
  campuses: Campus[] = []
): Promise<Service[]> {
  try {
    const result = await apiFetch<ApiPage<ApiService>>("/services/public", {
      query: { freelancerId, limit: PAGE_SIZE },
    })
    return result.items.map((item) => toService(item, campuses))
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) return []
    throw error
  }
}

/** Service taxonomy categories (`GET /categories?type=SERVICE`). */
export async function getServiceCategories(): Promise<ServiceCategory[]> {
  try {
    const result = await apiFetch<ApiPage<ApiCategory>>("/categories", {
      query: { type: "SERVICE", limit: 100 },
    })
    return result.items.map((cat) => ({
      slug: cat.slug,
      name: cat.name,
      enabled: cat.isActive,
    }))
  } catch (error) {
    if (error instanceof ApiError) return []
    throw error
  }
}

/**
 * Filter pills for the directory: active categories represented in published services
 * supplemented with top categories, up to 8.
 */
export function activeServiceCategories(
  services: Service[],
  allCategories: ServiceCategory[] = []
): ServiceCategory[] {
  const categoryMap = new Map(allCategories.map((c) => [c.slug, c]))
  const usedSlugs = new Set(services.map((s) => s.categorySlug))

  const active: ServiceCategory[] = []
  for (const slug of usedSlugs) {
    const found = categoryMap.get(slug)
    if (found) {
      active.push(found)
    } else {
      active.push({ slug, name: slug.replace(/-/g, " "), enabled: true })
    }
  }

  for (const cat of allCategories) {
    if (active.length >= 8) break
    if (!usedSlugs.has(cat.slug) && cat.enabled) {
      active.push(cat)
    }
  }

  return active
}

