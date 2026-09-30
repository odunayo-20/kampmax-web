import type { LucideIcon } from "lucide-react"
import { Briefcase, Building2, Calendar, Sparkles, Store, Wrench } from "lucide-react"

import type { Campus } from "@/types/campus"

/**
 * Local campus data. Kept behind `getCampusBySlug`/`getEnabledCampuses`
 * rather than read directly by components, so this can later be swapped
 * for a Kampmax API call without touching any presentation code.
 */
const campuses: Campus[] = [
  {
    slug: "rugipo",
    name: "Rufus Giwa Polytechnic",
    shortName: "RUGIPO",
    location: "Owo, Ondo State",
    description:
      "RUGIPO students and vendors in Owo now have a home on Kampmax, set up and ready as the local community gets active.",
    enabled: true,
  },
  {
    slug: "oau",
    name: "Obafemi Awolowo University",
    shortName: "OAU",
    location: "Ile-Ife, Osun State",
    description:
      "Kampmax is live for the OAU community in Ile-Ife, with the marketplace, services, and events pieces ready to fill in as things launch locally.",
    enabled: true,
  },
  {
    slug: "ui",
    name: "University of Ibadan",
    shortName: "UI",
    location: "Ibadan, Oyo State",
    description:
      "The UI campus in Ibadan is one of Kampmax's configured communities — everything here is set up to grow with local activity.",
    enabled: true,
  },
  {
    slug: "unilag",
    name: "University of Lagos",
    shortName: "UNILAG",
    location: "Lagos",
    description:
      "Kampmax connects the UNILAG community around Lagos, bringing marketplace, services, and campus activity into one place as it rolls out.",
    enabled: true,
  },
  {
    slug: "unn",
    name: "University of Nigeria, Nsukka",
    shortName: "UNN",
    location: "Nsukka, Enugu State",
    description:
      "For the UNN community in Nsukka, Kampmax is configured and ready — local listings and events will appear here as they go live.",
    enabled: true,
  },
  {
    slug: "abu",
    name: "Ahmadu Bello University",
    shortName: "ABU",
    location: "Zaria, Kaduna State",
    description:
      "Kampmax is set up for ABU's Zaria campus, ready to organize local marketplace, services, and events as the community gets going.",
    enabled: true,
  },
  {
    slug: "uniabuja",
    name: "University of Abuja",
    shortName: "UNIABUJA",
    location: "Abuja, FCT",
    description:
      "The UNIABUJA community in Abuja has a configured home on Kampmax, ready to fill in with local activity as it launches.",
    enabled: true,
  },
  {
    slug: "futo",
    name: "Federal University of Technology, Owerri",
    shortName: "FUTO",
    location: "Owerri, Imo State",
    description:
      "Kampmax is ready for the FUTO community in Owerri, built to bring local marketplace and services activity together as things launch.",
    enabled: true,
  },
]

/** All enabled campuses, in configured order. */
export function getEnabledCampuses(): Campus[] {
  return campuses.filter((campus) => campus.enabled)
}

/** A single campus by slug, or `undefined` if it doesn't exist or is disabled. */
export function getCampusBySlug(slug: string): Campus | undefined {
  return campuses.find((campus) => campus.slug === slug && campus.enabled)
}

export type DiscoveryCategory = {
  title: string
  description: string
  icon: LucideIcon
  /** Set once the public route exists; until then the category is shown but not linked. */
  href: string
  available: boolean
}

/**
 * The discovery categories introduced on a campus landing page. `available`
 * reflects whether the destination route is actually implemented yet —
 * flip it to `true` as each one ships instead of linking to a dead route.
 */
export const campusDiscoveryCategories: DiscoveryCategory[] = [
  {
    title: "Marketplace",
    description: "Buy and sell products with people around this campus.",
    icon: Store,
    href: "/marketplace",
    available: true,
  },
  {
    title: "Services",
    description: "Tutoring, repairs, design work, and everyday help nearby.",
    icon: Wrench,
    href: "/services",
    available: true,
  },
  {
    title: "Freelancers",
    description: "Hire students offering skills, from design to tutoring.",
    icon: Sparkles,
    href: "/freelancers",
    available: true,
  },
  {
    title: "Jobs",
    description: "Part-time, campus, and entry-level roles near this campus.",
    icon: Briefcase,
    href: "/jobs",
    available: false,
  },
  {
    title: "Events",
    description: "Campus events, meetups, and things worth showing up for.",
    icon: Calendar,
    href: "/events",
    available: false,
  },
  {
    title: "Local Businesses",
    description: "Businesses and opportunities already around this campus.",
    icon: Building2,
    href: "/for-businesses",
    available: false,
  },
]
