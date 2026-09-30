import { CheckCircle2 } from "lucide-react"

import { businessScales } from "@/app/_data/for-businesses"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function BusinessScales() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Flexibility"
        title="Built for businesses of every scale"
        description="From solo student creators launching their first venture to established neighborhood retailers and growing regional employers."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {businessScales.map((scale) => (
          <Card key={scale.title} className="flex h-full flex-col">
            <CardContent className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
              <div className="flex flex-col gap-1">
                <span className="text-2xs font-semibold uppercase tracking-wider text-primary">
                  {scale.subtitle}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {scale.title}
                </h3>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {scale.description}
              </p>

              <div className="mt-auto border-t border-border/60 pt-4">
                <ul className="flex flex-col gap-2.5">
                  {scale.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-foreground sm:text-sm">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { BusinessScales }
