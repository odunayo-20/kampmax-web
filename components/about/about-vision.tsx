import { Compass, Sparkles, TrendingUp } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { Lead } from "@/components/ui/typography"

function AboutVision() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Our Vision"
        title="Reliable digital infrastructure for university life"
        description="We are building practical tools that make campus communities more discoverable, interconnected, and economically empowering."
      />

      <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-card via-card/70 to-primary/5 p-6 sm:p-10">
        <div className="flex flex-col gap-6">
          <p className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
            Where finding what you need on campus is simple, organized, and open to all.
          </p>
          <Lead className="text-sm sm:text-base">
            We envision campus ecosystems where finding an affordable textbook,
            booking a trusted laptop technician, securing your first technical
            internship, or promoting a departmental festival does not depend on
            which WhatsApp group you happen to be in.
          </Lead>

          <div className="grid gap-6 pt-4 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Compass className="size-4" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground">
                Effortless Discovery
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Bringing structured catalogs, clear categories, and localized campus filters to daily student commerce.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <TrendingUp className="size-4" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground">
                Grassroots Enterprise
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Empowering student entrepreneurs, local artisans, and neighborhood vendors to establish durable credibility.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground">
                Connected Culture
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Ensuring that sports, conferences, creative exhibitions, and hackathons find the audiences they deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AboutVision }
