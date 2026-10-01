import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { AboutHeroComposition } from "@/components/about/about-hero-composition"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function AboutHero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-7">
        <Eyebrow>About Kampmax</Eyebrow>
        <Display className="xl:text-7xl">
          Building a more connected campus ecosystem.
        </Display>
        <Lead className="max-w-xl sm:text-xl/relaxed">
          Kampmax brings together students, local merchants, service providers,
          freelancers, and event organizers into one coherent digital home —
          connecting daily commerce, professional skills, and campus life.
        </Lead>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="#what-is-kampmax"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-12 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary-600/25"
            )}
          >
            Explore Kampmax
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
        <AboutHeroComposition />
      </FadeIn>
    </div>
  )
}

export { AboutHero }
