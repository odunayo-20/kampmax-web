"use client"

import { useId, useMemo, useState } from "react"
import { CalendarX, Search } from "lucide-react"

import { EventCard } from "@/components/events/event-card"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Event, EventCategory } from "@/types/event"

const ALL_CATEGORIES = "all" as const
const ALL_CAMPUSES = "all" as const

type TimelineTab = "upcoming" | "past"

/**
 * Client-side search and filtering for the public events directory.
 * Distinguishes upcoming from past events and supports category
 * and campus filtering.
 */
function EventsBrowser({
  upcomingEvents,
  pastEvents,
  categories,
  campuses,
}: {
  upcomingEvents: Event[]
  pastEvents: Event[]
  categories: EventCategory[]
  campuses: Campus[]
}) {
  const searchId = useId()
  const campusSelectId = useId()

  const [tab, setTab] = useState<TimelineTab>("upcoming")
  const [query, setQuery] = useState("")
  const [categorySlug, setCategorySlug] = useState<string>(ALL_CATEGORIES)
  const [campusSlug, setCampusSlug] = useState<string>(ALL_CAMPUSES)

  const categoryBySlug = useMemo(
    () => new Map(categories.map((c) => [c.slug, c])),
    [categories]
  )

  const activePool = tab === "upcoming" ? upcomingEvents : pastEvents

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return activePool.filter((ev) => {
      const matchesCategory =
        categorySlug === ALL_CATEGORIES || ev.categorySlug === categorySlug

      const matchesCampus =
        campusSlug === ALL_CAMPUSES || ev.campusSlug === campusSlug

      const matchesQuery =
        normalizedQuery === "" ||
        ev.title.toLowerCase().includes(normalizedQuery) ||
        ev.description.toLowerCase().includes(normalizedQuery) ||
        Boolean(ev.location?.toLowerCase().includes(normalizedQuery)) ||
        Boolean(ev.organizerName?.toLowerCase().includes(normalizedQuery))

      return matchesCategory && matchesCampus && matchesQuery
    })
  }, [activePool, categorySlug, campusSlug, query])

  const hasActiveFilters =
    query.trim() !== "" ||
    categorySlug !== ALL_CATEGORIES ||
    campusSlug !== ALL_CAMPUSES

  function handleResetFilters() {
    setQuery("")
    setCategorySlug(ALL_CATEGORIES)
    setCampusSlug(ALL_CAMPUSES)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Timeline tab selector: Upcoming vs Past */}
      <div className="flex items-center gap-2 border-b border-border/60 pb-3">
        <button
          type="button"
          aria-pressed={tab === "upcoming"}
          onClick={() => {
            setTab("upcoming")
            handleResetFilters()
          }}
          className={buttonVariants({
            variant: tab === "upcoming" ? "default" : "ghost",
            size: "sm",
          })}
        >
          Upcoming Events ({upcomingEvents.length})
        </button>
        <button
          type="button"
          aria-pressed={tab === "past"}
          onClick={() => {
            setTab("past")
            handleResetFilters()
          }}
          className={buttonVariants({
            variant: tab === "past" ? "default" : "ghost",
            size: "sm",
          })}
        >
          Past Events ({pastEvents.length})
        </button>
      </div>

      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full max-w-sm">
            <Label htmlFor={searchId} className="sr-only">
              Search events
            </Label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id={searchId}
                type="search"
                placeholder={
                  tab === "upcoming"
                    ? "Search upcoming events, venues, organizers"
                    : "Search past events"
                }
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-10 pl-8"
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
              onChange={(e) => setCampusSlug(e.target.value)}
              className="h-10 rounded-lg border border-input bg-background px-3 py-1 text-sm text-foreground shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
          aria-label="Filter by event category"
          className="flex flex-wrap gap-2"
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
              "rounded-full"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              aria-pressed={categorySlug === cat.slug}
              onClick={() => setCategorySlug(cat.slug)}
              className={cn(
                buttonVariants({
                  variant: categorySlug === cat.slug ? "default" : "outline",
                  size: "sm",
                }),
                "rounded-full"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <CalendarX className="size-5" aria-hidden="true" />
          </span>
          <p className="font-heading text-lg font-semibold text-foreground">
            {tab === "upcoming"
              ? "No upcoming events match your filters"
              : "No past events match your filters"}
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {hasActiveFilters
              ? "Try adjusting your search terms or selecting another category or campus."
              : tab === "upcoming"
                ? "No upcoming events are currently scheduled in this category. Check back soon."
                : "No archived events recorded under these criteria."}
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
          <p className="text-sm text-muted-foreground">
            Showing {filteredEvents.length} of {activePool.length}{" "}
            {tab === "upcoming" ? "upcoming" : "past"}{" "}
            {activePool.length === 1 ? "event" : "events"}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.slug}
                event={event}
                category={categoryBySlug.get(event.categorySlug)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export { EventsBrowser }
