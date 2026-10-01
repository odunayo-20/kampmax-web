import { siteConfig } from "@/config/site"
import type { MarketplaceCategory, MarketplaceProduct } from "@/types/marketplace"

type ProductJsonLdProps = {
  product: MarketplaceProduct
  category: MarketplaceCategory | undefined
}

export function ProductJsonLd({ product, category }: ProductJsonLdProps) {
  const url = `${siteConfig.url}/marketplace/${product.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url,
    ...(category ? { category: category.name } : {}),
    ...(product.image ? { image: `${siteConfig.url}${product.image}` } : {}),
    brand: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    ...(product.price
      ? {
          offers: {
            "@type": "Offer",
            url,
            price: product.price,
            priceCurrency: "NGN",
            availability: "https://schema.org/InStock",
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
