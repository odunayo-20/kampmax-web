import { describe, expect, it } from "vitest"

import { categoriesOf, toEvent, type ApiEvent } from "@/lib/events"
import type { Campus } from "@/types/campus"

const ID = "11111111-1111-4111-8111-111111111111"

const campuses: Campus[] = [
  { id: "campus-1", slug: "rugipo", name: "Rufus Giwa Polytechnic", shortName: "RUGIPO", enabled: true },
]

const base: ApiEvent = {
  id: ID,
  campusId: "campus-1",
  organizerName: "Ada Obi",
  organizationName: null,
  title: "Photography Workshop!",
  description: "Learn.",
  location: "Main Auditorium",
  startsAt: "2026-11-14T09:00:00.000Z",
  endsAt: "2026-11-14T14:00:00.000Z",
  coverImageUrl: null,
  isFeatured: false,
  category: null,
  minPrice: 0,
  seatsLeft: 40,
}

describe("toEvent", () => {
  it("shows dates and times in Lagos time", () => {
    const event = toEvent(base, campuses)
    // 09:00 UTC is 10:00 in Lagos (UTC+1).
    expect(event.date).toBe("2026-11-14")
    expect(event.startTime).toBe("10:00 AM")
    expect(event.endTime).toBe("3:00 PM")
  })

  it("puts the Lagos calendar day on events that cross midnight there", () => {
    // 23:30 UTC is 00:30 the next day in Lagos.
    const event = toEvent({ ...base, startsAt: "2026-11-14T23:30:00.000Z", endsAt: "2026-11-15T10:00:00.000Z" }, campuses)
    expect(event.date).toBe("2026-11-15")
  })

  it("labels the end time with its date when the event spans days", () => {
    const event = toEvent({ ...base, startsAt: "2026-11-20T22:30:00.000Z", endsAt: "2026-11-21T10:00:00.000Z" }, campuses)
    expect(event.startTime).toBe("11:30 PM")
    expect(event.endTime).toBe("11:00 AM, Nov 21")
  })

  it("builds a readable URL segment that ends with the id", () => {
    expect(toEvent(base, campuses).slug).toBe(`photography-workshop-${ID}`)
  })

  it("prefers the organization name and resolves the campus slug", () => {
    const event = toEvent({ ...base, organizationName: "Photo Club" }, campuses)
    expect(event.organizerName).toBe("Photo Club")
    expect(event.campusSlug).toBe("rugipo")
    expect(toEvent({ ...base, campusId: "unknown" }, campuses).campusSlug).toBeUndefined()
  })

  it("labels the price: free, or from the cheapest ticket", () => {
    expect(toEvent(base, campuses).priceLabel).toBe("Free")
    // The API can send decimals as strings.
    const paid = toEvent({ ...base, minPrice: "2500.00" }, campuses)
    expect(paid.priceLabel).toMatch(/^From .*2,500$/)
    expect(paid.minPrice).toBe(2500)
  })

  it("keeps the seat count, including sold out", () => {
    expect(toEvent({ ...base, seatsLeft: 0 }, campuses).seatsLeft).toBe(0)
  })

  it("files uncategorised events under General", () => {
    const event = toEvent(base, campuses)
    expect(event.categorySlug).toBe("general")
    expect(event.categoryName).toBe("General")
  })
})

describe("categoriesOf", () => {
  it("lists each category once, in first-seen order", () => {
    const events = [
      toEvent({ ...base, category: { name: "Career", slug: "career" } }, campuses),
      toEvent(base, campuses),
      toEvent({ ...base, category: { name: "Career", slug: "career" } }, campuses),
    ]
    expect(categoriesOf(events).map((category) => category.slug)).toEqual(["career", "general"])
  })
})
