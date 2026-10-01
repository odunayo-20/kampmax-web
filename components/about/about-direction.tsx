import { directionPillars } from "@/app/_data/about"
import { SectionHeading } from "@/components/layout/section-heading"
import { Lead } from "@/components/ui/typography"

function AboutDirection() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Our Direction"
        title="Building a more connected future for campus life"
        description="We are focused on developing thoughtful digital tools that bring campus communities and local economies closer together."
      />

      <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-card via-card/70 to-primary/5 p-6 sm:p-10">
        <div className="flex flex-col gap-6">
          <p className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
            A steady, dedicated path toward interconnected campus communities.
          </p>
          <Lead className="text-sm sm:text-base">
            Our goal is to build digital infrastructure where students, local
            artisans, retailers, and event organizers can seamlessly interact.
            We are working step-by-step to improve how people discover products,
            access skills, and participate in opportunities across campus towns.
          </Lead>

          <div className="grid gap-6 pt-4 md:grid-cols-3">
            {directionPillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-2">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <pillar.icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { AboutDirection }
