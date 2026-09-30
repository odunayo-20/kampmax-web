import type { LucideIcon } from "lucide-react"
import {
  Briefcase,
  Building2,
  Calendar,
  Compass,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react"

export type BusinessAudience = {
  id?: string
  icon: LucideIcon
  title: string
  description: string
  badge?: string
}

export const businessAudiences: BusinessAudience[] = [
  {
    id: "vendors",
    icon: Store,
    title: "Campus Vendors & Retailers",
    description:
      "Physical and online vendors selling books, electronics, fashion, food, and daily essentials to campus residents.",
    badge: "Marketplace",
  },
  {
    id: "service-providers",
    icon: Wrench,
    title: "Service Providers & Artisans",
    description:
      "Technicians, barbers, stylists, repair specialists, and tutors providing localized in-person and digital services.",
    badge: "Services",
  },
  {
    icon: Sparkles,
    title: "Freelancers & Creators",
    description:
      "Independent designers, developers, photographers, and writers offering project-based skills to clients.",
    badge: "Freelancers",
  },
  {
    id: "employers",
    icon: Briefcase,
    title: "Employers & Recruiters",
    description:
      "Companies, agencies, and regional businesses looking to hire motivated students and graduates for roles and internships.",
    badge: "Jobs",
  },
  {
    icon: Calendar,
    title: "Event Organizers & Promoters",
    description:
      "Organizers hosting workshops, conferences, sports finals, cultural festivals, and student activations.",
    badge: "Events",
  },
  {
    icon: TrendingUp,
    title: "Student Entrepreneurs",
    description:
      "Ambitious undergraduates and recent alumni turning prototypes, side ventures, and crafts into sustainable enterprises.",
    badge: "Ventures",
  },
  {
    icon: Building2,
    title: "Local Neighborhood Businesses",
    description:
      "Printing presses, stationery shops, dining hubs, and commercial operators anchored around university towns.",
    badge: "Local",
  },
]

export type BusinessCapability = {
  icon: LucideIcon
  title: string
  description: string
}

export const businessCapabilities: BusinessCapability[] = [
  {
    icon: Store,
    title: "Showcase Products",
    description:
      "List inventory on the public Kampmax Marketplace so students, faculty, and nearby residents can browse and discover your catalog.",
  },
  {
    icon: Wrench,
    title: "Offer Professional Services",
    description:
      "Publish services in the Services Directory with clear scope and pricing starting points, making your expertise easy to request.",
  },
  {
    icon: MapPin,
    title: "Anchor to Campuses",
    description:
      "Associate your business with specific campus ecosystems like UNILAG, OAU, UI, or FUTO to appear in localized community views.",
  },
  {
    icon: Briefcase,
    title: "Publish Opportunities",
    description:
      "Post internships, part-time shifts, and freelance projects to connect with skilled candidates already active on campus.",
  },
  {
    icon: Calendar,
    title: "Promote Activities & Pop-Ups",
    description:
      "Announce vendor pop-up days, masterclasses, product launches, and student events in the unified Events Calendar.",
  },
  {
    icon: ShieldCheck,
    title: "Build Recognized Visibility",
    description:
      "Establish a credible public presence with clear professional context, eliminating reliance on fragmented chat forwards.",
  },
]

export type BusinessUseCase = {
  role: string
  icon: LucideIcon
  scenario: string
  outcome: string
}

export const businessUseCases: BusinessUseCase[] = [
  {
    role: "Campus Vendor",
    icon: Store,
    scenario:
      "A student-run snack and grocery vendor lists assorted study boxes on the Marketplace, making it effortless for hostel students to order late-night essentials without leaving campus.",
    outcome:
      "Direct discovery from students looking for convenient snacks during exam revision periods.",
  },
  {
    role: "Local Service Provider",
    icon: Wrench,
    scenario:
      "A hardware technician in Ile-Ife lists laptop troubleshooting and screen replacements in the Services directory, clarifying turnaround times and starting prices.",
    outcome:
      "Immediate discovery by students needing urgent laptop repairs before project defense deadlines.",
  },
  {
    role: "Regional Employer",
    icon: Briefcase,
    scenario:
      "A growing fintech startup publishes hybrid engineering internship listings targeting UNILAG and FUTO computer science and engineering undergraduates.",
    outcome:
      "Direct access to motivated campus talent with demonstrable coursework and project experience.",
  },
  {
    role: "Event Organizer",
    icon: Calendar,
    scenario:
      "A youth initiative publishes a regional agricultural innovation fair in Zaria, outlining session topics, speaker profiles, and exhibition details.",
    outcome:
      "Unified public schedule that agricultural students, local merchants, and researchers can bookmark and share.",
  },
  {
    role: "Student Entrepreneur",
    icon: TrendingUp,
    scenario:
      "A student graphic designer and brand tailor transitions from scattered WhatsApp groups to a verified public presence showcasing bespoke tailoring and branding services.",
    outcome:
      "A professional profile link they can share with departmental associations, campus clubs, and private clients.",
  },
]

export type JourneyStep = {
  number: string
  title: string
  description: string
}

export const businessJourneySteps: JourneyStep[] = [
  {
    number: "01",
    title: "Join Kampmax",
    description:
      "Sign up through the Kampmax platform to set up your account and access business tools.",
  },
  {
    number: "02",
    title: "Set Up Your Presence",
    description:
      "Define your business profile, select your category, and associate your business with relevant campus communities.",
  },
  {
    number: "03",
    title: "Publish Offerings",
    description:
      "Add products to the Marketplace, list packages in the Services directory, or post openings in Jobs.",
  },
  {
    number: "04",
    title: "Become Discoverable",
    description:
      "Your offerings surface in public campus directories, filtered searches, and ecosystem categories.",
  },
  {
    number: "05",
    title: "Connect & Fulfill",
    description:
      "Engage directly with interested buyers, clients, applicants, and attendees inside the Kampmax app.",
  },
]

export type CampusReason = {
  icon: LucideIcon
  title: string
  description: string
}

export const campusReasons: CampusReason[] = [
  {
    icon: Users,
    title: "Concentrated Daily Demand",
    description:
      "Tens of thousands of students, faculty, and campus workers live and operate in tight geographical proximity, requiring daily food, supplies, repairs, and digital services.",
  },
  {
    icon: GraduationCap,
    title: "Ambitious Emerging Talent",
    description:
      "Undergraduates and recent alumni are actively building portfolios, learning modern tools, and looking for real-world internships, projects, and work experience.",
  },
  {
    icon: Calendar,
    title: "High Community & Event Velocity",
    description:
      "Societies, faculty clubs, departmental groups, and sports associations host activities continuously throughout the academic calendar.",
  },
  {
    icon: Compass,
    title: "Interconnected Local Economies",
    description:
      "Neighborhood retail stores, printing hubs, lodges, and commercial merchants thrive when directly integrated with surrounding campus populations.",
  },
]

export type BusinessScale = {
  title: string
  subtitle: string
  description: string
  features: string[]
}

export const businessScales: BusinessScale[] = [
  {
    title: "Individual Creators & Freelancers",
    subtitle: "Solopreneurs & Student Artisans",
    description:
      "Ideal for individuals offering design, tutoring, tailoring, photography, or specific craft skills.",
    features: [
      "Public freelancer and service presence",
      "Listing up to multiple professional services",
      "Direct campus community visibility",
    ],
  },
  {
    title: "Campus Vendors & Small Shops",
    subtitle: "Local Merchants & Retailers",
    description:
      "Built for retail stores, print shops, phone repair centers, and dining hubs serving campus areas.",
    features: [
      "Marketplace product listings",
      "Campus-specific discoverability",
      "Direct buyer inquiry routing",
    ],
  },
  {
    title: "Employers & Growing Organizations",
    subtitle: "Companies, Startups & NGOs",
    description:
      "Designed for businesses and institutions seeking campus talent or promoting university-wide initiatives.",
    features: [
      "Job, internship, and project publishing",
      "Multi-campus reach and branding",
      "Event and activation promotion",
    ],
  },
]
