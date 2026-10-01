import { Briefcase, Building2, Sparkles, Store, Wrench } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const businessCards = [
  {
    icon: Store,
    category: "Marketplace Vendor",
    campus: "UNILAG",
    title: "Campus Essentials & Supplies",
    context: "Physical & digital goods discoverable by students",
  },
  {
    icon: Wrench,
    category: "Service Provider",
    campus: "OAU & UI",
    title: "Hardware Diagnostics & Repairs",
    context: "Direct service inquiries from students & faculty",
    highlight: true,
  },
  {
    icon: Briefcase,
    category: "Talent Partner",
    campus: "All Campuses",
    title: "Engineering & Design Internships",
    context: "Recruiting ambitious campus creators & builders",
  },
]

/**
 * Purposeful visual composition for the For Businesses hero,
 * illustrating how vendors, service providers, and employers
 * reach campus populations through Kampmax.
 */
function BusinessHeroComposition() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col gap-3 rounded-2xl border border-border/80 bg-linear-to-b from-card to-muted/30 p-5 shadow-xs sm:p-6"
    >
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <Building2 className="size-4 text-primary" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Business Presence
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          <Sparkles className="size-3" aria-hidden="true" />
          Multi-Campus Reach
        </span>
      </div>

      <div className="flex flex-col gap-3 pt-1">
        {businessCards.map((card) => (
          <Card
            key={card.title}
            size="sm"
            className={
              card.highlight
                ? "border-primary/30 ring-1 ring-primary/20 shadow-xs sm:translate-x-2"
                : "opacity-90"
            }
          >
            <CardContent className="flex items-center gap-3.5 p-3.5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <card.icon className="size-4" aria-hidden="true" />
              </span>

              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge variant="secondary" className="text-2xs">
                    {card.category}
                  </Badge>
                  <span className="text-2xs text-muted-foreground">
                    {card.campus}
                  </span>
                </div>

                <p className="truncate text-sm font-semibold text-foreground">
                  {card.title}
                </p>

                <p className="truncate text-xs text-muted-foreground">
                  {card.context}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
        <span>Connect with active campus demand</span>
        <span className="font-medium text-foreground">Products • Services • Jobs</span>
      </div>
    </div>
  )
}

export { BusinessHeroComposition }
