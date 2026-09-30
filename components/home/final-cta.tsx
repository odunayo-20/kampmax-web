import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { H2, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function FinalCta() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12">
      <H2 className="text-primary-foreground">
        Ready to discover what&apos;s possible?
      </H2>
      <Lead className="max-w-xl text-primary-foreground/80">
        Join Kampmax to start discovering what&apos;s happening around your
        campus.
      </Lead>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={siteConfig.registerUrl}
          className={buttonVariants({ variant: "secondary", size: "lg" })}
        >
          Join Kampmax
        </Link>
        <Link
          href="#discover"
          className={buttonVariants({
            variant: "ghost",
            size: "lg",
            className:
              "text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
          })}
        >
          Explore Kampmax
        </Link>
      </div>
    </div>
  )
}

export { FinalCta }
