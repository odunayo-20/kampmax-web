import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { JobsHeroComposition } from "@/components/jobs/jobs-hero-composition"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function JobsHero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-7">
        <Eyebrow>Jobs & Opportunities</Eyebrow>
        <Display className="xl:text-7xl">
          Find opportunities that move you forward.
        </Display>
        <Lead className="max-w-xl sm:text-xl/relaxed">
          Discover internships, campus positions, freelance projects, and graduate
          roles connected to real communities. Kampmax organizes opportunities
          alongside the skills, services, and campus life already active around
          you.
        </Lead>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="#browse"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-12 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary-600/25"
            )}
          >
            Explore Opportunities
            <ArrowRight />
          </Link>
          <Link
            href={siteConfig.registerUrl}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-xl px-8 text-base font-semibold"
            )}
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
