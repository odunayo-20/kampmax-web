import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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
  const displayedSkills = opportunity.skills?.slice(0, 3) ?? []

  return (
    <Link
      href={`/jobs/${opportunity.slug}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="flex h-full flex-col rounded-2xl pt-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary-950/10 group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
        <CardContent className="flex flex-1 flex-col gap-3.5">
          <div className="flex items-center justify-between gap-2">
            <span className="flex min-w-0 items-center gap-2.5 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-primary-600 to-primary-800 text-xs font-bold text-white"
              >
                {opportunity.organization.charAt(0).toUpperCase()}
              </span>
              <span className="truncate">{opportunity.organization}</span>
            </span>
            {opportunity.closingDate ? (
              <span className="shrink-0 rounded-full bg-accent-500/10 px-2.5 py-0.5 text-xs font-semibold text-accent-700">
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
            {opportunity.summary ?? opportunity.description}
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
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
              View
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
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
