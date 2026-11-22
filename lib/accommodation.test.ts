import { describe, expect, it } from "vitest"

import { distanceKm, distanceLabel, parseSearch, placeLabel, rentLabel, sizeLabel } from "@/lib/accommodation"

describe("distance", () => {
  it("measures a straight line in kilometres", () => {
    const a = { latitude: 6.5158, longitude: 3.3896 }
    expect(distanceKm(a, a)).toBe(0)
    expect(distanceKm(a, { latitude: 6.5258, longitude: 3.3896 })).toBeCloseTo(1.11, 1)
  })
  it("writes metres under a kilometre and never less than 100 m", () => {
    expect(distanceLabel(0.84)).toBe("About 800 m")
    expect(distanceLabel(0.01)).toBe("About 100 m")
    expect(distanceLabel(1.234)).toBe("About 1.2 km")
  })
})

describe("labels", () => {
  it("writes rent with its period", () => {
    expect(rentLabel({ rent: 250000, paymentFrequency: "ANNUALLY" })).toContain("per year")
  })
  it("joins the place, skipping gaps", () => {
    expect(placeLabel({ neighbourhood: "Ugbokolo", city: "Okpokwu", state: "Benue" })).toBe(
      "Ugbokolo, Okpokwu"
    )
    expect(placeLabel({ neighbourhood: undefined, city: "", state: "Benue" })).toBe("Benue")
  })
  it("describes size", () => {
    expect(sizeLabel({ bedrooms: 0, bathrooms: 0 })).toBe("Single room")
    expect(sizeLabel({ bedrooms: 2, bathrooms: 1 })).toBe("2 bed · 1 bath")
  })
})

describe("parseSearch", () => {
  it("keeps valid filters", () => {
    expect(
      parseSearch({ q: " hostel ", bedrooms: "2", sort: "price_asc", furnishing: "FURNISHED" })
    ).toMatchObject({ q: "hostel", bedrooms: 2, sort: "price_asc", furnishing: "FURNISHED" })
  })
  it("drops junk", () => {
    const s = parseSearch({
      campusId: "x",
      bedrooms: "-1",
      sort: "drop table",
      furnishing: "x",
      page: "abc",
    })
    expect(s.campusId).toBeUndefined()
    expect(s.bedrooms).toBeUndefined()
    expect(s.sort).toBeUndefined()
    expect(s.furnishing).toBeUndefined()
    expect(s.page).toBeUndefined()
  })
  it("takes the first of repeated values", () => {
    expect(parseSearch({ q: ["a", "b"] }).q).toBe("a")
  })
})
