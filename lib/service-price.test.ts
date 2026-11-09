import { describe, expect, it } from "vitest"

import {
  deliveryLabel,
  pricingNote,
  pricingShort,
  servicePriceLabel,
} from "@/lib/service-price"

describe("servicePriceLabel", () => {
  it("shows a starting price, per hour for hourly services", () => {
    expect(servicePriceLabel({ priceFrom: 15000 })).toMatch(/^From .*15,000$/)
    expect(servicePriceLabel({ priceFrom: 15000, pricingModel: "HOURLY" })).toMatch(/^From .*15,000\/hr$/)
  })

  it("shows a range when the upper price is higher", () => {
    const label = servicePriceLabel({ priceFrom: 10000, priceMax: 25000, pricingModel: "FIXED" })
    expect(label).toMatch(/10,000 – .*25,000$/)
    expect(servicePriceLabel({ priceFrom: 10000, priceMax: 25000, pricingModel: "HOURLY" })).toMatch(/\/hr$/)
  })

  it("ignores an upper price that is not above the lower one", () => {
    expect(servicePriceLabel({ priceFrom: 10000, priceMax: 10000 })).toMatch(/^From /)
    expect(servicePriceLabel({ priceFrom: 10000, priceMax: 5000 })).toMatch(/^From /)
  })

  it("says so when there is no price", () => {
    expect(servicePriceLabel({})).toBe("Price on request")
    expect(servicePriceLabel({ priceFrom: 0 })).toBe("Price on request")
  })
})

describe("pricingNote", () => {
  it("describes how each pricing model is charged", () => {
    expect(pricingNote("FIXED")).toBe("Fixed price")
    expect(pricingNote("HOURLY")).toBe("Charged per hour")
    expect(pricingNote("PROJECT")).toBe("Priced per project")
    expect(pricingNote("STARTING_AT")).toMatch(/^Starting price/)
  })

  it("has nothing to say about an unknown or missing model", () => {
    expect(pricingNote("SOMETHING_NEW")).toBeUndefined()
    expect(pricingNote(undefined)).toBeUndefined()
  })
})

describe("pricingShort", () => {
  it("gives a short label per model and nothing for unknown ones", () => {
    expect(pricingShort("HOURLY")).toBe("Per hour")
    expect(pricingShort("FIXED")).toBe("Fixed price")
    expect(pricingShort("STARTING_AT")).toBe("Starting price")
    expect(pricingShort("PROJECT")).toBe("Per project")
    expect(pricingShort("NEW_MODEL")).toBeUndefined()
    expect(pricingShort(undefined)).toBeUndefined()
  })
})

describe("deliveryLabel", () => {
  it("uses the provider's own unit, singular or plural", () => {
    expect(deliveryLabel(4, "WEEKS", 28)).toBe("4 weeks")
    expect(deliveryLabel(1, "WEEKS")).toBe("1 week")
    expect(deliveryLabel(12, "HOURS")).toBe("12 hours")
    expect(deliveryLabel(1, "DAYS")).toBe("1 day")
  })

  it("falls back to a day count, or nothing", () => {
    expect(deliveryLabel(null, undefined, 3)).toBe("3 days")
    expect(deliveryLabel(undefined, "FORTNIGHTS", 1)).toBe("1 day")
    expect(deliveryLabel(null, undefined, null)).toBeUndefined()
  })
})
