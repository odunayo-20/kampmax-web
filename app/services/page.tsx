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
    <Container>
      <ServiceHero />
      <div className="flex flex-col gap-8 pb-16 sm:pb-20 lg:pb-24">
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
  )
}
