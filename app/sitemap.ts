import type { MetadataRoute } from "next"

import { getEvents } from "@/app/_data/events"
import { getOpportunities } from "@/app/_data/jobs"
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

  const eventRoutes: MetadataRoute.Sitemap = getEvents().map((event) => ({
    url: `${siteConfig.url}/events/${event.slug}`,
    lastModified,
    changeFrequency: event.isPast ? "monthly" : "weekly",
    priority: event.isPast ? 0.4 : 0.6,
  }))

  const jobRoutes: MetadataRoute.Sitemap = getOpportunities().map((opportunity) => ({
    url: `${siteConfig.url}/jobs/${opportunity.slug}`,
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
    {
      url: `${siteConfig.url}/events`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/jobs`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...productRoutes,
    ...eventRoutes,
    ...jobRoutes,
  ]
}
