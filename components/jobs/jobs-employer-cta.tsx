import Link from "next/link"
import { ArrowRight, Building2 } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { H2, Lead, Muted } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function JobsEmployerCta() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-linear-to-b from-card to-muted/20 p-8 shadow-xs sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
      <div className="flex max-w-2xl flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Building2 className="size-3.5" aria-hidden="true" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            For Employers & Organizations
          </span>
        </div>

        <H2 className="text-xl sm:text-2xl lg:text-3xl">
          Have an opportunity to share? Reach the people looking for it.
        </H2>

        <Lead className="text-sm sm:text-base">
          Whether you are a campus-adjacent business seeking part-time staff, a
          student startup assembling a team, or an employer recruiting interns,
          Kampmax brings your opportunity directly into campus view.
        </Lead>
      </div>

      <div className="flex shrink-0 flex-col gap-2">
        <Link
          href={siteConfig.registerUrl}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "h-11 w-full rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20 sm:w-auto"
          )}
        >
          Post an Opportunity
          <ArrowRight />
        </Link>
        <Muted className="text-2xs text-muted-foreground sm:text-xs">
          Role publishing and candidate management occur within the Kampmax app.
        </Muted>
      </div>
    </div>
  )
}

export { JobsEmployerCta }
