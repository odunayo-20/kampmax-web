import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

import { EventDateBadge } from "@/components/events/event-date-badge"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import type { Event } from "@/types/event"

function EventsCommunity({ event }: { event?: Event }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-4">
        <Eyebrow>Events &amp; community</Eyebrow>
        <H2>Discover what&apos;s happening on campus.</H2>
        <Lead>
          From campus fairs to student meetups and career workshops, Kampmax
          surfaces the events and activities worth showing up for, organized by
          the people running them.
        </Lead>
        <div>
          <Link
            href="/events"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-11 rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
            )}
          >
            Browse Events
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {event ? (
        <Link
          href={`/events/${event.slug}`}
          className="group block rounded-2xl border border-border bg-card p-6 shadow-sm ring-1 ring-accent-500/15 transition-all hover:border-primary/40 hover:shadow-md"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <EventDateBadge date={event.date} isPast={event.isPast} />
              <Badge variant="secondary">Featured Event</Badge>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {event.title}
              </h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {event.description}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
              {event.location ? (
                <span className="flex items-center gap-1 truncate">
                  <MapPin className="size-3.5 shrink-0 text-primary-600" />
                  {event.location}
                </span>
              ) : (
                <span />
              )}
              <span className="inline-flex items-center gap-1 font-medium text-primary-600 transition-transform group-hover:translate-x-0.5">
                View Event
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Link>
      ) : (
        <div
          aria-hidden="true"
          className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-border bg-primary-50/50 text-primary-400 lg:h-64"
        >
          <Calendar className="size-10" />
        </div>
      )}
    </div>
  )
}

export { EventsCommunity }
