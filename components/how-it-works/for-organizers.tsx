import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { organizerUseCases } from "@/app/_data/how-it-works"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"
import { cn } from "@/lib/utils"

function ForOrganizers() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-4">
        <Eyebrow>For Employers &amp; Organizers</Eyebrow>
        <H2>Reach campus talent and audiences directly.</H2>
        <Lead>
          Publish jobs, discover talent, and create events that reach the
          people most likely to care — all in one place.
        </Lead>
        <div className="pt-1">
          <Link
            href="/for-businesses#employers"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-11 rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
            )}
          >
            Find Talent
            <ArrowRight />
          </Link>
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {organizerUseCases.map((item) => (
          <li key={item.text} className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <item.icon className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium text-foreground">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { ForOrganizers }
