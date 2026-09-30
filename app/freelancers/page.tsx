import type { Metadata } from "next"

import { getEnabledCampuses } from "@/app/_data/campuses"
import {
  getEnabledFreelancerCategories,
  getFreelancers,
} from "@/app/_data/freelancers"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { FreelancerHero } from "@/components/freelancers/freelancer-hero"
import { FreelancersBrowser } from "@/components/freelancers/freelancers-browser"

export const metadata: Metadata = {
  title: "Freelancers",
  description:
    "Discover skilled students, creators, and independent professionals across campus communities on Kampmax.",
}

export default function FreelancersPage() {
  const freelancers = getFreelancers()
  const categories = getEnabledFreelancerCategories()
  const campuses = getEnabledCampuses()

  return (
    <Container>
      <FreelancerHero />
      <div className="flex flex-col gap-8 pb-16 sm:pb-20 lg:pb-24">
        <SectionHeading
          eyebrow="Directory"
          title="Independent talent"
          description="Explore skilled individuals offering specialized services and creative skills across campus communities. Search or filter to find the right collaborator."
        />
        <FreelancersBrowser
          freelancers={freelancers}
          categories={categories}
          campuses={campuses}
        />
      </div>
    </Container>
  )
}
