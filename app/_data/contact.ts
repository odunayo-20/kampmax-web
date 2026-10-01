import type { LucideIcon } from "lucide-react"
import {
  LifeBuoy,
  MessageSquare,
  Store,
  Users,
} from "lucide-react"

import { contactConfig } from "@/config/contact"

export type InquiryType = {
  value: string
  label: string
  description: string
}

export const inquiryTypes: InquiryType[] = [
  {
    value: "general",
    label: "General Inquiry",
    description: "Questions about Kampmax, how it works, or general feedback.",
  },
  {
    value: "business",
    label: "Business Inquiry",
    description: "Retail merchants, local shops, and commercial opportunities.",
  },
  {
    value: "vendor",
    label: "Vendor Inquiry",
    description: "Selling products or goods in the campus marketplace.",
  },
  {
    value: "service-provider",
    label: "Service Provider Inquiry",
    description: "Offering technical, design, tailoring, or skilled services.",
  },
  {
    value: "partnership",
    label: "Partnership & Campus Groups",
    description: "Student associations, event organizers, and universities.",
  },
  {
    value: "support",
    label: "Platform Support",
    description: "Assistance with your account, listings, or technical issues.",
  },
]

export type ContactPathway = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  configuredEmail?: string
  guidance: string
}

export const contactPathways: ContactPathway[] = [
  {
    id: "general",
    title: "General Questions",
    description:
      "For general questions regarding the Kampmax platform, campus coverage, and updates.",
    icon: MessageSquare,
    configuredEmail: contactConfig.email,
    guidance: "Use the contact form below or reach our team via general channels.",
  },
  {
    id: "business",
    title: "Business & Vendor Inquiries",
    description:
      "For campus retailers, artisans, and service providers wanting to join or partner.",
    icon: Store,
    configuredEmail: contactConfig.businessEmail,
    guidance: "Select 'Business Inquiry' or 'Vendor Inquiry' in the form below.",
  },
  {
    id: "partnerships",
    title: "Partnerships & Campus Groups",
    description:
      "For student unions, departmental committees, hackathon organizers, and institutions.",
    icon: Users,
    configuredEmail: contactConfig.email,
    guidance: "Select 'Partnership & Campus Groups' in the form below.",
  },
  {
    id: "support",
    title: "Platform Support",
    description:
      "For help navigating the public directories, account questions, or reporting an issue.",
    icon: LifeBuoy,
    configuredEmail: contactConfig.supportEmail,
    guidance: "Select 'Platform Support' in the form for priority review.",
  },
]

export type ContactFaq = {
  question: string
  answer: string
}

export const contactFaqs: ContactFaq[] = [
  {
    question: "What is Kampmax?",
    answer:
      "Kampmax is a digital ecosystem designed around campus communities, connecting students, local merchants, service providers, freelancers, and organizers on a unified, campus-anchored platform.",
  },
  {
    question: "How can I join Kampmax?",
    answer:
      "You can create an account through the Kampmax web app to start browsing, listing products, or offering professional services. Public discovery requires no registration.",
  },
  {
    question: "Can businesses and vendors join Kampmax?",
    answer:
      "Yes. Physical shops, online vendors, and neighborhood merchants in university towns can establish a verified presence to reach students and campus residents.",
  },
  {
    question: "Can I become a vendor or service provider?",
    answer:
      "Yes. Students and independent professionals offering tutoring, repairs, fashion design, catering, and other skills can list their services and manage inquiries.",
  },
  {
    question: "Where can I find Kampmax opportunities?",
    answer:
      "Explore the public Jobs directory (/jobs) for campus roles, internships, and freelance projects, or visit the Freelancers directory (/freelancers) to showcase your portfolio.",
  },
]

export type ContactSubmissionPayload = {
  name: string
  email: string
  inquiryType: string
  organization?: string
  phone?: string
  message: string
  /** Hidden honeypot field to filter automated spam */
  websiteUrl?: string
}

export type ContactSubmissionResult = {
  success: boolean
  message: string
  isDemo?: boolean
}

/**
 * Client-side submission abstraction.
 *
 * In this marketing-only build, this service validates inputs, screens
 * for bot submission via honeypot, simulates realistic latency, and
 * returns a development-safe status without fabricating delivery.
 * Real API endpoint wiring will plug directly into this contract.
 */
export async function submitContactInquiry(
  payload: ContactSubmissionPayload
): Promise<ContactSubmissionResult> {
  // 1. Honeypot check: Bots filling hidden input are rejected silently
  if (payload.websiteUrl && payload.websiteUrl.trim().length > 0) {
    // Pretend success to bot without processing
    return {
      success: true,
      message: "Your inquiry has been received.",
    }
  }

  // 2. Client-side sanity validation
  if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
    return {
      success: false,
      message: "Please fill in all required fields (Name, Email, and Message).",
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(payload.email.trim())) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    }
  }

  // 3. Simulate network latency for UX state transition
  await new Promise((resolve) => setTimeout(resolve, 800))

  // 4. Return safe UI demonstration response
  return {
    success: true,
    message:
      "Thank you for reaching out! Your message has been prepared for the Kampmax team. (Notice: Form is currently in demonstration mode on the public marketing site).",
    isDemo: true,
  }
}
