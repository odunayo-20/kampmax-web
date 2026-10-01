import type { LucideIcon } from "lucide-react"
import {
  Briefcase,
  Building2,
  Calendar,
  Compass,
  GraduationCap,
  HeartHandshake,
  Layers,
  Lightbulb,
  Link2,
  ShieldCheck,
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
    subtitle: "Digital & Creative Skills",
    description:
      "Showcase individual portfolios, technical competencies, creative design, and project-based crafts.",
    href: "/freelancers",
    icon: Sparkles,
  },
  {
    title: "Jobs",
    subtitle: "Opportunities",
    description:
      "Connect with internships, campus assistantships, part-time shifts, and entry-level career openings.",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    title: "Events",
    subtitle: "Campus Activities",
    description:
      "Keep track of academic symposiums, hackathons, sports tournaments, workshops, and student festivals.",
    href: "/events",
    icon: Calendar,
  },
  {
    title: "Campuses",
    subtitle: "Local Discovery",
    description:
      "Anchor activity to individual universities, polytechnics, and colleges across Nigeria.",
    href: "/campuses",
    icon: GraduationCap,
  },
]

export type WhyProblem = {
  icon: LucideIcon
  title: string
  description: string
}

export const whyProblems: WhyProblem[] = [
  {
    icon: Store,
    title: "Fragmented Products & Services",
    description:
      "Finding useful items or reliable local help on campus often means sifting through fast-moving chat groups, where listings get buried within minutes.",
  },
  {
    icon: Briefcase,
    title: "Access to Opportunities",
    description:
      "Students and young people actively look for internships, part-time work, and real-world projects, but open opportunities are often shared informally through word-of-mouth.",
  },
  {
    icon: Building2,
    title: "Visibility for Local Businesses",
    description:
      "Neighborhood retail shops, printing centers, and eateries around campus towns need structured, non-intrusive ways to present their offerings directly to campus residents.",
  },
  {
    icon: Wrench,
    title: "Recognition for Skilled Individuals",
    description:
      "Skilled student artisans, programmers, designers, and tutors often lack an organized public profile to showcase their abilities and build lasting credibility.",
  },
  {
    icon: Calendar,
    title: "Scattered Campus Activities",
    description:
      "Workshops, departmental initiatives, sports meets, and club gatherings are frequently scattered across printed flyers and disconnected channels.",
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
    title: "Accessibility",
    subtitle: "Simpler Discovery",
    description:
      "Make discovery easier for people and businesses by organizing campus offerings into clear, structured, and searchable directories.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Connection",
    subtitle: "Closer Relationships",
    description:
      "Bring relevant people, offerings, and opportunities closer together within trusted local campus networks.",
    icon: Link2,
  },
  {
    number: "03",
    title: "Opportunity",
    subtitle: "Growth & Enterprise",
    description:
      "Support learning, entrepreneurship, work, and participation through open visibility for student talent and local ventures.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Community",
    subtitle: "Campus Ecosystems",
    description:
      "Recognize the importance of campus and local ecosystems, keeping tools grounded in the daily routines of university life.",
    icon: HeartHandshake,
  },
]

export type CommunityParticipant = {
  role: string
  icon: LucideIcon
  badge: string
  description: string
  highlights: string[]
}

export const communityParticipants: CommunityParticipant[] = [
  {
    role: "Students & Customers",
    icon: GraduationCap,
    badge: "Core Community",
    description:
      "Find campus essentials, discover trusted service providers, explore job and internship openings, and stay informed on upcoming events.",
    highlights: ["Campus marketplace", "Service discovery", "Internships", "Activities"],
  },
  {
    role: "Vendors & Entrepreneurs",
    icon: Store,
    badge: "Marketplace",
    description:
      "Present products directly to students, faculty, and campus residents through an organized, searchable marketplace presence.",
    highlights: ["Product showcase", "Campus reach", "Direct inquiry"],
  },
  {
    role: "Service Providers & Freelancers",
    icon: Wrench,
    badge: "Skills & Talent",
    description:
      "Make skilled services and digital proficiencies easier to discover, from laptop repairs and tutoring to design and technical crafts.",
    highlights: ["Public profile", "Clear starting rates", "Client inquiries"],
  },
  {
    role: "Employers & Businesses",
    icon: Briefcase,
    badge: "Opportunities",
    description:
      "Share relevant part-time roles, internships, and entry-level positions with ambitious students and recent graduates.",
    highlights: ["Job postings", "Campus talent", "Local hiring"],
  },
  {
    role: "Event Organizers & Campus Groups",
    icon: Calendar,
    badge: "Activities",
    description:
      "Promote academic fairs, hackathons, seminars, student club gatherings, and cultural festivals on the unified campus schedule.",
    highlights: ["Event listings", "Campus reach", "Schedule discovery"],
  },
]

export type DirectionPillar = {
  icon: LucideIcon
  title: string
  description: string
}

export const directionPillars: DirectionPillar[] = [
  {
    icon: Layers,
    title: "Connected Campus Ecosystems",
    description:
      "Bringing fragmented parts of campus life — buying items, hiring help, finding jobs, and joining activities — into one unified, cohesive home.",
  },
  {
    icon: Building2,
    title: "Host Towns & Local Commerce",
    description:
      "Extending discovery seamlessly between the campus core and the neighborhood merchants, eateries, and artisans operating in host communities.",
  },
  {
    icon: Sparkles,
    title: "Durable Digital Infrastructure",
    description:
      "Developing practical, fast, and mobile-friendly software designed to stay dependable across academic calendars and multi-campus environments.",
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
    title: "Opportunity",
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

