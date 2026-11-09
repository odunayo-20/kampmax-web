import type { Metadata } from "next"

import { orNullDuringBuild } from "@/lib/api"
import { campusesWithItems, getCampuses } from "@/lib/campuses"
import { directoryCategories, getFreelancers } from "@/lib/freelancers"
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
      <FreelancerHero freelancers={listing?.freelancers ?? []} />

      <Container id="browse" className="scroll-mt-16">
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
              categories={directoryCategories(listing.freelancers)}
              campuses={campusesWithItems(listing.campuses, listing.freelancers)}
            />
          )}
        </div>
      </Container>

      {listing ? <FreelancersJsonLd freelancers={listing.freelancers} /> : null}
    </>
  )
}
