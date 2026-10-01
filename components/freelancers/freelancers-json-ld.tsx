import { siteConfig } from "@/config/site"
import type { Freelancer } from "@/types/freelancer"

type FreelancersJsonLdProps = {
  freelancers: Freelancer[]
}

/** CollectionPage + ItemList markup for the freelancer directory. */
export function FreelancersJsonLd({ freelancers }: FreelancersJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kampmax Freelancers",
    description:
      "Discover skilled students, creators, and independent professionals across campus communities on Kampmax.",
    url: `${siteConfig.url}/freelancers`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: freelancers.map((freelancer, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.url}/freelancers/${freelancer.slug}`,
        name: freelancer.name,
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
