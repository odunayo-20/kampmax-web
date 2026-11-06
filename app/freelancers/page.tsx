import type { Metadata } from "next"

import { orNullDuringBuild } from "@/lib/api"
import { getCampuses } from "@/lib/campuses"
import { getFreelancers, topSkillCategories } from "@/lib/freelancers"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { FreelancerHero } from "@/components/freelancers/freelancer-hero"
import { FreelancersBrowser } from "@/components/freelancers/freelancers-browser"
import { FreelancersJsonLd } from "@/components/freelancers/freelancers-json-ld"
import { ApiUnavailable } from "@/components/shared/api-unavailable"

export const revalidate = 300

const description =
  "Discover skilled students, creators, and independent professionals across campus communities on Kampmax."

export const metadata: Metadata = {
  title: "Freelancers",
  description,
  alternates: {
    canonical: "/freelancers",
  },
  openGraph: {
    title: "Freelancers | Kampmax",
    description,
    url: "/freelancers",
  },
}

export default async function FreelancersPage() {
  const listing = await orNullDuringBuild(async () => {
    const campuses = await getCampuses()
    const freelancers = await getFreelancers(campuses)
    return { campuses, freelancers }
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
          <FreelancerHero />
        </Container>
      </div>

      <Container>
        <div className="flex flex-col gap-8 py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Directory"
            title="Independent talent"
            description="Explore skilled individuals offering specialized services and creative skills across campus communities. Search or filter to find the right collaborator."
          />
          {listing === null ? (
            <ApiUnavailable subject="freelancers" />
          ) : (
            <FreelancersBrowser
              freelancers={listing.freelancers}
              categories={topSkillCategories(listing.freelancers)}
              campuses={listing.campuses}
            />
          )}
        </div>
      </Container>

      {listing ? <FreelancersJsonLd freelancers={listing.freelancers} /> : null}
    </>
  )
}
