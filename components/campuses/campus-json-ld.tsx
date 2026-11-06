import { siteConfig } from "@/config/site"
import type { Campus } from "@/types/campus"

type CampusJsonLdProps = {
  campus: Campus
}

/** CollegeOrUniversity markup for a campus landing page. */
export function CampusJsonLd({ campus }: CampusJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: campus.name,
    alternateName: campus.shortName,
    url: `${siteConfig.url}/campuses/${campus.slug}`,
    ...(campus.description ? { description: campus.description } : {}),
    ...(campus.location ? { address: campus.location } : {}),
    ...(campus.latitude !== undefined && campus.longitude !== undefined
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: campus.latitude,
            longitude: campus.longitude,
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
