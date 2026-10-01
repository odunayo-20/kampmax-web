import { Briefcase, GraduationCap, Sparkles, Store } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

const campusStreams = [
  {
    icon: GraduationCap,
    title: "Academic & Departmental Colloquiums",
    description:
      "Public scientific symposia, research poster sessions, and guest academic lectures hosted across university faculties.",
  },
  {
    icon: Sparkles,
    title: "Student Societies & Cultural Guilds",
    description:
      "Theatrical showcases, poetry nights, association meetings, and cultural celebrations organized by campus groups.",
  },
  {
    icon: Briefcase,
    title: "Tech Summits & Hackathons",
    description:
      "Developer jams, design hackathons, student venture pitches, and career clinics held in campus computer centers and lecture theaters.",
  },
  {
    icon: Store,
    title: "Pop-Up Fairs & Campus Markets",
    description:
      "Merchant exhibitions, student creator markets, and food fairs bringing energy and commerce to university arenas and halls.",
  },
]

function EventsCampusSection() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Campus Streams"
        title="Events organized around your university ground"
        description="Every campus has its own distinct rhythm. Kampmax makes it easy to discover what is happening across your institution and neighboring campus communities."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {campusStreams.map((item) => (
          <Card key={item.title} className="h-full">
            <CardContent className="flex flex-col gap-2.5 p-5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
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

export { EventsCampusSection }
