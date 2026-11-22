import { ExternalLink } from "lucide-react"

import { PlaceMap, type MapPlace } from "@/components/shared/place-map"
import { distanceKm, distanceLabel, placeLabel } from "@/lib/accommodation"
import type { AccommodationDetail } from "@/types/accommodation"
import type { Campus } from "@/types/campus"

/**
 * Where the place is: the area in words, the distance to the campus, and a map.
 * The agent's pin is optional and approximate on purpose, so the page never gives
 * away the exact door. Without a pin the map shows the campus instead, and says so.
 */
function ListingLocation({ listing, campus }: { listing: AccommodationDetail; campus?: Campus }) {
  const point = listing.mapPoint
  const area = placeLabel(listing)
  const campusPoint =
    campus?.latitude !== undefined && campus.longitude !== undefined
      ? { latitude: campus.latitude, longitude: campus.longitude }
      : undefined

  const places: MapPlace[] = [
    ...(point ? [{ id: listing.id, name: listing.title, detail: area, ...point }] : []),
    ...(campus && campusPoint
      ? [{ id: campus.slug, name: campus.name, detail: "Campus", href: `/accommodation/near/${campus.slug}`, ...campusPoint }]
      : []),
  ]
  if (!area && places.length === 0) return null

  const mapsQuery = point ? `${point.latitude},${point.longitude}` : encodeURIComponent(`${area}, Nigeria`)

  return (
    <section aria-labelledby="location" className="flex flex-col gap-3">
      <h2 id="location" className="font-heading text-lg font-semibold text-foreground">
        Location
      </h2>
      <p className="text-base/relaxed text-muted-foreground">
        {area}
        {point && campus && campusPoint
          ? `. ${distanceLabel(distanceKm(point, campusPoint))} in a straight line from ${campus.shortName}.`
          : campus
            ? `, near ${campus.name}.`
            : "."}
      </p>
      <PlaceMap
        places={places}
        label={point ? `Map showing ${listing.title} in ${area}` : `Map showing ${campus?.name ?? area}`}
        maxFitZoom={point ? 15 : 14}
        className="h-64 sm:h-80"
      />
      <p className="text-xs text-muted-foreground">
        {point
          ? "The pin is approximate. The agent shares the exact address when you enquire. "
          : "The agent has not pinned this place yet, so the map shows the campus. Ask the agent for the exact address. "}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1 font-medium text-primary hover:underline"
        >
          Open in Google Maps
          <ExternalLink className="size-3" aria-hidden="true" />
        </a>
      </p>
    </section>
  )
}

export { ListingLocation }
