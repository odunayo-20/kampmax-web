import { Compass } from "lucide-react"

import { CampusCard } from "@/components/campuses/campus-card"
import type { Campus } from "@/types/campus"

function CampusGrid({ campuses }: { campuses: Campus[] }) {
  if (campuses.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
        <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <Compass className="size-5" aria-hidden="true" />
        </span>
        <p className="font-heading text-lg font-semibold text-foreground">
          No campuses available yet
        </p>
        <p className="max-w-sm text-sm text-muted-foreground">
          We&apos;re configuring new campuses. Check back soon to see which
          ones are live.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {campuses.map((campus) => (
        <CampusCard key={campus.slug} campus={campus} />
      ))}
    </div>
  )
}

export { CampusGrid }
