export type MarketplaceCategory = {
  slug: string
  name: string
  enabled: boolean
}

export type MarketplaceProduct = {
  /** URL segment: the product name in words followed by its API UUID. */
  slug: string
  name: string
  description: string
  categorySlug: string
  categoryName?: string
  /** Primary cover image URL. Falls back to a placeholder when unset. */
  image?: string
  /** All image URLs for this product. */
  images?: string[]
  /** In Naira. Omit to represent an inquiry-based/unpriced listing. */
  price?: number
  compareAtPrice?: number
  condition?: "NEW" | "USED" | "REFURBISHED" | string
  stockQuantity?: number
  /** References a campus slug. Omit when not campus-specific. */
  campusSlug?: string
  vendorId?: string
  vendorName?: string
  vendorSlug?: string
  location?: string
  allowDelivery?: boolean
  allowPickup?: boolean
  deliveryFee?: number
  tags?: string[]
}
