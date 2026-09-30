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
  slug: string
  title: string
  description: string
  categorySlug: string
  /** ISO date string, e.g. "2026-11-14" */
  date: string
  startTime?: string
  endTime?: string
  location?: string
  /** References a Module 06 campus slug. Omit when not campus-specific. */
  campusSlug?: string
  organizerName?: string
  organizerType?: EventOrganizerType
  /** Path to a real event banner image. Falls back to deliberate placeholder when omitted. */
  image?: string
  highlights?: string[]
  importantInfo?: string
  featured?: boolean
  isPast?: boolean
}
