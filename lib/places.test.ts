import { describe, expect, it } from "vitest"

import { groupPlacesByType, isEmptySearch, toSearchOptions } from "@/lib/places"
import type { CampusPlace } from "@/types/place"

const place = (name: string, type: CampusPlace["type"]): CampusPlace => ({
  id: name,
  campusId: "c1",
  campusName: "FUTA",
  campusSlug: "futa",
  name,
  type,
  aliases: [],
  description: null,
  latitude: 7.3,
  longitude: 5.14,
})

describe("groupPlacesByType", () => {
  it("puts gates before hostels, sorts each group by name and drops empty groups", () => {
    const groups = groupPlacesByType([
      place("Hall B", "HOSTEL"),
      place("Main Gate", "SCHOOL_GATE"),
      place("Hall A", "HOSTEL"),
    ])

    expect(groups.map((g) => g.label)).toEqual(["School gate", "Hostel"])
    expect(groups[1].places.map((p) => p.name)).toEqual(["Hall A", "Hall B"])
  })

  it("returns nothing for no places", () => {
    expect(groupPlacesByType([])).toEqual([])
  })
})

describe("toSearchOptions", () => {
  it("lists campuses, then places, then outside results, and keeps what a link needs", () => {
    const options = toSearchOptions({
      campuses: [
        {
          id: "c1",
          slug: "futa",
          name: "FUTA",
          shortName: "FUTA",
          city: "Akure",
          state: "Ondo",
          latitude: 7.3,
          longitude: 5.14,
        },
        {
          id: "c2",
          slug: "oau",
          name: "OAU",
          shortName: "OAU",
          city: "Ile-Ife",
          state: "Osun",
          latitude: null,
          longitude: null,
        },
      ],
      places: [place("Main Gate", "SCHOOL_GATE")],
      external: [{ name: "Akure", detail: "Ondo", latitude: 7.25, longitude: 5.2 }],
    })

    expect(options.map((o) => o.kind)).toEqual(["campus", "campus", "place", "external"])
    expect(options[0]).toMatchObject({ href: "/campuses/futa", latitude: 7.3 })
    // A campus without a position can still be opened, just not shown on the map.
    expect(options[1].latitude).toBeUndefined()
    expect(options[1].href).toBe("/campuses/oau")
    expect(options[2]).toMatchObject({
      detail: "School gate · FUTA",
      href: "/campuses/futa",
    })
    expect(options[3].href).toBeUndefined()
  })
})

describe("isEmptySearch", () => {
  it("is empty only when campuses, places and outside results are all empty", () => {
    expect(isEmptySearch({ campuses: [], places: [], external: [] })).toBe(true)
    expect(
      isEmptySearch({
        campuses: [],
        places: [],
        external: [{ name: "Akure", detail: null, latitude: 7.2, longitude: 5.2 }],
      })
    ).toBe(false)
  })
})
