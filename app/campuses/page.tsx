import type { Metadata } from "next"

import { orNullDuringBuild } from "@/lib/api"
import { getCampuses } from "@/lib/campuses"
import { CampusGrid } from "@/components/campuses/campus-grid"
import { CampusesExplorer } from "@/components/campuses/campuses-explorer"
import { CampusesJsonLd } from "@/components/campuses/campuses-json-ld"
import { DirectoryHero } from "@/components/campuses/directory-hero"
import { Container } from "@/components/layout/container"
import { ApiUnavailable } from "@/components/shared/api-unavailable"

export const revalidate = 300

const description =
  "Explore the campuses Kampmax supports and discover what's happening around each one."

export const metadata: Metadata = {
  title: "Campuses",
  description,
  alternates: {
    canonical: "/campuses",
  },
  openGraph: {
    title: "Campuses , Kampmax",
    description,
    url: "/campuses",
  },
}

export default async function CampusesPage() {
  const campuses = await orNullDuringBuild(getCampuses)

  return (
    <>
      <DirectoryHero campuses={campuses ?? []} />

      <Container>
        <div id="directory" className="flex scroll-mt-16 flex-col gap-6 sm:gap-10 py-10 sm:py-16 lg:py-20">
          {campuses === null ? (
            <ApiUnavailable subject="campuses" />
          ) : (
            <>
              <CampusesExplorer campuses={campuses} />
              <CampusGrid campuses={campuses} />
            </>
          )}
        </div>
      </Container>

      {campuses ? <CampusesJsonLd campuses={campuses} /> : null}
    </>
  )
}
