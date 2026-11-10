import { agentJourneySteps } from "@/app/_data/become-an-agent"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Muted } from "@/components/ui/typography"

function AgentHowItWorks() {
  return (
    <div id="how-it-works" className="scroll-mt-16 flex flex-col gap-10">
      <SectionHeading
        eyebrow="How It Works"
        title="From sign-up to your first enquiry"
        description="Five steps. The application, your listings and your enquiries are all handled inside the Kampmax app."
      />

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {agentJourneySteps.map((step) => (
          <li key={step.number} className="h-full">
            <Card className="h-full border-border/80">
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
          </li>
        ))}
      </ol>

      <div className="rounded-xl border border-border bg-card p-4 text-center">
        <Muted className="text-xs">
          Applying, uploading documents and managing listings take place inside the
          signed-in Kampmax app, not on this website.
        </Muted>
      </div>
    </div>
  )
}

export { AgentHowItWorks }
