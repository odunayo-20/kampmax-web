"use client"

import { useId, useMemo, useState } from "react"
import { Search, SearchX } from "lucide-react"

import { ServiceCard } from "@/components/services/service-card"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
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

  const campusBySlug = useMemo(
    () => new Map(campuses.map((campus) => [campus.slug, campus])),
    [campuses]
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
        Boolean(service.categoryName?.toLowerCase().includes(normalizedQuery)) ||
        Boolean(service.subcategoryName?.toLowerCase().includes(normalizedQuery)) ||
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
        <span className="flex size-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
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
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-3.5 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-sm">
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
                className="h-9 sm:h-10 pl-8 text-xs sm:text-sm"
              />
            </div>
          </div>

          {campuses.length > 0 ? (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Label
                htmlFor={campusSelectId}
                className="text-xs font-medium text-muted-foreground whitespace-nowrap sr-only sm:not-sr-only"
              >
                Campus:
              </Label>
              <select
                id={campusSelectId}
                value={campusSlug}
                onChange={(event) => setCampusSlug(event.target.value)}
                className="h-9 sm:h-10 w-full rounded-lg border border-input bg-background px-2.5 sm:px-3 text-xs sm:text-sm text-foreground shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
              >
                <option value={ALL_CAMPUSES}>All Campuses</option>
                {campuses.map((campus) => (
                  <option key={campus.slug} value={campus.slug}>
                    {campus.shortName}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
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

      {filteredServices.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
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
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-full")}
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Showing {filteredServices.length} of {services.length}{" "}
            {services.length === 1 ? "service" : "services"}
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                category={categoryBySlug.get(service.categorySlug)}
                campus={
                  service.campusSlug
                    ? campusBySlug.get(service.campusSlug)
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

export { ServicesBrowser }
