import { legalConfig } from "@/config/legal"
import { siteConfig } from "@/config/site"
import { toIsoDate } from "@/lib/to-iso-date"

/** WebPage structured data carrying verified dates for the AML Policy. */
export function AmlJsonLd() {
  const { lastUpdated, effectiveDate } = legalConfig.amlPolicy
  const dateModified = toIsoDate(lastUpdated)
  const datePublished = toIsoDate(effectiveDate)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kampmax Anti-Money Laundering (AML) Policy",
    url: `${siteConfig.url}/aml-policy`,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
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
