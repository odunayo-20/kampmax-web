import type { MetadataRoute } from "next"

import { getEvents } from "@/app/_data/events"
import { getFreelancers } from "@/app/_data/freelancers"
import { getProducts } from "@/app/_data/marketplace"
import { siteConfig } from "@/config/site"
import { orNullDuringBuild } from "@/lib/api"
import { getArticleSitemapEntries } from "@/lib/blog"
import { getCampuses } from "@/lib/campuses"
import { getOpportunities } from "@/lib/jobs"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  const articleEntries = (await orNullDuringBuild(getArticleSitemapEntries)) ?? []
  const campuses = (await orNullDuringBuild(getCampuses)) ?? []
  const opportunities =
    (await orNullDuringBuild(() => getOpportunities(campuses))) ?? []

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

  const jobRoutes: MetadataRoute.Sitemap = opportunities.map((opportunity) => ({
    url: `${siteConfig.url}/jobs/${opportunity.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }))

  const campusRoutes: MetadataRoute.Sitemap = campuses.map((campus) => ({
    url: `${siteConfig.url}/campuses/${campus.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  const freelancerRoutes: MetadataRoute.Sitemap = getFreelancers().map((freelancer) => ({
    url: `${siteConfig.url}/freelancers/${freelancer.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }))

  const blogRoutes: MetadataRoute.Sitemap = articleEntries.map((entry) => ({
    url: `${siteConfig.url}/blog/${entry.slug}`,
    lastModified: new Date(entry.lastModified),
    changeFrequency: "monthly",
    priority: 0.5,
  }))

  const staticRoutes: MetadataRoute.Sitemap = [
    "/about",
    "/aml-policy",
    "/become-a-vendor",
    "/contact",
    "/cookie-policy",
    "/for-businesses",
    "/how-it-works",
    "/privacy",
    "/refund-policy",
    "/services",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
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
    {
      url: `${siteConfig.url}/campuses`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/freelancers`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...staticRoutes,
    ...productRoutes,
    ...eventRoutes,
    ...jobRoutes,
    ...campusRoutes,
    ...freelancerRoutes,
    ...blogRoutes,
  ]
}
