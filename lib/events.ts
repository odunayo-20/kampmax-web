import { ApiError, apiFetch, resolveMediaUrl } from "@/lib/api"
import { formatPrice } from "@/lib/format-price"
import { idFromSlug, slugWithId } from "@/lib/slug"
import type { Campus } from "@/types/campus"
import type { Event, EventCategory } from "@/types/event"

/** Backend shape (`GET /events`). Only the fields this site reads. */
export type ApiEvent = {
  id: string
  campusId: string
  organizerName: string
  organizationName: string | null
  title: string
  description: string
  location: string
  startsAt: string
  endsAt: string | null
  coverImageUrl: string | null
  isFeatured: boolean
  category: { name: string; slug: string } | null
  /** Lowest ticket price in Naira; 0 when any ticket type is free. */
  minPrice: number | string
  seatsLeft: number
}

type ApiPage<T> = {
  items: T[]
  meta: { totalPages: number }
}

const PAGE_SIZE = 100 // The backend caps `limit` at 100.
const MAX_PAGES = 3

/** Events happen in Nigeria; dates and times are shown in Lagos time. */
const TIME_ZONE = "Africa/Lagos"

const isoDateFormat = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})
const timeFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
})
const shortDateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  month: "short",
  day: "numeric",
})

const UNCATEGORISED = { name: "General", slug: "general" } as const

/** "Free", or "From ₦2,500" for the cheapest ticket. */
function toPriceLabel(minPrice: number | string): string {
  const price = Number(minPrice)
  if (!Number.isFinite(price)) return "Free"
  return price > 0 ? `From ${formatPrice(price)}` : "Free"
}

export function toEvent(item: ApiEvent, campuses: Campus[]): Event {
  const starts = new Date(item.startsAt)
  const ends = item.endsAt ? new Date(item.endsAt) : undefined
  const category = item.category ?? UNCATEGORISED
  const date = isoDateFormat.format(starts)

  let endTime: string | undefined
  if (ends) {
    endTime =
      isoDateFormat.format(ends) === date
        ? timeFormat.format(ends)
        : `${timeFormat.format(ends)}, ${shortDateFormat.format(ends)}`
  }

  return {
    slug: slugWithId(item.title, item.id),
    title: item.title,
    description: item.description,
    categorySlug: category.slug,
    categoryName: category.name,
    date,
    startsAt: starts.toISOString(),
    endsAt: ends?.toISOString(),
    startTime: timeFormat.format(starts),
    endTime,
    location: item.location || undefined,
    campusSlug: campuses.find((campus) => campus.id === item.campusId)?.slug,
    organizerName: item.organizationName ?? item.organizerName ?? undefined,
    image: resolveMediaUrl(item.coverImageUrl),
    featured: item.isFeatured,
    isPast: false,
    minPrice: Number.isFinite(Number(item.minPrice)) ? Number(item.minPrice) : undefined,
    priceLabel: toPriceLabel(item.minPrice),
    seatsLeft: item.seatsLeft,
  }
}

/**
 * Upcoming events (the API only lists events that have not ended), featured
 * first and then soonest first. `campuses` resolves each event's campus slug.
 */
export async function getEvents(campuses: Campus[]): Promise<Event[]> {
  const events: ApiEvent[] = []

  for (let page = 1; page <= MAX_PAGES; page++) {
    const result = await apiFetch<ApiPage<ApiEvent>>("/events", {
      query: { page, limit: PAGE_SIZE },
    })
    events.push(...result.items)
    if (page >= result.meta.totalPages) break
  }

  return events.map((event) => toEvent(event, campuses))
}

/** A single upcoming event by URL segment, or `null` when it does not exist. */
export async function getEvent(
  slug: string,
  campuses: Campus[]
): Promise<Event | null> {
  const id = idFromSlug(slug)
  if (!id) return null

  try {
    return toEvent(await apiFetch<ApiEvent>(`/events/${id}`), campuses)
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) return null
    throw error
  }
}

/** The categories the given events belong to, in first-seen order. */
export function categoriesOf(events: Event[]): EventCategory[] {
  const bySlug = new Map<string, EventCategory>()
  for (const event of events) {
    if (!bySlug.has(event.categorySlug)) {
      bySlug.set(event.categorySlug, {
        slug: event.categorySlug,
        name: event.categoryName ?? event.categorySlug,
        enabled: true,
      })
    }
  }
  return [...bySlug.values()]
}

/** The category of a single event. */
export function categoryOf(event: Event): EventCategory {
  return categoriesOf([event])[0]
}
