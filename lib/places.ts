import { apiFetch, apiGet } from "@/lib/api"
import { formatCampusLocation } from "@/lib/campuses"
import type {
  CampusPlace,
  PlaceSearchResult,
  PlaceType,
} from "@/types/place"

export const PLACE_TYPE_LABELS: Record<PlaceType, string> = {
  SCHOOL_GATE: "School gate",
  HOSTEL: "Hostel",
  LECTURE_HALL: "Lecture hall",
  LIBRARY: "Library",
  CAFETERIA: "Cafeteria",
  MARKET: "Market",
  PARK_STOP: "Park / bus stop",
  LANDMARK: "Landmark",
  DELIVERY_POINT: "Delivery point",
  OTHER: "Other",
}

/** Order the groups on a campus page: the places people look for first come first. */
const PLACE_TYPE_ORDER: PlaceType[] = [
  "SCHOOL_GATE",
  "HOSTEL",
  "LECTURE_HALL",
  "LIBRARY",
  "CAFETERIA",
  "MARKET",
  "PARK_STOP",
  "DELIVERY_POINT",
  "LANDMARK",
  "OTHER",
]

/** Shortest search the API accepts. */
export const MIN_SEARCH_CHARS = 2

export type PlaceGroup = { type: PlaceType; label: string; places: CampusPlace[] }

/** Groups places by type in a fixed order, each group sorted by name. Empty groups are left out. */
export function groupPlacesByType(places: CampusPlace[]): PlaceGroup[] {
  return PLACE_TYPE_ORDER.flatMap((type) => {
    const inGroup = places
      .filter((place) => place.type === type)
      .sort((a, b) => a.name.localeCompare(b.name))
    return inGroup.length > 0
      ? [{ type, label: PLACE_TYPE_LABELS[type], places: inGroup }]
      : []
  })
}

/**
 * The live places on a campus. Never throws: places are an extra on the
 * campus page, so a failure here (the API down, or places not set up yet)
 * must not take the whole page with it.
 */
export async function getCampusPlaces(campusId: string): Promise<CampusPlace[]> {
  try {
    return await apiFetch<CampusPlace[]>(
      `/campuses/${encodeURIComponent(campusId)}/places`
    )
  } catch (error) {
    console.warn(
      `[places] Could not load places for campus ${campusId}: ${
        error instanceof Error ? error.message : String(error)
      }`
    )
    return []
  }
}

/** Searches campuses, campus places and, failing those, the wider map. Runs in the browser. */
export function searchPlaces(
  query: string,
  signal?: AbortSignal
): Promise<PlaceSearchResult> {
  return apiGet<PlaceSearchResult>("/places/search", {
    query: { q: query.trim() },
    signal,
  })
}

/** One row in the search results, whatever kind of thing it is. */
export type SearchOption = {
  key: string
  kind: "campus" | "place" | "external"
  name: string
  /** Second line: where it is, or what kind of place. */
  detail?: string
  /** Page to open for it, when it has one. */
  href?: string
  /** Missing when the campus has no published position. */
  latitude?: number
  longitude?: number
}

/** Flattens search results into one list, in the order they are shown: campuses, places, then the wider map. */
export function toSearchOptions(result: PlaceSearchResult): SearchOption[] {
  const position = (lat: number | null, lng: number | null) =>
    typeof lat === "number" && typeof lng === "number"
      ? { latitude: lat, longitude: lng }
      : {}

  return [
    ...result.campuses.map(
      (campus): SearchOption => ({
        key: `campus:${campus.id}`,
        kind: "campus",
        name: campus.name,
        detail: formatCampusLocation(campus.city, campus.state),
        href: `/campuses/${campus.slug}`,
        ...position(campus.latitude, campus.longitude),
      })
    ),
    ...result.places.map(
      (place): SearchOption => ({
        key: `place:${place.id}`,
        kind: "place",
        name: place.name,
        detail: [PLACE_TYPE_LABELS[place.type], place.campusName]
          .filter(Boolean)
          .join(" · "),
        href: place.campusSlug ? `/campuses/${place.campusSlug}` : undefined,
        latitude: place.latitude,
        longitude: place.longitude,
      })
    ),
    ...result.external.map(
      (item, index): SearchOption => ({
        key: `external:${index}`,
        kind: "external",
        name: item.name,
        detail: item.detail ?? undefined,
        latitude: item.latitude,
        longitude: item.longitude,
      })
    ),
  ]
}

/** True when a search result set has nothing to show. */
export function isEmptySearch(result: PlaceSearchResult): boolean {
  return (
    result.campuses.length === 0 &&
    result.places.length === 0 &&
    result.external.length === 0
  )
}
