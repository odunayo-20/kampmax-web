import { eligibleAudiences } from "@/app/_data/become-a-vendor"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function VendorAudiences() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Who Can Join"
        title="Designed for creators, merchants, and specialists"
        description="Whether you are an undergraduate running a hostel side venture or an established neighborhood shop, Kampmax provides space for legitimate offerings."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {eligibleAudiences.map((audience) => (
          <Card key={audience.role} className="h-full border-border/80">
            <CardContent className="flex flex-col gap-3 p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <audience.icon className="size-5" aria-hidden="true" />
              </span>

              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {audience.role}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {audience.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { VendorAudiences }
