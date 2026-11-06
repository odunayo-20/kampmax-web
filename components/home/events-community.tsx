import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"

import { EventDateBadge } from "@/components/events/event-date-badge"
import { CoverImage } from "@/components/shared/cover-image"
import { FadeIn } from "@/components/shared/fade-in"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import type { Event } from "@/types/event"

function EventsCommunity({ event }: { event?: Event }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-5">
        <Eyebrow>Events &amp; community</Eyebrow>
        <H2 className="sm:text-4xl">Discover what&apos;s happening on campus.</H2>
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
              "h-12 rounded-xl px-7 text-sm font-semibold shadow-md shadow-primary-600/25 transition-all hover:-translate-y-0.5"
            )}
          >
            Browse Events
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {event ? (
        <FadeIn>
          <Link
            href={`/events/${event.slug}`}
            className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-primary-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary-950/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <div className="relative">
              <CoverImage
                src={event.image}
                alt={event.title}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="aspect-video w-full rounded-none transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-950/55 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <Badge className="bg-white/95 text-primary-800 shadow-sm backdrop-blur">
                  Featured event
                </Badge>
                {event.priceLabel ? (
                  <Badge className="bg-accent-500 text-primary-950 shadow-sm">
                    {event.priceLabel}
                  </Badge>
                ) : null}
              </div>
            </div>

            <div className="flex items-start gap-4 p-6">
              <EventDateBadge date={event.date} isPast={event.isPast} className="w-14" />
              <div className="flex min-w-0 flex-col gap-2">
                <h3 className="font-heading text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {event.title}
                </h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {event.description}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                  {event.startTime ? (
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5 text-primary-600" aria-hidden="true" />
                      {event.startTime}
                    </span>
                  ) : null}
                  {event.location ? (
                    <span className="flex min-w-0 items-center gap-1.5">
                      <MapPin className="size-3.5 shrink-0 text-primary-600" aria-hidden="true" />
                      <span className="truncate">{event.location}</span>
                    </span>
                  ) : null}
                  <span className="ml-auto inline-flex items-center gap-1 font-semibold text-primary-600 transition-transform group-hover:translate-x-0.5">
                    View event
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>
      ) : (
        <div
          aria-hidden="true"
          className="flex h-48 items-center justify-center rounded-3xl border border-dashed border-border bg-primary-50/50 text-primary-400 lg:h-64"
        >
          <Calendar className="size-10" />
        </div>
      )}
    </div>
  )
}

export { EventsCommunity }
