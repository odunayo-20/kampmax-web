import type { Metadata } from "next"

import { orNullDuringBuild } from "@/lib/api"
import { campusesWithItems, getCampuses } from "@/lib/campuses"
import { categoriesOf, getEvents } from "@/lib/events"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { EventsBrowser } from "@/components/events/events-browser"
import { EventsCampusSection } from "@/components/events/events-campus-section"
import { EventsFeatured } from "@/components/events/events-featured"
import { EventsHero } from "@/components/events/events-hero"
import { EventsJsonLd } from "@/components/events/events-json-ld"
import {
  EventsCampusMap,
  canShowEventsMap,
} from "@/components/events/events-map"
import { EventsOrganizerCta } from "@/components/events/events-organizer-cta"
import { EventsValueProps } from "@/components/events/events-value-props"
import { ApiUnavailable } from "@/components/shared/api-unavailable"

export const revalidate = 300

const description =
  "Discover academic symposiums, hackathons, cultural festivals, and student activities across campus communities on Kampmax."

export const metadata: Metadata = {
  title: "Events & Campus Activities",
  description,
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events & Campus Activities | Kampmax",
    description,
    url: "/events",
  },
}

export default async function EventsPage() {
  const listing = await orNullDuringBuild(async () => {
    const campuses = await getCampuses()
    const events = await getEvents(campuses)
    return { campuses, events }
  })

  const featured = listing?.events.filter((event) => event.featured) ?? []

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

      {listing && featured.length > 0 && (
        <div className="border-y border-border bg-primary-50">
          <Section>
            <Container>
              <EventsFeatured
                events={featured}
                categories={categoriesOf(featured)}
                campuses={listing.campuses}
              />
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
              description="Browse upcoming campus activities. Search by keyword or filter by category and campus."
            />
            {listing === null ? (
              <ApiUnavailable subject="events" />
            ) : (
              <>
                {canShowEventsMap(listing.events, listing.campuses) ? (
                  <EventsCampusMap
                    events={listing.events}
                    campuses={listing.campuses}
                  />
                ) : null}
                <EventsBrowser
                  upcomingEvents={listing.events}
                  pastEvents={[]}
                  categories={categoriesOf(listing.events)}
                  campuses={campusesWithItems(listing.campuses, listing.events)}
                />
              </>
            )}
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

      {listing ? <EventsJsonLd events={listing.events} /> : null}
    </>
  )
}
