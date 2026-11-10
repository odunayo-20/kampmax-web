import { agentFaqs } from "@/app/_data/become-an-agent"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function AgentFaq() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="Before you apply"
        description="Straight answers about who can apply, what it costs and what happens to your listing."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {agentFaqs.map((faq) => (
          <Card key={faq.question} className="h-full border-border/80">
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="font-heading text-base font-semibold text-foreground">
                {faq.question}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {faq.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { AgentFaq }
