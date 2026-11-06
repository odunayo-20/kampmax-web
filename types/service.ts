export type ServiceCategory = {
  slug: string
  name: string
  enabled: boolean
}

export type ServicePackage = {
  id: string
  name: string
  description?: string
  price?: number
  currency: string
  deliveryDays?: number
  revisions?: number
  features?: string[]
}

export type Service = {
  /** URL segment: readable words followed by the API UUID. */
  slug: string
  name: string
  description: string
  categorySlug: string
  categoryName?: string
  /** Absolute URL of the cover image. Falls back to a placeholder when unset. */
  image?: string
  /** Name of the individual provider or business offering the service. */
  providerName?: string
  /** Provider profile avatar URL. */
  providerAvatar?: string
  /** Provider profile slug for linking to their freelancer page. */
  providerSlug?: string
  /** References a campus slug. Omit when not campus-specific. */
  campusSlug?: string
  /** Starting price in Naira. Omit to represent a quote-based/inquiry-based listing. */
  priceFrom?: number
  pricingModel?: "FIXED" | "STARTING_AT" | "HOURLY" | "PROJECT" | string
  currency?: string
  deliveryDays?: number
  skills?: string[]
  deliverables?: string[]
  packages?: ServicePackage[]
}
