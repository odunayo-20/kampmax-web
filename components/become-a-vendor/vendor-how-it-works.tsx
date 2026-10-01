import { vendorJourneySteps } from "@/app/_data/become-a-vendor"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Muted } from "@/components/ui/typography"

function VendorHowItWorks() {
  return (
    <div id="how-it-works" className="scroll-mt-16 flex flex-col gap-10">
      <SectionHeading
        eyebrow="The Onboarding Process"
        title="Five straightforward steps to get started"
        description="A clear pathway from registration to campus discovery. Account setup and ongoing management happen inside the Kampmax app."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {vendorJourneySteps.map((step) => (
          <Card key={step.number} className="h-full border-border/80">
            <CardContent className="flex flex-col gap-3 p-5">
              <span className="font-heading text-2xl font-bold text-primary">
                {step.number}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card p-4 text-center">
        <Muted className="text-xs">
          Profile verification, inventory uploading, service editing, and customer
          interactions take place inside the authenticated Kampmax application.
        </Muted>
      </div>
    </div>
  )
}

export { VendorHowItWorks }
