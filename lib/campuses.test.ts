import { describe, expect, it } from "vitest"

import {
  formatCampusLocation,
  toCampus,
  toShortName,
  type ApiCampus,
} from "@/lib/campuses"

describe("formatCampusLocation", () => {
  it("does not repeat a state the city already names", () => {
    // Real backend data: city "Owo, Ondo State", state "Ondo".
    expect(formatCampusLocation("Owo, Ondo State", "Ondo")).toBe("Owo, Ondo State")
    expect(formatCampusLocation("Lagos", "Lagos")).toBe("Lagos")
    expect(formatCampusLocation("Ibadan", "Oyo State")).toBe("Ibadan, Oyo State")
  })

  it("joins city and state when the city does not name it", () => {
    expect(formatCampusLocation("Abuja", "FCT")).toBe("Abuja, FCT")
  })

  it("falls back to whichever part exists", () => {
    expect(formatCampusLocation("Owo", "")).toBe("Owo")
    expect(formatCampusLocation("", "Ondo")).toBe("Ondo")
    expect(formatCampusLocation("", "")).toBeUndefined()
  })
})

describe("toShortName", () => {
  it("upper-cases a single-word slug and falls back to the name otherwise", () => {
    expect(toShortName("unilag", "University of Lagos")).toBe("UNILAG")
    expect(toShortName("test-campus-0c1da0f5", "Test Campus")).toBe("Test Campus")
  })
})

describe("toCampus", () => {
  const base: ApiCampus = {
    id: "c1",
    name: "Rufus Giwa Polytechnic",
    slug: "rugipo",
    state: "Ondo",
    city: "Owo, Ondo State",
    coverImage: null,
    latitude: 7.1966,
    longitude: 5.5866,
    memberCount: 3,
  }

  it("maps the fields the site shows", () => {
    expect(toCampus(base)).toMatchObject({
      id: "c1",
      slug: "rugipo",
      shortName: "RUGIPO",
      location: "Owo, Ondo State",
      latitude: 7.1966,
      longitude: 5.5866,
      enabled: true,
    })
  })

  it("leaves the position out unless both coordinates exist", () => {
    const campus = toCampus({ ...base, longitude: null })
    expect(campus.latitude).toBeUndefined()
    expect(campus.longitude).toBeUndefined()
  })
})
