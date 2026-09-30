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
import { JobsValueProps } from "@/components/jobs/jobs-value-props"

export const metadata: Metadata = {
  title: "Jobs & Opportunities",
  description:
    "Discover internships, campus roles, freelance projects, and graduate opportunities across Nigerian campus communities on Kampmax.",
}

export default function JobsPage() {
  const opportunities = getOpportunities()
  const featured = getFeaturedOpportunities()
  const types = getEnabledOpportunityTypes()
  const campuses = getEnabledCampuses()

  return (
    <>
      <Container>
        <JobsHero />
      </Container>

      {featured.length > 0 && (
        <div className="bg-muted/30">
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

      <div className="bg-muted/30">
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

      <div className="bg-muted/30">
        <Section>
          <Container>
            <JobsEmployerCta />
          </Container>
        </Section>
      </div>
    </>
  )
}
