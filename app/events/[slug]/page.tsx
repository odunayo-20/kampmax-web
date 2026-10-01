import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCampusBySlug } from "@/app/_data/campuses"
import {
  getEventBySlug,
  getEventCategoryBySlug,
  getEvents,
} from "@/app/_data/events"
import { Container } from "@/components/layout/container"
import { EventHeader } from "@/components/events/event-header"
import { EventJsonLd } from "@/components/events/event-json-ld"

type EventPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getEvents().map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    return {}
  }

  const description = `${event.description} Date: ${event.date} at ${event.location ?? "Campus"}.`

  return {
    title: `${event.title} | Kampmax Events`,
    description,
    alternates: {
      canonical: `/events/${event.slug}`,
    },
    openGraph: {
      title: `${event.title} — Kampmax Events`,
      description,
      url: `/events/${event.slug}`,
    },
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  const category = getEventCategoryBySlug(event.categorySlug)
  const campus = event.campusSlug ? getCampusBySlug(event.campusSlug) : undefined

  return (
    <>
      <Container>
        <EventHeader event={event} category={category} campus={campus} />
      </Container>

      <EventJsonLd event={event} category={category} campus={campus} />
    </>
  )
}
