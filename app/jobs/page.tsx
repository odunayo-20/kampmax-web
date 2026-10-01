import type { Metadata } from "next"

import { getEnabledCampuses } from "@/app/_data/campuses"
import {
  getEnabledOpportunityTypes,
  getFeaturedOpportunities,
  getOpportunities,
} from "@/app/_data/jobs"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { JobsBrowser } from "@/components/jobs/jobs-browser"
import { JobsCampusSection } from "@/components/jobs/jobs-campus-section"
import { JobsEmployerCta } from "@/components/jobs/jobs-employer-cta"
import { JobsFeatured } from "@/components/jobs/jobs-featured"
import { JobsHero } from "@/components/jobs/jobs-hero"
import { JobsJsonLd } from "@/components/jobs/jobs-json-ld"
import { JobsValueProps } from "@/components/jobs/jobs-value-props"

const description =
  "Discover internships, campus roles, freelance projects, and graduate opportunities across Nigerian campus communities on Kampmax."

export const metadata: Metadata = {
  title: "Jobs & Opportunities",
  description,
  alternates: {
    canonical: "/jobs",
  },
  openGraph: {
    title: "Jobs & Opportunities — Kampmax",
    description,
    url: "/jobs",
  },
}

export default function JobsPage() {
  const opportunities = getOpportunities()
  const featured = getFeaturedOpportunities()
  const types = getEnabledOpportunityTypes()
  const campuses = getEnabledCampuses()

  return (
    <>
      <div className="relative isolate overflow-hidden border-b border-border bg-linear-to-b from-primary-50 via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] size-128 rounded-full bg-primary-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-[-15%] size-96 rounded-full bg-accent-100/60 blur-3xl"
        />
        <Container className="relative">
          <JobsHero />
        </Container>
      </div>

      {featured.length > 0 && (
        <div className="border-y border-border bg-primary-50">
          <Section>
            <Container>
              <JobsFeatured opportunities={featured} types={types} />
            </Container>
          </Section>
        </div>
      )}

      <Section id="browse" className="scroll-mt-16">
        <Container>
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Directory"
              title="Explore all opportunities"
              description="Search and filter across internship placements, campus roles, part-time work, and graduate openings."
            />
            <JobsBrowser
              opportunities={opportunities}
              types={types}
              campuses={campuses}
            />
          </div>
        </Container>
      </Section>

      <div className="border-y border-border bg-neutral-50">
        <Section>
          <Container>
            <JobsValueProps />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <JobsCampusSection />
        </Container>
      </Section>

      <div className="border-y border-border bg-primary-50">
        <Section>
          <Container>
            <JobsEmployerCta />
          </Container>
        </Section>
      </div>

      <JobsJsonLd opportunities={opportunities} />
    </>
  )
}
