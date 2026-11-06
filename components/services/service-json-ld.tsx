import { siteConfig } from "@/config/site"
import type { Service } from "@/types/service"

type ServiceJsonLdProps = {
  service: Service
}

/** Schema.org Service markup for a service detail page. */
export function ServiceJsonLd({ service }: ServiceJsonLdProps) {
  const url = `${siteConfig.url}/services/${service.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url,
    ...(service.image ? { image: service.image } : {}),
    ...(service.categoryName ? { category: service.categoryName } : {}),
    ...(service.providerName
      ? {
          provider: {
            "@type": "Person",
            name: service.providerName,
            ...(service.providerSlug
              ? { url: `${siteConfig.url}/freelancers/${service.providerSlug}` }
              : {}),
          },
        }
      : {}),
    ...(service.priceFrom
      ? {
          offers: {
            "@type": "Offer",
            price: service.priceFrom,
            priceCurrency: service.currency ?? "NGN",
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

