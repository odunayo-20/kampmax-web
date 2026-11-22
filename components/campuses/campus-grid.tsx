import { Compass } from "lucide-react"

import { CampusCard } from "@/components/campuses/campus-card"
import type { Campus } from "@/types/campus"
import { EmptyState } from "@/components/shared/empty-state"

function CampusGrid({ campuses }: { campuses: Campus[] }) {
  if (campuses.length === 0) {
    return (
      <EmptyState icon={Compass} title="No campuses available yet" description="We&apos;re configuring new campuses. Check back soon to see which ones are live." />
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
      {campuses.map((campus) => (
        <CampusCard key={campus.slug} campus={campus} />
      ))}
    </div>
  )
}

export { CampusGrid }
