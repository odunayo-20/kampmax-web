import Link from "next/link"
import { ArrowLeft, Building2, Calendar, CheckCircle2, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { H1, Lead, Muted } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Opportunity, OpportunityType } from "@/types/job"

function JobHeader({
  opportunity,
  type,
  campus,
}: {
  opportunity: Opportunity
  type: OpportunityType | undefined
  campus: Campus | undefined
}) {
  return (
    <div className="flex flex-col gap-8 py-16 sm:py-20 lg:py-24">
      <Link
        href="/jobs"
        className="inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        All Opportunities
      </Link>

      <div className="flex flex-col gap-4 border-b border-border/60 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {type ? <Badge variant="secondary">{type.name}</Badge> : null}
          {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
          {opportunity.location ? (
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="size-3" aria-hidden="true" />
              {opportunity.location}
            </span>
          ) : null}
        </div>

        <H1 className="text-2xl sm:text-3xl lg:text-4xl">
          {opportunity.title}
        </H1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <Building2 className="size-4 text-muted-foreground" aria-hidden="true" />
            {opportunity.organization}
          </span>
          {opportunity.closingDate ? (
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4 text-muted-foreground" aria-hidden="true" />
              Closes {opportunity.closingDate}
            </span>
          ) : null}
        </div>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <section className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Overview
            </h2>
            <Lead className="text-base text-foreground/90">
              {opportunity.description}
            </Lead>
          </section>

          {opportunity.responsibilities && opportunity.responsibilities.length > 0 && (
            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Key Responsibilities
              </h2>
              <ul className="flex flex-col gap-2.5">
                {opportunity.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {opportunity.requirements && opportunity.requirements.length > 0 && (
            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Requirements & Qualifications
              </h2>
              <ul className="flex flex-col gap-2.5">
                {opportunity.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {opportunity.skills && opportunity.skills.length > 0 && (
            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Relevant Skills & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {opportunity.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-xs">
          <div className="flex flex-col gap-1">
            <h2 className="font-heading text-base font-semibold text-foreground">
              Opportunity Details
            </h2>
            <p className="text-xs text-muted-foreground">
              Summary of key role information
            </p>
          </div>

          <div className="flex flex-col gap-3 border-y border-border/60 py-4 text-xs">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">Organization</span>
              <span className="font-medium text-foreground text-right">
                {opportunity.organization}
              </span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">Type</span>
              <span className="font-medium text-foreground">
                {type?.name ?? opportunity.typeSlug}
              </span>
            </div>
            {opportunity.location ? (
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium text-foreground text-right">
                  {opportunity.location}
                </span>
              </div>
            ) : null}
            {campus ? (
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">Campus</span>
                <span className="font-medium text-foreground text-right">
                  {campus.name} ({campus.shortName})
                </span>
              </div>
            ) : null}
            {opportunity.closingDate ? (
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">Deadline</span>
                <span className="font-medium text-foreground">
                  {opportunity.closingDate}
                </span>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <Link
              href={siteConfig.registerUrl}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-11 w-full rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
              )}
            >
              Apply on Kampmax
            </Link>
            <Muted className="text-2xs text-center text-muted-foreground">
              Candidate applications and hiring communications are handled
              securely within the Kampmax app.
            </Muted>
          </div>
        </div>
      </div>
    </div>
  )
}

export { JobHeader }
