import Link from "next/link"

import { BusinessHeroComposition } from "@/components/for-businesses/business-hero-composition"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function BusinessHero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-6">
        <Eyebrow>Kampmax for Business</Eyebrow>
        <Display>Connect your business directly with campus communities.</Display>
        <Lead className="max-w-xl">
          Kampmax gives local merchants, service providers, employers, and
          entrepreneurs a dedicated public presence to reach active student and
          campus audiences. Showcase products, offer services, hire talent, and
          engage where campus life happens every day.
        </Lead>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={siteConfig.registerUrl}
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Join Kampmax
          </Link>
          <Link
            href="#how-it-works"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            See How It Works
          </Link>
        </div>
      </div>

      <FadeIn>
        <BusinessHeroComposition />
      </FadeIn>
    </div>
  )
}

export { BusinessHero }
