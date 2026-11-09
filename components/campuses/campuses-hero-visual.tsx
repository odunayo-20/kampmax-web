import Link from "next/link"
import { MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"

/** Where each of up to three cards sits in the stack. */
const placements = [
  "left-0 top-0 z-10 w-[88%] -rotate-[2deg] animate-float",
  "right-0 top-[40%] z-20 w-[88%] rotate-[2deg] animate-float-delayed",
  "bottom-0 left-[4%] z-30 w-[88%] -rotate-1 animate-float",
]

/** The stack is only as tall as the number of cards needs. */
const heights: Record<number, string> = {
  1: "h-32",
  2: "h-[22rem]",
  3: "h-[26rem]",
}

/**
 * A stack of the campuses beside the hero text. They are the real campuses:
 * nothing here is made up. Renders nothing when there are none.
 */
function CampusesHeroVisual({ campuses }: { campuses: Campus[] }) {
  const shown = campuses.slice(0, placements.length)
  if (shown.length === 0) return null

  return (
    <div className={cn("relative mx-auto w-full max-w-md", heights[shown.length])}>
      <div
        aria-hidden="true"
        className="absolute inset-6 -z-10 rounded-full bg-primary-500/30 blur-3xl"
      />
      {shown.map((campus, index) => (
        <Link
          key={campus.slug}
          href={`/campuses/${campus.slug}`}
          className={cn(
            "absolute block rounded-2xl bg-white p-4 text-neutral-900 shadow-2xl shadow-primary-950/40 ring-1 ring-white/30 transition-transform duration-300 hover:z-40 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400",
            placements[index]
          )}
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary-600 to-primary-800 px-1 text-[10px] font-extrabold tracking-tight text-white"
            >
              {campus.shortName.slice(0, 6)}
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <p className="truncate text-base font-semibold">{campus.name}</p>
              {campus.location ? (
                <p className="flex items-center gap-1.5 truncate text-xs text-neutral-500">
                  <MapPin className="size-3.5 shrink-0 text-primary-600" aria-hidden="true" />
                  {campus.location}
                </p>
              ) : null}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export { CampusesHeroVisual }
