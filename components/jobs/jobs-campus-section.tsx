import { Briefcase, GraduationCap, Sparkles, Store } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

const campusPathways = [
  {
    icon: GraduationCap,
    title: "On-Campus Positions",
    description:
      "Lab technical assistants, departmental coordinators, and campus roles structured around academic lecture schedules.",
  },
  {
    icon: Store,
    title: "Local & Campus Businesses",
    description:
      "Opportunities with student ventures, campus retailers, and small commercial establishments operating in and around the university area.",
  },
  {
    icon: Briefcase,
    title: "Regional & Industry Internships",
    description:
      "Structured internship placements with technology, finance, and engineering firms recruiting directly from campus cohorts.",
  },
  {
    icon: Sparkles,
    title: "Freelance & Project Gigs",
    description:
      "Short-term creative, technical, design, and event projects initiated by campus societies, organizers, and peer founders.",
  },
]

function JobsCampusSection() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Campus Pathways"
        title="Opportunities grounded in your campus community"
        description="Rather than treating all listings as anonymous global feeds, Kampmax surfaces opportunities connected to university departments, student ventures, and regional employers."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {campusPathways.map((item) => (
          <Card key={item.title} className="h-full">
            <CardContent className="flex flex-col gap-2.5 p-5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-foreground">
                <item.icon className="size-4" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { JobsCampusSection }
