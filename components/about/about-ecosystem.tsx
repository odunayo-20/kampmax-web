import {
  ArrowDown,
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Layers,
  Store,
  Wrench,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"

function AboutEcosystem() {
  return (
    <div id="ecosystem" className="scroll-mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-6">
        <Eyebrow>The Ecosystem</Eyebrow>
        <H2>An interconnected campus architecture</H2>
        <Lead>
          Kampmax is not an assortment of disconnected tools. Every product
          listed, service booked, job posted, and event announced is anchored
          directly to specific campus communities and the people who make them
          thrive.
        </Lead>

        <ul className="flex flex-col gap-3.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>
              <strong className="text-foreground">Unified Profile:</strong> A
              single account can participate as a student buyer, publish as an
              independent freelancer, or run a campus store.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>
              <strong className="text-foreground">Cross-Disciplinary Discovery:</strong>{" "}
              Someone browsing course materials naturally encounters campus tutors,
              technical repair services, and career opportunities.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>
              <strong className="text-foreground">Geographic Anchor:</strong>{" "}
              Filtering by campus reflects the actual physical and social
              realities of university life.
            </span>
          </li>
        </ul>
      </div>

      <div
        aria-hidden="true"
        className="flex flex-col items-center gap-3.5 rounded-2xl border border-border/80 bg-gradient-to-b from-card via-card/80 to-muted/30 p-6 shadow-xs sm:p-8"
      >
        {/* Core Hub */}
        <div className="flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 font-heading text-sm font-semibold text-primary">
          <Layers className="size-4" aria-hidden="true" />
          <span>Kampmax Core Ecosystem</span>
        </div>

        <ArrowDown className="size-3.5 text-muted-foreground" aria-hidden="true" />

        {/* Primary Functional Triad */}
        <div className="grid w-full grid-cols-3 gap-2.5">
          <Card size="sm" className="bg-card">
            <CardContent className="flex flex-col items-center gap-1.5 p-3 text-center">
              <span className="flex size-7 items-center justify-center rounded-md bg-muted text-primary">
                <Store className="size-3.5" aria-hidden="true" />
              </span>
              <span className="font-heading text-xs font-semibold text-foreground">
                Marketplace
              </span>
              <span className="text-3xs text-muted-foreground">Products</span>
            </CardContent>
          </Card>

          <Card size="sm" className="bg-card">
            <CardContent className="flex flex-col items-center gap-1.5 p-3 text-center">
              <span className="flex size-7 items-center justify-center rounded-md bg-muted text-primary">
                <Wrench className="size-3.5" aria-hidden="true" />
              </span>
              <span className="font-heading text-xs font-semibold text-foreground">
                Services
              </span>
              <span className="text-3xs text-muted-foreground">Providers</span>
            </CardContent>
          </Card>

          <Card size="sm" className="bg-card">
            <CardContent className="flex flex-col items-center gap-1.5 p-3 text-center">
              <span className="flex size-7 items-center justify-center rounded-md bg-muted text-primary">
                <Briefcase className="size-3.5" aria-hidden="true" />
              </span>
              <span className="font-heading text-xs font-semibold text-foreground">
                Jobs
              </span>
              <span className="text-3xs text-muted-foreground">Opportunities</span>
            </CardContent>
          </Card>
        </div>

        <ArrowDown className="size-3.5 text-muted-foreground" aria-hidden="true" />

        {/* Unifying Activities Layer */}
        <div className="flex w-full items-center justify-between rounded-xl border border-border bg-card/90 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-primary" aria-hidden="true" />
            <span className="text-xs font-medium text-foreground">
              Campus Events & Activities
            </span>
          </div>
          <span className="text-3xs font-semibold uppercase tracking-wider text-muted-foreground">
            Schedules & Pop-ups
          </span>
        </div>

        <ArrowDown className="size-3.5 text-muted-foreground" aria-hidden="true" />

        {/* Campuses & Community Foundation */}
        <div className="flex w-full flex-col gap-2 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <GraduationCap className="size-4 text-primary" aria-hidden="true" />
            <span className="font-heading text-xs font-semibold text-foreground">
              Localized Campus Hubs
            </span>
          </div>
          <p className="text-3xs text-muted-foreground">
            Connecting students, lecturers, local vendors, and neighborhood communities
          </p>
        </div>
      </div>
    </div>
  )
}

export { AboutEcosystem }
