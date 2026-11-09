import Link from "next/link"
import { ArrowRight, Compass, GraduationCap, MapPin } from "lucide-react"

import { JobsHeroVisual } from "@/components/jobs/jobs-hero-visual"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"
import type { Opportunity } from "@/types/job"

const points = [
  { icon: MapPin, label: "Organized by campus" },
  { icon: GraduationCap, label: "Internships to full-time roles" },
  { icon: Compass, label: "Browse without an account" },
]

function JobsHero({ opportunities = [] }: { opportunities?: Opportunity[] }) {
  const count = opportunities.length

  return (
    <PageHero
      eyebrow={
        count > 0
          ? `Jobs · ${count} open ${count === 1 ? "role" : "roles"}`
          : "Jobs & Opportunities"
      }
      title={
        <>
          Find opportunities that{" "}
          <span className="text-gradient-brand">move you forward.</span>
        </>
      }
      description="Discover internships, campus positions, freelance projects, and graduate roles connected to real communities. Kampmax organizes opportunities alongside the skills, services, and campus life already active around you."
      actions={
        <>
          <Link href="#browse" className={heroActionClass("primary")}>
            Explore Opportunities
            <ArrowRight />
          </Link>
          <Link href={siteConfig.registerUrl} className={heroActionClass("ghost")}>
            Join Kampmax
          </Link>
        </>
      }
      points={points}
    >
      <JobsHeroVisual opportunities={opportunities} />
    </PageHero>
  )
}

export { JobsHero }
