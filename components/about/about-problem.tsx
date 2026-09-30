import { problemChallenges } from "@/app/_data/about"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function AboutProblem() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="The Challenge"
        title="The fragmented reality of campus daily life"
        description="University towns are densely packed with vitality, commerce, and talent. Yet discovering what is available often remains scattered across informal, disjointed channels."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problemChallenges.map((challenge) => (
          <Card key={challenge.title} className="h-full">
            <CardContent className="flex flex-col gap-3 p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <challenge.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {challenge.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {challenge.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { AboutProblem }
