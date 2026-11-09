import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { orNullDuringBuild } from "@/lib/api"
import { getCampus, getCampuses } from "@/lib/campuses"
import { getCampusPlaces } from "@/lib/places"
import { CampusPlacesList } from "@/components/campuses/campus-places-list"
import { CampusCta } from "@/components/campuses/campus-cta"
import { CampusDiscover } from "@/components/campuses/campus-discover"
import { CampusHeader } from "@/components/campuses/campus-header"
import { CampusJsonLd } from "@/components/campuses/campus-json-ld"
import {
  CampusLocationMap,
  canShowCampusMap,
} from "@/components/campuses/campus-map"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export const revalidate = 300

export async function generateStaticParams() {
  const campuses = await orNullDuringBuild(getCampuses)
  return (campuses ?? []).map((campus) => ({ slug: campus.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/campuses/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const campus = await getCampus(slug)

  if (!campus) {
    return {}
  }

  const description = `Discover what's happening around ${campus.name} on Kampmax , marketplace, services, jobs, and events for the ${campus.shortName} community.`

  return {
    title: `${campus.shortName} Campus | Kampmax`,
    description,
    alternates: {
      canonical: `/campuses/${campus.slug}`,
    },
    openGraph: {
      title: `${campus.shortName} Campus , Kampmax`,
      description,
      url: `/campuses/${campus.slug}`,
      ...(campus.image ? { images: [campus.image] } : {}),
    },
  }
}

export default async function CampusPage({
  params,
}: PageProps<"/campuses/[slug]">) {
  const { slug } = await params
  const campus = await getCampus(slug)

  if (!campus) {
    notFound()
  }

  // Campuses saved before places existed have no id on the type; none, no places.
  const places = campus.id ? await getCampusPlaces(campus.id) : []

  return (
    <>
      <CampusHeader campus={campus} />

      {canShowCampusMap(campus, places) ? (
        <Container className="pt-12 pb-16 sm:pt-16 sm:pb-20">
          <CampusLocationMap campus={campus} places={places} />
        </Container>
      ) : null}

      {places.length > 0 ? (
        <Container className="pb-16 sm:pb-20">
          <CampusPlacesList campus={campus} places={places} />
        </Container>
      ) : null}

      <div className="border-y border-border bg-primary-50">
        <Section id="discover" className="scroll-mt-16">
          <Container>
            <CampusDiscover campus={campus} />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <CampusCta campus={campus} />
        </Container>
      </Section>

      <CampusJsonLd campus={campus} />
    </>
  )
}
