import Link from "next/link"
import { ArrowDown, Compass, MapPin, Store } from "lucide-react"

import { CampusesHeroVisual } from "@/components/campuses/campuses-hero-visual"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"
import type { Campus } from "@/types/campus"

const points = [
  { icon: MapPin, label: "Explore on the map" },
  { icon: Store, label: "Products, jobs and events" },
  { icon: Compass, label: "Browse without an account" },
]

function DirectoryHero({ campuses = [] }: { campuses?: Campus[] }) {
  const count = campuses.length

  return (
    <PageHero
      eyebrow={
        count > 0
          ? `Campus Network · ${count} ${count === 1 ? "campus" : "campuses"}`
          : "Campus Network"
      }
      title={
        <>
          Find Kampmax{" "}
          <span className="text-gradient-brand">at your campus.</span>
        </>
      }
      description="Kampmax is organized around individual campus communities. Explore the campuses below, or pick yours to see what Kampmax looks like there."
      actions={
        <>
          <Link href="#directory" className={heroActionClass("primary")}>
            Browse Campuses
            <ArrowDown />
          </Link>
          <Link href={siteConfig.registerUrl} className={heroActionClass("ghost")}>
            Join Kampmax
          </Link>
        </>
      }
      points={points}
    >
      <CampusesHeroVisual campuses={campuses} />
    </PageHero>
  )
}

export { DirectoryHero }
