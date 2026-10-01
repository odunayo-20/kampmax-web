import { Briefcase, GraduationCap, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const pathways = [
  {
    icon: GraduationCap,
    category: "Campus Role",
    campus: "OAU",
    title: "Departmental Lab Assistant",
    context: "Faculty of Technology • Hands-on lab supervision",
  },
  {
    icon: Briefcase,
    category: "Internship",
    campus: "UNILAG",
    title: "Frontend Engineering Intern",
    context: "Kora Technologies • Production React & TypeScript",
  },
  {
    icon: TrendingUp,
    category: "Graduate Role",
    campus: "Lagos / Remote",
    title: "Associate Product Designer",
    context: "VentureCraft Studio • UI/UX & Design Systems",
  },
]

/**
 * Purposeful visual composition communicating the progression of
 * opportunities within the Kampmax ecosystem:
 * Campus roles -> Practical internships -> Career trajectory.
 */
function JobsHeroComposition() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col gap-3 rounded-2xl border border-border/80 bg-linear-to-b from-card to-muted/30 p-5 shadow-xs sm:p-6"
    >
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Opportunity Pathways
        </span>
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          Campus to Industry
        </span>
      </div>

      <div className="flex flex-col gap-3 pt-1">
        {pathways.map((item, index) => (
          <Card
            key={item.title}
            size="sm"
            className={
              index === 1
                ? "border-primary/30 ring-1 ring-primary/20 shadow-xs sm:translate-x-2"
                : "opacity-90"
            }
          >
            <CardContent className="flex items-start gap-3 p-3.5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="size-4" aria-hidden="true" />
              </span>

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

                <p className="truncate text-xs text-muted-foreground">
                  {item.context}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
        <span>Curated for campus talent</span>
        <span className="font-medium text-foreground">Real organizations</span>
      </div>
    </div>
  )
}

export { JobsHeroComposition }
