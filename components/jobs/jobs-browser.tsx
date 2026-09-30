"use client"

import { useId, useMemo, useState } from "react"
import { Search, SearchX } from "lucide-react"

import { OpportunityCard } from "@/components/jobs/opportunity-card"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Campus } from "@/types/campus"
import type { Opportunity, OpportunityType } from "@/types/job"

const ALL_TYPES = "all" as const
const ALL_CAMPUSES = "all" as const

/**
 * Client-side search and filtering for the public jobs directory.
 * Kept intentionally lightweight and local so it can be swapped for a
 * `kampmax-api` search query in a later module without UI rework.
 */
function JobsBrowser({
  opportunities,
  types,
  campuses,
}: {
  opportunities: Opportunity[]
  types: OpportunityType[]
  campuses: Campus[]
}) {
  const searchId = useId()
  const campusSelectId = useId()

  const [query, setQuery] = useState("")
  const [typeSlug, setTypeSlug] = useState<string>(ALL_TYPES)
  const [campusSlug, setCampusSlug] = useState<string>(ALL_CAMPUSES)

  const typeBySlug = useMemo(
    () => new Map(types.map((type) => [type.slug, type])),
    [types]
  )

  const filteredOpportunities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return opportunities.filter((op) => {
      const matchesType = typeSlug === ALL_TYPES || op.typeSlug === typeSlug

      const matchesCampus =
        campusSlug === ALL_CAMPUSES || op.campusSlug === campusSlug

      const matchesQuery =
        normalizedQuery === "" ||
        op.title.toLowerCase().includes(normalizedQuery) ||
        op.organization.toLowerCase().includes(normalizedQuery) ||
        op.description.toLowerCase().includes(normalizedQuery) ||
        Boolean(op.location?.toLowerCase().includes(normalizedQuery)) ||
        Boolean(
          op.skills?.some((skill) =>
            skill.toLowerCase().includes(normalizedQuery)
          )
        )

      return matchesType && matchesCampus && matchesQuery
    })
  }, [opportunities, typeSlug, campusSlug, query])

  const hasActiveFilters =
    query.trim() !== "" || typeSlug !== ALL_TYPES || campusSlug !== ALL_CAMPUSES

  function handleResetFilters() {
    setQuery("")
    setTypeSlug(ALL_TYPES)
    setCampusSlug(ALL_CAMPUSES)
  }

  if (opportunities.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
        <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <SearchX className="size-5" aria-hidden="true" />
        </span>
        <p className="font-heading text-lg font-semibold text-foreground">
          No opportunities yet
        </p>
        <p className="max-w-sm text-sm text-muted-foreground">
          No job or internship opportunities have been posted yet. Check back
          soon as campus and partner organizations add listings.
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
              Search opportunities
            </Label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id={searchId}
                type="search"
                placeholder="Search by role, company, or skill"
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
          aria-label="Filter by opportunity type"
          className="flex flex-wrap gap-2"
        >
          <button
            type="button"
            aria-pressed={typeSlug === ALL_TYPES}
            onClick={() => setTypeSlug(ALL_TYPES)}
            className={buttonVariants({
              variant: typeSlug === ALL_TYPES ? "default" : "outline",
              size: "sm",
            })}
          >
            All
          </button>
          {types.map((type) => (
            <button
              key={type.slug}
              type="button"
              aria-pressed={typeSlug === type.slug}
              onClick={() => setTypeSlug(type.slug)}
              className={buttonVariants({
                variant: typeSlug === type.slug ? "default" : "outline",
                size: "sm",
              })}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>

      {filteredOpportunities.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
          <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <SearchX className="size-5" aria-hidden="true" />
          </span>
          <p className="font-heading text-lg font-semibold text-foreground">
            No matching opportunities
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Nothing matched your current keywords or filter criteria. Try
            clearing filters or searching with different terms.
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
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.slug}
              opportunity={opportunity}
              type={typeBySlug.get(opportunity.typeSlug)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export { JobsBrowser }
