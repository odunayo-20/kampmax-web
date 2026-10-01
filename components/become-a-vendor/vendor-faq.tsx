import { vendorFaqs } from "@/app/_data/become-a-vendor"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function VendorFaq() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="Everything you need to know before joining"
        description="Clear, honest answers about vendor eligibility, listing services, campus locations, and account setup."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {vendorFaqs.map((faq) => (
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

export { VendorFaq }
