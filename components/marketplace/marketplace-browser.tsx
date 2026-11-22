"use client"

import { useId, useMemo, useState } from "react"
import { Search, SearchX } from "lucide-react"

import { ProductCard } from "@/components/marketplace/product-card"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type {
  MarketplaceCategory,
  MarketplaceProduct,
} from "@/types/marketplace"
import { NativeSelect } from "@/components/ui/native-select"
import { EmptyState, EmptyStateCta } from "@/components/shared/empty-state"

const ALL_CATEGORIES = "all" as const
const ALL_CAMPUSES = "all" as const

type SortOption = "featured" | "price-asc" | "price-desc"

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
]

function MarketplaceBrowser({
  products,
  categories,
  campuses = [],
}: {
  products: MarketplaceProduct[]
  categories: MarketplaceCategory[]
  campuses?: Campus[]
}) {
  const searchId = useId()
  const campusSelectId = useId()
  const sortId = useId()

  const [query, setQuery] = useState("")
  const [categorySlug, setCategorySlug] = useState<string>(ALL_CATEGORIES)
  const [campusSlug, setCampusSlug] = useState<string>(ALL_CAMPUSES)
  const [sort, setSort] = useState<SortOption>("featured")

  const categoryBySlug = useMemo(
    () => new Map(categories.map((category) => [category.slug, category])),
    [categories]
  )

  const campusBySlug = useMemo(
    () => new Map(campuses.map((campus) => [campus.slug, campus])),
    [campuses]
  )

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        categorySlug === ALL_CATEGORIES || product.categorySlug === categorySlug

      const matchesCampus =
        campusSlug === ALL_CAMPUSES || product.campusSlug === campusSlug

      const matchesQuery =
        normalizedQuery === "" ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery) ||
        Boolean(product.vendorName?.toLowerCase().includes(normalizedQuery))

      return matchesCategory && matchesCampus && matchesQuery
    })
  }, [products, categorySlug, campusSlug, query])

  const sortedProducts = useMemo(() => {
    if (sort === "featured") return filteredProducts

    const priced = filteredProducts.filter(
      (product): product is MarketplaceProduct & { price: number } =>
        product.price != null
    )
    const unpriced = filteredProducts.filter((product) => product.price == null)

    priced.sort((a, b) => (sort === "price-asc" ? a.price - b.price : b.price - a.price))

    return [...priced, ...unpriced]
  }, [filteredProducts, sort])

  const hasActiveFilters =
    query.trim() !== "" ||
    categorySlug !== ALL_CATEGORIES ||
    campusSlug !== ALL_CAMPUSES

  function handleResetFilters() {
    setQuery("")
    setCategorySlug(ALL_CATEGORIES)
    setCampusSlug(ALL_CAMPUSES)
    setSort("featured")
  }

  if (products.length === 0) {
    return (
      <EmptyState icon={SearchX} title="No products yet" description="Nothing has been listed here yet. Check back soon as the marketplace grows." action={<EmptyStateCta label="List an item for free" />} />
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-3.5 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-sm">
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
                className="h-9 sm:h-10 pl-8 text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3">
            {campuses.length > 0 && (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Label
                  htmlFor={campusSelectId}
                  className="text-xs font-medium text-muted-foreground whitespace-nowrap sr-only sm:not-sr-only"
                >
                  Campus:
                </Label>
                <NativeSelect
                  id={campusSelectId}
                  value={campusSlug}
                  onChange={(event) => setCampusSlug(event.target.value)}
                  className="h-9 sm:h-10 w-full rounded-lg border border-input bg-background px-2.5 sm:px-3 text-xs sm:text-sm text-foreground shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <option value={ALL_CAMPUSES}>All Campuses</option>
                  {campuses.map((campus) => (
                    <option key={campus.slug} value={campus.slug}>
                      {campus.shortName}
                    </option>
                  ))}
                </NativeSelect>
              </div>
            )}

            <div className="flex items-center gap-1.5 sm:gap-2">
              <Label
                htmlFor={sortId}
                className="text-xs font-medium text-muted-foreground whitespace-nowrap sr-only sm:not-sr-only"
              >
                Sort:
              </Label>
              <NativeSelect
                id={sortId}
                value={sort}
                onChange={(event) => setSort(event.target.value as SortOption)}
                className="h-9 sm:h-10 w-full rounded-lg border border-input bg-background px-2.5 sm:px-3 text-xs sm:text-sm text-foreground shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </NativeSelect>
            </div>
          </div>
        </div>

        <div
          role="group"
          aria-label="Filter by category"
          className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-1 sm:flex-wrap"
        >
          <button
            type="button"
            aria-pressed={categorySlug === ALL_CATEGORIES}
            onClick={() => setCategorySlug(ALL_CATEGORIES)}
            className={cn(
              buttonVariants({
                variant: categorySlug === ALL_CATEGORIES ? "default" : "outline",
                size: "sm",
              }),
              "shrink-0 rounded-full text-xs sm:text-sm h-8"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              aria-pressed={categorySlug === category.slug}
              onClick={() => setCategorySlug(category.slug)}
              className={cn(
                buttonVariants({
                  variant: categorySlug === category.slug ? "default" : "outline",
                  size: "sm",
                }),
                "shrink-0 rounded-full text-xs sm:text-sm h-8"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {sortedProducts.length === 0 ? (
        <EmptyState icon={SearchX} title="Nothing matches yet" description="Try a different search term or category." onReset={hasActiveFilters ? handleResetFilters : undefined} />
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Showing {sortedProducts.length} of {products.length}{" "}
            {products.length === 1 ? "listing" : "listings"}
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                category={categoryBySlug.get(product.categorySlug)}
                campus={
                  product.campusSlug
                    ? campusBySlug.get(product.campusSlug)
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export { MarketplaceBrowser }
