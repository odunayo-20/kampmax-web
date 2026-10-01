import { trustPrinciples } from "@/app/_data/become-a-vendor"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function VendorTrustQuality() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Community Standards"
        title="Trust & quality expectations"
        description="A healthy marketplace depends on honesty, transparency, and accountability across every transaction and interaction."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustPrinciples.map((principle) => (
          <Card key={principle.title} className="h-full border-border/80">
            <CardContent className="flex flex-col gap-3 p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <principle.icon className="size-5" aria-hidden="true" />
              </span>

              <h3 className="font-heading text-base font-semibold text-foreground">
                {principle.title}
              </h3>

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

export { VendorTrustQuality }
