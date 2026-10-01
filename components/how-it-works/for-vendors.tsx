import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { vendorBenefits } from "@/app/_data/how-it-works"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"
import { cn } from "@/lib/utils"

function ForVendors() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-4">
        <Eyebrow>For Vendors &amp; Service Providers</Eyebrow>
        <H2>Bring your business to campus.</H2>
        <Lead>
          Create a presence, showcase what you offer, and reach customers
          who are already around you.
        </Lead>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href="/become-a-vendor"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-11 rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
            )}
          >
            Become a Vendor
            <ArrowRight />
          </Link>
          <Link
            href="/become-a-vendor#service-providers"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-lg px-6 text-sm font-semibold"
            )}
          >
            Offer a Service
          </Link>
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {vendorBenefits.map((benefit) => (
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

export { ForVendors }
