import { legalConfig } from "@/config/legal"
import { siteConfig } from "@/config/site"
import { toIsoDate } from "@/lib/to-iso-date"

/** WebPage structured data carrying verified dates for the Cookie Policy. */
export function CookieJsonLd() {
  const { lastUpdated, effectiveDate } = legalConfig.cookiePolicy
  const dateModified = toIsoDate(lastUpdated)
  const datePublished = toIsoDate(effectiveDate)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kampmax Cookie Policy",
    url: `${siteConfig.url}/cookie-policy`,
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
