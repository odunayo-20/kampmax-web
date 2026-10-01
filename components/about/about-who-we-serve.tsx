import { communityParticipants } from "@/app/_data/about"
import { SectionHeading } from "@/components/layout/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

function AboutWhoWeServe() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Who We Serve"
        title="Designed for campus communities and local ecosystems"
        description="Whether you are learning, selling, offering a skill, hiring, or organizing, Kampmax provides a dedicated space tailored to your needs."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {communityParticipants.map((participant) => (
          <Card key={participant.role} className="flex h-full flex-col border-border/80">
            <CardContent className="flex flex-1 flex-col gap-3.5 p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <participant.icon className="size-4" aria-hidden="true" />
                </span>
                <Badge variant="secondary" className="text-2xs font-normal">
                  {participant.badge}
                </Badge>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {participant.role}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {participant.description}
                </p>
              </div>

              <div className="mt-auto border-t border-border/60 pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {participant.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-muted px-2 py-0.5 text-3xs font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { AboutWhoWeServe }
