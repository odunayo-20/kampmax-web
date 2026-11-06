import { PlaceMap, type MapPlace } from "@/components/shared/place-map"
import { env } from "@/config/env"
import type { Campus } from "@/types/campus"

/** Campuses that have a published position, shaped for the map. */
function toMapPlaces(campuses: Campus[]): MapPlace[] {
  return campuses.flatMap((campus) =>
    campus.latitude !== undefined && campus.longitude !== undefined
      ? [
          {
            id: campus.slug,
            name: campus.name,
            detail: campus.location,
            href: `/campuses/${campus.slug}`,
            latitude: campus.latitude,
            longitude: campus.longitude,
          },
        ]
      : []
  )
}

/** True when there is something to draw and a key to draw it with. */
function canShowCampusMap(campuses: Campus[]): boolean {
  return Boolean(env.mapTilerApiKey) && toMapPlaces(campuses).length > 0
}

/** Map of every campus that has a position. */
function CampusesMap({ campuses }: { campuses: Campus[] }) {
  return (
    <PlaceMap
      places={toMapPlaces(campuses)}
      label="Map of Kampmax campuses"
      className="h-96"
    />
  )
}

/** Map centred on a single campus. */
function CampusLocationMap({ campus }: { campus: Campus }) {
  const [place] = toMapPlaces([campus])
  if (!place) return null

  // The popup needs no link back to the page the visitor is already on.
  return (
    <PlaceMap
      places={[{ ...place, href: undefined }]}
      label={`Map showing ${campus.name}`}
    />
  )
}

export { CampusesMap, CampusLocationMap, canShowCampusMap }
