import { siteConfig } from "@/config/site"
import type { Opportunity } from "@/types/job"

type JobsJsonLdProps = {
  opportunities: Opportunity[]
}

/** CollectionPage + ItemList markup for the jobs directory. */
export function JobsJsonLd({ opportunities }: JobsJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kampmax Jobs & Opportunities",
    description:
      "Discover internships, campus roles, freelance projects, and graduate opportunities across Nigerian campus communities on Kampmax.",
    url: `${siteConfig.url}/jobs`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: opportunities.map((opportunity, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.url}/jobs/${opportunity.slug}`,
        name: opportunity.title,
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
