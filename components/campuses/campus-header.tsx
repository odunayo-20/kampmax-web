import Link from "next/link"
import { ArrowLeft, MapPin } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H1, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
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

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={siteConfig.registerUrl}
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Join Kampmax
        </Link>
        <Link
          href="#discover"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Explore Kampmax
        </Link>
      </div>
    </div>
  )
}

export { CampusHeader }
