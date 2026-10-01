import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { H2, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function FinalCta() {
  return (
    <div className="relative isolate flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-linear-to-br from-primary-600 via-primary-700 to-primary-900 px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 size-72 rounded-full bg-accent-500/20 blur-3xl"
      />
      <H2 className="relative text-3xl text-primary-foreground sm:text-4xl lg:text-5xl">
        Ready to discover what&apos;s possible?
      </H2>
      <Lead className="relative max-w-xl text-primary-foreground/80">
        Join Kampmax to start discovering what&apos;s happening around your
        campus.
      </Lead>
      <div className="relative flex flex-col gap-4 sm:flex-row">
        <Link
          href={siteConfig.registerUrl}
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "h-12 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary-950/20"
          )}
        >
          Join Kampmax
          <ArrowRight />
        </Link>
        <Link
          href="#discover"
          className={buttonVariants({
            variant: "ghost",
            size: "lg",
            className:
              "h-12 rounded-xl px-8 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
          })}
        >
          Explore Kampmax
        </Link>
      </div>
    </div>
  )
}

export { FinalCta }
