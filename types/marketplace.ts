export type MarketplaceCategory = {
  slug: string
  name: string
  enabled: boolean
}

export type MarketplaceProduct = {
  slug: string
  name: string
  description: string
  categorySlug: string
  /** Path to a real product photo. Falls back to a placeholder when unset. */
  image?: string
  /** In Naira. Omit to represent an inquiry-based/unpriced listing. */
  price?: number
  /** References a Module 06 campus slug. Omit when not campus-specific. */
  campusSlug?: string
}
