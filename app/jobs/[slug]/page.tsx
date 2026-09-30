import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCampusBySlug } from "@/app/_data/campuses"
import {
  getOpportunities,
  getOpportunityBySlug,
  getOpportunityTypeBySlug,
} from "@/app/_data/jobs"
import { Container } from "@/components/layout/container"
import { JobHeader } from "@/components/jobs/job-header"

type JobPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getOpportunities().map((op) => ({ slug: op.slug }))
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params
  const opportunity = getOpportunityBySlug(slug)

  if (!opportunity) {
    return {}
  }

  return {
    title: `${opportunity.title} at ${opportunity.organization} | Kampmax Jobs`,
    description: `${opportunity.description} Location: ${opportunity.location ?? "Campus"}.`,
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params
  const opportunity = getOpportunityBySlug(slug)

  if (!opportunity) {
    notFound()
  }

  const type = getOpportunityTypeBySlug(opportunity.typeSlug)
  const campus = opportunity.campusSlug
    ? getCampusBySlug(opportunity.campusSlug)
    : undefined

  return (
    <Container>
      <JobHeader opportunity={opportunity} type={type} campus={campus} />
    </Container>
  )
}
