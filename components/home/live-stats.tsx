import Link from "next/link"
import type { LucideIcon } from "lucide-react"

import { FadeIn } from "@/components/shared/fade-in"

export type LiveStat = {
  label: string
  value: number
  href: string
  icon: LucideIcon
}

/** Fewer real numbers than this and the strip would look empty, so it is hidden. */
const MIN_VISIBLE = 3

/**
 * "Live on Kampmax" counts, taken from the API. Only non-zero counts are
 * shown, and the whole strip is left out when there are too few to look
 * credible. It overlaps the bottom edge of the dark hero.
 */
function LiveStats({ stats }: { stats: LiveStat[] }) {
  const visible = stats.filter((stat) => stat.value > 0)
  if (visible.length < MIN_VISIBLE) return null

  return (
    <FadeIn className="relative z-10 -mt-16 sm:-mt-20 lg:-mt-24">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary-950/15 ring-1 ring-black/5">
        <div className="flex items-center gap-2 border-b border-border/70 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-success-500" />
          </span>
          Live on Kampmax right now
        </div>
        <ul className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-flow-col lg:auto-cols-fr">
          {visible.map((stat) => (
            <li key={stat.label} className="bg-card">
              <Link
                href={stat.href}
                className="group flex h-full items-center gap-4 px-5 py-5 transition-colors hover:bg-primary-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                  <stat.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="font-heading text-2xl font-extrabold leading-none tracking-tight text-foreground">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

export { LiveStats }
