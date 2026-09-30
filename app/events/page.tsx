import type { Metadata } from "next"

import { getEnabledCampuses } from "@/app/_data/campuses"
import {
  getEnabledEventCategories,
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
import { EventsOrganizerCta } from "@/components/events/events-organizer-cta"
import { EventsValueProps } from "@/components/events/events-value-props"

export const metadata: Metadata = {
  title: "Events & Campus Activities",
  description:
    "Discover academic symposiums, hackathons, cultural festivals, and student activities across campus communities on Kampmax.",
}

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents()
  const pastEvents = getPastEvents()
  const featured = getFeaturedEvents()
  const categories = getEnabledEventCategories()
  const campuses = getEnabledCampuses()

  return (
    <>
      <Container>
        <EventsHero />
      </Container>

      {featured.length > 0 && (
        <div className="bg-muted/30">
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

      <div className="bg-muted/30">
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

      <div className="bg-muted/30">
        <Section>
          <Container>
            <EventsOrganizerCta />
          </Container>
        </Section>
      </div>
    </>
  )
}
