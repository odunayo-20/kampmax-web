import Link from "next/link"
import { ArrowRight, Handshake, MapPin, MessageCircle } from "lucide-react"

import { ServicesHeroVisual } from "@/components/services/services-hero-visual"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"
import type { Service } from "@/types/service"

const points = [
  { icon: MapPin, label: "Organized by campus" },
  { icon: MessageCircle, label: "Connect directly with providers" },
  { icon: Handshake, label: "Browse without an account" },
]

function ServiceHero({ services = [] }: { services?: Service[] }) {
  const count = services.length

  return (
    <PageHero
      eyebrow={
        count > 0
          ? `Services · ${count} ${count === 1 ? "service" : "services"} available`
          : "Services"
      }
      title={
        <>
          Discover services across{" "}
          <span className="text-gradient-brand">your campus community.</span>
        </>
      }
      description="Explore everyday assistance, repairs, creative skills, tutoring, and business services offered by individuals, freelancers, and providers within the Kampmax ecosystem. Join Kampmax to connect directly with providers or offer your own services."
      actions={
        <>
          <Link href={siteConfig.registerUrl} className={heroActionClass("primary")}>
            Join Kampmax
            <ArrowRight />
          </Link>
          <Link href="/become-a-vendor#service-providers" className={heroActionClass("ghost")}>
            Offer a service
          </Link>
        </>
      }
      points={points}
    >
      <ServicesHeroVisual services={services} />
    </PageHero>
  )
}

export { ServiceHero }
