import {
  ArrowDown,
  Building2,
  GraduationCap,
  Layers,
  Sparkles,
  Store,
  Users,
  Wrench,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

function VendorHeroComposition() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex w-full max-w-md flex-col items-center gap-2.5 rounded-2xl border border-border/80 bg-gradient-to-b from-card via-card to-muted/20 p-5 shadow-xs sm:p-6"
    >
      {/* 1. Origin: Person / Business */}
      <div className="flex w-full items-center justify-between rounded-xl border border-border bg-card p-3 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Building2 className="size-4" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="font-heading text-xs font-semibold text-foreground">
              Person or Business
            </span>
            <span className="text-3xs text-muted-foreground">
              Student creator, local merchant, artisan
            </span>
          </div>
        </div>
        <Sparkles className="size-3.5 text-muted-foreground" aria-hidden="true" />
      </div>

      <ArrowDown className="size-3.5 text-muted-foreground" aria-hidden="true" />

      {/* 2. Offering: Products or Services */}
      <div className="grid w-full grid-cols-2 gap-2">
        <Card size="sm" className="border-border/70 bg-card">
          <CardContent className="flex items-center gap-2 p-2.5">
            <Store className="size-3.5 text-primary shrink-0" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-heading text-2xs font-semibold text-foreground">
                Products
              </span>
              <span className="text-3xs text-muted-foreground line-clamp-1">
                Books, tech, food
              </span>
            </div>
          </CardContent>
        </Card>

        <Card size="sm" className="border-border/70 bg-card">
          <CardContent className="flex items-center gap-2 p-2.5">
            <Wrench className="size-3.5 text-primary shrink-0" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-heading text-2xs font-semibold text-foreground">
                Services
              </span>
              <span className="text-3xs text-muted-foreground line-clamp-1">
                Repairs, tutoring
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <ArrowDown className="size-3.5 text-muted-foreground" aria-hidden="true" />

      {/* 3. Channel: Kampmax Campus Ecosystem */}
      <div className="flex w-full items-center justify-between rounded-xl border border-primary/30 bg-primary/10 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Layers className="size-4 text-primary" aria-hidden="true" />
          <span className="font-heading text-xs font-semibold text-primary">
            Kampmax Discovery Layer
          </span>
        </div>
        <span className="text-3xs font-medium text-primary">Campus-Anchored</span>
      </div>

      <ArrowDown className="size-3.5 text-muted-foreground" aria-hidden="true" />

      {/* 4. Audience: Campus Community */}
      <div className="flex w-full items-center justify-between rounded-xl border border-border bg-card p-3 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-muted text-foreground">
            <GraduationCap className="size-4 text-primary" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="font-heading text-xs font-semibold text-foreground">
              Campus Community
            </span>
            <span className="text-3xs text-muted-foreground">
              Students, faculty, campus residents
            </span>
          </div>
        </div>
        <Users className="size-3.5 text-muted-foreground" aria-hidden="true" />
      </div>
    </div>
  )
}

export { VendorHeroComposition }
