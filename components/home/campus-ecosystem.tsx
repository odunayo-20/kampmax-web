import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"

/** Left out when there are no campuses: never show campuses that are not on the platform. */
function CampusEcosystem({ campuses = [] }: { campuses?: Campus[] }) {
  if (campuses.length === 0) return null

  const displayCampuses = campuses.slice(0, 4).map((c) => ({
    name: c.shortName,
    location: c.location ?? c.name,
    slug: c.slug,
  }))

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-5">
        <Eyebrow>Built around your campus</Eyebrow>
        <H2>Organized by campus, not a generic national feed.</H2>
        <Lead>
          What you see on Kampmax reflects what&apos;s actually happening around
          you , find people, products, services, and opportunities close to where
          you study and live.
        </Lead>
        <div>
          <Link
            href="/campuses"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 rounded-lg px-6 text-sm font-semibold"
            )}
          >
            Explore Campuses
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:max-w-sm sm:justify-self-end">
        {displayCampuses.map((place) => (
          <Link
            key={place.name}
            href={`/campuses/${place.slug}`}
            className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-4 py-6 text-center text-sm font-medium text-foreground shadow-xs ring-1 ring-accent-500/15 transition-all hover:border-primary/40 hover:shadow-sm"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
              <MapPin className="size-4" aria-hidden="true" />
            </span>
            <span className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
              {place.name}
            </span>
            <span className="line-clamp-1 text-xs text-muted-foreground">
              {place.location}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export { CampusEcosystem }
