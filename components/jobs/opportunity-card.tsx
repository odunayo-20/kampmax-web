import Link from "next/link"
import { ArrowRight, Building2, MapPin } from "lucide-react"

import { getCampusBySlug } from "@/app/_data/campuses"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Opportunity, OpportunityType } from "@/types/job"

function OpportunityCard({
  opportunity,
  type,
}: {
  opportunity: Opportunity
  type: OpportunityType | undefined
}) {
  const campus = opportunity.campusSlug
    ? getCampusBySlug(opportunity.campusSlug)
    : undefined

  const displayedSkills = opportunity.skills?.slice(0, 3) ?? []

  return (
    <Link
      href={`/jobs/${opportunity.slug}`}
      className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="flex h-full flex-col pt-5 shadow-sm transition-all group-hover:shadow-md group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
        <CardContent className="flex flex-1 flex-col gap-3.5">
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 truncate text-xs font-medium text-muted-foreground">
              <Building2 className="size-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{opportunity.organization}</span>
            </span>
            {opportunity.closingDate ? (
              <span className="shrink-0 text-xs text-muted-foreground/80">
                Closes {opportunity.closingDate}
              </span>
            ) : null}
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary sm:text-lg">
              {opportunity.title}
            </h3>

            <div className="flex flex-wrap items-center gap-1.5">
              {type ? <Badge variant="secondary">{type.name}</Badge> : null}
              {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
              {opportunity.location ? (
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3 shrink-0" aria-hidden="true" />
                  {opportunity.location}
                </span>
              ) : null}
            </div>
          </div>

          <p className="line-clamp-2 text-sm text-muted-foreground">
            {opportunity.description}
          </p>

          {displayedSkills.length > 0 ? (
            <div className="flex flex-wrap items-center gap-1 pt-1">
              {displayedSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3">
            <span className="text-xs text-muted-foreground">
              {opportunity.campusSlug ? "Campus-affiliated" : "Open opportunity"}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600">
              View Opportunity
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export { OpportunityCard }
