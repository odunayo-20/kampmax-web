import { formatPrice } from "@/lib/format-price"

type PriceFields = {
  priceFrom?: number
  priceMax?: number
  pricingModel?: string
}

/**
 * The price as shown to a buyer: "From ₦15,000/hr", or a range when the
 * provider set an upper price too, or "Price on request" with no price at all.
 */
export function servicePriceLabel({ priceFrom, priceMax, pricingModel }: PriceFields): string {
  if (!priceFrom) return "Price on request"

  const unit = pricingModel === "HOURLY" ? "/hr" : ""
  if (priceMax && priceMax > priceFrom) {
    return `${formatPrice(priceFrom)} – ${formatPrice(priceMax)}${unit}`
  }
  return `From ${formatPrice(priceFrom)}${unit}`
}

/** One line saying how the price is charged, or nothing for an unknown model. */
export function pricingNote(pricingModel?: string): string | undefined {
  switch (pricingModel) {
    case "FIXED":
      return "Fixed price"
    case "HOURLY":
      return "Charged per hour"
    case "STARTING_AT":
      return "Starting price, the final price depends on the work"
    case "PROJECT":
      return "Priced per project"
    default:
      return undefined
  }
}

/** A two or three word version of the pricing model, for a small fact tile. */
export function pricingShort(pricingModel?: string): string | undefined {
  switch (pricingModel) {
    case "FIXED":
      return "Fixed price"
    case "HOURLY":
      return "Per hour"
    case "STARTING_AT":
      return "Starting price"
    case "PROJECT":
      return "Per project"
    default:
      return undefined
  }
}

const unitNames: Record<string, string> = {
  HOURS: "hour",
  DAYS: "day",
  WEEKS: "week",
}

/** "4 weeks", "1 day", "12 hours"; falls back to a plain day count. */
export function deliveryLabel(
  value: number | null | undefined,
  unit: string | undefined,
  days?: number | null
): string | undefined {
  const name = unit ? unitNames[unit] : undefined
  if (value && name) return `${value} ${name}${value === 1 ? "" : "s"}`
  if (days) return `${days} ${days === 1 ? "day" : "days"}`
  return undefined
}
