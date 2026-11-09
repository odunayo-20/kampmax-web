import Link from "next/link"
import { BadgeCheck } from "lucide-react"

import { FreelancerAvatar } from "@/components/freelancers/freelancer-avatar"
import { cn } from "@/lib/utils"
import type { Freelancer } from "@/types/freelancer"

/** Where each of up to three cards sits in the stack. */
const placements = [
  "left-0 top-0 z-10 w-[88%] -rotate-[2deg] animate-float",
  "right-0 top-[40%] z-20 w-[88%] rotate-[2deg] animate-float-delayed",
  "bottom-0 left-[4%] z-30 w-[88%] -rotate-1 animate-float",
]

/** The stack is only as tall as the number of cards needs. */
const heights: Record<number, string> = {
  1: "h-36",
  2: "h-[24rem]",
  3: "h-[28rem]",
}

/**
 * A stack of real freelancer profiles beside the hero text. Nothing here is
 * made up. Renders nothing when there are none.
 */
function FreelancersHeroVisual({ freelancers }: { freelancers: Freelancer[] }) {
  const shown = freelancers.slice(0, placements.length)
  if (shown.length === 0) return null

  return (
    <div className={cn("relative mx-auto w-full max-w-md", heights[shown.length])}>
      <div
        aria-hidden="true"
        className="absolute inset-6 -z-10 rounded-full bg-primary-500/30 blur-3xl"
      />
      {shown.map((freelancer, index) => (
        <Link
          key={freelancer.slug}
          href={`/freelancers/${freelancer.slug}`}
          className={cn(
            "absolute block rounded-2xl bg-white p-4 text-neutral-900 shadow-2xl shadow-primary-950/40 ring-1 ring-white/30 transition-transform duration-300 hover:z-40 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400",
            placements[index]
          )}
        >
          <div className="flex items-start gap-3">
            <FreelancerAvatar name={freelancer.name} avatar={freelancer.avatar} size="md" />
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="truncate text-[11px] font-semibold uppercase tracking-wider text-primary-600">
                {freelancer.categoryName}
              </span>
              <p className="flex items-center gap-1.5 text-base font-semibold">
                <span className="truncate">{freelancer.name}</span>
                {freelancer.verified ? (
                  <BadgeCheck className="size-4 shrink-0 text-primary-600" aria-hidden="true" />
                ) : null}
              </p>
              <p className="truncate text-xs text-neutral-500">{freelancer.headline}</p>
            </div>
          </div>
          {freelancer.skills.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-3">
              {freelancer.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : null}
        </Link>
      ))}
    </div>
  )
}

export { FreelancersHeroVisual }
