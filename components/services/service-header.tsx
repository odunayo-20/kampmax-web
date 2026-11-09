import Link from "next/link"
import {
  ArrowRight,
  Banknote,
  Building2,
  CalendarCheck,
  Check,
  ChevronRight,
  ClipboardList,
  Clock,
  MessageCircle,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react"

import { FreelancerAvatar } from "@/components/freelancers/freelancer-avatar"
import { ServiceCoverFallback } from "@/components/services/service-cover-fallback"
import { CoverImage } from "@/components/shared/cover-image"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { formatPrice } from "@/lib/format-price"
import { pricingNote, pricingShort, servicePriceLabel } from "@/lib/service-price"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Service, ServiceCategory } from "@/types/service"

/** What the buyer does next, all inside the Kampmax app. */
const nextSteps = [
  { icon: MessageCircle, label: "Contact the provider" },
  { icon: CalendarCheck, label: "Confirm availability" },
  { icon: ClipboardList, label: "Manage your request" },
]

function Fact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <li className="flex flex-col gap-1.5 rounded-2xl border border-border bg-card p-3.5 shadow-xs">
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </li>
  )
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className="font-heading text-lg font-bold text-foreground">{children}</h2>
}

function ServiceHeader({
  service,
  category,
  campus,
}: {
  service: Service
  category: ServiceCategory | undefined
  campus: Campus | undefined
}) {
  const facts = [
    service.deliveryLabel
      ? { icon: Clock, label: "Delivery", value: service.deliveryLabel }
      : null,
    service.revisions !== undefined
      ? {
          icon: RefreshCcw,
          label: "Revisions",
          value: `${service.revisions} included`,
        }
      : null,
    pricingShort(service.pricingModel)
      ? { icon: Banknote, label: "Pricing", value: pricingShort(service.pricingModel)! }
      : null,
  ].filter((fact): fact is NonNullable<typeof fact> => fact !== null)

  return (
    <div className="py-8 sm:py-12 lg:py-14">
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
      >
        <Link
          href="/services"
          className="rounded-sm font-medium transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Services
        </Link>
        {category ? (
          <>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span>{category.name}</span>
          </>
        ) : null}
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="truncate font-medium text-foreground" aria-current="page">
          {service.name}
        </span>
      </nav>

      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        {/* Stays in view while the details scroll on large screens. */}
        <div className="flex flex-col gap-5 lg:sticky lg:top-24">
          <CoverImage
            src={service.image}
            alt={service.name}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            fallback={
              <ServiceCoverFallback
                categorySlug={service.categorySlug}
                categoryName={service.categoryName}
                className="aspect-4/3 rounded-2xl shadow-lg"
              />
            }
            className="aspect-4/3 w-full rounded-2xl shadow-lg ring-1 shadow-primary-950/10 ring-black/5"
          />
          {facts.length > 0 ? (
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(6.5rem,1fr))] gap-3">
              {facts.map((fact) => (
                <Fact key={fact.label} {...fact} />
              ))}
            </ul>
          ) : null}
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {category ? <Badge variant="secondary">{category.name}</Badge> : null}
              {service.subcategoryName ? (
                <Badge variant="outline">{service.subcategoryName}</Badge>
              ) : null}
              {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
            </div>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl">
              {service.name}
            </h1>

            {service.providerName ? (
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <FreelancerAvatar
                  name={service.providerName}
                  avatar={service.providerAvatar}
                  size="sm"
                />
                <span>
                  Offered by{" "}
                  {service.providerSlug ? (
                    <Link
                      href={`/freelancers/${service.providerSlug}`}
                      className="font-semibold text-foreground transition-colors hover:text-primary hover:underline"
                    >
                      {service.providerName}
                    </Link>
                  ) : (
                    <span className="font-semibold text-foreground">{service.providerName}</span>
                  )}
                </span>
              </div>
            ) : null}
          </div>

          {/* Price, and the one next step. */}
          <div id="action-card" className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-1">
              <p className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {servicePriceLabel(service)}
              </p>
              {pricingNote(service.pricingModel) ? (
                <p className="text-sm text-muted-foreground">{pricingNote(service.pricingModel)}</p>
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
                Continue on Kampmax
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <ul className="grid gap-2 sm:grid-cols-3">
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
                Continuing takes you into the Kampmax app, where all of this happens.
              </p>
            </div>
          </div>

          {service.description ? (
            <section className="flex flex-col gap-3">
              <SectionTitle>About this service</SectionTitle>
              <p className="text-base leading-relaxed whitespace-pre-line text-muted-foreground">
                {service.description}
              </p>
            </section>
          ) : null}

          {service.deliverables && service.deliverables.length > 0 ? (
            <section className="flex flex-col gap-3">
              <SectionTitle>What you get</SectionTitle>
              <ul className="flex flex-col gap-2.5">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-700">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {service.skills && service.skills.length > 0 ? (
            <section className="flex flex-col gap-3">
              <SectionTitle>Skills &amp; technologies</SectionTitle>
              <ul className="flex flex-wrap gap-2">
                {service.skills.map((skill) => (
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

          {service.packages && service.packages.length > 0 ? (
            <section className="flex flex-col gap-4">
              <SectionTitle>Packages</SectionTitle>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-base font-bold text-foreground">{pkg.name}</h3>
                      {pkg.price ? (
                        <span className="font-heading text-lg font-extrabold tracking-tight text-primary-700">
                          {formatPrice(pkg.price)}
                        </span>
                      ) : null}
                    </div>
                    {pkg.description ? (
                      <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    ) : null}
                    <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      {pkg.deliveryDays ? (
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3.5 text-primary-600" aria-hidden="true" />
                          {pkg.deliveryDays} {pkg.deliveryDays === 1 ? "day" : "days"}
                        </span>
                      ) : null}
                      {pkg.revisions !== undefined ? (
                        <span className="inline-flex items-center gap-1.5">
                          <RefreshCcw className="size-3.5 text-primary-600" aria-hidden="true" />
                          {pkg.revisions} {pkg.revisions === 1 ? "revision" : "revisions"}
                        </span>
                      ) : null}
                    </p>
                    {pkg.features && pkg.features.length > 0 ? (
                      <ul className="flex flex-col gap-1.5 border-t border-border/70 pt-3">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-xs text-foreground/90">
                            <Check className="mt-0.5 size-3.5 shrink-0 text-success-600" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {service.providerName || campus ? (
            <section
              aria-label="Provider"
              className="flex flex-col gap-4 rounded-2xl border border-border bg-linear-to-br from-primary-50 to-card p-6"
            >
              <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                About the provider
              </h2>
              {service.providerName ? (
                <div className="flex items-center gap-3">
                  <FreelancerAvatar
                    name={service.providerName}
                    avatar={service.providerAvatar}
                    size="md"
                  />
                  <div className="flex min-w-0 flex-col">
                    <span className="font-semibold text-foreground">{service.providerName}</span>
                    {service.providerSlug ? (
                      <Link
                        href={`/freelancers/${service.providerSlug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:underline"
                      >
                        View profile
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {campus ? (
                <p className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-muted">
                    <Building2 className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    {campus.name} ({campus.shortName})
                    {campus.location ? `, ${campus.location}` : ""}
                  </span>
                </p>
              ) : null}
            </section>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export { ServiceHeader }
