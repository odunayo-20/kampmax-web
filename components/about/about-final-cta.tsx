import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { H2, Lead, Muted } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function AboutFinalCta() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground shadow-sm sm:px-12 sm:py-20">
      <H2 className="max-w-2xl text-primary-foreground">
        Be part of the Kampmax ecosystem.
      </H2>
      <Lead className="max-w-xl text-primary-foreground/80">
        Whether you are a student discovering your campus, an artisan offering
        skilled services, or an entrepreneur reaching new customers, there is a
        place for you on Kampmax.
      </Lead>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={siteConfig.registerUrl}
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "w-full sm:w-auto",
          })}
        >
          Join Kampmax
        </Link>
        <Link
          href="/campuses"
          className={buttonVariants({
            variant: "ghost",
            size: "lg",
            className:
              "w-full text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto",
          })}
        >
          Explore the Platform
        </Link>
      </div>
      <Muted className="text-2xs text-primary-foreground/60 sm:text-xs">
        Registration and member profiles are managed inside the Kampmax application.
      </Muted>
    </div>
  )
}

export { AboutFinalCta }
