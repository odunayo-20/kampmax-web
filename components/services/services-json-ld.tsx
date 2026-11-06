import { siteConfig } from "@/config/site"
import type { Service } from "@/types/service"

type ServicesJsonLdProps = {
  services: Service[]
}

/** CollectionPage + ItemList markup for the services directory. */
export function ServicesJsonLd({ services }: ServicesJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kampmax Services Directory",
    description:
      "Discover services offered by individuals, freelancers, and businesses across campus communities on Kampmax.",
    url: `${siteConfig.url}/services`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.url}/services/${service.slug}`,
        name: service.name,
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

