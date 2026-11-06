import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { opportunityItems } from "@/app/_data/homepage"

function Opportunities() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
      <SectionHeading
        eyebrow="Beyond shopping"
        title="Real opportunities, not just listings"
        description="Kampmax goes beyond buying and selling, it's also where campus opportunities, freelance work, and skilled services get discovered."
      />

      <ul className="flex flex-col divide-y divide-border">
        {opportunityItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-primary-foreground">
                  <item.icon className="size-4" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
              <ArrowRight
                className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-primary"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Opportunities }
