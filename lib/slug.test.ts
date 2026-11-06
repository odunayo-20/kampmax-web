import { describe, expect, it } from "vitest"

import { idFromSlug, slugify, slugWithId } from "@/lib/slug"

const ID = "11111111-1111-4111-8111-111111111111"

describe("slugify", () => {
  it("lower-cases words and joins them with hyphens", () => {
    expect(slugify("UNILAG Tech & Innovation Summit 2026!")).toBe(
      "unilag-tech-innovation-summit-2026"
    )
  })

  it("strips accents and returns an empty string when nothing is left", () => {
    expect(slugify("Café Déjà Vu")).toBe("cafe-deja-vu")
    expect(slugify("!!!")).toBe("")
  })

  it("caps the length without leaving a trailing hyphen", () => {
    const slug = slugify("word ".repeat(40))
    expect(slug.length).toBeLessThanOrEqual(60)
    expect(slug.endsWith("-")).toBe(false)
  })
})

describe("slugWithId / idFromSlug", () => {
  it("round-trips the id", () => {
    expect(idFromSlug(slugWithId("Cultural Week", ID))).toBe(ID)
  })

  it("uses the bare id when the text has no usable words", () => {
    expect(slugWithId("!!!", ID)).toBe(ID)
    expect(idFromSlug(ID)).toBe(ID)
  })

  it("finds no id in a segment that does not end with one", () => {
    expect(idFromSlug("nonsense")).toBeNull()
    expect(idFromSlug(`${ID}-trailing`)).toBeNull()
  })
})
