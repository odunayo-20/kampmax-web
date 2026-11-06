"use client"

import "maplibre-gl/dist/maplibre-gl.css"

import { useEffect, useRef } from "react"

import { env } from "@/config/env"
import { cn } from "@/lib/utils"

export type MapPlace = {
  id: string
  name: string
  latitude: number
  longitude: number
  /** Secondary line in the popup, e.g. a city. */
  detail?: string
  /** Makes the popup title a link. */
  href?: string
}

type PlaceMapProps = {
  places: MapPlace[]
  /** Describes the map for assistive technology. */
  label: string
  className?: string
}

const STYLE_URL = "https://api.maptiler.com/maps/streets-v2/style.json"
const SINGLE_PLACE_ZOOM = 14
const MAX_FIT_ZOOM = 12

function buildPopup(place: MapPlace): HTMLElement {
  // Built with DOM nodes and textContent: place names come from the API.
  const root = document.createElement("div")
  root.style.cssText = "display:flex;flex-direction:column;gap:2px;font:inherit"

  const title = place.href
    ? Object.assign(document.createElement("a"), { href: place.href })
    : document.createElement("strong")
  title.textContent = place.name
  title.style.cssText = "font-weight:600;color:inherit"
  root.append(title)

  if (place.detail) {
    const detail = document.createElement("span")
    detail.textContent = place.detail
    detail.style.cssText = "font-size:12px;opacity:.7"
    root.append(detail)
  }

  return root
}

/**
 * MapLibre map with MapTiler tiles showing one or more places. Renders nothing
 * when no API key is configured or there is nothing to show, so pages work
 * without it. The map library is loaded in the browser only.
 */
function PlaceMap({ places, label, className }: PlaceMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const apiKey = env.mapTilerApiKey
  const enabled = Boolean(apiKey) && places.length > 0

  useEffect(() => {
    const container = containerRef.current
    if (!enabled || !container) return

    let cancelled = false
    let dispose = () => {}

    void import("maplibre-gl").then(
      ({ Map, Marker, Popup, NavigationControl, LngLatBounds, setWorkerUrl }) => {
        if (cancelled) return

        // maplibre-gl finds its worker next to its own module, which no longer
        // exists once the bundler has moved that module into a chunk. Point it
        // at the worker file the bundler emits as an asset instead.
        setWorkerUrl(
          new URL("maplibre-gl/dist/maplibre-gl-worker.mjs", import.meta.url).href
        )

        const first = places[0]
        const map = new Map({
          container,
          style: `${STYLE_URL}?key=${apiKey}`,
          center: [first.longitude, first.latitude],
          zoom: SINGLE_PLACE_ZOOM,
          // Scrolling the page must not zoom the map by accident.
          cooperativeGestures: true,
        })
        map.addControl(new NavigationControl({ showCompass: false }), "top-right")

        const markerColor =
          getComputedStyle(document.documentElement)
            .getPropertyValue("--color-primary-600")
            .trim() || "#0f766e"

        for (const place of places) {
          new Marker({ color: markerColor })
            .setLngLat([place.longitude, place.latitude])
            .setPopup(new Popup({ offset: 24 }).setDOMContent(buildPopup(place)))
            .addTo(map)
        }

        if (places.length > 1) {
          const bounds = new LngLatBounds()
          for (const place of places) {
            bounds.extend([place.longitude, place.latitude])
          }
          map.fitBounds(bounds, { padding: 48, maxZoom: MAX_FIT_ZOOM, animate: false })
        }

        dispose = () => map.remove()
      }
    )

    return () => {
      cancelled = true
      dispose()
    }
  }, [enabled, apiKey, places])

  if (!enabled) return null

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={label}
      className={cn("h-80 w-full overflow-hidden rounded-xl bg-muted ring-1 ring-foreground/10", className)}
    />
  )
}

export { PlaceMap }
