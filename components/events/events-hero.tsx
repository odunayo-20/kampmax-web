import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { EventsHeroComposition } from "@/components/events/events-hero-composition"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function EventsHero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-7">
        <Eyebrow>Events & Campus Life</Eyebrow>
        <Display className="xl:text-7xl">
          Find what&apos;s happening around your campus.
        </Display>
        <Lead className="max-w-xl sm:text-xl/relaxed">
          Discover academic symposiums, student hackathons, cultural festivals,
          and society workshops happening across university communities.
          Kampmax brings the activities that shape campus life into one unified
          discovery experience.
        </Lead>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="#browse"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-12 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary-600/25"
            )}
          >
            Explore Events
            <ArrowRight />
          </Link>
          <Link
            href={siteConfig.registerUrl}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-xl px-8 text-base font-semibold"
            )}
          >
            Join Kampmax
          </Link>
        </div>
      </div>

      <FadeIn>
        <EventsHeroComposition />
      </FadeIn>
    </div>
  )
}

export { EventsHero }
