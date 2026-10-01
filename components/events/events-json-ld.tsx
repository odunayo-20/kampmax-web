import { siteConfig } from "@/config/site"
import type { Event } from "@/types/event"

type EventsJsonLdProps = {
  events: Event[]
}

/** CollectionPage + ItemList markup for the events directory. */
export function EventsJsonLd({ events }: EventsJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kampmax Events",
    description:
      "Discover academic symposiums, hackathons, cultural festivals, and student activities across campus communities on Kampmax.",
    url: `${siteConfig.url}/events`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: events.map((event, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.url}/events/${event.slug}`,
        name: event.title,
      })),
    },
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
