import Link from "next/link"

import { EventsHeroComposition } from "@/components/events/events-hero-composition"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function EventsHero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-6">
        <Eyebrow>Events & Campus Life</Eyebrow>
        <Display>Find what&apos;s happening around your campus.</Display>
        <Lead className="max-w-xl">
          Discover academic symposiums, student hackathons, cultural festivals,
          and society workshops happening across university communities.
          Kampmax brings the activities that shape campus life into one unified
          discovery experience.
        </Lead>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#browse"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Explore Events
          </Link>
          <Link
            href={siteConfig.registerUrl}
            className={buttonVariants({ variant: "outline", size: "lg" })}
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
