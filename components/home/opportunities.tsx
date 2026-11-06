import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { opportunityItems } from "@/app/_data/homepage"
import { SectionHeading } from "@/components/layout/section-heading"
import { FadeIn } from "@/components/shared/fade-in"

function Opportunities() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
      <SectionHeading
        eyebrow="Beyond shopping"
        title="Real opportunities, not just listings"
        description="Kampmax goes beyond buying and selling, it's also where campus opportunities, freelance work, and skilled services get discovered."
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {opportunityItems.map((item, index) => (
          <li key={item.title}>
            <FadeIn delay={index * 0.07} className="h-full">
              <Link
                href={item.href}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary-950/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-primary-100 to-primary-50 text-primary-700 ring-1 ring-primary-200/60 transition-all duration-300 group-hover:from-primary-600 group-hover:to-primary-800 group-hover:text-primary-foreground">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="size-5 text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-heading text-base font-bold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Link>
            </FadeIn>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Opportunities }
