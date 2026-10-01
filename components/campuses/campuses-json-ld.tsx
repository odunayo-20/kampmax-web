import { siteConfig } from "@/config/site"
import type { Campus } from "@/types/campus"

type CampusesJsonLdProps = {
  campuses: Campus[]
}

/** CollectionPage + ItemList markup for the campus directory. */
export function CampusesJsonLd({ campuses }: CampusesJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kampmax Campuses",
    description:
      "Explore the campuses Kampmax supports and discover what's happening around each one.",
    url: `${siteConfig.url}/campuses`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: campuses.map((campus, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.url}/campuses/${campus.slug}`,
        name: campus.name,
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
