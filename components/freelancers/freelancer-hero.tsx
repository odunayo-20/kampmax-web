import Link from "next/link"
import { ArrowRight, BadgeCheck, Compass, MapPin } from "lucide-react"

import { FreelancersHeroVisual } from "@/components/freelancers/freelancers-hero-visual"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"
import type { Freelancer } from "@/types/freelancer"

const points = [
  { icon: BadgeCheck, label: "Verified professionals" },
  { icon: MapPin, label: "Organized by campus" },
  { icon: Compass, label: "Browse without an account" },
]

function FreelancerHero({ freelancers = [] }: { freelancers?: Freelancer[] }) {
  const count = freelancers.length

  return (
    <PageHero
      eyebrow={
        count > 0
          ? `Freelancers · ${count} ${count === 1 ? "profile" : "profiles"}`
          : "Freelancers"
      }
      title={
        <>
          Discover skilled talent{" "}
          <span className="text-gradient-brand">across campus.</span>
        </>
      }
      description="Explore profiles of students, creators, and professionals offering specialized skills, from design and software engineering to writing, photography, and academic coaching."
      actions={
        <>
          <Link href="#browse" className={heroActionClass("primary")}>
            Find Talent
            <ArrowRight />
          </Link>
          <Link href={siteConfig.registerUrl} className={heroActionClass("ghost")}>
            Join Kampmax
          </Link>
        </>
      }
      points={points}
    >
      <FreelancersHeroVisual freelancers={freelancers} />
    </PageHero>
  )
}

export { FreelancerHero }
