import type { LucideIcon } from "lucide-react"
import {
  Boxes,
  Briefcase,
  Building2,
  Calendar,
  Compass,
  GraduationCap,
  HeartHandshake,
  Layers,
  Lightbulb,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react"

export type EcosystemPillar = {
  title: string
  subtitle: string
  description: string
  href: string
  icon: LucideIcon
}

export const ecosystemPillars: EcosystemPillar[] = [
  {
    title: "Marketplace",
    subtitle: "Product Commerce",
    description:
      "Buy and sell essential products, books, gadgets, fashion, and provisions with campus peers.",
    href: "/marketplace",
    icon: Store,
  },
  {
    title: "Services",
    subtitle: "Professional Skills",
    description:
      "Discover local and student service providers for repairs, tutoring, tailoring, tech setups, and styling.",
    href: "/services",
    icon: Wrench,
  },
  {
    title: "Freelancers",
    subtitle: "Independent Talent",
    description:
      "Showcase individual portfolios, technical competencies, creative design, and project-based crafts.",
    href: "/freelancers",
    icon: Sparkles,
  },
  {
    title: "Jobs",
    subtitle: "Career Opportunities",
    description:
      "Connect with internships, campus assistantships, part-time shifts, and entry-level career openings.",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    title: "Events",
    subtitle: "Campus Life & Gatherings",
    description:
      "Keep track of academic symposiums, hackathons, sports tournaments, workshops, and student festivals.",
    href: "/events",
    icon: Calendar,
  },
  {
    title: "Campuses",
    subtitle: "Localized Hubs",
    description:
      "Anchor activity to individual universities, polytechnics, and colleges across Nigeria.",
    href: "/campuses",
    icon: GraduationCap,
  },
]

export type ProblemChallenge = {
  icon: LucideIcon
  title: string
  description: string
}

export const problemChallenges: ProblemChallenge[] = [
  {
    icon: Store,
    title: "Fragmented Product Discovery",
    description:
      "Buying or selling items on campus often relies on fast-moving instant messaging groups, where listings get buried in chat feeds within minutes.",
  },
  {
    icon: Wrench,
    title: "Obscured Local Services",
    description:
      "Reliable student artisans, technicians, and tutors exist right on campus, but newcomers and busy students struggle to discover who to call.",
  },
  {
    icon: Briefcase,
    title: "Disconnected Opportunities",
    description:
      "Internships, project gigs, and entry-level positions are frequently shared informally through word-of-mouth rather than open public noticeboards.",
  },
  {
    icon: Building2,
    title: "Barriers for Local Merchants",
    description:
      "Neighborhood retail stores, printing hubs, and eateries lack a structured, non-intrusive way to make their offerings discoverable to the campus population.",
  },
  {
    icon: Calendar,
    title: "Scattered Event Channels",
    description:
      "Important workshops, club activities, and academic fairs are spread across printed physical posters, disparate group links, and social timelines.",
  },
  {
    icon: Sparkles,
    title: "Underutilized Student Talent",
    description:
      "Talented student programmers, designers, writers, and tailors have great capabilities but limited professional platforms to showcase them.",
  },
]

export type ApproachPrinciple = {
  number: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
}

export const approachPrinciples: ApproachPrinciple[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Organized Exploration",
    description:
      "Organize products, services, talent, opportunities, and activities into clean, searchable, campus-anchored directories.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Connect",
    subtitle: "Direct Relationships",
    description:
      "Bridge students, faculty, and campus residents directly with the local merchants, service specialists, and peers serving them.",
    icon: Users,
  },
  {
    number: "03",
    title: "Participate",
    subtitle: "Active Involvement",
    description:
      "Lower friction for attending campus events, applying for meaningful work, and engaging with neighborhood culture.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Grow",
    subtitle: "Sustainable Progress",
    description:
      "Give student entrepreneurs, freelancers, and small businesses room to establish credibility and develop their presence over time.",
    icon: TrendingUp,
  },
]

export type CommunityParticipant = {
  role: string
  icon: LucideIcon
  badge: string
  description: string
  actions: string[]
}

