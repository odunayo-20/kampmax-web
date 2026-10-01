import {
  ArrowDown,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Store,
  Users,
  Wrench,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"

const ecosystemSurfaces = [
  {
    icon: Store,
    title: "Marketplace",
    subtitle: "List physical & digital products",
  },
  {
    icon: Wrench,
    title: "Services",
    subtitle: "Offer professional services & skills",
  },
  {
    icon: Briefcase,
    title: "Jobs",
    subtitle: "Recruit student & graduate talent",
  },
  {
    icon: Calendar,
    title: "Events",
    subtitle: "Promote pop-ups, fairs & workshops",
  },
]

function BusinessEcosystem() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-6">
        <Eyebrow>Connected Ecosystem</Eyebrow>
        <H2>More than a directory. One unified campus presence.</H2>
        <Lead>
          A single business on Kampmax can sell products on the Marketplace,
          offer professional services in the Services Directory, recruit student
          talent through Jobs, and promote activations through Events. Everything
          connects under your public business brand.
        </Lead>

        <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>
              <strong className="text-foreground">Cross-discovery:</strong> A
              student browsing products can discover your services and event
              activations without leaving the ecosystem.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>
              <strong className="text-foreground">Campus-anchored:</strong> Link
              your offerings to individual universities or broadcast regional
              opportunities.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>
              <strong className="text-foreground">Single public home:</strong> One
              clean web address to share with campus societies, students, and
              private clients.
            </span>
          </li>
        </ul>
      </div>

      <div
        aria-hidden="true"
        className="flex flex-col items-center gap-4 rounded-2xl border border-border/80 bg-linear-to-b from-card to-muted/30 p-6 shadow-xs sm:p-8"
      >
        <div className="flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-heading text-sm font-semibold text-primary">
          <Building2 className="size-4" aria-hidden="true" />
          <span>Your Business Presence</span>
        </div>

        <ArrowDown className="size-4 text-muted-foreground" aria-hidden="true" />

        <div className="grid w-full grid-cols-2 gap-3">
          {ecosystemSurfaces.map((surface) => (
            <Card key={surface.title} size="sm" className="bg-card">
              <CardContent className="flex flex-col gap-1.5 p-3.5">
                <span className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <surface.icon className="size-3.5" aria-hidden="true" />
                </span>
                <span className="font-heading text-xs font-semibold text-foreground">
                  {surface.title}
                </span>
                <span className="text-3xs text-muted-foreground">
                  {surface.subtitle}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <ArrowDown className="size-4 text-muted-foreground" aria-hidden="true" />

        <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/5 p-3 text-center">
          <Users className="size-4 text-primary" aria-hidden="true" />
          <span className="text-xs font-medium text-foreground">
            Campus Community (Students, Faculty, Residents)
          </span>
        </div>
      </div>
    </div>
  )
}

export { BusinessEcosystem }
