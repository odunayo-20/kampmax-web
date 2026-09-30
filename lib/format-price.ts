const priceFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
})

/** Formats a whole-Naira price for display, e.g. `formatPrice(12500)` → "₦12,500". */
export function formatPrice(price: number): string {
  return priceFormatter.format(price)
}
