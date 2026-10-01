import { approachPrinciples } from "@/app/_data/about"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function AboutApproach() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Our Approach"
        title="Four principles guiding how we build"
        description="We focus on practical principles that make campus discovery more accessible, connected, and supportive of local enterprise."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {approachPrinciples.map((principle) => (
          <Card key={principle.number} className="h-full border-border/80">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl font-bold text-primary">
                  {principle.number}
                </span>
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <principle.icon className="size-4" aria-hidden="true" />
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-2xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {principle.subtitle}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {principle.title}
                </h3>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {principle.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { AboutApproach }
