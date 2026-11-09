import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Info,
  MapPin,
  QrCode,
  Ticket,
  Armchair,
  Building2,
  type LucideIcon,
} from "lucide-react"

import { EventCoverFallback } from "@/components/events/event-card"
import { EventDateBadge } from "@/components/events/event-date-badge"
import { CoverImage } from "@/components/shared/cover-image"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { formatEventDate } from "@/lib/format-event-date"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Event, EventCategory } from "@/types/event"

/** What the attendee does next, all inside the Kampmax app. */
const nextSteps = [
  { icon: Ticket, label: "Get your ticket or pass" },
  { icon: QrCode, label: "Check in at the venue" },
  { icon: CalendarDays, label: "Get schedule updates" },
]

function Fact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-xs">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-semibold text-foreground">{value}</span>
      </span>
    </li>
  )
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className="font-heading text-lg font-bold text-foreground">{children}</h2>
}

function EventHeader({
  event,
  category,
  campus,
}: {
  event: Event
  category: EventCategory | undefined
  campus: Campus | undefined
}) {
  const time = event.startTime
    ? `${event.startTime}${event.endTime ? ` – ${event.endTime}` : ""}`
    : undefined

  const facts = [
    { icon: CalendarDays, label: "Date", value: formatEventDate(event.date) },
    time ? { icon: Clock, label: "Time", value: time } : null,
    event.location ? { icon: MapPin, label: "Venue", value: event.location } : null,
    campus
      ? { icon: Building2, label: "Campus", value: `${campus.name} (${campus.shortName})` }
      : null,
  ].filter((fact): fact is NonNullable<typeof fact> => fact !== null)

  const soldOut = !event.isPast && event.seatsLeft === 0

  return (
    <div className="py-8 sm:py-12 lg:py-14">
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
      >
        <Link
          href="/events"
          className="rounded-sm font-medium transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Events
        </Link>
        {category ? (
          <>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span>{category.name}</span>
          </>
        ) : null}
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="truncate font-medium text-foreground" aria-current="page">
          {event.title}
        </span>
      </nav>

      <div className="grid items-start gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="relative">
            <CoverImage
              src={event.image}
              alt={event.title}
              priority
              sizes="(min-width: 1024px) 700px, 100vw"
              fallback={<EventCoverFallback className="aspect-video w-full rounded-2xl shadow-lg" />}
              className="aspect-video w-full rounded-2xl shadow-lg ring-1 shadow-primary-950/10 ring-black/5"
            />
            <EventDateBadge
              date={event.date}
              isPast={event.isPast}
              className="absolute top-4 left-4 w-14 bg-card/95 shadow-md backdrop-blur-sm"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {category ? <Badge variant="secondary">{category.name}</Badge> : null}
              {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
              {event.isPast ? (
                <Badge variant="outline" className="text-muted-foreground">
                  Past event
                </Badge>
              ) : soldOut ? (
                <Badge variant="outline" className="text-muted-foreground">
                  Sold out
                </Badge>
              ) : event.priceLabel ? (
                <span className="rounded-full bg-accent-500/10 px-2.5 py-0.5 text-xs font-semibold text-accent-700">
                  {event.priceLabel}
                </span>
              ) : null}
            </div>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl">
              {event.title}
            </h1>

            {event.organizerName ? (
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary-600 to-primary-800 text-sm font-bold text-white"
                >
                  {event.organizerName.charAt(0).toUpperCase()}
                </span>
                <span>
                  Organized by{" "}
                  <span className="font-semibold text-foreground">{event.organizerName}</span>
                  {event.organizerType ? ` · ${event.organizerType}` : ""}
                </span>
              </div>
            ) : null}
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => (
              <Fact key={fact.label} {...fact} />
            ))}
          </ul>

          <section className="flex flex-col gap-3">
            <SectionTitle>About this event</SectionTitle>
            <p className="text-base leading-relaxed whitespace-pre-line text-muted-foreground">
              {event.description}
            </p>
          </section>

          {event.highlights && event.highlights.length > 0 ? (
            <section className="flex flex-col gap-3">
              <SectionTitle>What to expect</SectionTitle>
              <ul className="flex flex-col gap-2.5">
                {event.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-700">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {event.importantInfo ? (
            <section className="flex flex-col gap-2 rounded-2xl border border-accent-500/30 bg-accent-50 p-5">
              <h2 className="flex items-center gap-2 font-heading text-sm font-semibold text-accent-700">
                <Info className="size-4 text-accent-600" aria-hidden="true" />
                Important information
              </h2>
              <p className="text-sm leading-relaxed text-accent-700/90">{event.importantInfo}</p>
            </section>
          ) : null}
        </div>

        {/* Stays in view while the details scroll on large screens. */}
        <aside className="flex flex-col gap-4 lg:sticky lg:top-24">
          <div id="action-card" className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-1">
              <p className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
                {event.priceLabel ?? "Join the event"}
              </p>
              <p className="text-sm text-muted-foreground">
                {formatEventDate(event.date)}
                {time ? ` · ${time}` : ""}
              </p>
              {event.seatsLeft !== undefined && !event.isPast ? (
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <Armchair className="size-4 text-primary-600" aria-hidden="true" />
                  {event.seatsLeft > 0
                    ? `${event.seatsLeft} ${event.seatsLeft === 1 ? "seat" : "seats"} left`
                    : "Sold out"}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 border-t border-border/70 pt-4">
              <Link
                href={siteConfig.registerUrl}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-13 w-full rounded-xl bg-linear-to-r from-primary-600 to-primary-800 text-base font-bold shadow-lg shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                )}
              >
                {event.isPast ? "View on Kampmax" : "Join event on Kampmax"}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <ul className="flex flex-col gap-2">
                {nextSteps.map((step) => (
                  <li
                    key={step.label}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <step.icon className="size-4 shrink-0 text-primary-600" aria-hidden="true" />
                    {step.label}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">
                Registration, check-in and schedule updates all happen inside the Kampmax app.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export { EventHeader }
