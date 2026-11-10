import type { LucideIcon } from "lucide-react"
import {
  BadgeCheck,
  Camera,
  FileCheck,
  Home,
  Lock,
  RefreshCw,
  ShieldCheck,
  UserCheck,
  Wallet,
} from "lucide-react"

export type AgentStep = {
  number: string
  title: string
  description: string
}

/** The agent journey, in the order it happens in the Kampmax app. */
export const agentJourneySteps: AgentStep[] = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Sign up for Kampmax, or log in if you already have an account. You do not need a separate account to become an agent.",
  },
  {
    number: "02",
    title: "Apply as an agent",
    description:
      "Tell us who you are and upload your documents. The team reviews every application and may ask for more.",
  },
  {
    number: "03",
    title: "Add your property",
    description:
      "Once approved, add the property and its rooms or units, with real photos and the details students look for.",
  },
  {
    number: "04",
    title: "Publish a listing",
    description:
      "Submit the listing. It goes live after the team approves it, and stays live for the period you have paid for.",
  },
  {
    number: "05",
    title: "Answer enquiries",
    description:
      "Students ask questions and request inspections through Kampmax. You reply and confirm visits from the app.",
  },
]

export type AgentRequirement = {
  title: string
  description: string
  icon: LucideIcon
}

/** What an application needs, matching the review the team does. */
export const agentRequirements: AgentRequirement[] = [
  {
    title: "A valid identity document",
    description:
      "A government-issued ID such as an NIN slip, driver's licence, international passport or voter's card, as a PDF, JPEG or PNG.",
    icon: UserCheck,
  },
  {
    title: "Proof you can let the property",
    description:
      "Either proof of ownership, or a letter from the owner authorising you to let it. This is how we keep fake listings off the site.",
    icon: FileCheck,
  },
  {
    title: "Real photos of each place",
    description:
      "Clear, recent photos of the rooms you list. Listings that do not show the real place are not approved.",
    icon: Camera,
  },
]

export type AgentRule = {
  title: string
  description: string
  icon: LucideIcon
}

/** The rules that protect students and honest agents alike. */
export const agentRules: AgentRule[] = [
  {
    title: "Every agent and listing is reviewed",
    description:
      "Applications and listings are checked by the Kampmax team before anything appears to students. Big changes to a live listing are checked again.",
    icon: BadgeCheck,
  },
  {
    title: "Your documents stay private",
    description:
      "Only you and the review team can open them. Students never see your ID or ownership papers, and every time the team opens a file it is recorded.",
    icon: Lock,
  },
  {
    title: "Availability stays honest",
    description:
      "From time to time we ask you to confirm a place is still available. If you do not answer in time, the listing is hidden until you do.",
    icon: RefreshCw,
  },
  {
    title: "Reports are taken seriously",
    description:
      "Students can report a listing. The team looks into it, and a listing found to be misleading can be taken down.",
    icon: ShieldCheck,
  },
]

export const agentPricingPoints: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Pay per listing",
    description:
      "You pay for each listing, for the period shown. There is no fee to apply, and nothing is charged until you submit a listing.",
    icon: Wallet,
  },
  {
    title: "Not approved, refunded",
    description:
      "If the team rejects a listing you have paid for, the payment is refunded to you.",
    icon: Home,
  },
]

export type AgentFaq = {
  question: string
  answer: string
}

export const agentFaqs: AgentFaq[] = [
  {
    question: "Who can become an accommodation agent?",
    answer:
      "Property owners, caretakers, landlords' representatives, and agencies who can show they are allowed to let the property. You need to be able to prove who you are and that the place is yours to let.",
  },
  {
    question: "Do I need a Kampmax account first?",
    answer:
      "Yes. Create a normal Kampmax account, then apply as an agent from inside the app. One account can be both a student and an agent.",
  },
  {
    question: "How long does approval take?",
    answer:
      "The team reviews every application. If a document is unclear, you are asked for more information and told what is missing. You will be notified of the decision in the app.",
  },
  {
    question: "Can I apply on this website?",
    answer:
      "Account creation and the application itself are done inside the Kampmax app. This page explains the process and sends you there.",
  },
  {
    question: "What does it cost?",
    answer:
      "Applying is free. Listings are charged per listing, for the period shown on this page. A listing renews on the price it was started at, and if the team rejects a listing you paid for, you are refunded.",
  },
  {
    question: "What happens when my listing's paid period ends?",
    answer:
      "Where your payment method allows it, the listing renews automatically and you are told in advance. Otherwise you can renew by hand. A listing that is not renewed is taken off the site, and you can bring it back by renewing.",
  },
  {
    question: "Why was my listing hidden?",
    answer:
      "A listing is hidden when its paid period ends, when you do not confirm availability in time, or when the team suspends it. You are told which one in the app, and you can fix it from there.",
  },
]
