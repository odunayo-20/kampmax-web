import { Compass, TrendingUp, Users } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    icon: Compass,
    title: "Discover Relevant Roles",
    description:
      "Find internships, campus positions, and entry-level opportunities aligned with your discipline and campus environment — without wading through disconnected corporate feeds.",
  },
  {
    icon: Users,
    title: "Connect with Real Teams",
    description:
      "Engage directly with faculty initiatives, student startups, campus-adjacent businesses, and employers actively seeking motivated talent.",
  },
  {
    icon: TrendingUp,
    title: "Build Lasting Experience",
    description:
      "Translate academic knowledge into demonstrable project milestones, professional references, and career momentum while completing your studies.",
  },
]

function JobsValueProps() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Why Kampmax"
        title="Built for genuine career and project momentum"
        description="Kampmax integrates opportunities into the campus ecosystem, making it easier to discover roles, collaborate with credible organizations, and grow."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="h-full">
            <CardContent className="flex flex-col gap-3 p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <pillar.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { JobsValueProps }
