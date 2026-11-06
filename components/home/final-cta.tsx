import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { H2, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function FinalCta() {
  return (
    <div className="relative isolate flex flex-col items-center gap-7 overflow-hidden rounded-3xl bg-linear-to-br from-primary-600 via-primary-800 to-primary-950 px-6 py-20 text-center text-primary-foreground shadow-2xl shadow-primary-950/25 sm:px-12 sm:py-24">
      <div aria-hidden="true" className="bg-grid-pattern absolute inset-0 -z-10 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 -z-10 size-80 rounded-full bg-primary-400/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 -z-10 size-80 rounded-full bg-accent-500/25 blur-3xl"
      />
      <H2 className="relative max-w-3xl text-balance text-3xl font-extrabold text-primary-foreground sm:text-4xl lg:text-5xl">
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
            buttonVariants({ variant: "default", size: "lg" }),
            "h-13 rounded-xl bg-accent-500 px-9 text-base font-bold text-primary-950 shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:bg-accent-400"
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
              "h-13 rounded-xl border border-white/25 px-9 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
          })}
        >
          Explore Kampmax
        </Link>
      </div>
    </div>
  )
}

export { FinalCta }
