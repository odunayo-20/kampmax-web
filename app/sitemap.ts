import type { MetadataRoute } from "next"

import { getAllPosts } from "@/app/_data/blog"
import { getEnabledCampuses } from "@/app/_data/campuses"
import { getEvents } from "@/app/_data/events"
import { getFreelancers } from "@/app/_data/freelancers"
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

  const campusRoutes: MetadataRoute.Sitemap = getEnabledCampuses().map((campus) => ({
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

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.5,
  }))

  const staticRoutes: MetadataRoute.Sitemap = [
    "/about",
    "/become-a-vendor",
    "/contact",
    "/for-businesses",
    "/how-it-works",
    "/privacy",
    "/services",
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
