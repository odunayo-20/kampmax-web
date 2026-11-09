import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { ServiceCard } from "@/components/services/service-card"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { categoryOf } from "@/lib/services"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Service } from "@/types/service"

const MAX_RELATED = 3

/** Other services, those in the same category first. */
export function pickRelatedServices(current: Service, all: Service[]): Service[] {
  const others = all.filter((service) => service.slug !== current.slug)
  const sameCategory = others.filter((s) => s.categorySlug === current.categorySlug)
  const rest = others.filter((s) => s.categorySlug !== current.categorySlug)
  return [...sameCategory, ...rest].slice(0, MAX_RELATED)
}

/** "More services" under a service. Left out when there is nothing else. */
function RelatedServices({
  services,
  campuses,
}: {
  services: Service[]
  campuses: Campus[]
}) {
  if (services.length === 0) return null

  const campusBySlug = new Map(campuses.map((c) => [c.slug, c]))

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Keep browsing" title="More services" />
        <Link
          href="/services"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 self-start rounded-xl whitespace-nowrap sm:self-auto"
          )}
        >
          View all services
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  )
}

export { RelatedServices }
