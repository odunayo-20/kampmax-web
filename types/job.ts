export type OpportunityType = {
  slug: string
  name: string
  enabled: boolean
}

export type Opportunity = {
  slug: string
  title: string
  organization: string
  typeSlug: string
  location?: string
  /** References a campus slug. Omit when not campus-specific. */
  campusSlug?: string
  /** One-line pitch shown on cards. Cards fall back to `description`. */
  summary?: string
  description: string
  responsibilities?: string[]
  requirements?: string[]
  skills?: string[]
  /** Human-readable date, e.g. "November 15, 2026". */
  closingDate?: string
  featured?: boolean
}
