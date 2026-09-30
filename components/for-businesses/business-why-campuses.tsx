import { campusReasons } from "@/app/_data/for-businesses"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Lead } from "@/components/ui/typography"

function BusinessWhyCampuses() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Campus Opportunity"
        title="Why campus communities matter for your business"
        description="Campuses are active, concentrated micro-economies where students, faculty, and local entrepreneurs interact every single day."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {campusReasons.map((reason) => (
          <Card key={reason.title} className="h-full">
            <CardContent className="flex flex-col gap-3 p-6 sm:p-8">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <reason.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-2xl border border-border/80 bg-gradient-to-r from-primary/5 via-card to-primary/5 p-6 sm:p-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-base font-semibold text-foreground sm:text-lg">
            Active communities are built on proximity, trust, and shared daily routines.
          </p>
          <Lead className="mt-2 text-xs sm:text-sm">
            Whether students are ordering groceries for late-night study sessions, booking reliable barber and repair services, or looking for their first internship, Kampmax connects your business to the pulse of campus life.
          </Lead>
        </div>
      </div>
    </div>
  )
}

export { BusinessWhyCampuses }
