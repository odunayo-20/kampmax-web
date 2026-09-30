import { Calendar, MapPin, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const previewEvents = [
  {
    month: "NOV",
    day: "20",
    category: "Career & Tech",
    campus: "UNILAG",
    title: "UNILAG Tech & Innovation Summit",
    context: "Main Auditorium • 09:30 AM",
  },
  {
    month: "DEC",
    day: "04",
    category: "Hackathon",
    campus: "OAU",
    title: "OAU Annual 24-Hour Code Jam",
    context: "Faculty of Technology • Overnight",
    highlight: true,
  },
  {
    month: "NOV",
    day: "12",
    category: "Academic",
    campus: "UI",
    title: "UI Multidisciplinary Symposium",
    context: "Trenchard Hall • 09:00 AM",
  },
]

/**
 * Purposeful visual composition for the Events hero, showcasing
 * upcoming campus activities, distinct dates, and campus locations.
 */
function EventsHeroComposition() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col gap-3 rounded-2xl border border-border/80 bg-gradient-to-b from-card to-muted/30 p-5 shadow-xs sm:p-6"
    >
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <Calendar className="size-4 text-primary" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Campus Activity Stream
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          <Sparkles className="size-3" aria-hidden="true" />
          Live on Campus
        </span>
      </div>

      <div className="flex flex-col gap-3 pt-1">
        {previewEvents.map((item) => (
          <Card
            key={item.title}
            size="sm"
            className={
              item.highlight
                ? "border-primary/30 ring-1 ring-primary/20 shadow-xs sm:translate-x-2"
                : "opacity-90"
            }
          >
            <CardContent className="flex items-center gap-3.5 p-3.5">
              <div className="flex w-11 shrink-0 flex-col items-center justify-center rounded-lg border border-border bg-muted/50 p-1.5 text-center">
                <span className="text-3xs font-bold uppercase text-primary">
                  {item.month}
                </span>
                <span className="font-heading text-base font-bold text-foreground">
                  {item.day}
                </span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge variant="secondary" className="text-2xs">
                    {item.category}
                  </Badge>
                  <span className="text-2xs text-muted-foreground">
                    {item.campus}
                  </span>
                </div>

                <p className="truncate text-sm font-semibold text-foreground">
                  {item.title}
                </p>

                <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                  <MapPin className="size-3 shrink-0" aria-hidden="true" />
                  {item.context}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
        <span>Across 8+ campus communities</span>
        <span className="font-medium text-foreground">Student & faculty led</span>
      </div>
    </div>
  )
}

export { EventsHeroComposition }
