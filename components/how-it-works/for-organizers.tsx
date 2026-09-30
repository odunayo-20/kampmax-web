import Link from "next/link"

import { organizerUseCases } from "@/app/_data/how-it-works"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"

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
        <div>
          <Link
            href="/for-businesses#employers"
            className={buttonVariants({ variant: "default" })}
          >
            Find Talent
          </Link>
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {organizerUseCases.map((item) => (
          <li key={item.text} className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
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
