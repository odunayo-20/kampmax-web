import Link from "next/link"

import { HeroPreview } from "@/components/home/hero-preview"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function Hero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-6">
        <Eyebrow>Campus Ecosystem</Eyebrow>
        <Display>Your campus, all in one place.</Display>
        <Lead className="max-w-xl">
          Kampmax brings together the marketplace, jobs, services,
          freelancers, and events happening around your campus — so you can
          discover what&apos;s around you and get involved.
        </Lead>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={siteConfig.registerUrl}
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Join Kampmax
          </Link>
          <Link
            href="#discover"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Explore Kampmax
          </Link>
        </div>
      </div>

      <FadeIn>
        <HeroPreview />
      </FadeIn>
    </div>
  )
}

export { Hero }
