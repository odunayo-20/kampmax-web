import Link from "next/link"
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react"

import { EventDateBadge } from "@/components/events/event-date-badge"
import { CoverImage } from "@/components/shared/cover-image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Event, EventCategory } from "@/types/event"

/** Shown when an event has no banner, or its banner fails to load. */
function EventCoverFallback({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center bg-linear-to-br from-primary-600 to-primary-900 text-white/80",
        className
      )}
    >
      <CalendarDays className="size-10" />
    </div>
  )
}

function EventCard({
  event,
  category,
  campus,
}: {
  event: Event
  category: EventCategory | undefined
  campus?: Campus
}) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card
        className={cn(
          "flex h-full flex-col gap-0 overflow-hidden rounded-2xl py-0 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary-950/10 group-hover:ring-primary/40 group-focus-visible:ring-primary/40",
          event.isPast && "opacity-75"
        )}
      >
        <div className="relative">
          <CoverImage
            src={event.image}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            fallback={<EventCoverFallback className="aspect-video w-full" />}
            className="aspect-video w-full [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-105"
          />
          <EventDateBadge
            date={event.date}
            isPast={event.isPast}
            className="absolute top-3 left-3 w-12 bg-card/95 shadow-md backdrop-blur-sm"
          />
        </div>

        <CardContent className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex flex-wrap items-center gap-1.5">
            {category ? <Badge variant="secondary">{category.name}</Badge> : null}
            {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
            {event.isPast ? (
              <Badge variant="outline" className="text-muted-foreground">
                Past
              </Badge>
            ) : event.seatsLeft === 0 ? (
              <Badge variant="outline" className="text-muted-foreground">
                Sold out
              </Badge>
            ) : event.priceLabel ? (
              <span className="rounded-full bg-accent-500/10 px-2.5 py-0.5 text-xs font-semibold text-accent-700">
                {event.priceLabel}
              </span>
            ) : null}
          </div>

          <h3 className="line-clamp-2 font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary sm:text-lg">
            {event.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {event.startTime ? (
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5 shrink-0" aria-hidden="true" />
                {event.startTime}
                {event.endTime ? ` – ${event.endTime}` : ""}
              </span>
            ) : null}
            {event.location ? (
              <span className="inline-flex min-w-0 items-center gap-1">
                <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                <span className="truncate">{event.location}</span>
              </span>
            ) : null}
          </div>

          <p className="line-clamp-2 text-sm text-muted-foreground">{event.description}</p>

          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3">
            {event.organizerName ? (
              <span className="truncate text-xs text-muted-foreground">
                By {event.organizerName}
              </span>
            ) : (
              <span />
            )}
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
              View
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export { EventCard }
