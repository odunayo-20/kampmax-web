import type { Metadata } from "next"

import { getEnabledCampuses } from "@/app/_data/campuses"
import { CampusGrid } from "@/components/campuses/campus-grid"
import { DirectoryHero } from "@/components/campuses/directory-hero"
import { Container } from "@/components/layout/container"

export const metadata: Metadata = {
  title: "Campuses",
  description:
    "Explore the campuses Kampmax supports and discover what's happening around each one.",
}

export default function CampusesPage() {
  const campuses = getEnabledCampuses()

  return (
    <Container>
      <DirectoryHero />
      <div className="pb-16 sm:pb-20 lg:pb-24">
        <CampusGrid campuses={campuses} />
      </div>
    </Container>
  )
}
