import { showcasePillars } from "@/app/_data/become-a-vendor"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function VendorShowcase() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="What You Can Showcase"
        title="Structured discovery across five core surfaces"
        description="From tangible items to hands-on craftsmanship and campus recruitment, present your capabilities with clear context."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {showcasePillars.map((pillar) => (
          <Card key={pillar.title} className="flex h-full flex-col border-border/80">
            <CardContent className="flex flex-1 flex-col gap-3.5 p-5 sm:p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <pillar.icon className="size-5" aria-hidden="true" />
              </span>

              <div className="flex flex-col gap-1">
                <span className="text-2xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {pillar.subtitle}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { VendorShowcase }
