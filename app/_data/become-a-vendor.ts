import type { LucideIcon } from "lucide-react"
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  FileCheck,
  GraduationCap,
  HeartHandshake,
  Layers,
  MapPin,
  MessageSquare,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Tag,
  TrendingUp,
  UserCheck,
  Users,
  Wrench,
} from "lucide-react"

export type VendorPath = {
  id: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  examples: string[]
  ctaText: string
  badge: string
}

export const vendorPaths: VendorPath[] = [
  {
    id: "products",
    title: "Sell Products",
    subtitle: "Physical & Digital Goods",
    description:
      "For individual students, creators, and merchants offering textbooks, study kits, electronics, fashion, food, or accessories to campus buyers.",
    icon: Store,
    examples: [
      "Books & Stationery",
      "Electronics & Gadgets",
      "Fashion & Apparel",
      "Packaged Snacks & Groceries",
      "Hostel Essentials",
      "Digital Notes & Templates",
    ],
    ctaText: "Become a Vendor",
    badge: "Marketplace Path",
  },
  {
    id: "services",
    title: "Offer Services",
    subtitle: "Skills & Professional Offerings",
    description:
      "For student artisans, technicians, and local specialists offering tutoring, laptop repairs, graphic design, sewing, styling, or event support.",
    icon: Wrench,
    examples: [
      "Hardware & OS Repairs",
      "Tutoring & Academic Help",
      "Graphics & Brand Design",
      "Tailoring & Fashion Design",
      "Hairstyling & Barbing",
      "Photography & Media",
    ],
    ctaText: "Become a Service Provider",
    badge: "Services Path",
  },
]

export type EligibleAudience = {
  role: string
  icon: LucideIcon
  description: string
}

export const eligibleAudiences: EligibleAudience[] = [
  {
    role: "Students",
    icon: GraduationCap,
    description:
      "Undergraduates and postgraduates selling course essentials or offering peer skills.",
  },
  {
    role: "Student Entrepreneurs",
    icon: TrendingUp,
    description:
      "Ambitious student founders building sustainable campus brands and side ventures.",
  },
  {
    role: "Freelancers & Creators",
    icon: Sparkles,
    description:
      "Independent designers, developers, photographers, and writers showcasing their craft.",
  },
  {
    role: "Local Neighborhood Businesses",
    icon: Building2,
    description:
      "Printing centers, bookshops, tech hubs, and eateries located in university towns.",
  },
  {
    role: "Skilled Artisans & Technicians",
    icon: Wrench,
    description:
      "Barbers, stylists, gadget repairers, and tailors providing reliable hands-on services.",
  },
  {
    role: "Campus-Focused Vendors",
    icon: Store,
    description:
      "Retailers and wholesalers stocking products specifically tailored to student living.",
  },
]

export type ShowcasePillar = {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
}

export const showcasePillars: ShowcasePillar[] = [
  {
    title: "Structured Product Catalogs",
    subtitle: "Products",
    description:
      "List items with clear photos, descriptions, conditions, and campus pickup locations in the public marketplace.",
    icon: ShoppingBag,
  },
  {
    title: "Transparent Service Profiles",
    subtitle: "Services",
    description:
      "Present your specialized services with starting rates, estimated turnaround times, and demonstrable work samples.",
    icon: Wrench,
  },
  {
    title: "Verified Skill Competencies",
    subtitle: "Skills",
    description:
      "Highlight technical tools, creative proficiencies, and coursework experience to stand out to prospective clients.",
    icon: Sparkles,
  },
  {
    title: "Dedicated Campus Presence",
    subtitle: "Presence",
    description:
      "Anchor your business profile to specific institutions like UNILAG, OAU, or UI, establishing recognized local credibility.",
    icon: MapPin,
  },
  {
    title: "Opportunity & Job Discovery",
    subtitle: "Opportunities",
    description:
      "Publish student internships, project shifts, or part-time work alongside your commercial profile.",
    icon: Briefcase,
  },
]

export type JourneyStep = {
  number: string
  title: string
  description: string
}

export const vendorJourneySteps: JourneyStep[] = [
  {
    number: "01",
    title: "Join Kampmax",
    description:
      "Create your free account through the Kampmax web application to get started.",
  },
  {
    number: "02",
    title: "Set Up Your Profile",
    description:
      "Add your business or personal profile details, contact information, and primary campus anchor.",
  },
  {
    number: "03",
    title: "Choose What You Offer",
    description:
      "Select whether you are selling products, providing professional services, or doing both.",
  },
  {
    number: "04",
    title: "Publish Your Listings",
    description:
      "Add your products to the Marketplace or publish service packages in the Services directory.",
  },
  {
    number: "05",
    title: "Become Discoverable",
    description:
      "Your offerings surface in campus searches, category filters, and public ecosystem directories.",
  },
]

