import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  UserCheck,
} from "lucide-react"

import { FreelancerAvatar } from "@/components/freelancers/freelancer-avatar"
import { ServiceCard } from "@/components/services/service-card"
import { FadeIn } from "@/components/shared/fade-in"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { categoryOf } from "@/lib/services"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Freelancer, FreelancerCategory } from "@/types/freelancer"
import type { Service } from "@/types/service"

const availability = {
  AVAILABLE: { label: "Available for work", dot: "bg-success-500" },
  BUSY: { label: "Currently busy", dot: "bg-accent-500" },
  UNAVAILABLE: { label: "Not available", dot: "bg-neutral-400" },
} as const

/** What happens after connecting, all inside the Kampmax app. */
const nextSteps = [
  { icon: MessageCircle, label: "Message them in the app" },
  { icon: UserCheck, label: "Agree scope and price" },
  { icon: ShieldCheck, label: "Pay safely through Kampmax" },
]

function SectionTitle({ children }: { children: string }) {
  return <h2 className="font-heading text-lg font-bold text-foreground">{children}</h2>
}

function SkillChips({ skills }: { skills: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground shadow-2xs"
        >
          {skill}
        </li>
      ))}
    </ul>
  )
}

function FreelancerProfile({
  freelancer,
  category,
  campus,
  services = [],
  campuses = [],
}: {
  freelancer: Freelancer
  category: FreelancerCategory | undefined
  campus: Campus | undefined
  services?: Service[]
  campuses?: Campus[]
}) {
  const campusBySlug = new Map(campuses.map((c) => [c.slug, c]))
  const status = freelancer.availability ? availability[freelancer.availability] : undefined
  const firstName = freelancer.name.split(" ")[0]

  return (
    <div className="py-8 sm:py-12 lg:py-14">
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
      >
        <Link
          href="/freelancers"
          className="rounded-sm font-medium transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Freelancers
        </Link>
        {category ? (
          <>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span>{category.name}</span>
          </>
        ) : null}
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="truncate font-medium text-foreground" aria-current="page">
          {freelancer.name}
        </span>
      </nav>

      <div className="grid items-start gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
            <FreelancerAvatar
              name={freelancer.name}
              avatar={freelancer.avatar}
              size="xl"
              className="border-2 border-card shadow-lg ring-1 ring-black/5"
            />

            <div className="flex min-w-0 flex-col gap-2.5">
              <div className="flex flex-wrap items-center gap-1.5">
                {category ? <Badge variant="secondary">{category.name}</Badge> : null}
                {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
                {status ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-medium text-foreground">
                    <span className={cn("size-2 rounded-full", status.dot)} aria-hidden="true" />
                    {status.label}
                  </span>
                ) : null}
              </div>

              <h1 className="flex flex-wrap items-center gap-2 font-heading text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl">
                {freelancer.name}
                {freelancer.verified ? (
                  <>
                    <BadgeCheck className="size-6 shrink-0 text-primary-600" aria-hidden="true" />
                    <span className="sr-only">Verified</span>
                  </>
                ) : null}
              </h1>

              <p className="text-base font-medium text-muted-foreground sm:text-lg">
                {freelancer.headline}
              </p>
            </div>
          </div>

          <section className="flex flex-col gap-3">
            <SectionTitle>About</SectionTitle>
            <p className="text-base leading-relaxed whitespace-pre-line text-muted-foreground">
              {freelancer.bio}
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <SectionTitle>Skills &amp; expertise</SectionTitle>
            {freelancer.skillGroups.length > 1 ? (
              <div className="flex flex-col gap-5">
                {freelancer.skillGroups.map((group) => (
                  <div key={group.category.slug} className="flex flex-col gap-2">
                    <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      {group.category.name}
                    </h3>
                    <SkillChips skills={group.skills} />
                  </div>
                ))}
              </div>
            ) : (
              <SkillChips skills={freelancer.skills} />
            )}
          </section>

          {services.length > 0 ? (
            <section className="flex flex-col gap-4">
              <SectionTitle>Services offered</SectionTitle>
              <div className="grid gap-5 sm:grid-cols-2">
                {services.map((service, index) => (
                  <FadeIn key={service.slug} delay={index * 0.07} className="h-full">
                    <ServiceCard
                      service={service}
                      category={categoryOf(service)}
                      campus={service.campusSlug ? campusBySlug.get(service.campusSlug) : undefined}
                    />
                  </FadeIn>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        {/* Stays in view while the profile scrolls on large screens. */}
        <aside className="flex flex-col gap-4 lg:sticky lg:top-24">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-1">
              <p className="font-heading text-xl font-extrabold tracking-tight text-foreground">
                Work with {firstName}
              </p>
              <p className="text-sm text-muted-foreground">
                Discuss a project, ask for a quote, or collaborate on campus.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-t border-border/70 pt-4">
              <Link
                href={siteConfig.registerUrl}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-13 w-full rounded-xl bg-linear-to-r from-primary-600 to-primary-800 text-base font-bold shadow-lg shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                )}
              >
                Connect on Kampmax
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
                Connecting takes you into the Kampmax app, where you can safely talk to and
                coordinate with this professional.
              </p>
            </div>

            {campus ? (
              <div className="flex items-start gap-3 border-t border-border/70 pt-4 text-sm">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <Building2 className="size-4" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-foreground">
                    {campus.name} ({campus.shortName})
                  </span>
                  {campus.location ? (
                    <span className="text-xs text-muted-foreground">{campus.location}</span>
                  ) : null}
                </span>
              </div>
            ) : null}
          </div>
        </aside>
      </div>
    </div>
  )
}

export { FreelancerProfile }
