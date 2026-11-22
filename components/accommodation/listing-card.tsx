import Link from "next/link"
import { BadgeCheck, BedDouble, MapPin } from "lucide-react"

import { CoverImage } from "@/components/shared/cover-image"
import { Card, CardContent } from "@/components/ui/card"
import {
  furnishingLabel,
  placeLabel,
  rentLabel,
  sizeLabel,
} from "@/lib/accommodation"
import type { AccommodationListing } from "@/types/accommodation"

function ListingCard({
  listing,
  priority = false,
}: {
  listing: AccommodationListing
  priority?: boolean
}) {
  return (
    <Link
      href={`/accommodation/${listing.slug}`}
      prefetch={false}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="flex h-full flex-col rounded-2xl pt-0 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary-950/10 group-hover:ring-primary/40">
        <CoverImage
          src={listing.image}
          alt={`${listing.title}, ${listing.categoryName ?? "accommodation"} in ${placeLabel(listing)}`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="aspect-4/3 rounded-none transition-transform duration-500 group-hover:scale-105"
        />
        <CardContent className="flex flex-1 flex-col gap-3 p-4">
          <div className="flex flex-col gap-1">
            <p className="truncate text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {[listing.categoryName, listing.campusName].filter(Boolean).join(" · ") ||
                "Accommodation"}
            </p>
            <h3 className="line-clamp-2 font-heading text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
              {listing.title}
            </h3>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{placeLabel(listing)}</span>
            </p>
          </div>

          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <BedDouble className="size-4" aria-hidden="true" />
              {sizeLabel(listing)}
            </span>
            <span>{furnishingLabel(listing.furnishing)}</span>
          </p>

          <div className="mt-auto flex items-end justify-between gap-2 border-t border-border/60 pt-3">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              {rentLabel(listing)}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-success-700">
              <BadgeCheck className="size-4" aria-hidden="true" />
              Verified agent
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export { ListingCard }
