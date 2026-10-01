import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Info,
  MapPin,
} from "lucide-react"

import { EventDateBadge } from "@/components/events/event-date-badge"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { H1, Lead, Muted } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Event, EventCategory } from "@/types/event"

function EventHeader({
  event,
  category,
  campus,
}: {
  event: Event
  category: EventCategory | undefined
  campus: Campus | undefined
}) {
  return (
    <div className="flex flex-col gap-8 py-16 sm:py-20 lg:py-24">
      <Link
        href="/events"
        className="inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        All Events
      </Link>

      <div className="flex flex-col gap-5 border-b border-border/60 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {category ? <Badge variant="secondary">{category.name}</Badge> : null}
          {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
          {event.isPast ? (
            <Badge variant="outline" className="text-muted-foreground">
              Past Event
            </Badge>
          ) : null}
        </div>

        <H1 className="text-2xl sm:text-3xl lg:text-4xl">{event.title}</H1>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <Calendar className="size-4 text-primary" aria-hidden="true" />
            {event.date}
          </span>
          {event.startTime ? (
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 text-muted-foreground" aria-hidden="true" />
              {event.startTime}
              {event.endTime ? ` – ${event.endTime}` : ""}
            </span>
          ) : null}
          {event.location ? (
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 text-muted-foreground" aria-hidden="true" />
              {event.location}
            </span>
          ) : null}
        </div>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <ImagePlaceholder className="aspect-video w-full rounded-2xl" />

          <section className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              About This Event
            </h2>
            <Lead className="text-base text-foreground/90">
              {event.description}
            </Lead>
          </section>

          {event.highlights && event.highlights.length > 0 && (
            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                What to Expect
              </h2>
              <ul className="flex flex-col gap-2.5">
                {event.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {event.importantInfo ? (
            <section className="flex flex-col gap-2 rounded-xl border border-accent-500/30 bg-accent-50 p-5">
              <h3 className="flex items-center gap-2 font-heading text-sm font-semibold text-accent-700">
                <Info className="size-4 text-accent-600" aria-hidden="true" />
                Important Information
              </h3>
              <p className="text-xs leading-relaxed text-accent-700/90">
                {event.importantInfo}
              </p>
            </section>
          ) : null}
        </div>

        <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-xs">
          <div className="flex items-center gap-3">
            <EventDateBadge
              date={event.date}
              isPast={event.isPast}
              className="w-14"
            />
            <div className="flex flex-col">
              <h2 className="font-heading text-base font-semibold text-foreground">
                Event Schedule
              </h2>
              <p className="text-xs text-muted-foreground">
                {event.isPast ? "Historical record" : "Upcoming gathering"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-y border-border/60 py-4 text-xs">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium text-foreground">{event.date}</span>
            </div>
            {event.startTime ? (
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">Time</span>
                <span className="font-medium text-foreground">
                  {event.startTime}
                  {event.endTime ? ` – ${event.endTime}` : ""}
                </span>
              </div>
            ) : null}
            {event.location ? (
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">Venue</span>
                <span className="font-medium text-foreground text-right">
                  {event.location}
                </span>
              </div>
            ) : null}
            {campus ? (
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">Campus</span>
                <span className="font-medium text-foreground text-right">
                  {campus.name} ({campus.shortName})
                </span>
              </div>
            ) : null}
            {event.organizerName ? (
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">Organizer</span>
                <div className="flex flex-col items-end">
                  <span className="font-medium text-foreground text-right">
                    {event.organizerName}
                  </span>
                  {event.organizerType ? (
                    <span className="text-2xs text-muted-foreground">
                      {event.organizerType}
                    </span>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <Link
              href={siteConfig.registerUrl}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-11 w-full rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
              )}
            >
              {event.isPast ? "View on Kampmax" : "Join Event on Kampmax"}
            </Link>
            <Muted className="text-2xs text-center text-muted-foreground">
              Event registration passes, check-ins, and schedule updates occur
              inside the Kampmax app.
            </Muted>
          </div>
        </div>
      </div>
    </div>
  )
}

export { EventHeader }
