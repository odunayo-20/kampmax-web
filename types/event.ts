export type EventCategory = {
  slug: string
  name: string
  enabled: boolean
}

export type EventOrganizerType =
  | "Student Organization"
  | "Campus Department"
  | "Business"
  | "Community Group"
  | "Independent Organizer"

export type Event = {
  /** URL segment: the title in words followed by the event's API id. */
  slug: string
  title: string
  description: string
  categorySlug: string
  categoryName?: string
  /** ISO date string in Nigerian time, e.g. "2026-11-14". */
  date: string
  /** ISO date-times, for structured data. */
  startsAt?: string
  endsAt?: string
  startTime?: string
  endTime?: string
  location?: string
  /** References a campus slug. Omit when not campus-specific. */
  campusSlug?: string
  organizerName?: string
  organizerType?: EventOrganizerType
  /** Absolute URL of the event banner. Falls back to a deliberate placeholder when omitted. */
  image?: string
  highlights?: string[]
  importantInfo?: string
  featured?: boolean
  isPast?: boolean
  /** Lowest ticket price in Naira; 0 when any ticket type is free. */
  minPrice?: number
  /** "Free" or "From ₦2,500". */
  priceLabel?: string
  /** Tickets still available across all ticket types. */
  seatsLeft?: number
}
