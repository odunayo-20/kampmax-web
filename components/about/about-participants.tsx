import { communityParticipants } from "@/app/_data/about"
import { SectionHeading } from "@/components/layout/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

function AboutParticipants() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Community Roles"
        title="Built for everyone who shapes campus life"
        description="From students navigating coursework to neighborhood shops and campus organizers, Kampmax gives each participant a dedicated presence."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {communityParticipants.map((participant) => (
          <Card key={participant.role} className="flex h-full flex-col">
            <CardContent className="flex flex-1 flex-col gap-3.5 p-5">
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
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {participant.description}
                </p>
              </div>

              <div className="mt-auto border-t border-border/60 pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {participant.actions.map((act) => (
                    <span
                      key={act}
                      className="rounded-md bg-muted px-2 py-0.5 text-3xs font-medium text-foreground"
                    >
                      {act}
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

export { AboutParticipants }
