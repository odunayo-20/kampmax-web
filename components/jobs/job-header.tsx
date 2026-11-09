import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarClock,
  Check,
  ChevronRight,
  MapPin,
  MessageCircle,
  Send,
  UserCheck,
  type LucideIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Opportunity, OpportunityType } from "@/types/job"

/** What the candidate does next, all inside the Kampmax app. */
const nextSteps = [
  { icon: Send, label: "Send your application" },
  { icon: MessageCircle, label: "Hear back in the app" },
  { icon: UserCheck, label: "Track your status" },
]

function Fact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-xs">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-semibold text-foreground">{value}</span>
      </span>
    </li>
  )
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className="font-heading text-lg font-bold text-foreground">{children}</h2>
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-700">
            <Check className="size-3" aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function JobHeader({
  opportunity,
  type,
  campus,
}: {
  opportunity: Opportunity
  type: OpportunityType | undefined
  campus: Campus | undefined
}) {
  const facts = [
    { icon: Briefcase, label: "Type", value: type?.name ?? opportunity.typeSlug },
    opportunity.location
      ? { icon: MapPin, label: "Location", value: opportunity.location }
      : null,
    campus
      ? { icon: Building2, label: "Campus", value: `${campus.name} (${campus.shortName})` }
      : null,
    opportunity.closingDate
      ? { icon: CalendarClock, label: "Apply by", value: opportunity.closingDate }
      : null,
  ].filter((fact): fact is NonNullable<typeof fact> => fact !== null)

  return (
    <div className="py-8 sm:py-12 lg:py-14">
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
      >
        <Link
          href="/jobs"
          className="rounded-sm font-medium transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Jobs
        </Link>
        {type ? (
          <>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span>{type.name}</span>
          </>
        ) : null}
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="truncate font-medium text-foreground" aria-current="page">
          {opportunity.title}
        </span>
      </nav>

      <div className="grid items-start gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {type ? <Badge variant="secondary">{type.name}</Badge> : null}
              {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
              {opportunity.closingDate ? (
                <span className="rounded-full bg-accent-500/10 px-2.5 py-0.5 text-xs font-semibold text-accent-700">
                  Closes {opportunity.closingDate}
                </span>
              ) : null}
            </div>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl">
              {opportunity.title}
            </h1>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary-600 to-primary-800 text-sm font-bold text-white"
              >
                {opportunity.organization.charAt(0).toUpperCase()}
              </span>
              <span>
                Posted by{" "}
                <span className="font-semibold text-foreground">{opportunity.organization}</span>
              </span>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => (
              <Fact key={fact.label} {...fact} />
            ))}
          </ul>

          <section className="flex flex-col gap-3">
            <SectionTitle>About this role</SectionTitle>
            <p className="text-base leading-relaxed whitespace-pre-line text-muted-foreground">
              {opportunity.description}
            </p>
          </section>

          {opportunity.responsibilities && opportunity.responsibilities.length > 0 ? (
            <section className="flex flex-col gap-3">
              <SectionTitle>What you will do</SectionTitle>
              <CheckList items={opportunity.responsibilities} />
            </section>
          ) : null}

          {opportunity.requirements && opportunity.requirements.length > 0 ? (
            <section className="flex flex-col gap-3">
              <SectionTitle>What we are looking for</SectionTitle>
              <CheckList items={opportunity.requirements} />
            </section>
          ) : null}

          {opportunity.skills && opportunity.skills.length > 0 ? (
            <section className="flex flex-col gap-3">
              <SectionTitle>Skills &amp; tools</SectionTitle>
              <ul className="flex flex-wrap gap-2">
                {opportunity.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground shadow-2xs"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        {/* Stays in view while the details scroll on large screens. */}
        <aside className="flex flex-col gap-4 lg:sticky lg:top-24">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-1">
              <p className="font-heading text-xl font-extrabold tracking-tight text-foreground">
                Interested in this role?
              </p>
              {opportunity.closingDate ? (
                <p className="text-sm text-muted-foreground">
                  Applications close on {opportunity.closingDate}.
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 border-t border-border/70 pt-4">
              <Link
                href={siteConfig.registerUrl}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-13 w-full rounded-xl bg-linear-to-r from-primary-600 to-primary-800 text-base font-bold shadow-lg shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                )}
              >
                Apply on Kampmax
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <ul className="flex flex-col gap-2">
                {nextSteps.map((step) => (
                  <li
                    key={step.label}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <step.icon className="size-4 shrink-0 text-primary-600" aria-hidden="true" />
                    {step.label}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">
                Applications and hiring messages are handled securely within the Kampmax app.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export { JobHeader }
