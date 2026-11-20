import type { Metadata } from "next"

import { orNullDuringBuild } from "@/lib/api"
import { getAllPosts } from "@/lib/blog"
import { getCampuses } from "@/lib/campuses"
import { getEvents } from "@/lib/events"
import { getFreelancers } from "@/lib/freelancers"
import { getOpportunities } from "@/lib/jobs"
import { getProductCategories, getProducts } from "@/lib/marketplace"
import { getServices } from "@/lib/services"
import { formatPrice } from "@/lib/format-price"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CampusEcosystem } from "@/components/home/campus-ecosystem"
import { DiscoverGrid } from "@/components/home/discover-grid"
import { EventsCommunity } from "@/components/home/events-community"
import { FeaturedProducts } from "@/components/home/featured-products"
import { FinalCta } from "@/components/home/final-cta"
import { Hero } from "@/components/home/hero"
import { HomeJsonLd } from "@/components/home/home-json-ld"
import { HowItWorks } from "@/components/home/how-it-works"
import { LatestArticles } from "@/components/home/latest-articles"
import { TrustValues } from "@/components/home/trust-values"

export const revalidate = 300

// Search-facing copy: the words people actually type (marketplace, jobs,
// services, events, campus) up front, kept under ~60 characters for the title
// and ~160 for the description so neither is cut off in results.
const homeTitle = "Kampmax | Campus Marketplace, Jobs, Services & Events"
const homeDescription =
  "Buy and sell, find jobs, hire freelancers and book services, and discover events around your campus. One platform for students, businesses and organizers."

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: homeTitle,
    description: homeDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
}

/**
 * Loads a part of the page that is nice to have. If it fails the page still
 * renders without it, and the failure is logged. The parts every visitor needs
 * (campuses, products, events) are not loaded this way: a page missing those
 * would be cached for minutes, so those errors are allowed to surface.
 */
async function optional<T>(name: string, load: () => Promise<T[]>): Promise<T[]> {
  try {
    return await load()
  } catch (error) {
    console.warn(
      `[home] Rendering without ${name}: ${
        error instanceof Error ? error.message : String(error)
      }`
    )
    return []
  }
}

export default async function Home() {
  const data = await orNullDuringBuild(async () => {
    const campuses = await getCampuses()
    const [
      products,
      categories,
      events,
      opportunities,
      freelancers,
      services,
      posts,
    ] = await Promise.all([
      getProducts(campuses),
      getProductCategories(),
      getEvents(campuses),
      optional("jobs", () => getOpportunities(campuses)),
      optional("freelancers", () => getFreelancers(campuses)),
      optional("services", () => getServices(campuses)),
      optional("articles", () => getAllPosts()),
    ])
    return {
      campuses,
      products,
      categories,
      events,
      opportunities,
      freelancers,
      services,
      posts,
    }
  })

  const topProduct = data?.products[0]
  const topJob = data?.opportunities[0]
  const topEvent = data?.events[0]
  const campusShortName = (slug?: string) =>
    slug ? data?.campuses.find((campus) => campus.slug === slug)?.shortName : undefined

  const counts = {
    "/marketplace": data?.products.length ?? 0,
    "/services": data?.services.length ?? 0,
    "/jobs": data?.opportunities.length ?? 0,
    "/freelancers": data?.freelancers.length ?? 0,
    "/events": data?.events.length ?? 0,
    "/campuses": data?.campuses.length ?? 0,
  }

  return (
    <>
      <HomeJsonLd />
      <Hero
        product={
          topProduct
            ? {
                title: topProduct.name,
                href: `/marketplace/${topProduct.slug}`,
                image: topProduct.image,
                price: topProduct.price ? formatPrice(topProduct.price) : undefined,
                campus: campusShortName(topProduct.campusSlug),
              }
            : undefined
        }
        job={
          topJob
            ? {
                title: topJob.title,
                href: `/jobs/${topJob.slug}`,
                meta: topJob.location,
                organization: topJob.organization,
              }
            : undefined
        }
        event={
          topEvent
            ? {
                title: topEvent.title,
                href: `/events/${topEvent.slug}`,
                date: topEvent.date,
                image: topEvent.image,
                location: topEvent.location,
                time: topEvent.startTime,
                priceLabel: topEvent.priceLabel,
              }
            : undefined
        }
      />

      <div className="border-y border-border bg-primary-50/70">
        <Section>
          <Container>
            <HowItWorks />
          </Container>
        </Section>
      </div>

      <Section id="discover" className="scroll-mt-16">
        <Container>
          <DiscoverGrid counts={counts} />
        </Container>
      </Section>

      {data && data.products.length > 0 && (
        <Section className="overflow-hidden">
          <Container className="overflow-hidden">
            <FeaturedProducts
              products={data.products}
              campuses={data.campuses}
              categories={data.categories}
            />
          </Container>
        </Section>
      )}

      {topEvent && (
        <div className="border-y border-border bg-neutral-50">
          <Section>
            <Container>
              <EventsCommunity event={topEvent} />
            </Container>
          </Section>
        </div>
      )}

      {data && data.campuses.length > 0 && (
        <Section>
          <Container>
            <CampusEcosystem campuses={data.campuses} />
          </Container>
        </Section>
      )}

      {data && data.posts.length > 0 && (
        <div className="border-t border-border bg-neutral-50 overflow-hidden">
          <Section className="overflow-hidden">
            <Container className="overflow-hidden">
              <LatestArticles posts={data.posts} />
            </Container>
          </Section>
        </div>
      )}

      <div className="border-y border-border bg-primary-50/70">
        <Section>
          <Container>
            <TrustValues />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <FinalCta />
        </Container>
      </Section>
    </>
  )
}
