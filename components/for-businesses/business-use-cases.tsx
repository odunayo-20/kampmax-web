import { businessUseCases } from "@/app/_data/for-businesses"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function BusinessUseCases() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Use Cases"
        title="Practical scenarios across campus life"
        description="See how vendors, providers, employers, and student creators put Kampmax to work every day."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {businessUseCases.map((useCase) => (
          <Card key={useCase.role} className="flex h-full flex-col">
            <CardContent className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <useCase.icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {useCase.role}
                </h3>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <span className="text-2xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Scenario
                </span>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {useCase.scenario}
                </p>
              </div>

              <div className="border-t border-border/60 pt-3">
                <span className="text-2xs font-semibold uppercase tracking-wider text-primary">
                  Value Delivered
                </span>
                <p className="mt-1 text-xs font-medium text-foreground">
                  {useCase.outcome}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { BusinessUseCases }
