import { coreValues } from "@/app/_data/about"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function AboutValues() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Our Values"
        title="What we hold ourselves to"
        description="These are the standards behind every decision we make, from the smallest feature to the direction of the platform."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value) => (
          <Card key={value.title} className="h-full border-border/80">
            <CardContent className="flex flex-col gap-3 p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <value.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { AboutValues }
