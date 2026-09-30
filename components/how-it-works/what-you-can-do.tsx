import { ArrowRight } from "lucide-react"

import { experiences } from "@/app/_data/how-it-works"
import { SectionHeading } from "@/components/layout/section-heading"
import { Link } from "@/components/ui/link"

function WhatYouCanDo() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="What you can do"
        title="Six ways to get involved"
        description="Each one connects to the same ecosystem — start wherever is useful to you."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((item) => (
          <div key={item.href} className="flex flex-col gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-foreground">
              <item.icon className="size-4" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.what}</p>
              <p className="text-sm text-muted-foreground">{item.why}</p>
            </div>
            <Link
              href={item.href}
              className="mt-auto inline-flex items-center gap-1 text-sm font-medium"
            >
              {item.cta}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export { WhatYouCanDo }
