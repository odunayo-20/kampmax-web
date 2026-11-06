import { siteConfig } from "@/config/site"
import type { Campus } from "@/types/campus"
import type { Event, EventCategory } from "@/types/event"

type EventJsonLdProps = {
  event: Event
  category: EventCategory | undefined
  campus: Campus | undefined
}

/**
 * Schema.org Event markup. Start and end come from the API's ISO date-times
 * (the display times are formatted text). `image` and `offers` are omitted
 * entirely when not backed by real data, rather than pointing at a placeholder
 * or guessing a price.
 */
export function EventJsonLd({ event, category, campus }: EventJsonLdProps) {
  const url = `${siteConfig.url}/events/${event.slug}`

  const locationName = event.location ?? campus?.name ?? "Kampmax"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    url,
    startDate: event.startsAt ?? event.date,
    ...(event.endsAt ? { endDate: event.endsAt } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    ...(category ? { category: category.name } : {}),
    ...(event.image ? { image: event.image } : {}),
    location: {
      "@type": "Place",
      name: locationName,
      ...(campus?.location ? { address: campus.location } : {}),
    },
    ...(event.organizerName
      ? {
          organizer: {
            "@type": "Organization",
            name: event.organizerName,
          },
        }
      : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}
