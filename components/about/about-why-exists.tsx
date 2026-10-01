import { whyProblems } from "@/app/_data/about"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function AboutWhyExists() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Why Kampmax Exists"
        title="The challenges we are building to address"
        description="Campuses are lively hubs of commerce, talent, and energy. Yet finding what you need often remains scattered across informal and disconnected channels."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyProblems.map((problem) => (
          <Card key={problem.title} className="h-full border-border/80">
            <CardContent className="flex flex-col gap-3 p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <problem.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {problem.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { AboutWhyExists }