export const communityParticipants: CommunityParticipant[] = [
  {
    role: "Students",
    icon: GraduationCap,
    badge: "Community Core",
    description:
      "Find campus essentials, book verified student services, discover internships, and stay informed on upcoming events.",
    actions: ["Find essentials", "Book services", "Explore jobs", "Join events"],
  },
  {
    role: "Local Businesses",
    icon: Building2,
    badge: "Commerce",
    description:
      "Establish an anchored public presence to reach tens of thousands of active campus residents in nearby towns.",
    actions: ["Reach students", "Publish inventory", "Offer promotions"],
  },
  {
    role: "Freelancers & Creators",
    icon: Sparkles,
    badge: "Talent",
    description:
      "Build a verified portfolio, present technical and creative competencies, and connect with clients looking for skills.",
    actions: ["Showcase work", "Set base rates", "Win projects"],
  },
  {
    role: "Vendors & Retailers",
    icon: Store,
    badge: "Marketplace",
    description:
      "List books, electronics, fashion, study kits, and groceries in a structured marketplace built for campus life.",
    actions: ["List products", "Campus pickup", "Direct inquiry"],
  },
  {
    role: "Service Providers",
    icon: Wrench,
    badge: "Services",
    description:
      "Offer phone and laptop repairs, haircutting, sewing, photography, and tutoring with transparent starting points.",
    actions: ["List services", "State turnarounds", "Receive bookings"],
  },
  {
    role: "Employers & Recruiters",
    icon: Briefcase,
    badge: "Opportunities",
    description:
      "Publish internships, part-time roles, and graduate opportunities targeting ambitious campus talent.",
    actions: ["Publish openings", "Review profiles", "Hire locally"],
  },
  {
    role: "Organizers & Committees",
    icon: Calendar,
    badge: "Events",
    description:
      "Publish conferences, workshops, sports competitions, and club gatherings on the unified campus calendar.",
    actions: ["Announce dates", "Share details", "Engage attendees"],
  },
]

export type CoreValue = {
  title: string
  icon: LucideIcon
  description: string
}

export const coreValues: CoreValue[] = [
  {
    title: "People First",
    icon: Users,
    description:
      "We design for real students, artisans, and business owners navigating daily life in university communities.",
  },
  {
    title: "Useful by Design",
    icon: Lightbulb,
    description:
      "Every feature solves a genuine daily problem, eliminating clutter, unnecessary noise, and hollow gimmicks.",
  },
  {
    title: "Trust & Transparency",
    icon: ShieldCheck,
    description:
      "Clear listings, honest descriptions, and visible accountability form the foundation of our community.",
  },
  {
    title: "Equal Opportunity",
    icon: TrendingUp,
    description:
      "Whether you are an undergraduate launching your first side project or an established shop, your work deserves discovery.",
  },
  {
    title: "Community Anchored",
    icon: HeartHandshake,
    description:
      "Campuses are social fabrics. Our tools preserve and strengthen the local relationships that make university towns unique.",
  },
  {
    title: "Continuous Improvement",
    icon: Zap,
    description:
      "We iterate thoughtfully, refining user journeys and listening attentively to feedback from students and partners.",
  },
]

export type ProductPhilosophyItem = {
  icon: LucideIcon
  title: string
  description: string
}

export const productPhilosophyItems: ProductPhilosophyItem[] = [
  {
    icon: Smartphone,
    title: "Mobile-First & Bandwidth-Aware",
    description:
      "Built to load swiftly and render cleanly across all screen sizes and diverse network conditions common in Nigerian university environments.",
  },
  {
    icon: Layers,
    title: "Simple & Cohesive Architecture",
    description:
      "Clear page structures, intuitive navigation paths, and minimal cognitive load so users find what they need without friction.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Integrity Conscious",
    description:
      "Prioritizing data protection, spam resistance, and responsible verification throughout the software lifecycle.",
  },
  {
    icon: Boxes,
    title: "Practical & Scalable Technology",
    description:
      "Pragmatic engineering choices built on robust web foundations that grow reliably with increasing multi-campus traffic.",
  },
]
