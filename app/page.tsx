import type { Metadata } from "next"

import { orNullDuringBuild } from "@/lib/api"
import { getCampuses } from "@/lib/campuses"
import { getEvents } from "@/lib/events"
import { getOpportunities } from "@/lib/jobs"
import { getProductCategories, getProducts } from "@/lib/marketplace"
import { formatPrice } from "@/lib/format-price"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CampusEcosystem } from "@/components/home/campus-ecosystem"
import { DiscoverGrid } from "@/components/home/discover-grid"
import { EventsCommunity } from "@/components/home/events-community"
import { FeaturedProducts } from "@/components/home/featured-products"
import { FinalCta } from "@/components/home/final-cta"
import { ForBusinesses } from "@/components/home/for-businesses"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
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
    const [products, categories, events, opportunities] = await Promise.all([
      getProducts(campuses),
      getProductCategories(),
      getEvents(campuses),
      getOpportunities(campuses),
    ])
    return { campuses, products, categories, events, opportunities }
  })

  const topProduct = data?.products[0]
  const topJob = data?.opportunities[0]
  const topEvent = data?.events[0]

  return (
    <>
      <div className="relative isolate overflow-hidden bg-linear-to-b from-primary-50 via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] size-128 rounded-full bg-primary-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-[-15%] size-96 rounded-full bg-accent-100/60 blur-3xl"
        />
        <Container className="relative">
          <Hero
            product={
              topProduct
                ? {
                    title: topProduct.name,
                    meta: topProduct.price
                      ? formatPrice(topProduct.price)
                      : "Marketplace",
                    href: `/marketplace/${topProduct.slug}`,
                  }
                : undefined
            }
            job={
              topJob
                ? {
                    title: topJob.title,
                    meta: topJob.location ?? "Opportunity",
                    href: `/jobs/${topJob.slug}`,
                  }
                : undefined
            }
            event={
              topEvent
                ? {
                    title: topEvent.title,
                    meta: topEvent.date,
                    href: `/events/${topEvent.slug}`,
                  }
                : undefined
            }
          />
        </Container>
      </div>

      <Section>
        <Container>
          <WhatIsKampmax />
        </Container>
      </Section>

      <Section id="discover" className="scroll-mt-16">
        <Container>
          <DiscoverGrid />
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

      <div className="border-y border-border bg-primary-50">
        <Section>
          <Container>
            <HowItWorks />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <CampusEcosystem campuses={data?.campuses} />
        </Container>
      </Section>

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

      <Section>
        <Container>
          <EventsCommunity event={topEvent} />
        </Container>
      </Section>

      <div className="border-y border-border bg-primary-50">
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
