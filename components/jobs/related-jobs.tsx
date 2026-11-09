import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { getOpportunityTypeBySlug } from "@/app/_data/jobs"
import { SectionHeading } from "@/components/layout/section-heading"
import { OpportunityCard } from "@/components/jobs/opportunity-card"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Opportunity } from "@/types/job"

const MAX_RELATED = 3

/** Other opportunities, those of the same type first. */
export function pickRelatedOpportunities(
  current: Opportunity,
  all: Opportunity[]
): Opportunity[] {
  const others = all.filter((job) => job.slug !== current.slug)
  const sameType = others.filter((job) => job.typeSlug === current.typeSlug)
  const rest = others.filter((job) => job.typeSlug !== current.typeSlug)
  return [...sameType, ...rest].slice(0, MAX_RELATED)
}

/** "More opportunities" under a job. Left out when there is nothing else. */
function RelatedJobs({
  opportunities,
  campuses,
}: {
  opportunities: Opportunity[]
  campuses: Campus[]
}) {
  if (opportunities.length === 0) return null

  const campusBySlug = new Map(campuses.map((c) => [c.slug, c]))

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Keep browsing" title="More opportunities" />
        <Link
          href="/jobs"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 self-start rounded-xl whitespace-nowrap sm:self-auto"
          )}
        >
          View all opportunities
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((job, index) => (
          <FadeIn key={job.slug} delay={index * 0.07} className="h-full">
            <OpportunityCard
              opportunity={job}
              type={getOpportunityTypeBySlug(job.typeSlug)}
              campus={job.campusSlug ? campusBySlug.get(job.campusSlug) : undefined}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export { RelatedJobs }
