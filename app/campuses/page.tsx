import type { Metadata } from "next"

import { getEnabledCampuses } from "@/app/_data/campuses"
import { CampusGrid } from "@/components/campuses/campus-grid"
import { CampusesJsonLd } from "@/components/campuses/campuses-json-ld"
import { DirectoryHero } from "@/components/campuses/directory-hero"
import { Container } from "@/components/layout/container"

const description =
  "Explore the campuses Kampmax supports and discover what's happening around each one."

export const metadata: Metadata = {
  title: "Campuses",
  description,
  alternates: {
    canonical: "/campuses",
  },
  openGraph: {
    title: "Campuses — Kampmax",
    description,
    url: "/campuses",
  },
}

export default function CampusesPage() {
  const campuses = getEnabledCampuses()

  return (
    <>
      <div className="relative isolate overflow-hidden border-b border-border bg-linear-to-b from-primary-50 via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-[-10%] size-96 rounded-full bg-primary-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-[-10%] size-80 rounded-full bg-accent-100/60 blur-3xl"
        />
        <Container className="relative">
          <DirectoryHero />
        </Container>
      </div>

      <Container>
        <div id="directory" className="scroll-mt-16 py-16 sm:py-20 lg:py-24">
          <CampusGrid campuses={campuses} />
        </div>
      </Container>

      <CampusesJsonLd campuses={campuses} />
    </>
  )
}
