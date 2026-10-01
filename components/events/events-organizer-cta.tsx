import Link from "next/link"
import { ArrowRight, CalendarCheck } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { H2, Lead, Muted } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function EventsOrganizerCta() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-linear-to-b from-card to-muted/20 p-8 shadow-xs sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
      <div className="flex max-w-2xl flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
            <CalendarCheck className="size-3.5" aria-hidden="true" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            For Organizers & Campus Groups
          </span>
        </div>

        <H2 className="text-xl sm:text-2xl lg:text-3xl">
          Organizing an event or campus gathering? Bring it into view.
        </H2>

        <Lead className="text-sm sm:text-base">
          From departmental committees and student societies to tech hubs and
          local creators, Kampmax makes it easy to share your event with the
          people who want to attend.
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
          Publish on Kampmax
          <ArrowRight />
        </Link>
        <Muted className="text-2xs text-muted-foreground sm:text-xs">
          Event listing publishing and ticket check-ins are handled inside the
          Kampmax app.
        </Muted>
      </div>
    </div>
  )
}

export { EventsOrganizerCta }
