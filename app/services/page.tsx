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
      <ServiceHero services={listing?.services ?? []} />

      <Container>
        <div id="browse" className="flex scroll-mt-16 flex-col gap-8 py-16 sm:py-20 lg:py-24">
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
