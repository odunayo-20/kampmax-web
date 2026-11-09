"use client"

import "maplibre-gl/dist/maplibre-gl.css"

import { useEffect, useRef } from "react"
import type { Map as MapLibreMap, Marker } from "maplibre-gl"

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

/** A spot to fly to and mark, e.g. a search result. Null clears it. */
export type MapFocus = {
  latitude: number
  longitude: number
  name: string
  detail?: string
  zoom?: number
}

type PlaceMapProps = {
  places: MapPlace[]
  /** Describes the map for assistive technology. */
  label: string
  className?: string
  /** Flies the map here and marks it. Only the identity of the object matters: pass a new one to fly again. */
  focus?: MapFocus | null
  /** Zoom limit when fitting several places. Lower shows a wider area. */
  maxFitZoom?: number
}

const STYLE_URL = "https://api.maptiler.com/maps/streets-v2/style.json"
const SINGLE_PLACE_ZOOM = 14
const DEFAULT_MAX_FIT_ZOOM = 12
const FOCUS_ZOOM = 16

function buildPopup(place: Pick<MapPlace, "name" | "detail" | "href">): HTMLElement {
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
 *
 * The map is rebuilt whenever `places` changes identity, so callers should
 * memoise it. `focus` moves the existing map instead.
 */
function PlaceMap({
  places,
  label,
  className,
  focus = null,
  maxFitZoom = DEFAULT_MAX_FIT_ZOOM,
}: PlaceMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MapLibreMap | null>(null)
  const libRef = useRef<typeof import("maplibre-gl") | null>(null)
  const focusMarkerRef = useRef<Marker | null>(null)
  const focusRef = useRef<MapFocus | null>(focus)
  const apiKey = env.mapTilerApiKey
  const enabled = Boolean(apiKey) && places.length > 0

  /** Flies to the current focus and marks it, or clears the mark. Does nothing until the map exists. */
  function applyFocus() {
    const map = mapRef.current
    const lib = libRef.current
    if (!map || !lib) return

    focusMarkerRef.current?.remove()
    focusMarkerRef.current = null

    const target = focusRef.current
    if (!target) return

    const color =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-accent-600")
        .trim() || "#e11d48"
    focusMarkerRef.current = new lib.Marker({ color })
      .setLngLat([target.longitude, target.latitude])
      .setPopup(new lib.Popup({ offset: 24 }).setDOMContent(buildPopup(target)))
      .addTo(map)
    focusMarkerRef.current.togglePopup()
    map.flyTo({
      center: [target.longitude, target.latitude],
      zoom: target.zoom ?? FOCUS_ZOOM,
    })
  }

  useEffect(() => {
    focusRef.current = focus
    applyFocus()
  }, [focus])

  useEffect(() => {
    const container = containerRef.current
    if (!enabled || !container) return

    let cancelled = false
    let dispose = () => {}

    void import("maplibre-gl").then((lib) => {
      if (cancelled) return
      const { Map, Marker, Popup, NavigationControl, LngLatBounds, setWorkerUrl } = lib

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
        map.fitBounds(bounds, { padding: 48, maxZoom: maxFitZoom, animate: false })
      }

      mapRef.current = map
      libRef.current = lib
      // A search result chosen before the map finished loading.
      applyFocus()

      dispose = () => {
        focusMarkerRef.current?.remove()
        focusMarkerRef.current = null
        mapRef.current = null
        map.remove()
      }
    })

    return () => {
      cancelled = true
      dispose()
    }
  }, [enabled, apiKey, places, maxFitZoom])

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
