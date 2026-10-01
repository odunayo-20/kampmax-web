import { experienceSteps } from "@/app/_data/how-it-works"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

/**
 * Purely illustrative preview of the Discover -> Explore -> Connect ->
 * Participate journey detailed later on this page. Hidden from assistive
 * tech since the journey section itself conveys the same information in
 * text.
 */
function HeroPreview() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-3">
      {experienceSteps.map((step, index) => (
        <Card
          key={step.title}
          size="sm"
          className={index % 2 === 1 ? "ml-4 sm:ml-10" : ""}
        >
          <CardContent className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <step.icon className="size-4" />
            </span>
            <div className="flex min-w-0 flex-col gap-0.5">
              <Badge variant="secondary">{step.title}</Badge>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export { HeroPreview }
