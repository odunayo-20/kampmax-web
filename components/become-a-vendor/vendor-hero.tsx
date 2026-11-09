import Link from "next/link"
import { ArrowRight, BadgeCheck, Eye, Layers, Store, Wrench } from "lucide-react"

import { HeroCardStack } from "@/components/shared/hero-card-stack"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"

const items = [
  {
    icon: Store,
    label: "Path 1",
    title: "Sell products",
    description: "List physical and digital goods for your campus",
  },
  {
    icon: Wrench,
    label: "Path 2",
    title: "Offer services",
    description: "Present your skills and let people book you",
  },
  {
    icon: Eye,
    label: "Result",
    title: "Get discovered",
    description: "Appear in front of students searching around campus",
  },
]

const points = [
  { icon: Layers, label: "Products or services" },
  { icon: BadgeCheck, label: "Managed in the Kampmax app" },
]

function VendorHero() {
  return (
    <PageHero
      eyebrow="Vendors & Service Providers"
      title={
        <>
          Turn what you sell or know into{" "}
          <span className="text-gradient-brand">something people discover.</span>
        </>
      }
      description="Kampmax gives campus vendors, local merchants, artisans, and skilled freelancers a dedicated public home to present their offerings directly to university communities."
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

export { VendorHero }
