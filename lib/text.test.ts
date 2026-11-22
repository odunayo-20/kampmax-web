import { describe, expect, it } from "vitest"

import { cleanText, isPlaceholderText } from "@/lib/text"

describe("cleanText", () => {
  it("collapses text typed twice", () => {
    expect(cleanText("SamsungSamsung")).toBe("Samsung")
    expect(cleanText("Backend Development Backend Development")).toBe("Backend Development")
    expect(cleanText("full stack developmentfull stack development")).toBe("full stack development")
  })
  it("leaves normal text alone", () => {
    expect(cleanText("Bobo Boboo")).toBe("Bobo Boboo")
    expect(cleanText("Tutu")).toBe("Tutu")
  })
  it("fixes spacing and punctuation", () => {
    expect(cleanText("  show up ,  however ")).toBe("show up, however")
  })
  it("handles missing text", () => {
    expect(cleanText(null)).toBe("")
  })
})

describe("isPlaceholderText", () => {
  it("spots form hints and empty text", () => {
    expect(isPlaceholderText("Your professional background and what makes you stand out. Max 500 characters.")).toBe(true)
    expect(isPlaceholderText("")).toBe(true)
    expect(isPlaceholderText("I design logos for campus brands.")).toBe(false)
  })
})
