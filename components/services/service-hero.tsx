import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H1, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function ServiceHero() {
  return (
    <div className="flex flex-col gap-5 py-16 sm:py-20 lg:py-24">
      <Eyebrow>Services</Eyebrow>
      <H1>Discover services across your campus community.</H1>
      <Lead className="max-w-2xl">
        Explore everyday assistance, repairs, creative skills, tutoring, and
        business services offered by individuals, freelancers, and providers
        within the Kampmax ecosystem. Join Kampmax to connect directly with
        providers or offer your own services.
      </Lead>
      <Link
        href={siteConfig.registerUrl}
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "h-11 self-start rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
        )}
      >
        Join Kampmax
        <ArrowRight />
      </Link>
    </div>
  )
}

export { ServiceHero }
