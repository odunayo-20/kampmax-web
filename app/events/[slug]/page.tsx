import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"

import { orNullDuringBuild } from "@/lib/api"
import { getCampuses } from "@/lib/campuses"
import { categoryOf, getEvent, getEvents } from "@/lib/events"
import { formatEventDate } from "@/lib/format-event-date"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { RelatedEvents, pickRelatedEvents } from "@/components/events/related-events"
import { EventHeader } from "@/components/events/event-header"
import { EventJsonLd } from "@/components/events/event-json-ld"
import {
  EventLocationMap,
  canShowEventMap,
} from "@/components/events/events-map"

export const revalidate = 300

type EventPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const events = await orNullDuringBuild(async () =>
    getEvents(await getCampuses())
  )
  return (events ?? []).map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = await getEvent(slug, await getCampuses())

  if (!event) {
    return {}
  }

  const description = `${event.description} Date: ${formatEventDate(event.date)} at ${event.location ?? "Campus"}.`

  return {
    title: `${event.title} | Kampmax Events`,
    description,
    alternates: {
      canonical: `/events/${event.slug}`,
    },
    openGraph: {
      title: `${event.title} | Kampmax Events`,
      description,
      url: `/events/${event.slug}`,
      ...(event.image ? { images: [event.image] } : {}),
    },
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const campuses = await getCampuses()
  const event = await getEvent(slug, campuses)

  if (!event) {
    notFound()
  }

  // The API id is what identifies the event; a bare id or an outdated title
  // goes to the current address.
  if (slug !== event.slug) {
    permanentRedirect(`/events/${event.slug}`)
  }

  const category = categoryOf(event)
  const campus = event.campusSlug
    ? campuses.find((candidate) => candidate.slug === event.campusSlug)
    : undefined

  const related = pickRelatedEvents(event, await getEvents(campuses))

  return (
    <>
      <div className="bg-linear-to-b from-primary-50/80 via-background to-background">
        <Container>
          <EventHeader event={event} category={category} campus={campus} />
        </Container>
      </div>

      {campus && canShowEventMap(campus) ? (
        <Container className="pb-12 sm:pb-16">
          <EventLocationMap event={event} campus={campus} />
        </Container>
      ) : null}

      {related.length > 0 ? (
        <Section className="border-t border-border/60">
          <Container>
            <RelatedEvents events={related} campuses={campuses} />
          </Container>
        </Section>
      ) : null}

      <EventJsonLd event={event} category={category} campus={campus} />
    </>
  )
}
