import Link from "next/link"
import { ArrowRight, Compass, Smartphone } from "lucide-react"

import { experienceSteps } from "@/app/_data/how-it-works"
import { HeroCardStack } from "@/components/shared/hero-card-stack"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"

const points = [
  { icon: Compass, label: "Browse without an account" },
  { icon: Smartphone, label: "Everything else happens in the app" },
]

function Hero() {
  return (
    <PageHero
      eyebrow="How Kampmax Works"
      title={
        <>
          Everything around your campus,{" "}
          <span className="text-gradient-brand">connected.</span>
        </>
      }
      description="Kampmax brings the marketplace, services, jobs, freelancers, and events near you into one place. Here's exactly what you can do, and how to get started."
      actions={
        <>
          <Link href={siteConfig.registerUrl} className={heroActionClass("primary")}>
            Join Kampmax
            <ArrowRight />
          </Link>
          <Link href="#what-you-can-do" className={heroActionClass("ghost")}>
            See What&apos;s Possible
          </Link>
        </>
      }
      points={points}
    >
      <HeroCardStack
        items={experienceSteps.map((step, index) => ({
          icon: step.icon,
          label: `Step ${index + 1}`,
          title: step.title,
          description: step.description,
        }))}
      />
    </PageHero>
  )
}

export { Hero }
