import Link from "next/link"
import { ArrowRight, Briefcase, Calendar, GraduationCap, Store, Users, Wrench } from "lucide-react"

import { HeroCardStack } from "@/components/shared/hero-card-stack"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"

const items = [
  {
    icon: Store,
    label: "Merchants",
    title: "Showcase products",
    description: "Make your goods discoverable by students",
  },
  {
    icon: Wrench,
    label: "Service providers",
    title: "Offer services",
    description: "Receive direct enquiries from your campus",
  },
  {
    icon: Briefcase,
    label: "Employers",
    title: "Recruit talent",
    description: "Post internships and roles for campus builders",
  },
  {
    icon: Calendar,
    label: "Organizers",
    title: "Promote events",
    description: "Reach the people who show up",
  },
]

const points = [
  { icon: GraduationCap, label: "Active campus audiences" },
  { icon: Users, label: "Managed in the Kampmax app" },
]

function BusinessHero() {
  return (
    <PageHero
      eyebrow="Kampmax for Business"
      title={
        <>
          Connect your business with{" "}
          <span className="text-gradient-brand">campus communities.</span>
        </>
      }
      description="Kampmax gives local merchants, service providers, employers, and entrepreneurs a dedicated public presence to reach active student and campus audiences. Showcase products, offer services, hire talent, and engage where campus life happens every day."
      actions={
        <>
          <Link href={siteConfig.registerUrl} className={heroActionClass("primary")}>
            Join Kampmax
            <ArrowRight />
          </Link>
          <Link href="#how-it-works" className={heroActionClass("ghost")}>
            See How It Works
          </Link>
        </>
      }
      points={points}
    >
      <HeroCardStack items={items} />
    </PageHero>
  )
}

export { BusinessHero }
