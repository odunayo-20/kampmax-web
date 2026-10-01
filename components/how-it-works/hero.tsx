import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { HeroPreview } from "@/components/how-it-works/hero-preview"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function Hero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-7">
        <Eyebrow>How Kampmax Works</Eyebrow>
        <Display className="xl:text-7xl">
          Everything happening around your campus, connected.
        </Display>
        <Lead className="max-w-xl sm:text-xl/relaxed">
          Kampmax brings the marketplace, services, jobs, freelancers, and
          events near you into one place. Here&apos;s exactly what you can
          do, and how to get started.
        </Lead>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={siteConfig.registerUrl}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-12 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary-600/25"
            )}
          >
            Join Kampmax
            <ArrowRight />
          </Link>
          <Link
            href="#what-you-can-do"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-xl px-8 text-base font-semibold"
            )}
          >
            See What&apos;s Possible
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
