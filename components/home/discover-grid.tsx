import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { discoveryItems } from "@/app/_data/homepage"
import { SectionHeading } from "@/components/layout/section-heading"
import { FadeIn } from "@/components/shared/fade-in"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/** How many of each thing is live, keyed by the tile's link (`/jobs` and so on). */
type DiscoverCounts = Partial<Record<string, number>>

type Tone = { icon: string; glow: string }

/** Per-tile colour accents; the marketplace tile is the dark feature tile. */
const tones: Record<string, Tone> = {
  "/services": { icon: "bg-info-100 text-info-700", glow: "from-info-100" },
  "/jobs": { icon: "bg-primary-100 text-primary-700", glow: "from-primary-100" },
  "/freelancers": { icon: "bg-accent-100 text-accent-700", glow: "from-accent-100" },
  "/events": { icon: "bg-success-100 text-success-700", glow: "from-success-100" },
  "/campuses": { icon: "bg-primary-100 text-primary-700", glow: "from-accent-100" },
}

/** Grid placement for the bento layout (large screens; two columns on tablets). */
const spans: Record<string, string> = {
  "/marketplace": "sm:col-span-2 lg:row-span-2",
  "/freelancers": "lg:col-span-2",
  "/events": "lg:col-span-2",
  "/campuses": "sm:col-span-2 lg:col-span-2",
}

const countLabels: Record<string, (n: number) => string> = {
  "/marketplace": (n) => `${n} ${n === 1 ? "listing" : "listings"}`,
  "/services": (n) => `${n} ${n === 1 ? "service" : "services"}`,
  "/jobs": (n) => `${n} open ${n === 1 ? "role" : "roles"}`,
  "/freelancers": (n) => `${n} ${n === 1 ? "freelancer" : "freelancers"}`,
  "/events": (n) => `${n} upcoming ${n === 1 ? "event" : "events"}`,
  "/campuses": (n) => `${n} ${n === 1 ? "campus" : "campuses"}`,
}

function DiscoverGrid({ counts = {} }: { counts?: DiscoverCounts }) {
  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="Discover"
        title="Find what you need"
        description="Kampmax organizes everything happening around your campus into a few clear places to look."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(11rem,auto)] lg:grid-cols-4">
        {discoveryItems.map((item, index) => {
          const isFeature = item.href === "/marketplace"
          const tone = tones[item.href]
          const count = counts[item.href]
          const countLabel = count ? countLabels[item.href]?.(count) : undefined

          return (
            <FadeIn
              key={item.href}
              delay={index * 0.06}
              className={cn("flex", spans[item.href])}
            >
              <Link
                href={item.href}
                className={cn(
                  "group relative isolate flex w-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  isFeature
                    ? "border-primary-800 bg-linear-to-br from-primary-700 via-primary-800 to-primary-950 p-8 text-white shadow-xl shadow-primary-950/20 hover:shadow-2xl hover:shadow-primary-950/30"
                    : "border-border bg-card shadow-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary-950/10"
                )}
              >
                {/* Decorative glow */}
                {isFeature ? (
                  <>
                    <div
                      aria-hidden="true"
                      className="absolute -right-16 -top-16 -z-10 size-64 rounded-full bg-primary-400/30 blur-3xl transition-transform duration-500 group-hover:scale-125"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-20 -left-10 -z-10 size-56 rounded-full bg-accent-500/20 blur-3xl"
                    />
                    <div
                      aria-hidden="true"
                      className="bg-grid-pattern absolute inset-0 -z-10 opacity-60"
                    />
                  </>
                ) : (
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute -right-12 -top-12 -z-10 size-44 rounded-full bg-linear-to-br to-transparent opacity-80 blur-2xl transition-transform duration-500 group-hover:scale-125",
                      tone?.glow
                    )}
                  />
                )}

                <div className="flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      "flex items-center justify-center rounded-xl",
                      isFeature
                        ? "size-14 bg-white/15 text-white ring-1 ring-white/20"
                        : cn("size-11", tone?.icon)
                    )}
                  >
                    <item.icon
                      className={isFeature ? "size-7" : "size-5"}
                      aria-hidden="true"
                    />
                  </span>
                  <div className="flex items-center gap-2">
                    {item.badge ? (
                      <Badge
                        variant={isFeature ? "default" : "accent"}
                        className={isFeature ? "bg-accent-500 text-primary-950" : undefined}
                      >
                        {item.badge}
                      </Badge>
                    ) : null}
                    {countLabel ? (
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                          isFeature
                            ? "bg-white/15 text-white"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {countLabel}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={cn(
                      "flex items-center gap-2 font-heading font-bold tracking-tight",
                      isFeature ? "text-3xl sm:text-4xl" : "text-lg text-foreground"
                    )}
                  >
                    {item.title}
                    <ArrowUpRight
                      className={cn(
                        "shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                        isFeature ? "size-6 text-accent-400" : "size-4 text-primary-600"
                      )}
                      aria-hidden="true"
                    />
                  </h3>
                  <p
                    className={cn(
                      "text-sm leading-relaxed",
                      isFeature
                        ? "max-w-sm text-base text-primary-100/80"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.description}
                  </p>
                  {isFeature ? (
                    <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors group-hover:bg-white/20">
                      Browse the marketplace
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  ) : null}
                </div>
              </Link>
            </FadeIn>
          )
        })}
      </div>
    </div>
  )
}

export { DiscoverGrid }
