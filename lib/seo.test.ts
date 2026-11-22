import { describe, expect, it } from "vitest"

import { metaDescription, pageMetadata } from "@/lib/seo"

describe("metaDescription", () => {
  it("falls back when empty", () => {
    expect(metaDescription("", "Fallback")).toBe("Fallback")
  })
  it("cuts long text at a word", () => {
    const out = metaDescription("word ".repeat(100))
    expect(out.length).toBeLessThanOrEqual(155)
    expect(out.endsWith("…")).toBe(true)
  })
})

describe("pageMetadata", () => {
  it("never repeats the brand in the title and always has a share image", () => {
    const m = pageMetadata({ title: "Samsung", path: "/marketplace/samsung" })
    expect(m.title).toBe("Samsung")
    expect(m.openGraph?.title).toBe("Samsung | Kampmax")
    expect(m.openGraph?.images).toEqual(["/opengraph-image"])
  })
})
