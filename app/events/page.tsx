import type { Metadata } from "next"

import { getEnabledCampuses } from "@/app/_data/campuses"
import {
  getEnabledEventCategories,
  getEvents,
  getFeaturedEvents,
  getPastEvents,
  getUpcomingEvents,
} from "@/app/_data/events"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { EventsBrowser } from "@/components/events/events-browser"
import { EventsCampusSection } from "@/components/events/events-campus-section"
import { EventsFeatured } from "@/components/events/events-featured"
import { EventsHero } from "@/components/events/events-hero"
import { EventsJsonLd } from "@/components/events/events-json-ld"
import { EventsOrganizerCta } from "@/components/events/events-organizer-cta"
import { EventsValueProps } from "@/components/events/events-value-props"

const description =
  "Discover academic symposiums, hackathons, cultural festivals, and student activities across campus communities on Kampmax."

export const metadata: Metadata = {
  title: "Events & Campus Activities",
  description,
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events & Campus Activities — Kampmax",
    description,
    url: "/events",
  },
}

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents()
  const pastEvents = getPastEvents()
  const featured = getFeaturedEvents()
  const categories = getEnabledEventCategories()
  const campuses = getEnabledCampuses()

  return (
    <>
      <div className="relative isolate overflow-hidden border-b border-border bg-linear-to-b from-primary-50 via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] size-128 rounded-full bg-primary-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-[-15%] size-96 rounded-full bg-accent-100/60 blur-3xl"
        />
        <Container className="relative">
          <EventsHero />
        </Container>
      </div>

      {featured.length > 0 && (
        <div className="border-y border-border bg-primary-50">
          <Section>
            <Container>
              <EventsFeatured events={featured} categories={categories} />
            </Container>
          </Section>
        </div>
      )}

      <Section id="browse" className="scroll-mt-16">
        <Container>
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Directory"
              title="Explore campus events & activities"
              description="Browse upcoming and past campus activities. Search by keyword or filter by category and campus."
            />
            <EventsBrowser
              upcomingEvents={upcomingEvents}
              pastEvents={pastEvents}
              categories={categories}
              campuses={campuses}
            />
          </div>
        </Container>
      </Section>

      <div className="border-y border-border bg-neutral-50">
        <Section>
          <Container>
            <EventsValueProps />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <EventsCampusSection />
        </Container>
      </Section>

      <div className="border-y border-border bg-primary-50">
        <Section>
          <Container>
            <EventsOrganizerCta />
          </Container>
        </Section>
      </div>

      <EventsJsonLd events={getEvents()} />
    </>
  )
}
