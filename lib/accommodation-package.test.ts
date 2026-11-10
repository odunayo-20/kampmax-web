import { describe, expect, it } from "vitest"

import { describeListingPrice, toListingPackage } from "@/lib/accommodation-package"

describe("toListingPackage", () => {
  it("reads a price that arrives as text", () => {
    expect(toListingPackage([{ price: "2000.00", durationDays: 30 }])).toEqual({
      price: 2000,
      durationDays: 30,
    })
  })

  it("keeps a free package: zero is a real price", () => {
    expect(toListingPackage([{ price: 0, durationDays: 30 }])).toEqual({ price: 0, durationDays: 30 })
  })

  it("skips a package agents cannot buy", () => {
    expect(
      toListingPackage([
        { price: 500, durationDays: 7, isActive: false },
        { price: 1500, durationDays: 30, isActive: true },
      ])
    ).toEqual({ price: 1500, durationDays: 30 })
  })

  it("gives nothing for an empty list, or for values it cannot trust", () => {
    expect(toListingPackage([])).toBeNull()
    expect(toListingPackage([{ price: "abc", durationDays: 30 }])).toBeNull()
    expect(toListingPackage([{ price: -5, durationDays: 30 }])).toBeNull()
    expect(toListingPackage([{ price: 100, durationDays: 0 }])).toBeNull()
    expect(toListingPackage([{ price: 100, durationDays: 2.5 }])).toBeNull()
  })
})

describe("describeListingPrice", () => {
  it("says free, and how long a listing runs", () => {
    expect(describeListingPrice({ price: 0, durationDays: 30 })).toEqual({
      headline: "Free",
      detail: "Listing is free at the moment. Each listing runs for 30 days at a time.",
    })
  })

  it("shows a naira price and states that a renewal keeps the starting price", () => {
    const out = describeListingPrice({ price: 2500, durationDays: 30 })
    expect(out.headline).toContain("2,500")
    expect(out.detail).toContain("for 30 days")
    expect(out.detail).toContain("keeps the price it was started at")
  })

  it("does not say '1 days'", () => {
    expect(describeListingPrice({ price: 100, durationDays: 1 }).detail).toContain("for 1 day.")
  })
})
