import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  COOKIE_PREFERENCES_STORAGE_KEY,
  hasAnalyticsConsent,
  isValidMeasurementId,
  track,
} from "./analytics"

/** Just enough of a browser for the consent check: a window and a localStorage. */
function stubBrowser() {
  const store = new Map<string, string>()
  const sent: unknown[][] = []
  vi.stubGlobal("window", { gtag: (...args: unknown[]) => void sent.push(args) })
  vi.stubGlobal("localStorage", {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => void store.set(key, value),
  })
  return { store, sent }
}

let browser: ReturnType<typeof stubBrowser>

beforeEach(() => {
  browser = stubBrowser()
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe("analytics consent", () => {
  it("accepts only well-formed GA4 measurement IDs", () => {
    expect(isValidMeasurementId("G-ABC123XYZ9")).toBe(true)
    expect(isValidMeasurementId("")).toBe(false)
    expect(isValidMeasurementId("UA-12345-1")).toBe(false)
    expect(isValidMeasurementId("G-ABC'); alert(1); ('")).toBe(false)
  })

  it("treats a missing, broken or declined choice as no consent", () => {
    expect(hasAnalyticsConsent()).toBe(false)
    browser.store.set(COOKIE_PREFERENCES_STORAGE_KEY, "{not json")
    expect(hasAnalyticsConsent()).toBe(false)
    browser.store.set(COOKIE_PREFERENCES_STORAGE_KEY, JSON.stringify({ analytics: false }))
    expect(hasAnalyticsConsent()).toBe(false)
    browser.store.set(COOKIE_PREFERENCES_STORAGE_KEY, JSON.stringify({ analytics: "yes" }))
    expect(hasAnalyticsConsent()).toBe(false)
  })

  it("reads an accepted choice", () => {
    browser.store.set(COOKIE_PREFERENCES_STORAGE_KEY, JSON.stringify({ analytics: true }))
    expect(hasAnalyticsConsent()).toBe(true)
  })

  it("sends nothing when no measurement ID is configured, even with consent", () => {
    browser.store.set(COOKIE_PREFERENCES_STORAGE_KEY, JSON.stringify({ analytics: true }))
    track("cta_click", { location: "hero_join" })
    expect(browser.sent).toEqual([])
  })
})
