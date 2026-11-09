import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { EventCard } from "@/components/events/event-card"
import { SectionHeading } from "@/components/layout/section-heading"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { categoryOf } from "@/lib/events"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Event } from "@/types/event"

const MAX_RELATED = 3

/** Other upcoming events, those in the same category first. */
export function pickRelatedEvents(current: Event, all: Event[]): Event[] {
  const others = all.filter((event) => event.slug !== current.slug && !event.isPast)
  const sameCategory = others.filter((e) => e.categorySlug === current.categorySlug)
  const rest = others.filter((e) => e.categorySlug !== current.categorySlug)
  return [...sameCategory, ...rest].slice(0, MAX_RELATED)
}

/** "More events" under an event. Left out when there is nothing else. */
function RelatedEvents({ events, campuses }: { events: Event[]; campuses: Campus[] }) {
  if (events.length === 0) return null

  const campusBySlug = new Map(campuses.map((c) => [c.slug, c]))

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Keep browsing" title="More events" />
        <Link
          href="/events"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 self-start rounded-xl whitespace-nowrap sm:self-auto"
          )}
        >
          View all events
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <FadeIn key={event.slug} delay={index * 0.07} className="h-full">
            <EventCard
              event={event}
              category={categoryOf(event)}
              campus={event.campusSlug ? campusBySlug.get(event.campusSlug) : undefined}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export { RelatedEvents }
