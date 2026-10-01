import { contactFaqs } from "@/app/_data/contact"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function ContactFaq() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Quick Help"
        title="Frequently asked questions"
        description="Find fast answers to common questions about Kampmax, accounts, and opportunities."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {contactFaqs.map((faq) => (
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

export { ContactFaq }
