import Link from "next/link"
import { ArrowLeft, ArrowRight, Building2, Sparkles } from "lucide-react"

import { getServiceBySlug } from "@/app/_data/services"
import { FreelancerAvatar } from "@/components/freelancers/freelancer-avatar"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { H1, Lead, Muted } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { formatPrice } from "@/lib/format-price"
import type { Campus } from "@/types/campus"
import type { Freelancer, FreelancerCategory } from "@/types/freelancer"

function FreelancerProfile({
  freelancer,
  category,
  campus,
}: {
  freelancer: Freelancer
  category: FreelancerCategory | undefined
  campus: Campus | undefined
}) {
  const services = (freelancer.serviceSlugs ?? [])
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)

  return (
    <div className="flex flex-col gap-8 py-16 sm:py-20 lg:py-24">
      <Link
        href="/freelancers"
        className="inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        All Freelancers
      </Link>

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        <FreelancerAvatar
          name={freelancer.name}
          avatar={freelancer.avatar}
          size="xl"
          className="border-2 shadow-xs"
        />

        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {category ? <Badge variant="secondary">{category.name}</Badge> : null}
            {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
          </div>

          <H1 className="text-2xl sm:text-3xl lg:text-4xl">{freelancer.name}</H1>

          <p className="text-base font-medium text-muted-foreground sm:text-lg">
            {freelancer.headline}
          </p>
        </div>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <section className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              About
            </h2>
            <Lead className="text-base text-foreground/90">
              {freelancer.bio}
            </Lead>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Skills & Expertise
            </h2>
            <div className="flex flex-wrap gap-2">
              {freelancer.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {services.length > 0 && (
            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Services Offered
              </h2>
              <div className="flex flex-col gap-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <Card className="transition-colors group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
                      <CardContent className="flex items-center justify-between gap-4 p-4">
                        <div className="flex flex-col gap-1">
                          <span className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {service.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {service.priceFrom
                              ? `Starting from ${formatPrice(service.priceFrom)}`
                              : "Quote upon request"}
                          </span>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-foreground">
                          View Service
                          <ArrowRight
                            className="size-3 transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Sparkles className="size-4" aria-hidden="true" />
            </span>
            <h2 className="font-heading text-base font-semibold text-foreground">
              Work with {freelancer.name.split(" ")[0]}
            </h2>
          </div>

          <p className="text-sm text-muted-foreground">
            Connect on Kampmax to discuss freelance projects, request quotes, or
            collaborate on campus initiatives.
          </p>

          <Link
            href={siteConfig.registerUrl}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-11 w-full rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
            )}
          >
            Connect on Kampmax
          </Link>

          <Muted className="text-xs">
            Connecting takes you into the authenticated Kampmax app where you can
            safely communicate and coordinate with this professional.
          </Muted>

          {campus && (
            <div className="border-t border-border/60 pt-4">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Building2 className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">
                    Campus Affiliation
                  </span>
                  <span>
                    {campus.name} ({campus.shortName})
                  </span>
                  {campus.location ? <span>{campus.location}</span> : null}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export { FreelancerProfile }
