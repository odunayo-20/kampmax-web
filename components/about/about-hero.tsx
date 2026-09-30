import Link from "next/link"

import { AboutHeroComposition } from "@/components/about/about-hero-composition"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function AboutHero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-6">
        <Eyebrow>About Kampmax</Eyebrow>
        <Display>Building a more connected campus ecosystem.</Display>
        <Lead className="max-w-xl">
          Kampmax brings together students, local merchants, service providers,
          freelancers, and event organizers into one coherent digital home —
          connecting daily commerce, professional skills, and campus life.
        </Lead>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#what-is-kampmax"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Explore Kampmax
          </Link>
          <Link
            href={siteConfig.registerUrl}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Join Kampmax
          </Link>
        </div>
      </div>

      <FadeIn>
        <AboutHeroComposition />
      </FadeIn>
    </div>
  )
}

export { AboutHero }
