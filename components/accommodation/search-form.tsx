import Link from "next/link"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect } from "@/components/ui/native-select"
import { buttonVariants } from "@/components/ui/button"
import { furnishingOptions } from "@/lib/accommodation"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { AccommodationCategory, AccommodationSearch } from "@/types/accommodation"

const BEDROOMS = [0, 1, 2, 3, 4]

/**
 * Filters as a plain GET form: it works without JavaScript, and the chosen
 * filters live in the address so a search can be shared and indexed.
 */
function SearchForm({
  action,
  resultsId,
  search,
  campuses,
  categories,
}: {
  /** Page the form submits to. */
  action: string
  /** Element to land on after searching, so the results are not hidden above the fold. */
  resultsId: string
  search: AccommodationSearch
  /** Campuses to choose from. Leave out on a campus page, where the campus is fixed. */
  campuses?: Campus[]
  categories: AccommodationCategory[]
}) {
  const hasFilters = Object.entries(search).some(([key, value]) => key !== "page" && value !== undefined)

  return (
    <form
      action={`${action}#${resultsId}`}
      method="get"
      role="search"
      aria-label="Find accommodation"
      className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-1.5 sm:col-span-2 lg:col-span-4">
          <Label htmlFor="acc-q" className="sr-only">
            Search by area or title
          </Label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id="acc-q"
              name="q"
              type="search"
              defaultValue={search.q}
              placeholder="Search by area, street or hostel name"
              className="h-11 pl-9 md:h-10"
            />
          </div>
        </div>

        {campuses && campuses.length > 0 ? (
          <Field label="Campus" htmlFor="acc-campus">
            <NativeSelect id="acc-campus" name="campusId" defaultValue={search.campusId ?? ""} className="w-full">
              <option value="">Any campus</option>
              {campuses.map((campus) => (
                <option key={campus.slug} value={campus.id}>
                  {campus.shortName}
                </option>
              ))}
            </NativeSelect>
          </Field>
        ) : null}

        <Field label="Type" htmlFor="acc-category">
          <NativeSelect id="acc-category" name="category" defaultValue={search.category ?? ""} className="w-full">
            <option value="">Any type</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </NativeSelect>
        </Field>

        <Field label="Bedrooms" htmlFor="acc-bedrooms">
          <NativeSelect id="acc-bedrooms" name="bedrooms" defaultValue={search.bedrooms?.toString() ?? ""} className="w-full">
            <option value="">Any</option>
            {BEDROOMS.map((n) => (
              <option key={n} value={n}>
                {n === 0 ? "Single room" : `${n}+ bedrooms`}
              </option>
            ))}
          </NativeSelect>
        </Field>

        <Field label="Furnishing" htmlFor="acc-furnishing">
          <NativeSelect id="acc-furnishing" name="furnishing" defaultValue={search.furnishing ?? ""} className="w-full">
            <option value="">Any</option>
            {furnishingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </NativeSelect>
        </Field>

        <Field label="Max rent per month (₦)" htmlFor="acc-max">
          <Input
            id="acc-max"
            name="maxRent"
            type="number"
            inputMode="numeric"
            min={0}
            step={10000}
            defaultValue={search.maxRent}
            placeholder="e.g. 300000"
            className="h-11 md:h-10"
          />
        </Field>

        <Field label="Sort by" htmlFor="acc-sort">
          <NativeSelect id="acc-sort" name="sort" defaultValue={search.sort ?? ""} className="w-full">
            <option value="">Newest first</option>
            <option value="price_asc">Rent: low to high</option>
            <option value="price_desc">Rent: high to low</option>
          </NativeSelect>
        </Field>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-xl px-6")}>
          Search
        </button>
        {hasFilters ? (
          <Link
            href={action}
            className="inline-flex min-h-11 items-center text-sm font-medium text-primary hover:underline"
          >
            Clear filters
          </Link>
        ) : null}
      </div>
    </form>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor} className="text-xs text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  )
}

export { SearchForm }
