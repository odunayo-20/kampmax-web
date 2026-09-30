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
  /** References a Module 06 campus slug. Omit when not campus-specific. */
  campusSlug?: string
  description: string
  responsibilities?: string[]
  requirements?: string[]
  skills?: string[]
  closingDate?: string
  featured?: boolean
}
