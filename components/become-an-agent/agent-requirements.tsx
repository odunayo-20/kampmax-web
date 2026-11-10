import { agentRequirements, agentRules } from "@/app/_data/become-an-agent"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function AgentRequirements() {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="What You Need"
          title="Have these ready before you apply"
          description="Documents go to the review team only. They are checked once, and you are told what is missing if anything is unclear."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {agentRequirements.map((item) => (
            <Card key={item.title} className="h-full border-border/80">
              <CardContent className="flex flex-col gap-3 p-6">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
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

      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Trust And Safety"
          title="Rules that protect students and honest agents"
          description="Students can rely on what they see, which is what makes your listing worth contacting."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {agentRules.map((rule) => (
            <Card key={rule.title} className="h-full border-border/80">
              <CardContent className="flex gap-4 p-6">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <rule.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {rule.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {rule.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export { AgentRequirements }