export type ExperienceCard = {
  title: string
  description: string
  icon: LucideIcon
}

export const vendorExperienceSteps: ExperienceCard[] = [
  {
    title: "Create Your Presence",
    description:
      "Establish a clean, dedicated storefront link you can share across social networks and student groups.",
    icon: Store,
  },
  {
    title: "Showcase Your Inventory",
    description:
      "Upload high-quality product images, specify condition, price, and convenient campus exchange points.",
    icon: Tag,
  },
  {
    title: "Connect with Buyers",
    description:
      "Receive inquiries from students and campus residents looking for exactly what you have in stock.",
    icon: MessageSquare,
  },
  {
    title: "Manage Over Time",
    description:
      "Update stock status, adjust prices, and add new items as your campus catalog evolves.",
    icon: Layers,
  },
]

export const serviceExperienceSteps: ExperienceCard[] = [
  {
    title: "Present Your Services",
    description:
      "State clearly what you do, who it is for, and what prospective clients can expect from your service.",
    icon: Wrench,
  },
  {
    title: "Clarify Scope & Rates",
    description:
      "List transparent starting prices, diagnostic terms, and estimated completion times upfront.",
    icon: Clock,
  },
  {
    title: "Build Professional Credibility",
    description:
      "Provide past portfolio samples, academic affiliations, and clear service boundaries.",
    icon: UserCheck,
  },
  {
    title: "Receive Direct Inquiries",
    description:
      "Connect with students needing repairs, design assets, tutoring, or event assistance on campus.",
    icon: MessageSquare,
  },
]

export type CampusAdvantage = {
  title: string
  description: string
  icon: LucideIcon
}

export const campusAdvantages: CampusAdvantage[] = [
  {
    title: "Concentrated Daily Demand",
    description:
      "Thousands of students, lecturers, and staff live and work in close geographical proximity, generating continuous daily needs.",
    icon: Users,
  },
  {
    title: "Predictable Academic Cycles",
    description:
      "Resumption weeks, mid-semester test periods, exam revision, and convocation bring specific, recurring product and service demands.",
    icon: Calendar,
  },
  {
    title: "Community Proximity & Logistics",
    description:
      "Campus pickup points, faculty gates, and hall porter lodges simplify order fulfillment and in-person service appointments.",
    icon: MapPin,
  },
  {
    title: "Peer Word-of-Mouth",
    description:
      "Satisfied campus customers naturally recommend reliable vendors and skilled artisans to roommates, classmates, and club members.",
    icon: HeartHandshake,
  },
]

export type TrustPrinciple = {
  title: string
  description: string
  icon: LucideIcon
}

export const trustPrinciples: TrustPrinciple[] = [
  {
    title: "Accurate Information",
    description:
      "Provide truthful descriptions of item conditions, specifications, service scopes, and starting fees.",
    icon: FileCheck,
  },
  {
    title: "Honest Representation",
    description:
      "Display actual photos of goods and genuine portfolio examples of work you have personally performed.",
    icon: ShieldCheck,
  },
  {
    title: "Respectful Communication",
    description:
      "Treat customers, buyers, and fellow community members with courtesy, fairness, and prompt responsiveness.",
    icon: HeartHandshake,
  },
  {
    title: "Community Guidelines",
    description:
      "Adhere strictly to Kampmax community safety standards, campus safety rules, and local regulations.",
    icon: CheckCircle2,
  },
]

export type VendorFaq = {
  question: string
  answer: string
}

export const vendorFaqs: VendorFaq[] = [
  {
    question: "Who can become a vendor or service provider?",
    answer:
      "Any individual student, freelancer, artisan, local shop owner, or registered business serving university communities can create an account and list offerings.",
  },
  {
    question: "Can students sell or offer services on Kampmax?",
    answer:
      "Yes. Undergraduates and postgraduates frequently sell textbooks, fashion, groceries, and tech items, or offer tutoring, tailoring, and tech repairs.",
  },
  {
    question: "Can I offer services instead of physical products?",
    answer:
      "Yes. Kampmax features a dedicated Services directory alongside the Marketplace. You can offer services, sell products, or do both from a single account.",
  },
  {
    question: "Can an off-campus or local business join?",
    answer:
      "Yes. Neighborhood stores, printing presses, tech centers, and eateries operating in university towns are welcome to anchor their presence to relevant campuses.",
  },
  {
    question: "Do I need a physical shop to join?",
    answer:
      "No. Many student vendors and freelancers operate from campus hostels or remote desks, arranging convenient on-campus pickup spots or digital delivery.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click 'Join Kampmax' to create an account in the Kampmax application, set up your profile, and begin publishing your products or services.",
  },
]
