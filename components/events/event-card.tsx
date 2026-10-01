import Link from "next/link"
import { ArrowRight, Clock, MapPin } from "lucide-react"

import { getCampusBySlug } from "@/app/_data/campuses"
import { EventDateBadge } from "@/components/events/event-date-badge"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Event, EventCategory } from "@/types/event"

function EventCard({
  event,
  category,
}: {
  event: Event
  category: EventCategory | undefined
}) {
  const campus = event.campusSlug ? getCampusBySlug(event.campusSlug) : undefined

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card
        className={`flex h-full flex-col pt-5 shadow-sm transition-all group-hover:shadow-md group-hover:ring-primary/40 group-focus-visible:ring-primary/40 ${
          event.isPast ? "opacity-75" : ""
        }`}
      >
        <CardContent className="flex flex-1 flex-col gap-3.5">
          <div className="flex items-start gap-3">
            <EventDateBadge
              date={event.date}
              isPast={event.isPast}
              className="w-12 shrink-0 sm:w-14"
            />

            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-1.5">
                {category ? (
                  <Badge variant="secondary">{category.name}</Badge>
                ) : null}
                {campus ? (
                  <Badge variant="outline">{campus.shortName}</Badge>
                ) : null}
                {event.isPast ? (
                  <Badge variant="outline" className="text-muted-foreground">
                    Past
                  </Badge>
                ) : null}
              </div>

              <h3 className="line-clamp-2 font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary sm:text-lg">
                {event.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {event.startTime ? (
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5 shrink-0" aria-hidden="true" />
                {event.startTime}
                {event.endTime ? ` – ${event.endTime}` : ""}
              </span>
            ) : null}
            {event.location ? (
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                <span className="truncate">{event.location}</span>
              </span>
            ) : null}
          </div>

          <p className="line-clamp-2 text-sm text-muted-foreground">
            {event.description}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3">
            {event.organizerName ? (
              <span className="truncate text-xs text-muted-foreground">
                By {event.organizerName}
              </span>
            ) : (
              <span />
            )}
            <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary-600">
              View Event
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-1"
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
