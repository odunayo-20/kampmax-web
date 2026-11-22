export type PaymentFrequency =
  | "MONTHLY"
  | "QUARTERLY"
  | "BIANNUALLY"
  | "ANNUALLY"
  | "PER_SEMESTER"
  | "PER_NIGHT"

export type Furnishing = "FURNISHED" | "SEMI_FURNISHED" | "UNFURNISHED"

/** A room or home as shown on a card. The API never sends a street address or phone number. */
export type AccommodationListing = {
  id: string
  /** URL segment: readable words plus the id. */
  slug: string
  title: string
  categoryName?: string
  categorySlug?: string
  neighbourhood?: string
  city: string
  state: string
  campusId?: string
  campusName?: string
  rent: number
  paymentFrequency: PaymentFrequency
  totalUpfrontCost: number
  bedrooms: number
  bathrooms: number
  furnishing: Furnishing
  image?: string
  agentId: string
  agentName: string
}

export type AccommodationDetail = AccommodationListing & {
  description: string
  landmark?: string
  charges: {
    rent: number
    cautionFee: number
    agencyFee: number
    agreementFee: number
    otherCharges: number
    totalUpfront: number
  }
  images: string[]
  amenities: { name: string; slug: string }[]
  /** Approximate (about 110 m) so a visitor finds the area, not the door. */
  mapPoint?: { latitude: number; longitude: number }
  agent: {
    id: string
    name: string
    photoUrl?: string
    memberSince?: string
    activeListings: number
    typicalReplyHours?: number
    answeredRate?: number
  }
}

export type AccommodationCategory = { name: string; slug: string }

/** What the browse page lets a visitor filter on. All optional; they live in the URL. */
export type AccommodationSearch = {
  q?: string
  campusId?: string
  category?: string
  minRent?: number
  maxRent?: number
  bedrooms?: number
  furnishing?: Furnishing
  sort?: "price_asc" | "price_desc"
  page?: number
}

export type AccommodationPage = {
  items: AccommodationListing[]
  total: number
  page: number
  totalPages: number
}
