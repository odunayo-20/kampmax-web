import { siteConfig } from "@/config/site"
import type {
  MarketplaceCategory,
  MarketplaceProduct,
} from "@/types/marketplace"

type ProductJsonLdProps = {
  product: MarketplaceProduct
  category: MarketplaceCategory | undefined
}

export function ProductJsonLd({ product, category }: ProductJsonLdProps) {
  const url = `${siteConfig.url}/marketplace/${product.slug}`
  const image = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `${siteConfig.url}${product.image}`
    : undefined

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url,
    ...(category ? { category: category.name } : {}),
    ...(image ? { image } : {}),
    brand: {
      "@type": "Organization",
      name: product.vendorName ?? siteConfig.name,
    },
    ...(product.price
      ? {
          offers: {
            "@type": "Offer",
            url,
            price: product.price,
            priceCurrency: "NGN",
            availability: "https://schema.org/InStock",
            ...(product.vendorName
              ? {
                  seller: {
                    "@type": "Organization",
                    name: product.vendorName,
                  },
                }
              : {}),
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
