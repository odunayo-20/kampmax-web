import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { FreelancerCard } from "@/components/freelancers/freelancer-card"
import { SectionHeading } from "@/components/layout/section-heading"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Freelancer } from "@/types/freelancer"

const MAX_RELATED = 3

/** Other freelancers, those in the same main category first. */
export function pickRelatedFreelancers(current: Freelancer, all: Freelancer[]): Freelancer[] {
  const others = all.filter((f) => f.slug !== current.slug)
  const sameCategory = others.filter((f) => f.categorySlug === current.categorySlug)
  const rest = others.filter((f) => f.categorySlug !== current.categorySlug)
  return [...sameCategory, ...rest].slice(0, MAX_RELATED)
}

/** "More freelancers" under a profile. Left out when there is nobody else. */
function RelatedFreelancers({
  freelancers,
  campuses,
}: {
  freelancers: Freelancer[]
  campuses: Campus[]
}) {
  if (freelancers.length === 0) return null

  const campusBySlug = new Map(campuses.map((c) => [c.slug, c]))

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Keep browsing" title="More freelancers" />
        <Link
          href="/freelancers"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 self-start rounded-xl whitespace-nowrap sm:self-auto"
          )}
        >
          View all freelancers
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {freelancers.map((freelancer, index) => (
          <FadeIn key={freelancer.slug} delay={index * 0.07} className="h-full">
            <FreelancerCard
              freelancer={freelancer}
              campus={freelancer.campusSlug ? campusBySlug.get(freelancer.campusSlug) : undefined}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export { RelatedFreelancers }
