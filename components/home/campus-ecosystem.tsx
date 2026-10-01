import { MapPin } from "lucide-react"

import { Eyebrow, H2, Lead } from "@/components/ui/typography"

const places = ["Campus Center", "Residence Halls", "Engineering Quad", "Downtown"]

function CampusEcosystem() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-4">
        <Eyebrow>Built around your campus</Eyebrow>
        <H2>Organized by campus, not a generic national feed.</H2>
        <Lead>
          What you see on Kampmax reflects what&apos;s actually happening
          around you — find people, businesses, and opportunities close to
          where you study and live.
        </Lead>
      </div>

      <div
        aria-hidden="true"
        className="grid grid-cols-2 gap-3 sm:max-w-sm sm:justify-self-end"
      >
        {places.map((place) => (
          <div
            key={place}
            className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card px-4 py-6 text-center text-sm font-medium text-foreground shadow-sm ring-1 ring-accent-500/15"
          >
            <MapPin className="size-4 text-primary-600" aria-hidden="true" />
            {place}
          </div>
        ))}
      </div>
    </div>
  )
}

export { CampusEcosystem }
