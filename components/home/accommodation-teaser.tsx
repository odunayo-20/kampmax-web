import Link from "next/link"

import { ListingCard } from "@/components/accommodation/listing-card"
import { ScrollSlider } from "@/components/shared/scroll-slider"
import type { AccommodationListing } from "@/types/accommodation"
import type { Campus } from "@/types/campus"

const MAX_LISTINGS = 8
const MAX_CAMPUS_LINKS = 8

/**
 * Homepage entry to student accommodation. The cards are plain server-rendered
 * links, so search engines can follow them: the section links to the hub, to each
 * campus page ("accommodation near X") and to the newest listings.
 */
function AccommodationTeaser({
  listings,
  campuses,
}: {
  listings: AccommodationListing[]
  campuses: Campus[]
}) {
  const campusLinks = campuses.slice(0, MAX_CAMPUS_LINKS)

  if (listings.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
        New student accommodation is added every week.{" "}
        <Link href="/accommodation" className="font-medium text-primary hover:underline">
          Browse accommodation
        </Link>{" "}
        or{" "}
        <Link href="/become-an-agent" className="font-medium text-primary hover:underline">
          list your rooms on Kampmax
        </Link>
        .
      </p>
    )
  }

  return (
    <ScrollSlider
      eyebrow="Accommodation"
      title="Student accommodation near your campus"
      description="Hostels, self-contain rooms and apartments from verified agents, with rent and every fee shown up front."
      viewAll={{ href: "/accommodation", label: "Browse all accommodation" }}
      label="Accommodation listings"
      between={
        campusLinks.length > 0 ? (
          <nav aria-label="Accommodation by campus">
            <ul className="flex flex-wrap gap-2">
              {campusLinks.map((campus) => (
                <li key={campus.slug}>
                  <Link
                    href={`/accommodation/near/${campus.slug}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    Near {campus.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null
      }
    >
      {listings.slice(0, MAX_LISTINGS).map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </ScrollSlider>
  )
}

export { AccommodationTeaser }
