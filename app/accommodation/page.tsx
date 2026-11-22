import type { Metadata } from "next"

import { AccommodationBrowse } from "@/components/accommodation/accommodation-browse"
import { AccommodationHero } from "@/components/accommodation/accommodation-hero"
import { AgentCta } from "@/components/accommodation/agent-cta"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { parseSearch } from "@/lib/accommodation"
import { pageMetadata } from "@/lib/seo"

const description =
  "Find student accommodation near your campus in Nigeria. Browse hostels, self-contain rooms and apartments from verified agents, with rent and all fees shown up front."

type SearchParams = Promise<Record<string, string | string[] | undefined>>

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams
}): Promise<Metadata> {
  const base = pageMetadata({
    title: "Student Accommodation Near Campus",
    description,
    path: "/accommodation",
  })
  // Search results are endless combinations of the same listings, so only the
  // plain page is for search engines. Links on filtered pages are still followed.
  const filtered = Object.values(parseSearch(await searchParams)).some((v) => v !== undefined)
  return filtered ? { ...base, robots: { index: false, follow: true } } : base
}

export default async function AccommodationPage({ searchParams }: { searchParams: SearchParams }) {
  const search = parseSearch(await searchParams)

  return (
    <>
      <AccommodationHero />

      <Container>
        <div id="browse" className="flex scroll-mt-16 flex-col gap-6 py-10 sm:gap-8 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Browse"
            title="Places available now"
            description="Filter by campus, type, bedrooms and rent. Every listing comes from a verified agent."
          />
          <AccommodationBrowse basePath="/accommodation" search={search} />
        </div>
      </Container>

      <AgentCta />
    </>
  )
}
