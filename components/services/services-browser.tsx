"use client"

import { useId, useMemo, useState } from "react"
import { Search, SearchX } from "lucide-react"

import { ServiceCard } from "@/components/services/service-card"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Campus } from "@/types/campus"
import type { Service, ServiceCategory } from "@/types/service"

const ALL_CATEGORIES = "all" as const
const ALL_CAMPUSES = "all" as const

/**
 * Client-side search and filtering for the public services directory.
 * Kept intentionally lightweight and local so it can be swapped for a
 * `kampmax-api` search query in a later module without changing the UI.
 */
function ServicesBrowser({
  services,
  categories,
  campuses,
}: {
  services: Service[]
  categories: ServiceCategory[]
  campuses: Campus[]
}) {
  const searchId = useId()
  const campusSelectId = useId()

  const [query, setQuery] = useState("")
  const [categorySlug, setCategorySlug] = useState<string>(ALL_CATEGORIES)
  const [campusSlug, setCampusSlug] = useState<string>(ALL_CAMPUSES)

  const categoryBySlug = useMemo(
    () => new Map(categories.map((category) => [category.slug, category])),
    [categories]
  )

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return services.filter((service) => {
      const matchesCategory =
        categorySlug === ALL_CATEGORIES || service.categorySlug === categorySlug

      const matchesCampus =
        campusSlug === ALL_CAMPUSES || service.campusSlug === campusSlug

      const matchesQuery =
        normalizedQuery === "" ||
        service.name.toLowerCase().includes(normalizedQuery) ||
        service.description.toLowerCase().includes(normalizedQuery) ||
        Boolean(service.providerName?.toLowerCase().includes(normalizedQuery))

      return matchesCategory && matchesCampus && matchesQuery
    })
  }, [services, categorySlug, campusSlug, query])

  const hasActiveFilters =
    query.trim() !== "" ||
    categorySlug !== ALL_CATEGORIES ||
    campusSlug !== ALL_CAMPUSES

  function handleResetFilters() {
    setQuery("")
    setCategorySlug(ALL_CATEGORIES)
    setCampusSlug(ALL_CAMPUSES)
  }

  if (services.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
        <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <SearchX className="size-5" aria-hidden="true" />
        </span>
        <p className="font-heading text-lg font-semibold text-foreground">
          No services yet
        </p>
        <p className="max-w-sm text-sm text-muted-foreground">
          No services have been listed in the directory yet. Check back soon as
          providers add their offerings.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full max-w-sm">
            <Label htmlFor={searchId} className="sr-only">
              Search services
            </Label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id={searchId}
                type="search"
                placeholder="Search services or providers"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-9 pl-8"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Label
              htmlFor={campusSelectId}
              className="text-xs font-medium text-muted-foreground whitespace-nowrap"
            >
              Campus:
            </Label>
            <select
              id={campusSelectId}
              value={campusSlug}
              onChange={(event) => setCampusSlug(event.target.value)}
              className="h-9 rounded-lg border border-input bg-background px-3 py-1 text-sm text-foreground shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <option value={ALL_CAMPUSES}>All Campuses</option>
              {campuses.map((campus) => (
                <option key={campus.slug} value={campus.slug}>
                  {campus.shortName}
                </option>
              ))}
            </select>
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

      {filteredServices.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
          <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <SearchX className="size-5" aria-hidden="true" />
          </span>
          <p className="font-heading text-lg font-semibold text-foreground">
            No matching services
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Nothing matched your search or filter selection. Try adjusting your
            keywords or choosing another category or campus.
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              category={categoryBySlug.get(service.categorySlug)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export { ServicesBrowser }
