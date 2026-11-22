import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import type { Campus } from "@/types/campus"
import type { Opportunity, OpportunityType } from "@/types/job"

function OpportunityCard({
  opportunity,
  type,
  campus,
}: {
  opportunity: Opportunity
  type: OpportunityType | undefined
  campus?: Campus
}) {
  const displayedSkills = opportunity.skills?.slice(0, 2) ?? []

  return (
    <Link
      href={`/jobs/${opportunity.slug}`}
      prefetch={false}
      className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="flex items-center gap-3.5 p-3.5 sm:p-5 rounded-2xl shadow-xs transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md group-hover:shadow-primary-950/5">
        {/* Company Avatar */}
        <span
          aria-hidden="true"
          className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary-600 to-primary-800 text-sm sm:text-base font-bold text-white shadow-xs"
        >
          {opportunity.organization.charAt(0).toUpperCase()}
        </span>

        {/* Content Column */}
        <div className="flex min-w-0 flex-1 flex-col gap-1 sm:gap-1.5">
          {/* Top Line: Organization & Location */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="truncate font-medium">{opportunity.organization}</span>
            {opportunity.location ? (
              <>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 truncate">
                  <MapPin className="size-3 shrink-0" aria-hidden="true" />
                  {opportunity.location}
                </span>
              </>
            ) : null}
          </div>

          {/* Job Title */}
          <h3 className="line-clamp-1 font-heading text-sm sm:text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {opportunity.title}
          </h3>

          {/* Tags & Metadata */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            {type ? (
              <Badge variant="secondary" className="text-xs font-normal px-2 py-0.5">
                {type.name}
              </Badge>
            ) : null}
            {campus ? (
              <Badge variant="outline" className="text-xs font-normal px-1.5 py-0.5">
                {campus.shortName}
              </Badge>
            ) : null}
            {opportunity.closingDate ? (
              <span className="rounded-full bg-accent-500/10 px-2 py-0.5 text-xs font-medium text-accent-700">
                Closes {opportunity.closingDate}
              </span>
            ) : null}
            {displayedSkills.map((skill) => (
              <span
                key={skill}
                className="hidden md:inline-flex rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Arrow / Action */}
        <span className="flex size-7 sm:size-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
          <ArrowRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </Card>
    </Link>
  )
}

export { OpportunityCard }
