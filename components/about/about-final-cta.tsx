import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { H2, Lead, Muted } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function AboutFinalCta() {
  return (
    <div className="relative isolate flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-linear-to-br from-primary-600 via-primary-700 to-primary-900 px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 size-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 size-72 rounded-full bg-accent-500/20 blur-3xl"
      />
      <H2 className="relative max-w-2xl text-3xl text-primary-foreground sm:text-4xl lg:text-5xl">
        Be part of a more connected campus ecosystem.
      </H2>
      <Lead className="relative max-w-xl text-primary-foreground/80">
        Whether you are a student discovering your campus, an artisan offering
        skilled services, an employer seeking talent, or an entrepreneur
        reaching new customers, there is a place for you on Kampmax.
      </Lead>
      <div className="relative flex flex-col gap-4 sm:flex-row">
        <Link
          href="/campuses"
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "h-12 w-full rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary-950/20 sm:w-auto"
          )}
        >
          Explore Kampmax
          <ArrowRight />
        </Link>
        <Link
          href={siteConfig.registerUrl}
          className={buttonVariants({
            variant: "ghost",
            size: "lg",
            className:
              "h-12 w-full rounded-xl px-8 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto",
          })}
        >
          Join Kampmax
        </Link>
      </div>
      <Muted className="relative text-2xs text-primary-foreground/60 sm:text-xs">
        Registration, member profiles, and service listings are managed inside the Kampmax application.
      </Muted>
    </div>
  )
}

export { AboutFinalCta }
