import type { MetadataRoute } from "next"

import { getProducts } from "@/app/_data/marketplace"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const productRoutes: MetadataRoute.Sitemap = getProducts().map((product) => ({
    url: `${siteConfig.url}/marketplace/${product.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }))

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/marketplace`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...productRoutes,
  ]
}
