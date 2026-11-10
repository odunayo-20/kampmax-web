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
import { DiscoverGrid } from "@/components/home/discover-grid"
import { FeaturedProducts } from "@/components/home/featured-products"
import { FinalCta } from "@/components/home/final-cta"
import { ForBusinesses } from "@/components/home/for-businesses"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LatestArticles } from "@/components/home/latest-articles"
import { Opportunities } from "@/components/home/opportunities"
import { TrustValues } from "@/components/home/trust-values"
import { WhatIsKampmax } from "@/components/home/what-is-kampmax"

export const revalidate = 300

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
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
      getOpportunities(campuses),
      getFreelancers(campuses),
      getServices(campuses),
      getAllPosts(),
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

      <Section>
        <Container>
          <WhatIsKampmax />
        </Container>
      </Section>

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
        <Section>
          <Container>
            <FeaturedProducts
              products={data.products}
              campuses={data.campuses}
              categories={data.categories}
            />
          </Container>
        </Section>
      )}

      <div className="border-y border-border bg-neutral-50">
        <Section>
          <Container>
            <Opportunities />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <ForBusinesses />
        </Container>
      </Section>

      {data && data.posts.length > 0 && (
        <div className="border-t border-border bg-neutral-50">
          <Section>
            <Container>
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
