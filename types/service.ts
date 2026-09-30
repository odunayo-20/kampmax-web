export type ServiceCategory = {
  slug: string
  name: string
  enabled: boolean
}

export type Service = {
  slug: string
  name: string
  description: string
  categorySlug: string
  /** Path to a real service image. Falls back to a placeholder when unset. */
  image?: string
  /** Name of the individual provider or business offering the service. */
  providerName?: string
  /** References a Module 06 campus slug. Omit when not campus-specific. */
  campusSlug?: string
  /** Starting price in Naira. Omit to represent a quote-based/inquiry-based listing. */
  priceFrom?: number
}
