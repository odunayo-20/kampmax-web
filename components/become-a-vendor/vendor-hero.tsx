import Link from "next/link"

import { VendorHeroComposition } from "@/components/become-a-vendor/vendor-hero-composition"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function VendorHero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-6">
        <Eyebrow>Vendors &amp; Service Providers</Eyebrow>
        <Display>
          Turn what you sell or what you know into something people can discover.
        </Display>
        <Lead className="max-w-xl">
          Kampmax gives campus vendors, local merchants, artisans, and skilled
          freelancers a dedicated public home to present their offerings directly
          to university communities.
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
        <VendorHeroComposition />
      </FadeIn>
    </div>
  )
}

export { VendorHero }
