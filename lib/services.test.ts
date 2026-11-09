import { describe, expect, it } from "vitest"

import {
  buildServiceGroups,
  categoryOf,
  directoryServiceCategories,
  toService,
  type ApiCategoryNode,
} from "@/lib/services"

// Shaped like the real taxonomy: broad categories, some holding sub-categories.
const node = (id: string, name: string, children?: ApiCategoryNode[]): ApiCategoryNode => ({
  id,
  name,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  children,
})

const tree: ApiCategoryNode[] = [
  node("it", "Technology & IT", [node("api", "API Development"), node("web", "Website Development")]),
  node("beauty", "Beauty & Personal Care"),
  node("print", "Printing & Stationery", []),
]

const groups = buildServiceGroups(tree)

// Only the fields toService reads; the rest of the backend shape is irrelevant here.
function api(id: string, category: { id: string; name: string } | null) {
  return {
    id,
    freelancerId: "f1",
    title: `Service ${id}`,
    slug: `service-${id}`,
    description: "About it.",
    shortDescription: null,
    category,
    startingPrice: null,
    currency: "NGN",
    deliveryDays: null,
    status: "PUBLISHED",
    isPublished: true,
    skills: [],
    pricingModel: "FIXED",
    priceMax: null,
    deliveryValue: null,
    deliveryUnit: "DAYS",
    revisions: null,
    deliverables: [],
    coverImageUrl: null,
    createdAt: "2026-01-01T00:00:00Z",
    updatedAt: "2026-01-01T00:00:00Z",
  }
}

describe("buildServiceGroups", () => {
  it("rolls a sub-category up to its parent", () => {
    expect(groups.get("api")).toEqual({ slug: "technology-it", name: "Technology & IT" })
    expect(groups.get("web")?.name).toBe("Technology & IT")
  })

  it("keeps a childless top-level category as a category in its own right", () => {
    expect(groups.get("beauty")).toEqual({ slug: "beauty-personal-care", name: "Beauty & Personal Care" })
    expect(groups.get("print")?.name).toBe("Printing & Stationery")
  })
})

describe("toService categories", () => {
  it("shows the broad category and keeps the sub-category as detail", () => {
    const service = toService(api("1", { id: "api", name: "API Development" }), [], undefined, groups)
    expect(service.categorySlug).toBe("technology-it")
    expect(service.categoryName).toBe("Technology & IT")
    expect(service.subcategoryName).toBe("API Development")
  })

  it("has no sub-category detail when the service sits in a top-level category", () => {
    const service = toService(api("2", { id: "beauty", name: "Beauty & Personal Care" }), [], undefined, groups)
    expect(service.categoryName).toBe("Beauty & Personal Care")
    expect(service.subcategoryName).toBeUndefined()
  })

  it("falls back to the service's own category when the taxonomy is unavailable", () => {
    const service = toService(api("3", { id: "api", name: "API Development" }), [])
    expect(service.categorySlug).toBe("api-development")
    expect(service.categoryName).toBe("API Development")
    expect(service.subcategoryName).toBeUndefined()
  })

  it("files a service with no category under Other", () => {
    const service = toService(api("4", null), [], undefined, groups)
    expect(service.categorySlug).toBe("other")
    expect(categoryOf(service)).toEqual({ slug: "other", name: "Other", enabled: true })
  })
})

describe("toService price and delivery", () => {
  it("carries the delivery time in the provider's own unit, revisions and the price range", () => {
    const service = toService(
      { ...api("6", null), deliveryValue: 4, deliveryUnit: "WEEKS", deliveryDays: 28, revisions: 2, priceMax: 25000 },
      [],
      undefined,
      groups
    )
    expect(service.deliveryLabel).toBe("4 weeks")
    expect(service.revisions).toBe(2)
    expect(service.priceMax).toBe(25000)
  })

  it("leaves them out when the API has none", () => {
    const service = toService({ ...api("7", null), deliveryValue: null, deliveryDays: null }, [], undefined, groups)
    expect(service.deliveryLabel).toBeUndefined()
    expect(service.revisions).toBeUndefined()
    expect(service.priceMax).toBeUndefined()
  })
})

describe("directoryServiceCategories", () => {
  const svc = (id: string, category: { id: string; name: string } | null) =>
    toService(api(id, category), [], undefined, groups)

  it("lists each broad category once, busiest first and Other last", () => {
    const list = [
      svc("1", null),
      svc("2", null),
      svc("3", { id: "beauty", name: "Beauty & Personal Care" }),
      svc("4", { id: "api", name: "API Development" }),
      svc("5", { id: "web", name: "Website Development" }),
    ]
    expect(directoryServiceCategories(list).map((category) => category.name)).toEqual([
      "Technology & IT",
      "Beauty & Personal Care",
      "Other",
    ])
  })

  it("only offers categories that have services", () => {
    expect(directoryServiceCategories([])).toEqual([])
    expect(directoryServiceCategories([svc("1", { id: "print", name: "Printing & Stationery" })])).toHaveLength(1)
  })
})
