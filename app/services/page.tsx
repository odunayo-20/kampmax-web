import type { Metadata } from "next"

import { orNullDuringBuild } from "@/lib/api"
import { campusesWithItems, getCampuses } from "@/lib/campuses"
import { directoryServiceCategories, getServices } from "@/lib/services"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { ServiceHero } from "@/components/services/service-hero"
import { ServicesBrowser } from "@/components/services/services-browser"
import { ServicesJsonLd } from "@/components/services/services-json-ld"
import { ApiUnavailable } from "@/components/shared/api-unavailable"

export const revalidate = 300

const description =
  "Discover services offered by individuals, freelancers, and businesses across campus communities on Kampmax."

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Kampmax",
    description,
    url: "/services",
  },
}

export default async function ServicesPage() {
  const listing = await orNullDuringBuild(async () => {
    const campuses = await getCampuses()
    const services = await getServices(campuses)
    return { campuses, services }
  })

  return (
    <>
      <div className="relative isolate overflow-hidden border-b border-border bg-linear-to-b from-primary-50 via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-[-10%] size-96 rounded-full bg-primary-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-[-10%] size-80 rounded-full bg-accent-100/60 blur-3xl"
        />
        <Container className="relative">
          <ServiceHero />
        </Container>
      </div>

      <Container>
        <div className="flex flex-col gap-8 py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Directory"
            title="Available services"
            description="Explore skills and everyday services offered across campus communities. Search or filter by category and campus to find what you need."
          />
          {listing === null ? (
            <ApiUnavailable subject="services" />
          ) : (
            <ServicesBrowser
              services={listing.services}
              categories={directoryServiceCategories(listing.services)}
              campuses={campusesWithItems(listing.campuses, listing.services)}
            />
          )}
        </div>
      </Container>

      {listing ? <ServicesJsonLd services={listing.services} /> : null}
    </>
  )
}
