import Link from "next/link"
import { ArrowLeft, ArrowRight, BedDouble } from "lucide-react"

import { ListingsJsonLd } from "@/components/accommodation/accommodation-json-ld"
import { ListingCard } from "@/components/accommodation/listing-card"
import { SearchForm } from "@/components/accommodation/search-form"
import { ApiUnavailable } from "@/components/shared/api-unavailable"
import { EmptyState } from "@/components/shared/empty-state"
import { buttonVariants } from "@/components/ui/button"
import { whatsappUrl } from "@/config/contact"
import { orNullDuringBuild } from "@/lib/api"
import { getAccommodationCategories, getListings } from "@/lib/accommodation"
import { getCampuses } from "@/lib/campuses"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { AccommodationSearch } from "@/types/accommodation"

/** `?a=1&b=2` for the filters in `search`, with the page replaced. */
function pageHref(basePath: string, search: AccommodationSearch, page: number): string {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries({ ...search, page: page > 1 ? page : undefined })) {
    if (value !== undefined) params.set(key, String(value))
  }
  const query = params.toString()
  return query ? `${basePath}?${query}` : basePath
}

/**
 * Search form, results and pagination. Used by the main browse page and by the
 * per-campus pages (where `campus` fixes the campus and hides its selector).
 */
async function AccommodationBrowse({
  basePath,
  search,
  campus,
}: {
  basePath: string
  search: AccommodationSearch
  campus?: Campus
}) {
  const effective = campus?.id ? { ...search, campusId: campus.id } : search
  const data = await orNullDuringBuild(async () => {
    const [campuses, categories, results] = await Promise.all([
      campus ? Promise.resolve<Campus[]>([]) : getCampuses(),
      getAccommodationCategories(),
      getListings(effective),
    ])
    return { campuses, categories, results }
  })

  if (!data) return <ApiUnavailable subject="accommodation" />

  const { campuses, categories, results } = data
  // On a campus page the campus is not a "filter" the visitor can clear.
  const filtered = Object.entries(search).some(([k, v]) => k !== "page" && v !== undefined)

  return (
    <div className="flex flex-col gap-6">
      <SearchForm
        action={basePath}
        search={search}
        campuses={campus ? undefined : campuses.filter((c) => c.id)}
        categories={categories}
      />

      {results.items.length === 0 ? (
        <NoResults filtered={filtered} basePath={basePath} />
      ) : (
        <>
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {results.total} {results.total === 1 ? "place" : "places"} available
            {results.totalPages > 1 ? `, page ${results.page} of ${results.totalPages}` : ""}
          </p>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.items.map((listing, index) => (
              <li key={listing.id}>
                <ListingCard listing={listing} priority={index < 3} />
              </li>
            ))}
          </ul>
          <ListingsJsonLd name={campus ? `Accommodation near ${campus.shortName}` : "Student accommodation"} listings={results.items} />
          {results.totalPages > 1 ? (
            <Pagination basePath={basePath} search={search} page={results.page} totalPages={results.totalPages} />
          ) : null}
        </>
      )}
    </div>
  )
}

function NoResults({ filtered, basePath }: { filtered: boolean; basePath: string }) {
  const whatsapp = whatsappUrl("Hi Kampmax, I am looking for accommodation near my campus.")
  const link = cn(buttonVariants({ size: "sm", variant: "outline" }), "min-h-11 rounded-full")
  return (
    <EmptyState
      icon={BedDouble}
      title={filtered ? "No places match yet" : "New places are being added"}
      description={
        filtered
          ? "Try a higher rent, fewer filters or another campus. New rooms are added every week."
          : "Verified agents are listing rooms and apartments near campus. Tell us what you need and we will help you find it."
      }
      action={
        <>
          {filtered ? (
            <Link href={basePath} className={link}>
              Clear filters
            </Link>
          ) : null}
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" data-track="accommodation-whatsapp" className={cn(buttonVariants({ size: "sm" }), "min-h-11 rounded-full")}>
            Tell us what you need
          </a>
        </>
      }
    />
  )
}

function Pagination({
  basePath,
  search,
  page,
  totalPages,
}: {
  basePath: string
  search: AccommodationSearch
  page: number
  totalPages: number
}) {
  const link = cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 rounded-xl px-5")
  return (
    <nav aria-label="More places" className="flex items-center justify-between gap-3">
      {page > 1 ? (
        <Link href={pageHref(basePath, search, page - 1)} rel="prev" className={link}>
          <ArrowLeft /> Previous
        </Link>
      ) : (
        <span />
      )}
      {page < totalPages ? (
        <Link href={pageHref(basePath, search, page + 1)} rel="next" className={link}>
          Next <ArrowRight />
        </Link>
      ) : null}
    </nav>
  )
}

export { AccommodationBrowse }
