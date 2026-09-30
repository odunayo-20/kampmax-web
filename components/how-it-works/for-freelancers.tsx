import Link from "next/link"

import { freelancerBenefits } from "@/app/_data/how-it-works"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"

function ForFreelancers() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-4 lg:order-2">
        <Eyebrow>For Freelancers</Eyebrow>
        <H2>Showcase what you do. Find who needs it.</H2>
        <Lead>
          Build a presence around your skills and connect with people
          looking for exactly what you offer.
        </Lead>
        <div>
          <Link
            href="/freelancers"
            className={buttonVariants({ variant: "default" })}
          >
            Join as a Freelancer
          </Link>
        </div>
      </div>

      <ul className="flex flex-col gap-4 lg:order-1">
        {freelancerBenefits.map((benefit) => (
          <li key={benefit.text} className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
              <benefit.icon className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium text-foreground">
              {benefit.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { ForFreelancers }
