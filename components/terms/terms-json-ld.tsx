import { legalConfig } from "@/config/legal"
import { siteConfig } from "@/config/site"
import { toIsoDate } from "@/lib/to-iso-date"

/** WebPage markup carrying accurate last-updated/effective dates for the terms. */
export function TermsJsonLd() {
  const { lastUpdated, effectiveDate } = legalConfig.termsOfService
  const dateModified = toIsoDate(lastUpdated)
  const datePublished = toIsoDate(effectiveDate)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kampmax Terms of Service",
    url: `${siteConfig.url}/terms`,
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
