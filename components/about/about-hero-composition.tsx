import {
  Briefcase,
  Calendar,
  GraduationCap,
  Store,
  Users,
  Wrench,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

function AboutHeroComposition() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex w-full max-w-lg flex-col gap-3 rounded-2xl border border-border/80 bg-gradient-to-b from-card/90 via-card/70 to-muted/30 p-5 shadow-sm sm:p-6"
    >
      {/* Central Ecosystem Hub Indicator */}
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-heading text-xs font-bold">
            K
          </span>
          <span className="font-heading text-sm font-semibold text-foreground">
            Kampmax Unified Ecosystem
          </span>
        </div>
        <Badge variant="outline" className="text-3xs text-muted-foreground">
          Campus Network
        </Badge>
      </div>

      {/* Grid of Interconnected Elements */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {/* Marketplace Node */}
        <Card size="sm" className="border-border/70 bg-card/95 transition-all">
          <CardContent className="flex flex-col gap-1.5 p-3">
            <div className="flex items-center justify-between">
              <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Store className="size-3" aria-hidden="true" />
              </span>
              <span className="text-3xs font-medium text-muted-foreground">
                Commerce
              </span>
            </div>
            <p className="font-heading text-xs font-semibold text-foreground">
              Marketplace
            </p>
            <p className="text-3xs text-muted-foreground line-clamp-1">
              Course books, supplies & tech kits
            </p>
          </CardContent>
        </Card>

        {/* Services Node */}
        <Card size="sm" className="border-border/70 bg-card/95 transition-all">
          <CardContent className="flex flex-col gap-1.5 p-3">
            <div className="flex items-center justify-between">
              <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Wrench className="size-3" aria-hidden="true" />
              </span>
              <span className="text-3xs font-medium text-muted-foreground">
                Skills
              </span>
            </div>
            <p className="font-heading text-xs font-semibold text-foreground">
              Local Services
            </p>
            <p className="text-3xs text-muted-foreground line-clamp-1">
              Repairs, design, tailoring & tutoring
            </p>
          </CardContent>
        </Card>

        {/* Jobs & Talent Node */}
        <Card size="sm" className="border-border/70 bg-card/95 transition-all">
          <CardContent className="flex flex-col gap-1.5 p-3">
            <div className="flex items-center justify-between">
              <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Briefcase className="size-3" aria-hidden="true" />
              </span>
              <span className="text-3xs font-medium text-muted-foreground">
                Careers
              </span>
            </div>
            <p className="font-heading text-xs font-semibold text-foreground">
              Jobs & Talent
            </p>
            <p className="text-3xs text-muted-foreground line-clamp-1">
              Internships, projects & student freelance
            </p>
          </CardContent>
        </Card>

        {/* Events Node */}
        <Card size="sm" className="border-border/70 bg-card/95 transition-all">
          <CardContent className="flex flex-col gap-1.5 p-3">
            <div className="flex items-center justify-between">
              <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Calendar className="size-3" aria-hidden="true" />
              </span>
              <span className="text-3xs font-medium text-muted-foreground">
                Activities
              </span>
            </div>
            <p className="font-heading text-xs font-semibold text-foreground">
              Campus Events
            </p>
            <p className="text-3xs text-muted-foreground line-clamp-1">
              Conferences, hackathons & festivals
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Community Anchor Footer Card */}
      <div className="flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs">
        <div className="flex items-center gap-2">
          <GraduationCap className="size-4 text-primary" aria-hidden="true" />
          <span className="font-medium text-foreground">
            Anchored to Nigerian Campuses & Towns
          </span>
        </div>
        <Users className="size-3.5 text-muted-foreground" aria-hidden="true" />
      </div>
    </div>
  )
}

export { AboutHeroComposition }
