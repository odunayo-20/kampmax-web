import { businessJourneySteps } from "@/app/_data/for-businesses"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Muted } from "@/components/ui/typography"

function BusinessHowItWorks() {
  return (
    <div id="how-it-works" className="scroll-mt-16 flex flex-col gap-10">
      <SectionHeading
        eyebrow="Onboarding Journey"
        title="How getting started works"
        description="A straightforward process to publish your offerings and connect with campus communities."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {businessJourneySteps.map((step) => (
          <Card key={step.number} className="h-full">
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
          Account creation, inventory configuration, job publishing, and order
          coordination are managed securely inside the authenticated Kampmax
          application.
        </Muted>
      </div>
    </div>
  )
}

export { BusinessHowItWorks }
