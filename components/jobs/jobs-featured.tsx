import { useMemo } from "react"

import { SectionHeading } from "@/components/layout/section-heading"
import { OpportunityCard } from "@/components/jobs/opportunity-card"
import type { Opportunity, OpportunityType } from "@/types/job"

function JobsFeatured({
  opportunities,
  types,
}: {
  opportunities: Opportunity[]
  types: OpportunityType[]
}) {
  const typeBySlug = useMemo(
    () => new Map(types.map((type) => [type.slug, type])),
    [types]
  )

  if (opportunities.length === 0) return null

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        eyebrow="Featured"
        title="Spotlight roles & placements"
        description="A selection of prominent internship programs, campus technical positions, and graduate opportunities active right now."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {opportunities.map((op) => (
          <OpportunityCard
            key={op.slug}
            opportunity={op}
            type={typeBySlug.get(op.typeSlug)}
          />
        ))}
      </div>
    </div>
  )
}

export { JobsFeatured }
