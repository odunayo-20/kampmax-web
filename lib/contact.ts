import {
  LifeBuoy,
  MessageSquare,
  Store,
  Users,
} from "lucide-react"

import { contactConfig } from "@/config/contact"
import { apiPost, ApiError } from "@/lib/api"
import type {
  ContactFaq,
  ContactPathway,
  ContactReceipt,
  ContactSubmissionPayload,
  ContactSubmissionResult,
  InquiryTypeOption,
} from "@/types/contact"

export const inquiryTypes: InquiryTypeOption[] = [
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

/**
 * Submits a contact inquiry to the Kampmax backend API (POST /contact).
 * The backend processes the message, rate limits submissions, filters spam bots via honeypot,
 * and sends an email receipt notification to the internal team.
 */
export async function submitContactInquiry(
  payload: ContactSubmissionPayload
): Promise<ContactSubmissionResult> {
  const name = payload.name?.trim() ?? ""
  const email = payload.email?.trim() ?? ""
  const message = payload.message?.trim() ?? ""

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields (Name, Email, and Message).",
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  if (message.length < 15) {
    return {
      success: false,
      message: "Please provide at least 15 characters to explain your request.",
    }
  }

  if (message.length > 2000) {
    return {
      success: false,
      message: "Message must not exceed 2000 characters.",
    }
  }

  const phone = payload.phone?.trim()
  if (phone) {
    const phoneRegex = /^[0-9+()\-.\s]{6,30}$/
    if (!phoneRegex.test(phone)) {
      return {
        success: false,
        message: "Please enter a valid phone number (6-30 digits or symbols).",
      }
    }
  }

  const body: Record<string, string> = {
    name,
    email: email.toLowerCase(),
    inquiryType: payload.inquiryType,
    message,
  }

  const org = payload.organization?.trim()
  if (org) {
    body.organization = org
  }

  if (phone) {
    body.phone = phone
  }

  const websiteUrl = payload.websiteUrl?.trim()
  if (websiteUrl) {
    body.websiteUrl = websiteUrl
  }

  try {
    const data = await apiPost<ContactReceipt>("/contact", body)
    return {
      success: true,
      message:
        data?.message ||
        "Thank you for reaching out. Your message has been received and the Kampmax team will reply by email.",
    }
  } catch (error) {
    if (error instanceof ApiError) {
      if (error.status === 429) {
        return {
          success: false,
          message:
            error.message ||
            "You have sent several messages recently. Please wait a while before sending another.",
        }
      }
      return {
        success: false,
        message: error.message || "Failed to submit inquiry. Please verify your details.",
      }
    }

    return {
      success: false,
      message: "Unable to send message. Please check your connection and try again.",
    }
  }
}

