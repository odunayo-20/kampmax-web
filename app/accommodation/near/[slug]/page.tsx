import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { AccommodationBrowse } from "@/components/accommodation/accommodation-browse"
import { AccommodationHero } from "@/components/accommodation/accommodation-hero"
import { AgentCta } from "@/components/accommodation/agent-cta"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { parseSearch } from "@/lib/accommodation"
import { orNullDuringBuild } from "@/lib/api"
import { getCampus, getCampuses } from "@/lib/campuses"
import { pageMetadata } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateStaticParams() {
  const campuses = await orNullDuringBuild(getCampuses)
  return (campuses ?? []).map((campus) => ({ slug: campus.slug }))
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const campus = await getCampus((await params).slug)
  if (!campus) return {}

  const base = pageMetadata({
    title: `Student Accommodation Near ${campus.shortName}`,
    description: `Find hostels, self-contain rooms and apartments near ${campus.name}${
      campus.location ? ` in ${campus.location}` : ""
    }. Verified agents, rent and fees shown up front.`,
    path: `/accommodation/near/${campus.slug}`,
    image: campus.image,
  })
  const filtered = Object.values(parseSearch(await searchParams)).some((v) => v !== undefined)
  return filtered ? { ...base, robots: { index: false, follow: true } } : base
}

export default async function CampusAccommodationPage({ params, searchParams }: Props) {
  const campus = await getCampus((await params).slug)
  if (!campus?.id) notFound()

  return (
    <>
      <AccommodationHero campusName={campus.shortName} />

      <Container>
        <div id="browse" className="flex scroll-mt-16 flex-col gap-6 py-10 sm:gap-8 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow={campus.name}
            title={`Places near ${campus.shortName}`}
            description={`Hostels, rooms and apartments close to ${campus.name}, listed by verified agents.`}
          />
          <AccommodationBrowse
            basePath={`/accommodation/near/${campus.slug}`}
            search={parseSearch(await searchParams)}
            campus={campus}
          />
          <p className="text-sm text-muted-foreground">
            Looking at another campus?{" "}
            <Link href="/accommodation" className="font-medium text-primary hover:underline">
              Browse all accommodation
            </Link>
            .
          </p>
        </div>
      </Container>

      <AgentCta />
    </>
  )
}
