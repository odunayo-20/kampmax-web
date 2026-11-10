import { apiFetch } from "@/lib/api"
import { formatPrice } from "@/lib/format-price"

/** What an agent pays to keep one listing on the site, set by the Kampmax team. */
export type ListingPackage = {
  /** Naira. 0 means listings are free. */
  price: number
  durationDays: number
}

/** `GET /accommodation/packages`. Prices can arrive as text (database decimals). */
type ApiPackage = {
  price: number | string
  durationDays: number
  isActive?: boolean
}

/** The first package agents can buy, or null when there is none or it is unreadable. */
export function toListingPackage(items: ApiPackage[]): ListingPackage | null {
  for (const item of items) {
    if (item.isActive === false) continue
    const price = Number(item.price)
    if (!Number.isFinite(price) || price < 0) continue
    if (!Number.isInteger(item.durationDays) || item.durationDays < 1) continue
    return { price, durationDays: item.durationDays }
  }
  return null
}

/**
 * The listing package for the public agent page. Pricing is helpful but never
 * essential, so a failure returns null and the page explains pricing in words.
 */
export async function getListingPackage(): Promise<ListingPackage | null> {
  try {
    return toListingPackage(await apiFetch<ApiPackage[]>("/accommodation/packages"))
  } catch {
    return null
  }
}

/** How the price reads on the page. */
export function describeListingPrice(pkg: ListingPackage): {
  headline: string
  detail: string
} {
  const period = pkg.durationDays === 1 ? "1 day" : `${pkg.durationDays} days`
  if (pkg.price === 0) {
    return {
      headline: "Free",
      detail: `Listing is free at the moment. Each listing runs for ${period} at a time.`,
    }
  }
  return {
    headline: formatPrice(pkg.price),
    detail: `Per listing, for ${period}. A listing keeps the price it was started at when it renews.`,
  }
}
