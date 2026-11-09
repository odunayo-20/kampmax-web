import Link from "next/link"
import { Clock, MapPin } from "lucide-react"

import { EventDateBadge } from "@/components/events/event-date-badge"
import { cn } from "@/lib/utils"
import type { Event } from "@/types/event"

/** Where each of up to three cards sits in the stack. */
const placements = [
  "left-0 top-0 z-10 w-[88%] -rotate-[2deg] animate-float",
  "right-0 top-[40%] z-20 w-[88%] rotate-[2deg] animate-float-delayed",
  "bottom-0 left-[4%] z-30 w-[88%] -rotate-1 animate-float",
]

/** The stack is only as tall as the number of cards needs. */
const heights: Record<number, string> = {
  1: "h-36",
  2: "h-72 sm:h-80",
  3: "h-[28rem]",
}

/**
 * A stack of the next events beside the hero text. They are real events:
 * nothing here is made up. Renders nothing when there are none.
 */
function EventsHeroVisual({ events }: { events: Event[] }) {
  const shown = events.slice(0, placements.length)
  if (shown.length === 0) return null

  return (
    <div className={cn("relative mx-auto w-full max-w-md", heights[shown.length])}>
      <div
        aria-hidden="true"
        className="absolute inset-6 -z-10 rounded-full bg-primary-500/30 blur-3xl"
      />
      {shown.map((event, index) => (
        <Link
          key={event.slug}
          href={`/events/${event.slug}`}
          className={cn(
            "absolute block rounded-2xl bg-white p-4 text-neutral-900 shadow-2xl shadow-primary-950/40 ring-1 ring-white/30 transition-transform duration-300 hover:z-40 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400",
            placements[index]
          )}
        >
          <div className="flex items-start gap-3">
            <EventDateBadge date={event.date} className="w-12 shrink-0" />
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="truncate text-[11px] font-semibold uppercase tracking-wider text-primary-600">
                {event.categoryName ?? "Event"}
              </span>
              <p className="truncate text-base font-semibold">{event.title}</p>
              {event.organizerName ? (
                <p className="truncate text-xs text-neutral-500">By {event.organizerName}</p>
              ) : null}
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-neutral-100 pt-3 text-xs text-neutral-500">
            {event.startTime ? (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5 text-primary-600" aria-hidden="true" />
                {event.startTime}
              </span>
            ) : null}
            {event.location ? (
              <span className="inline-flex min-w-0 items-center gap-1.5">
                <MapPin className="size-3.5 shrink-0 text-primary-600" aria-hidden="true" />
                <span className="truncate">{event.location}</span>
              </span>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  )
}

export { EventsHeroVisual }
