import Link from "next/link"

import { JobsHeroComposition } from "@/components/jobs/jobs-hero-composition"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function JobsHero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-6">
        <Eyebrow>Jobs & Opportunities</Eyebrow>
        <Display>Find opportunities that move you forward.</Display>
        <Lead className="max-w-xl">
          Discover internships, campus positions, freelance projects, and graduate
          roles connected to real communities. Kampmax organizes opportunities
          alongside the skills, services, and campus life already active around
          you.
        </Lead>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#browse"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Explore Opportunities
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
        <JobsHeroComposition />
      </FadeIn>
    </div>
  )
}

export { JobsHero }
