import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { VendorHeroComposition } from "@/components/become-a-vendor/vendor-hero-composition"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Display, Eyebrow, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function VendorHero() {
  return (
    <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col gap-7">
        <Eyebrow>Vendors &amp; Service Providers</Eyebrow>
        <Display className="xl:text-7xl">
          Turn what you sell or what you know into something people can discover.
        </Display>
        <Lead className="max-w-xl sm:text-xl/relaxed">
          Kampmax gives campus vendors, local merchants, artisans, and skilled
          freelancers a dedicated public home to present their offerings directly
          to university communities.
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
            href="#how-it-works"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-xl px-8 text-base font-semibold"
            )}
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
