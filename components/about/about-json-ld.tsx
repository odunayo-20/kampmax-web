import { siteConfig } from "@/config/site"

/** AboutPage + Organization markup so search engines can surface Kampmax as a known entity. */
export function AboutJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Kampmax",
    url: `${siteConfig.url}/about`,
    description: siteConfig.description,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      logo: `${siteConfig.url}/icon-512.png`,
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
