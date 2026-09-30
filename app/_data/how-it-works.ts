import type { LucideIcon } from "lucide-react"
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Compass,
  GraduationCap,
  Handshake,
  MapPin,
  Megaphone,
  PenTool,
  Rocket,
  Search,
  Sparkles,
  Store,
  Users,
  Wrench,
} from "lucide-react"

export type EcosystemNode = {
  title: string
  icon: LucideIcon
}

/** The connected parts of the Kampmax ecosystem, shown around a central hub. */
export const ecosystemNodes: EcosystemNode[] = [
  { title: "People", icon: Users },
  { title: "Products", icon: Store },
  { title: "Services", icon: Wrench },
  { title: "Jobs & Freelancers", icon: Briefcase },
  { title: "Events", icon: Calendar },
  { title: "Businesses", icon: Building2 },
  { title: "Campus Communities", icon: GraduationCap },
]

export type Experience = {
  title: string
  what: string
  why: string
  href: string
  cta: string
  icon: LucideIcon
}

/** The public experiences a visitor can explore, with what/why/CTA for each. */
export const experiences: Experience[] = [
  {
    title: "Marketplace",
    what: "Buy and sell products with people around your campus.",
    why: "Cheaper, closer, and faster than shipping something across the country.",
    href: "/marketplace",
    cta: "Explore Marketplace",
    icon: Store,
  },
  {
    title: "Services",
    what: "Find tutoring, repairs, design work, and everyday help nearby.",
    why: "The people offering them are already around you.",
    href: "/services",
    cta: "Browse Services",
    icon: Wrench,
  },
  {
    title: "Jobs",
    what: "Part-time, campus, and entry-level roles near you.",
    why: "Find work that fits around your schedule, not the other way around.",
    href: "/jobs",
    cta: "See Jobs",
    icon: Briefcase,
  },
  {
    title: "Freelancers",
    what: "Hire students offering skills, from design to tutoring.",
    why: "Get things done by people who understand campus timelines.",
    href: "/freelancers",
    cta: "Find Freelancers",
    icon: Sparkles,
  },
  {
    title: "Events",
    what: "Campus events, meetups, and things worth showing up for.",
    why: "Know what's happening before it's already over.",
    href: "/events",
    cta: "View Events",
    icon: Calendar,
  },
  {
    title: "Campus Discovery",
    what: "See what's active at your campus and nearby ones.",
    why: "Everything is organized around where you actually are.",
    href: "/campuses",
    cta: "Discover Campuses",
    icon: GraduationCap,
  },
]

export type JourneyStep = {
  title: string
  description: string
  icon: LucideIcon
}

/** The 4-step journey from finding Kampmax to actually using it. */
export const experienceSteps: JourneyStep[] = [
  {
    title: "Discover",
    description: "Land on Kampmax and see what's active around your campus.",
    icon: Search,
  },
  {
    title: "Explore",
    description:
      "Browse the marketplace, services, jobs, freelancers, and events that interest you.",
    icon: Compass,
  },
  {
    title: "Connect",
    description:
      "Message a seller, provider, employer, or organizer directly through Kampmax.",
    icon: Users,
  },
  {
    title: "Participate",
    description:
      "Buy, apply, book, or show up — however you choose to get involved.",
    icon: CheckCircle2,
  },
]

export type ActivityItem = {
  text: string
  icon: LucideIcon
}

/** What students/customers can do on Kampmax. */
export const studentActivities: ActivityItem[] = [
  { text: "Discover products for sale around your campus", icon: Store },
  { text: "Find useful services and everyday help nearby", icon: Wrench },
  { text: "Browse part-time and entry-level jobs", icon: Briefcase },
  { text: "Hire freelancers offering a specific skill", icon: Sparkles },
  { text: "Discover campus events and activities", icon: Calendar },
  { text: "See what businesses and opportunities are around you", icon: MapPin },
]

export type BenefitItem = {
  text: string
  icon: LucideIcon
}

/** What vendors and service providers get from Kampmax. */
export const vendorBenefits: BenefitItem[] = [
  { text: "Create a presence for your business or service", icon: Store },
  { text: "Showcase products and services to the right audience", icon: PenTool },
  { text: "Reach customers already around your campus", icon: Users },
  { text: "Connect directly with campus communities", icon: Handshake },
]

/** What freelancers get from Kampmax. */
export const freelancerBenefits: BenefitItem[] = [
  { text: "Showcase your skills and past work", icon: PenTool },
  { text: "Discover opportunities that fit what you offer", icon: Compass },
  { text: "Connect with potential customers directly", icon: Handshake },
  { text: "Build a professional presence on campus", icon: Sparkles },
]

/** What employers and organizers can use Kampmax for. */
export const organizerUseCases: BenefitItem[] = [
  { text: "Publish job openings to a campus audience", icon: Briefcase },
  { text: "Discover talent already around your campus", icon: Search },
  { text: "Create and promote events", icon: Megaphone },
  { text: "Reach the people most likely to care", icon: Rocket },
]
