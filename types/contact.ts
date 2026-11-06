import type { LucideIcon } from "lucide-react"

export const CONTACT_INQUIRY_TYPES = [
  "general",
  "business",
  "vendor",
  "service-provider",
  "partnership",
  "support",
] as const

export type ContactInquiryType = (typeof CONTACT_INQUIRY_TYPES)[number]

export type InquiryTypeOption = {
  value: ContactInquiryType
  label: string
  description: string
}

export type ContactSubmissionPayload = {
  name: string
  email: string
  inquiryType: ContactInquiryType
  organization?: string
  phone?: string
  message: string
  /** Hidden honeypot field to filter automated spam */
  websiteUrl?: string
}

export type ContactReceipt = {
  message: string
}

export type ContactSubmissionResult = {
  success: boolean
  message: string
}

export type ContactPathway = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  configuredEmail?: string
  guidance: string
}

export type ContactFaq = {
  question: string
  answer: string
}

