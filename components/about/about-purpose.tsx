import { HeartHandshake } from "lucide-react"

import { Lead } from "@/components/ui/typography"

function AboutPurpose() {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-border/80 bg-gradient-to-b from-card via-card to-muted/20 p-8 text-center sm:p-12">
      <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <HeartHandshake className="size-5" aria-hidden="true" />
      </div>

      <h2 className="mt-4 font-heading text-xl font-semibold text-foreground sm:text-2xl">
        Building with purpose and stewardship
      </h2>

      <Lead className="mt-3 text-sm sm:text-base">
        Kampmax was founded on the conviction that technology should serve
        people with integrity, patience, and genuine goodwill. We approach our
        mission with humility, mindful that our responsibility is to build
        honest tools that uplift students, support hardworking merchants, and
        strengthen campus communities.
      </Lead>
    </div>
  )
}

export { AboutPurpose }
