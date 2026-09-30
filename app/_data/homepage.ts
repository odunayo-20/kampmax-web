import type { LucideIcon } from "lucide-react"
import {
  Boxes,
  Briefcase,
  Calendar,
  Compass,
  GraduationCap,
  MapPin,
  Sparkles,
  Store,
  Users,
  Wrench,
} from "lucide-react"

export type DiscoveryItem = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  badge?: string
}

/**
 * The "Discover what you need" category grid. `href` points at each
 * category's future public route — not built yet, but the routing
 * strategy (and the global not-found page) already supports it.
 */
export const discoveryItems: DiscoveryItem[] = [
  {
    title: "Marketplace",
    description: "Buy and sell products with people around your campus.",
    href: "/marketplace",
    icon: Store,
    badge: "Popular",
  },
  {
    title: "Services",
    description: "Find tutoring, repairs, design work, and more nearby.",
    href: "/services",
    icon: Wrench,
  },
  {
    title: "Jobs",
    description: "Part-time, campus, and entry-level roles near you.",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    title: "Freelancers",
    description: "Hire students offering skills, from design to tutoring.",
    href: "/freelancers",
    icon: Sparkles,
  },
  {
    title: "Events",
    description: "Campus events, meetups, and things worth showing up for.",
    href: "/events",
    icon: Calendar,
  },
  {
    title: "Campuses",
    description: "See what's active at your campus and nearby ones.",
    href: "/campuses",
    icon: GraduationCap,
  },
]

export type JourneyStep = {
  title: string
  description: string
  icon: LucideIcon
}

export const journeySteps: JourneyStep[] = [
  {
    title: "Discover",
    description:
      "Browse listings, services, jobs, and events happening around your campus.",
    icon: Compass,
  },
  {
    title: "Connect",
    description:
      "Message people, vendors, and organizers directly through Kampmax.",
    icon: Users,
  },
  {
    title: "Participate",
    description:
      "Buy, apply, book, or show up — however you choose to get involved.",
    icon: Sparkles,
  },
]

export type OpportunityItem = {
  title: string
  description: string
  icon: LucideIcon
}

export const opportunityItems: OpportunityItem[] = [
  {
    title: "Jobs",
    description: "Part-time and entry-level roles posted by local employers.",
    icon: Briefcase,
  },
  {
    title: "Freelance work",
    description: "Short-term gigs for students offering a specific skill.",
    icon: Sparkles,
  },
  {
    title: "Services",
    description: "Tutoring, repairs, design, and everyday help nearby.",
    icon: Wrench,
  },
  {
    title: "Businesses & skills",
    description: "Local businesses and independent providers to discover.",
    icon: Boxes,
  },
]

export type ValueProp = {
  title: string
  description: string
  icon: LucideIcon
}

export const valueProps: ValueProp[] = [
  {
    title: "Campus-focused",
    description:
      "Organized around your campus, not a generic national feed.",
    icon: MapPin,
  },
  {
    title: "Built for discovery",
    description: "Designed to help you find what's actually around you.",
    icon: Compass,
  },
  {
    title: "Real communities",
    description: "Built around the people and places already near you.",
    icon: Users,
  },
  {
    title: "One ecosystem",
    description:
      "Marketplace, services, jobs, and events — in one place, not five apps.",
    icon: Boxes,
  },
]

export type BusinessCta = {
  title: string
  href: string
}

export const businessCtas: BusinessCta[] = [
  { title: "Join as a Vendor", href: "/for-businesses#vendors" },
  { title: "Offer a Service", href: "/for-businesses#service-providers" },
  { title: "Find Talent", href: "/for-businesses#employers" },
]
