import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { H2, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function BlogCta() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 p-8 text-center sm:p-12">
      <div className="flex flex-col gap-2">
        <H2 className="text-xl sm:text-2xl">
          Connecting ideas with real campus opportunities
        </H2>
        <Lead className="max-w-xl text-xs sm:text-sm">
          Discover products, services, freelance talent, and events happening
          right now across your university community.
        </Lead>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/campuses"
          className={buttonVariants({ variant: "default", size: "default" })}
        >
          Explore Kampmax
        </Link>
        <Link
          href={siteConfig.registerUrl}
          className={buttonVariants({ variant: "outline", size: "default" })}
        >
          Join Kampmax
        </Link>
      </div>
    </div>
  )
}

export { BlogCta }
