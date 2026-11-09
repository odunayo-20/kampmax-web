import { describe, expect, it } from "vitest"

import {
  SERVICE_TONE_COUNT,
  serviceIconKey,
  serviceToneIndex,
} from "@/lib/service-tile"

describe("serviceIconKey", () => {
  it("picks an icon from the real service category names", () => {
    expect(serviceIconKey("Technology & IT")).toBe("code")
    expect(serviceIconKey("Creative & Design")).toBe("design")
    expect(serviceIconKey("Tutoring & Lessons")).toBe("tutoring")
    expect(serviceIconKey("Beauty & Personal Care")).toBe("beauty")
    expect(serviceIconKey("Repairs & Maintenance")).toBe("repair")
    expect(serviceIconKey("Food & Catering")).toBe("food")
    expect(serviceIconKey("Transportation")).toBe("transport")
    expect(serviceIconKey("Events & Entertainment")).toBe("events")
    expect(serviceIconKey("Fitness & Wellness")).toBe("fitness")
    expect(serviceIconKey("Home Services")).toBe("home")
    expect(serviceIconKey("Printing & Stationery")).toBe("printing")
    expect(serviceIconKey("Professional Services")).toBe("business")
    expect(serviceIconKey("Digital & Freelance")).toBe("code")
  })

  it("prefers the more specific word when a name matches several", () => {
    // "Computer Repair" is a repair job even though it mentions a computer.
    expect(serviceIconKey("Computer Repair")).toBe("repair")
  })

  it("falls back to a generic icon for unknown or missing names", () => {
    expect(serviceIconKey("Something New")).toBe("default")
    expect(serviceIconKey(undefined)).toBe("default")
    expect(serviceIconKey("")).toBe("default")
  })
})

describe("serviceToneIndex", () => {
  it("is stable for a category and always within range", () => {
    const slugs = ["technology-it", "creative-design", "tutoring-lessons", "other", ""]
    for (const slug of slugs) {
      const tone = serviceToneIndex(slug)
      expect(tone).toBe(serviceToneIndex(slug))
      expect(tone).toBeGreaterThanOrEqual(0)
      expect(tone).toBeLessThan(SERVICE_TONE_COUNT)
    }
  })

  it("does not give every category the same look", () => {
    const tones = new Set(
      ["technology-it", "creative-design", "tutoring-lessons", "beauty-personal-care", "home-services", "food-catering"].map(
        serviceToneIndex
      )
    )
    expect(tones.size).toBeGreaterThan(2)
  })
})
