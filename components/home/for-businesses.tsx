import Link from "next/link"

import { SectionHeading } from "@/components/layout/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { businessCtas } from "@/app/_data/homepage"
import { cn } from "cn"

function ForBusinesses() {
  return (
    <div className="rounded-2xl border border-border bg-card px-6 py-12 ring-1 ring-accent-500/15 sm:px-12 sm:border-l-4 sm:border-l-accent-500">
      <div className="flex flex-col items-start gap-6">
        <SectionHeading
          eyebrow="For businesses & providers"
          title="Bring your business to campus"
          description="Vendors can reach customers, service providers can showcase their work, freelancers can find gigs, and employers can reach campus talent — all in one place."
        />

        <div className="flex flex-wrap gap-3">
          {businessCtas.map((cta, index) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={cn(
                buttonVariants({ variant: index === 0 ? "default" : "outline" })
              )}
            >
              {cta.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export { ForBusinesses }
