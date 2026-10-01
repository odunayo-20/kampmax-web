import Link from "next/link"
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H1, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"

function CampusHeader({ campus }: { campus: Campus }) {
  return (
    <div className="flex flex-col gap-6 py-16 sm:py-20 lg:py-24">
      <Link
        href="/campuses"
        className="inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        All Campuses
      </Link>

      <div className="flex flex-col gap-4">
        <Eyebrow>Campus Community</Eyebrow>
        <H1>{campus.name}</H1>
        {campus.location ? (
          <p className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            {campus.location}
          </p>
        ) : null}
        {campus.description ? (
          <Lead className="max-w-2xl">{campus.description}</Lead>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href={siteConfig.registerUrl}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "h-11 rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
          )}
        >
          Join Kampmax
          <ArrowRight />
        </Link>
        <Link
          href="#discover"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 rounded-lg px-6 text-sm font-semibold"
          )}
        >
          Explore Kampmax
        </Link>
      </div>
    </div>
  )
}

export { CampusHeader }
