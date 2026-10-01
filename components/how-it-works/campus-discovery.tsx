import { MapPin } from "lucide-react"

import { Eyebrow, H2, Lead } from "@/components/ui/typography"

function CampusDiscovery() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-4">
        <Eyebrow>Campus &amp; Local Discovery</Eyebrow>
        <H2>Discover what&apos;s around you.</H2>
        <Lead>
          Kampmax is designed around real campuses and communities, so what
          you see reflects the people, products, services, and events
          actually near you — not a generic national feed.
        </Lead>
      </div>

      <div
        aria-hidden="true"
        className="flex h-48 items-center justify-center rounded-lg bg-primary-50 text-primary-400 lg:h-full"
      >
        <MapPin className="size-10" />
      </div>
    </div>
  )
}

export { CampusDiscovery }
