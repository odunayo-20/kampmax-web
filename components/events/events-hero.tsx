import Link from "next/link"
import { ArrowRight, Compass, MapPin, Ticket } from "lucide-react"

import { EventsHeroVisual } from "@/components/events/events-hero-visual"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"
import type { Event } from "@/types/event"

const points = [
  { icon: MapPin, label: "Organized by campus" },
  { icon: Ticket, label: "Free and ticketed events" },
  { icon: Compass, label: "Browse without an account" },
]

function EventsHero({ events = [] }: { events?: Event[] }) {
  const count = events.length

  return (
    <PageHero
      eyebrow={
        count > 0
          ? `Events · ${count} upcoming ${count === 1 ? "event" : "events"}`
          : "Events & Campus Life"
      }
      title={
        <>
          Find what&apos;s happening{" "}
          <span className="text-gradient-brand">around your campus.</span>
        </>
      }
      description="Discover academic symposiums, student hackathons, cultural festivals, and society workshops across university communities, all in one place."
      actions={
        <>
          <Link href="#browse" className={heroActionClass("primary")}>
            Explore Events
            <ArrowRight />
          </Link>
          <Link href={siteConfig.registerUrl} className={heroActionClass("ghost")}>
            Join Kampmax
          </Link>
        </>
      }
      points={points}
    >
      <EventsHeroVisual events={events} />
    </PageHero>
  )
}

export { EventsHero }
