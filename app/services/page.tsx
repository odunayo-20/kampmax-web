import type { Metadata } from "next"

import { getEnabledCampuses } from "@/app/_data/campuses"
import { getEnabledServiceCategories, getServices } from "@/app/_data/services"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { ServiceHero } from "@/components/services/service-hero"
import { ServicesBrowser } from "@/components/services/services-browser"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover services offered by individuals, freelancers, and businesses across campus communities on Kampmax.",
}

export default function ServicesPage() {
  const services = getServices()
  const categories = getEnabledServiceCategories()
  const campuses = getEnabledCampuses()

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
          <ServicesBrowser
            services={services}
            categories={categories}
            campuses={campuses}
          />
        </div>
      </Container>
    </>
  )
}
