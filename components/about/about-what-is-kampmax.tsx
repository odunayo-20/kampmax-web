import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ecosystemPillars } from "@/app/_data/about"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function AboutWhatIsKampmax() {
  return (
    <div id="what-is-kampmax" className="scroll-mt-16 flex flex-col gap-10">
      <SectionHeading
        eyebrow="The Platform"
        title="A unified ecosystem for campus life"
        description="Kampmax organizes the essential economic and social activities of university communities into one interconnected, accessible digital structure."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ecosystemPillars.map((pillar) => (
          <Link
            key={pillar.title}
            href={pillar.href}
            className="group block transition-transform hover:-translate-y-0.5"
          >
            <Card className="h-full border-border/80 transition-colors group-hover:border-primary/40">
              <CardContent className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <pillar.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-2xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {pillar.subtitle}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-primary">
                  <span>Explore {pillar.title}</span>
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export { AboutWhatIsKampmax }
