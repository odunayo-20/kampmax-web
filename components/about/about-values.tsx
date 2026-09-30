import { coreValues } from "@/app/_data/about"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function AboutValues() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Our Values"
        title="The principles that guide how we build"
        description="Every feature, interaction, and design decision is shaped by values centered on service, clarity, and accountability."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((val) => (
          <Card key={val.title} className="h-full border-border/80">
            <CardContent className="flex flex-col gap-3 p-5 sm:p-6">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <val.icon className="size-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {val.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {val.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { AboutValues }
