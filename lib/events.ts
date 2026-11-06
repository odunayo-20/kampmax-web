import { ApiError, apiFetch, resolveMediaUrl } from "@/lib/api"
import type { Campus } from "@/types/campus"
import type { Event, EventCategory } from "@/types/event"

/** Backend shape (`GET /events`). Only the fields this site reads. */
type ApiEvent = {
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
}

type ApiPage<T> = {
  items: T[]
  meta: { totalPages: number }
}

const PAGE_SIZE = 100 // The backend caps `limit` at 100.
const MAX_PAGES = 3

/** Events happen in Nigeria; dates and times are shown in Lagos time. */
const TIME_ZONE = "Africa/Lagos"

const UUID = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

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

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
    .replace(/-+$/g, "")
}

/** The API only knows events by id, so the URL carries it after a readable title. */
export function eventSlug(title: string, id: string): string {
  const words = slugify(title)
  return words ? `${words}-${id}` : id
}

/** The API id at the end of an event URL segment, or `null` when there is none. */
export function eventIdFromSlug(slug: string): string | null {
  return slug.match(UUID)?.[0] ?? null
}

function toEvent(item: ApiEvent, campuses: Campus[]): Event {
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
    slug: eventSlug(item.title, item.id),
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
  const id = eventIdFromSlug(slug)
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
