export type PlaceType =
  | "SCHOOL_GATE"
  | "HOSTEL"
  | "LECTURE_HALL"
  | "LIBRARY"
  | "CAFETERIA"
  | "MARKET"
  | "PARK_STOP"
  | "LANDMARK"
  | "DELIVERY_POINT"
  | "OTHER"

/** A named spot on a campus: a gate, a hostel, a market. */
export type CampusPlace = {
  id: string
  campusId: string
  campusName: string | null
  /** For linking to the campus page. */
  campusSlug: string | null
  name: string
  type: PlaceType
  /** Other names students use for it. */
  aliases: string[]
  description: string | null
  latitude: number
  longitude: number
}

export type PlaceSearchCampus = {
  id: string
  slug: string
  name: string
  shortName: string | null
  city: string
  state: string
  latitude: number | null
  longitude: number | null
}

/** A place from the map provider, for things that are not campuses or campus places. */
export type PlaceSearchExternal = {
  name: string
  detail: string | null
  latitude: number
  longitude: number
}

export type PlaceSearchResult = {
  campuses: PlaceSearchCampus[]
  places: CampusPlace[]
  /** Only when nothing of ours matched. */
  external: PlaceSearchExternal[]
}
