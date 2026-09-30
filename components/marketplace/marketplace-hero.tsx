import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H1, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function MarketplaceHero() {
  return (
    <div className="flex flex-col gap-4 py-16 sm:py-20 lg:py-24">
      <Eyebrow>Marketplace</Eyebrow>
      <H1>Discover products around your campus community.</H1>
      <Lead className="max-w-2xl">
        Browse what people are offering across the Kampmax ecosystem — from
        everyday items to campus-made goods. Join Kampmax to message a
        seller or list something yourself.
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

export { MarketplaceHero }
