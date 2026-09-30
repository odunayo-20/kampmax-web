import Link from "next/link"

import { vendorBenefits } from "@/app/_data/how-it-works"
import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"

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
        <div className="flex flex-wrap gap-3">
          <Link
            href="/for-businesses#vendors"
            className={buttonVariants({ variant: "default" })}
          >
            Become a Vendor
          </Link>
          <Link
            href="/for-businesses#service-providers"
            className={buttonVariants({ variant: "outline" })}
          >
            Offer a Service
          </Link>
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {vendorBenefits.map((benefit) => (
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

export { ForVendors }
