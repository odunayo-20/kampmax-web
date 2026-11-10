import Link from "next/link"
import { ArrowRight, BadgeCheck, Building2, FileCheck, Home, Lock, Users } from "lucide-react"

import { HeroCardStack } from "@/components/shared/hero-card-stack"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"

const items = [
  {
    icon: FileCheck,
    label: "Step 1",
    title: "Get verified",
    description: "Share your ID and proof you can let the property",
  },
  {
    icon: Home,
    label: "Step 2",
    title: "List your rooms",
    description: "Real photos, real prices, clear details",
  },
  {
    icon: Users,
    label: "Result",
    title: "Reach students",
    description: "Students find you and ask to inspect",
  },
]

const points = [
  { icon: BadgeCheck, label: "Every agent is verified" },
  { icon: Lock, label: "Your documents stay private" },
  { icon: Building2, label: "Managed in the Kampmax app" },
]

function AgentHero() {
  return (
    <PageHero
      eyebrow="Accommodation Agents"
      title={
        <>
          Let your rooms to students{" "}
          <span className="text-gradient-brand">who are looking right now.</span>
        </>
      }
      description="Kampmax Accommodation lets verified property owners, caretakers and agencies list rooms near campus, so students can find them, ask questions and book an inspection in one place."
      actions={
        <>
          <Link href={siteConfig.registerUrl} className={heroActionClass("primary")}>
            Start as an agent
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

export { AgentHero }
