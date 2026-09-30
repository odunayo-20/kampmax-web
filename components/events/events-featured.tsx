import { useMemo } from "react"

import { EventCard } from "@/components/events/event-card"
import { SectionHeading } from "@/components/layout/section-heading"
import type { Event, EventCategory } from "@/types/event"

function EventsFeatured({
  events,
  categories,
}: {
  events: Event[]
  categories: EventCategory[]
}) {
  const categoryBySlug = useMemo(
    () => new Map(categories.map((c) => [c.slug, c])),
    [categories]
  )

  if (events.length === 0) return null

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        eyebrow="Spotlight"
        title="Key upcoming gatherings"
        description="Featured conferences, university-wide hackathons, and symposiums worth marking on your calendar."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {events.map((event) => (
          <EventCard
            key={event.slug}
            event={event}
            category={categoryBySlug.get(event.categorySlug)}
          />
        ))}
      </div>
    </div>
  )
}

export { EventsFeatured }
