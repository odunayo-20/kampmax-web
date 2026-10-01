import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { freelancerBenefits } from "@/app/_data/how-it-works"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"
import { cn } from "@/lib/utils"

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
        <div className="pt-1">
          <Link
            href="/freelancers"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-11 rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
            )}
          >
            Join as a Freelancer
            <ArrowRight />
          </Link>
        </div>
      </div>

      <ul className="flex flex-col gap-4 lg:order-1">
        {freelancerBenefits.map((benefit) => (
          <li key={benefit.text} className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
