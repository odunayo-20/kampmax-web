import { PlaceMap, type MapPlace } from "@/components/shared/place-map"
import { env } from "@/config/env"
import { PLACE_TYPE_LABELS } from "@/lib/places"
import type { Campus } from "@/types/campus"
import type { CampusPlace } from "@/types/place"

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

/** A campus and the named places on it, as map markers. */
function campusMapPlaces(campus: Campus, places: CampusPlace[]): MapPlace[] {
  return [
    // The popup needs no link back to the page the visitor is already on.
    ...toMapPlaces([campus]).map((place) => ({ ...place, href: undefined })),
    ...places.map((place) => ({
      id: place.id,
      name: place.name,
      detail: PLACE_TYPE_LABELS[place.type],
      latitude: place.latitude,
      longitude: place.longitude,
    })),
  ]
}

/** True when a campus page has something to draw and a key to draw it with. */
function canShowCampusMap(campus: Campus, places: CampusPlace[] = []): boolean {
  return Boolean(env.mapTilerApiKey) && campusMapPlaces(campus, places).length > 0
}

/** Map centred on a single campus, with its places marked. */
function CampusLocationMap({
  campus,
  places = [],
}: {
  campus: Campus
  places?: CampusPlace[]
}) {
  return (
    <PlaceMap
      places={campusMapPlaces(campus, places)}
      label={`Map showing ${campus.name}`}
      // A campus is a few hundred metres across: let the map zoom in to it.
      maxFitZoom={17}
    />
  )
}

export { CampusLocationMap, canShowCampusMap, toMapPlaces }
