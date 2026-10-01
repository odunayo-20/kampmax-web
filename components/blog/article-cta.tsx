import Link from "next/link"
import { ArrowRight, Compass } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export function ArticleCta() {
  return (
    <div className="my-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-950/40 via-card to-card p-6 sm:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 size-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-2xs font-medium text-primary mb-4">
          <Compass className="size-3" aria-hidden="true" />
          <span>The Campus Ecosystem</span>
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
          Turn Knowledge into Campus Opportunity
        </h3>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
          Whether you offer freelance services, build a student business, or look for verified campus projects, Kampmax gives you direct visibility.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "default",
              size: "default",
              className: "h-10 px-5 text-xs sm:text-sm font-medium gap-1.5 shadow-sm",
            })}
          >
            <span>Join Kampmax</span>
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>

          <Link
            href="/services"
            className={buttonVariants({
              variant: "outline",
              size: "default",
              className: "h-10 px-5 text-xs sm:text-sm font-medium",
            })}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  )
}
