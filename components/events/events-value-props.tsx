import { Compass, Sparkles, Users } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    icon: Compass,
    title: "Discover Activities That Matter",
    description:
      "Find academic talks, hackathons, creative showcases, and club gatherings aligned with your field and personal interests — organized right around your campus.",
  },
  {
    icon: Users,
    title: "Participate Beyond the Classroom",
    description:
      "Experience campus life as an active contributor. Join student initiatives, compete in design jams, attend workshops, and engage with the wider university community.",
  },
  {
    icon: Sparkles,
    title: "Connect Through Shared Focus",
    description:
      "Meet fellow students, departmental faculty, guest innovators, and local organizers who share your passions and build lasting community connections.",
  },
]

function EventsValueProps() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Why Events on Kampmax"
        title="The pulse of the campus ecosystem"
        description="Events on Kampmax bridge student societies, academic faculties, creative arts, and campus culture into one unified discovery stream."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="h-full">
            <CardContent className="flex flex-col gap-3 p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <pillar.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { EventsValueProps }
