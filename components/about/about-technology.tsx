import { productPhilosophyItems } from "@/app/_data/about"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function AboutTechnology() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Product Philosophy"
        title="Built for real-world reliability and clarity"
        description="We approach software design with restraint: prioritizing performance on mobile devices, clear user journeys, and robust engineering."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {productPhilosophyItems.map((item) => (
          <Card key={item.title} className="h-full border-border/80">
            <CardContent className="flex flex-col gap-3 p-6 sm:p-7">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { AboutTechnology }
