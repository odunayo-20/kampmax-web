import { siteConfig } from "@/config/site"
import type { MarketplaceProduct } from "@/types/marketplace"

type MarketplaceJsonLdProps = {
  products: MarketplaceProduct[]
}

/**
 * CollectionPage + ItemList markup for the marketplace directory, so search
 * engines can index it as a real product listing page rather than generic
 * text content.
 */
export function MarketplaceJsonLd({ products }: MarketplaceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kampmax Marketplace",
    description:
      "Discover products people are offering around your campus community on Kampmax Marketplace.",
    url: `${siteConfig.url}/marketplace`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.url}/marketplace/${product.slug}`,
        name: product.name,
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
