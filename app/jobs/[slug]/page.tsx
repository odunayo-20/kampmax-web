import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getOpportunityTypeBySlug } from "@/app/_data/jobs"
import { orNullDuringBuild } from "@/lib/api"
import { getCampuses } from "@/lib/campuses"
import { getOpportunities, getOpportunity } from "@/lib/jobs"
import { Container } from "@/components/layout/container"
import { MobileActionBar } from "@/components/shared/mobile-action-bar"
import { siteConfig } from "@/config/site"
import { Section } from "@/components/layout/section"
import { JobHeader } from "@/components/jobs/job-header"
import { JobJsonLd } from "@/components/jobs/job-json-ld"
import { RelatedJobs, pickRelatedOpportunities } from "@/components/jobs/related-jobs"

export const revalidate = 300

type JobPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const opportunities = await orNullDuringBuild(async () =>
    getOpportunities(await getCampuses())
  )
  return (opportunities ?? []).map((op) => ({ slug: op.slug }))
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params
  const opportunity = await getOpportunity(slug, await getCampuses())

  if (!opportunity) {
    return {}
  }

  const description = `${opportunity.summary ?? opportunity.description} Location: ${opportunity.location ?? "Campus"}.`

  return {
    title: `${opportunity.title} at ${opportunity.organization} | Kampmax Jobs`,
    description,
    alternates: {
      canonical: `/jobs/${opportunity.slug}`,
    },
    openGraph: {
      title: `${opportunity.title} at ${opportunity.organization} | Kampmax Jobs`,
      description,
      url: `/jobs/${opportunity.slug}`,
    },
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params
  const campuses = await getCampuses()
  const opportunity = await getOpportunity(slug, campuses)

  if (!opportunity) {
    notFound()
  }

  const type = getOpportunityTypeBySlug(opportunity.typeSlug)
  const campus = opportunity.campusSlug
    ? campuses.find((candidate) => candidate.slug === opportunity.campusSlug)
    : undefined

  const related = pickRelatedOpportunities(
    opportunity,
    await getOpportunities(campuses)
  )

  return (
    <>
      <MobileActionBar
        title={opportunity.title}
        detail={opportunity.closingDate ? `Closes ${opportunity.closingDate}` : opportunity.organization}
        action="Apply"
        href={siteConfig.registerUrl}
      />

      <div className="bg-linear-to-b from-primary-50/80 via-background to-background">
        <Container>
          <JobHeader opportunity={opportunity} type={type} campus={campus} />
        </Container>
      </div>

      {related.length > 0 ? (
        <Section className="border-t border-border/60">
          <Container>
            <RelatedJobs opportunities={related} campuses={campuses} />
          </Container>
        </Section>
      ) : null}

      <JobJsonLd opportunity={opportunity} />
    </>
  )
}
