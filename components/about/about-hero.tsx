import Link from "next/link"
import { ArrowRight, Briefcase, Calendar, GraduationCap, Store, Users, Wrench } from "lucide-react"

import { HeroCardStack } from "@/components/shared/hero-card-stack"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"

const items = [
  {
    icon: Store,
    label: "Commerce",
    title: "Marketplace",
    description: "Course books, supplies and tech kits",
  },
  {
    icon: Wrench,
    label: "Skills",
    title: "Local services",
    description: "Repairs, design, tailoring and tutoring",
  },
  {
    icon: Briefcase,
    label: "Careers",
    title: "Jobs and talent",
    description: "Internships, projects and student freelance",
  },
  {
    icon: Calendar,
    label: "Activities",
    title: "Campus events",
    description: "Conferences, hackathons and festivals",
  },
]

const points = [
  { icon: GraduationCap, label: "Built around campuses" },
  { icon: Users, label: "Students, sellers and organizers" },
]

function AboutHero() {
  return (
    <PageHero
      eyebrow="About Kampmax"
      title={
        <>
          Building a more{" "}
          <span className="text-gradient-brand">connected campus ecosystem.</span>
        </>
      }
      description="Kampmax brings together students, local merchants, service providers, freelancers, and event organizers into one coherent digital home, connecting daily commerce, professional skills, and campus life."
      actions={
        <>
          <Link href="#what-is-kampmax" className={heroActionClass("primary")}>
            Explore Kampmax
            <ArrowRight />
          </Link>
          <Link href={siteConfig.registerUrl} className={heroActionClass("ghost")}>
            Join Kampmax
          </Link>
        </>
      }
      points={points}
    >
      <HeroCardStack items={items} />
    </PageHero>
  )
}

export { AboutHero }
