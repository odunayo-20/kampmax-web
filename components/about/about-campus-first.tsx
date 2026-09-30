import { Building2, Globe2, GraduationCap } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function AboutCampusFirst() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Architectural Principle"
        title="Campus-first, not campus-limited"
        description="Campuses are our anchor, but real campus life extends far beyond university gates into host towns and digital workspaces."
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="h-full border-border/80">
          <CardContent className="flex flex-col gap-3 p-6 sm:p-8">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-2xs font-semibold uppercase tracking-wider text-primary">
                The Foundation
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Campus Core
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Undergraduates, postgraduates, academic societies, and departmental
              associations driving the daily cadence of campus activities, study
              cycles, and social events.
            </p>
          </CardContent>
        </Card>

        <Card className="h-full border-border/80">
          <CardContent className="flex flex-col gap-3 p-6 sm:p-8">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Building2 className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-2xs font-semibold uppercase tracking-wider text-primary">
                The Surroundings
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Local Town Community
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Neighborhood retail merchants, stationery shops, hardware repairers,
              stylists, and dining hubs situated directly around university gates
              and student residential quarters.
            </p>
          </CardContent>
        </Card>

        <Card className="h-full border-border/80">
          <CardContent className="flex flex-col gap-3 p-6 sm:p-8">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Globe2 className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-2xs font-semibold uppercase tracking-wider text-primary">
                The Horizon
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Digital Opportunities
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Remote freelance contracts, cross-university innovation programs,
              and career recruitment connecting ambitious student talent to regional
              and global markets.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export { AboutCampusFirst }
