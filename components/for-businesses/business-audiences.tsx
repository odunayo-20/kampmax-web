import { businessAudiences } from "@/app/_data/for-businesses"
import { SectionHeading } from "@/components/layout/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

function BusinessAudiences() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Who It's For"
        title="Designed for businesses and organizers of every kind"
        description="Whether you operate an established neighborhood retail shop, offer skilled services, or run a student startup, Kampmax gives you a verified home on campus."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {businessAudiences.map((audience) => (
          <Card
            key={audience.title}
            id={audience.id}
            className={`h-full ${audience.id ? "scroll-mt-24" : ""}`}
          >
            <CardContent className="flex flex-col gap-3 p-5">
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <audience.icon className="size-4" aria-hidden="true" />
                </span>
                {audience.badge ? (
                  <Badge variant="secondary" className="text-2xs">
                    {audience.badge}
                  </Badge>
                ) : null}
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {audience.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { BusinessAudiences }
