import { legalConfig } from "@/config/legal"
import { siteConfig } from "@/config/site"
import { toIsoDate } from "@/lib/to-iso-date"

/** WebPage markup carrying accurate last-updated/effective dates for the refund policy. */
export function RefundJsonLd() {
  const { lastUpdated, effectiveDate } = legalConfig.refundPolicy
  const dateModified = toIsoDate(lastUpdated)
  const datePublished = toIsoDate(effectiveDate)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kampmax Refund & Cancellation Policy",
    url: `${siteConfig.url}/refund-policy`,
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
