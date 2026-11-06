import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { businessCtas } from "@/app/_data/homepage"
import { SectionHeading } from "@/components/layout/section-heading"
import { cn } from "@/lib/utils"

function ForBusinesses() {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-linear-to-br from-primary-50 via-card to-accent-50 p-8 shadow-sm sm:p-12">
      <div
        aria-hidden="true"
        className="bg-grid-pattern-light absolute inset-0 -z-10 opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 -z-10 size-72 rounded-full bg-accent-400/20 blur-3xl"
      />

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        <SectionHeading
          eyebrow="For businesses & providers"
          title="Bring your business to campus"
          description="Vendors can reach customers, service providers can showcase their work, freelancers can find gigs, and employers can reach campus talent, all in one place."
        />

        <ul className="flex flex-col gap-3">
          {businessCtas.map((cta, index) => (
            <li key={cta.href}>
              <Link
                href={cta.href}
                className={cn(
                  "group flex items-center justify-between gap-4 rounded-2xl border px-6 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  index === 0
                    ? "border-primary-700 bg-linear-to-r from-primary-600 to-primary-800 text-primary-foreground shadow-lg shadow-primary-600/25 hover:shadow-xl"
                    : "border-border bg-card/90 text-foreground shadow-xs backdrop-blur hover:border-primary/40 hover:shadow-md"
                )}
              >
                {cta.title}
                <ArrowRight
                  className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { ForBusinesses }
