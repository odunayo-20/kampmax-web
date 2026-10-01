import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCampusBySlug, getEnabledCampuses } from "@/app/_data/campuses"
import { CampusCta } from "@/components/campuses/campus-cta"
import { CampusDiscover } from "@/components/campuses/campus-discover"
import { CampusHeader } from "@/components/campuses/campus-header"
import { CampusJsonLd } from "@/components/campuses/campus-json-ld"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export function generateStaticParams() {
  return getEnabledCampuses().map((campus) => ({ slug: campus.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/campuses/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const campus = getCampusBySlug(slug)

  if (!campus) {
    return {}
  }

  const description = `Discover what's happening around ${campus.name} on Kampmax — marketplace, services, jobs, and events for the ${campus.shortName} community.`

  return {
    title: `${campus.shortName} Campus`,
    description,
    alternates: {
      canonical: `/campuses/${campus.slug}`,
    },
    openGraph: {
      title: `${campus.shortName} Campus — Kampmax`,
      description,
      url: `/campuses/${campus.slug}`,
    },
  }
}

export default async function CampusPage({
  params,
}: PageProps<"/campuses/[slug]">) {
  const { slug } = await params
  const campus = getCampusBySlug(slug)

  if (!campus) {
    notFound()
  }

  return (
    <>
      <Container>
        <CampusHeader campus={campus} />
      </Container>

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
