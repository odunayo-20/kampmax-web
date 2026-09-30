import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H1, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function ServiceHero() {
  return (
    <div className="flex flex-col gap-4 py-16 sm:py-20 lg:py-24">
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
        className={buttonVariants({ variant: "default", size: "lg", className: "self-start" })}
      >
        Join Kampmax
      </Link>
    </div>
  )
}

export { ServiceHero }
