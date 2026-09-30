"use client"

import { useId, useMemo, useState } from "react"
import { Search, SearchX } from "lucide-react"

import { ProductCard } from "@/components/marketplace/product-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { buttonVariants } from "@/components/ui/button"
import type { MarketplaceCategory, MarketplaceProduct } from "@/types/marketplace"

const ALL_CATEGORIES = "all" as const

/**
 * Client-side search/category filter over the local mock dataset. Kept
 * intentionally simple — no server-side or API-backed search — so it can
 * be swapped for a real `kampmax-api` query later without redesigning
 * this section.
 */
function MarketplaceBrowser({
  products,
  categories,
}: {
  products: MarketplaceProduct[]
  categories: MarketplaceCategory[]
}) {
  const searchId = useId()
  const [query, setQuery] = useState("")
  const [categorySlug, setCategorySlug] = useState<string>(ALL_CATEGORIES)

  const categoryBySlug = useMemo(
    () => new Map(categories.map((category) => [category.slug, category])),
    [categories]
  )

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        categorySlug === ALL_CATEGORIES || product.categorySlug === categorySlug
      const matchesQuery =
        normalizedQuery === "" ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })
  }, [products, categorySlug, query])

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
        <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <SearchX className="size-5" aria-hidden="true" />
        </span>
        <p className="font-heading text-lg font-semibold text-foreground">
          No products yet
        </p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Nothing has been listed here yet. Check back soon as the
          marketplace grows.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="max-w-sm">
          <Label htmlFor={searchId} className="sr-only">
            Search products
          </Label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id={searchId}
              type="search"
              placeholder="Search products"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-9 pl-8"
            />
          </div>
        </div>

        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2"
        >
          <button
            type="button"
            aria-pressed={categorySlug === ALL_CATEGORIES}
            onClick={() => setCategorySlug(ALL_CATEGORIES)}
            className={buttonVariants({
              variant: categorySlug === ALL_CATEGORIES ? "default" : "outline",
              size: "sm",
            })}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              aria-pressed={categorySlug === category.slug}
              onClick={() => setCategorySlug(category.slug)}
              className={buttonVariants({
                variant: categorySlug === category.slug ? "default" : "outline",
                size: "sm",
              })}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
          <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <SearchX className="size-5" aria-hidden="true" />
          </span>
          <p className="font-heading text-lg font-semibold text-foreground">
            Nothing matches yet
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Try a different search term or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setCategorySlug(ALL_CATEGORIES)
            }}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              category={categoryBySlug.get(product.categorySlug)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export { MarketplaceBrowser }
