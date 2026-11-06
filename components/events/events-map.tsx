import { PlaceMap, type MapPlace } from "@/components/shared/place-map"
import { env } from "@/config/env"
import type { Campus } from "@/types/campus"
import type { Event } from "@/types/event"

/**
 * Events carry a venue name but no coordinates, so the maps mark the campus
 * the event belongs to.
 */

/** One marker per campus that has a position and at least one upcoming event. */
function campusesWithEvents(events: Event[], campuses: Campus[]): MapPlace[] {
  const counts = new Map<string, number>()
  for (const event of events) {
    if (event.campusSlug) {
      counts.set(event.campusSlug, (counts.get(event.campusSlug) ?? 0) + 1)
    }
  }

  return campuses.flatMap((campus) => {
    const count = counts.get(campus.slug)
    if (!count || campus.latitude === undefined || campus.longitude === undefined) {
      return []
    }
    return [
      {
        id: campus.slug,
        name: campus.name,
        detail: `${count} upcoming ${count === 1 ? "event" : "events"}`,
        href: `/campuses/${campus.slug}`,
        latitude: campus.latitude,
        longitude: campus.longitude,
      },
    ]
  })
}

/** True when there is something to draw and a key to draw it with. */
function canShowEventsMap(events: Event[], campuses: Campus[]): boolean {
  return Boolean(env.mapTilerApiKey) && campusesWithEvents(events, campuses).length > 0
}

/** Map of the campuses that have upcoming events. */
function EventsCampusMap({
  events,
  campuses,
}: {
  events: Event[]
  campuses: Campus[]
}) {
  return (
    <PlaceMap
      places={campusesWithEvents(events, campuses)}
      label="Map of campuses with upcoming events"
      className="h-96"
    />
  )
}

/** True when the event's campus has a position to show. */
function canShowEventMap(campus: Campus | undefined): boolean {
  return (
    Boolean(env.mapTilerApiKey) &&
    campus?.latitude !== undefined &&
    campus.longitude !== undefined
  )
}

/** Map centred on the campus an event belongs to, with the venue in the popup. */
function EventLocationMap({ event, campus }: { event: Event; campus: Campus }) {
  if (campus.latitude === undefined || campus.longitude === undefined) return null

  return (
    <section className="flex flex-col gap-3" aria-labelledby="event-map-heading">
      <h2
        id="event-map-heading"
        className="font-heading text-lg font-semibold text-foreground"
      >
        Where to find it
      </h2>
      <PlaceMap
        label={`Map showing ${campus.name}, where ${event.title} takes place`}
        places={[
          {
            id: event.slug,
            name: event.location ?? campus.name,
            detail: campus.name,
            latitude: campus.latitude,
            longitude: campus.longitude,
          },
        ]}
      />
      <p className="text-xs text-muted-foreground">
        The map shows {campus.name}
        {event.location ? `. The venue is ${event.location}.` : "."}
      </p>
    </section>
  )
}

export { EventsCampusMap, EventLocationMap, canShowEventsMap, canShowEventMap }
