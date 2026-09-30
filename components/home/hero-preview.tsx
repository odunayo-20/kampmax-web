import { Briefcase, Calendar, Store } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const tiles = [
  {
    icon: Store,
    label: "Marketplace",
    title: "Desk lamp, barely used",
    meta: "Near North Campus",
  },
  {
    icon: Briefcase,
    label: "Jobs",
    title: "Weekend barista, campus café",
    meta: "Part-time",
  },
  {
    icon: Calendar,
    label: "Events",
    title: "Fall welcome fair",
    meta: "This Saturday",
  },
]

/**
 * Purely illustrative — a small composition of representative listing
 * cards standing in for the ecosystem, not a literal product screenshot.
 * Hidden from assistive tech since the hero copy already conveys the
 * same information in text.
 */
function HeroPreview() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-3">
      {tiles.map((tile, index) => (
        <Card
          key={tile.title}
          size="sm"
          className={index === 1 ? "ml-4 sm:ml-10" : ""}
        >
          <CardContent className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
              <tile.icon className="size-4" />
            </span>
            <div className="flex min-w-0 flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{tile.label}</Badge>
                <span className="text-xs text-muted-foreground">
                  {tile.meta}
                </span>
              </div>
              <p className="truncate text-sm font-medium text-foreground">
                {tile.title}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export { HeroPreview }
