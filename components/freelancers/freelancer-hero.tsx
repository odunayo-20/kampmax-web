import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H1, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"

function FreelancerHero() {
  return (
    <div className="flex flex-col gap-4 py-16 sm:py-20 lg:py-24">
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
        className={buttonVariants({
          variant: "default",
          size: "lg",
          className: "self-start",
        })}
      >
        Join Kampmax
      </Link>
    </div>
  )
}

export { FreelancerHero }
