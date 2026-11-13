/**
 * Consent-gated analytics. Nothing here runs unless a GA4 measurement ID is
 * configured AND the visitor has accepted analytics cookies in the cookie
 * banner. Withdrawing consent switches collection off again.
 */

export const COOKIE_PREFERENCES_STORAGE_KEY = "kampmax_cookie_preferences"
export const COOKIE_PREFERENCES_CHANGED_EVENT = "kampmax:cookie-preferences-changed"

/** Public by design: a GA4 measurement ID ("G-XXXXXXXXXX") ships to every browser. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""

/** A GA4 measurement ID looks like "G-" followed by letters and digits. */
export function isValidMeasurementId(id: string): boolean {
  return /^G-[A-Z0-9]{4,20}$/.test(id)
}

/** Whether the stored cookie preferences allow analytics. */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false
  try {
    const raw = localStorage.getItem(COOKIE_PREFERENCES_STORAGE_KEY)
    if (!raw) return false
    return (JSON.parse(raw) as { analytics?: unknown }).analytics === true
  } catch {
    return false
  }
}

type EventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Sends one named event. A silent no-op without a measurement ID, without
 * consent, or before the analytics script has loaded.
 */
export function track(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return
  if (!isValidMeasurementId(GA_MEASUREMENT_ID)) return
  if (!hasAnalyticsConsent()) return
  window.gtag?.("event", name, params)
}
