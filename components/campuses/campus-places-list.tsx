import { MapPin } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { groupPlacesByType } from "@/lib/places"
import type { Campus } from "@/types/campus"
import type { CampusPlace } from "@/types/place"

/** The named places on a campus, grouped by kind (gates, hostels, markets...). */
function CampusPlacesList({
  campus,
  places,
}: {
  campus: Campus
  places: CampusPlace[]
}) {
  const groups = groupPlacesByType(places)
  if (groups.length === 0) return null

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        eyebrow="Around campus"
        title={`Places at ${campus.shortName}`}
        description="The gates, hostels and other spots students use to meet, collect orders and find their way around."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <section key={group.type} aria-labelledby={`places-${group.type}`}>
            <h3
              id={`places-${group.type}`}
              className="mb-3 text-sm font-semibold text-foreground"
            >
              {group.label}
            </h3>
            <ul className="flex flex-col gap-2">
              {group.places.map((place) => (
                <li key={place.id} className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm text-foreground">{place.name}</span>
                    {place.aliases.length > 0 ? (
                      <span className="text-xs text-muted-foreground">
                        Also called {place.aliases.join(", ")}
                      </span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

export { CampusPlacesList }
