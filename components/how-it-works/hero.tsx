import Link from "next/link"

import { HeroPreview } from "@/components/how-it-works/hero-preview"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function Hero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-6">
        <Eyebrow>How Kampmax Works</Eyebrow>
        <Display>Everything happening around your campus, connected.</Display>
        <Lead className="max-w-xl">
          Kampmax brings the marketplace, services, jobs, freelancers, and
          events near you into one place. Here&apos;s exactly what you can
          do, and how to get started.
        </Lead>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={siteConfig.registerUrl}
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Join Kampmax
          </Link>
          <Link
            href="#what-you-can-do"
            className={buttonVariants({ variant: "outline", size: "lg" })}
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
