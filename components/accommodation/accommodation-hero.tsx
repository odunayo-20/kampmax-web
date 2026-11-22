import Link from "next/link"
import { ArrowRight, BadgeCheck, Receipt, ShieldCheck } from "lucide-react"

import { PageHero, heroActionClass } from "@/components/shared/page-hero"

const points = [
  { icon: BadgeCheck, label: "Every agent is verified" },
  { icon: Receipt, label: "See rent and all fees up front" },
  { icon: ShieldCheck, label: "No fake listings, no pressure" },
]

/** Hero for the accommodation pages. Pass a campus name for a campus page. */
function AccommodationHero({ campusName, count }: { campusName?: string; count?: number }) {
  return (
    <PageHero
      eyebrow={
        count ? `Accommodation · ${count} ${count === 1 ? "place" : "places"} available` : "Accommodation"
      }
      title={
        campusName ? (
          <>
            Student accommodation near{" "}
            <span className="text-gradient-brand">{campusName}.</span>
          </>
        ) : (
          <>
            Find a place to live{" "}
            <span className="text-gradient-brand">near your campus.</span>
          </>
        )
      }
      description="Browse hostels, self-contain rooms and apartments from verified agents. See the rent and every fee before you visit, and ask questions without sharing your number."
      actions={
        <>
          <Link href="#browse" className={heroActionClass("primary")}>
            Browse places
            <ArrowRight />
          </Link>
          <Link href="/become-an-agent" className={heroActionClass("ghost")}>
            List a property
          </Link>
        </>
      }
      points={points}
    />
  )
}

export { AccommodationHero }
