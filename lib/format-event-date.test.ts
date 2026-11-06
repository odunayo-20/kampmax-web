import { describe, expect, it } from "vitest"

import { formatEventDate } from "@/lib/format-event-date"

describe("formatEventDate", () => {
  it("formats an ISO date with its weekday", () => {
    expect(formatEventDate("2026-11-14")).toBe("Saturday, November 14, 2026")
  })

  it("returns the input unchanged when it is not a date", () => {
    expect(formatEventDate("soon")).toBe("soon")
  })
})
