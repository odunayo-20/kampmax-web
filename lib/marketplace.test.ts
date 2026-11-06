import { describe, expect, it } from "vitest"

import { activeProductCategories } from "@/lib/marketplace"
import type { MarketplaceCategory, MarketplaceProduct } from "@/types/marketplace"

const product = (slug: string, categorySlug: string): MarketplaceProduct => ({
  slug,
  name: slug,
  description: "",
  categorySlug,
})

const taxonomy: MarketplaceCategory[] = [
  { slug: "electronics", name: "Electronics", enabled: true },
  { slug: "fashion", name: "Fashion", enabled: true },
  { slug: "food-drinks", name: "Food & Drinks", enabled: true },
]

describe("activeProductCategories", () => {
  it("offers only categories that have products, never empty ones", () => {
    const products = [product("a", "electronics"), product("b", "electronics")]
    expect(activeProductCategories(products, taxonomy).map((c) => c.name)).toEqual(["Electronics"])
  })

  it("lists each category once, in the order products first use them", () => {
    const products = [product("a", "fashion"), product("b", "electronics"), product("c", "fashion")]
    expect(activeProductCategories(products, taxonomy).map((c) => c.slug)).toEqual(["fashion", "electronics"])
  })

  it("still offers a category the taxonomy does not know, under a readable name", () => {
    const products = [product("a", "web-development")]
    expect(activeProductCategories(products, taxonomy)).toEqual([
      { slug: "web-development", name: "web development", enabled: true },
    ])
  })

  it("offers nothing when there are no products", () => {
    expect(activeProductCategories([], taxonomy)).toEqual([])
  })
})
