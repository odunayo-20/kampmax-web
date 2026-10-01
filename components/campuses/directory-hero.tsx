import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H1, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function DirectoryHero() {
  return (
    <div className="flex flex-col gap-6 py-16 sm:py-20 lg:py-24">
      <Eyebrow>Campus Network</Eyebrow>
      <H1 className="max-w-2xl">Find Kampmax at your campus.</H1>
      <Lead className="max-w-2xl">
        Kampmax is organized around individual campus communities. Explore
        the campuses currently configured below, or pick yours to see what
        Kampmax looks like there.
      </Lead>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href={siteConfig.registerUrl}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "h-12 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary-600/25"
          )}
        >
          Join Kampmax
        </Link>
        <Link
          href="#directory"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-12 rounded-xl px-8 text-base font-semibold"
          )}
        >
          Browse Campuses
          <ArrowDown />
        </Link>
      </div>
    </div>
  )
}

export { DirectoryHero }
