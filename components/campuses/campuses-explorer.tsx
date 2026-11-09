"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { PlaceMap, type MapFocus } from "@/components/shared/place-map"
import { PlaceSearch } from "@/components/shared/place-search"
import { toMapPlaces } from "@/components/campuses/campus-map"
import type { SearchOption } from "@/lib/places"
import type { Campus } from "@/types/campus"

const CAMPUS_ZOOM = 15

/**
 * The campuses map with a search box above it. Choosing a campus or a place
 * flies the map there; a campus or place that has a page also gets a link to
 * it. Without a map key the search still works and the result just links.
 */
function CampusesExplorer({ campuses }: { campuses: Campus[] }) {
  // The map is rebuilt when this changes identity, so it is built once per list.
  const places = useMemo(() => toMapPlaces(campuses), [campuses])
  const [focus, setFocus] = useState<MapFocus | null>(null)
  const [picked, setPicked] = useState<SearchOption | null>(null)

  function onSelect(option: SearchOption) {
    setPicked(option)
    setFocus(
      option.latitude !== undefined && option.longitude !== undefined
        ? {
            latitude: option.latitude,
            longitude: option.longitude,
            name: option.name,
            detail: option.detail,
            zoom: option.kind === "campus" ? CAMPUS_ZOOM : undefined,
          }
        : null
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <PlaceSearch
        label="Search campuses and places"
        onSelect={onSelect}
        onClear={() => {
          setPicked(null)
          setFocus(null)
        }}
      />

      {picked?.href ? (
        <Link
          href={picked.href}
          className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {picked.kind === "campus"
            ? `Open ${picked.name}`
            : `See everything around ${picked.detail?.split(" · ")[1] ?? "this campus"}`}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : null}

      <PlaceMap
        places={places}
        focus={focus}
        label="Map of Kampmax campuses"
        className="h-96"
      />
    </div>
  )
}

export { CampusesExplorer }
