import { campusAdvantages } from "@/app/_data/become-a-vendor"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function VendorCampusAdvantage() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Campus Advantage"
        title="Why campus ecosystems create high-demand environments"
        description="Campuses bring together thousands of young, active consumers and creators living in close proximity with shared daily routines."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {campusAdvantages.map((advantage) => (
          <Card key={advantage.title} className="h-full border-border/80">
            <CardContent className="flex flex-col gap-3 p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <advantage.icon className="size-5" aria-hidden="true" />
              </span>

              <h3 className="font-heading text-base font-semibold text-foreground">
                {advantage.title}
              </h3>

              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {advantage.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { VendorCampusAdvantage }
