import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H1, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function FreelancerHero() {
  return (
    <div className="flex flex-col gap-5 py-16 sm:py-20 lg:py-24">
      <Eyebrow>Freelancers</Eyebrow>
      <H1>Discover skilled independent talent across campus communities.</H1>
      <Lead className="max-w-2xl">
        Explore profiles of students, creators, and professionals offering
        specialized skills — from design and software engineering to writing,
        photography, and academic coaching. Join Kampmax to connect with
        talent or establish your own public professional presence.
      </Lead>
      <Link
        href={siteConfig.registerUrl}
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "h-11 self-start rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
        )}
      >
        Join Kampmax
        <ArrowRight />
      </Link>
    </div>
  )
}

export { FreelancerHero }
