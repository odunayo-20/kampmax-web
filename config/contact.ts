/**
 * Central contact configuration.
 *
 * Every value can be overridden with an env var, so a number or address can
 * change without touching UI components. Anything left empty is simply not
 * shown, so the site never displays made-up contact details.
 */

/** Kampmax's public inbox. The business, privacy and legal inboxes fall back to it. */
const DEFAULT_EMAIL = "info@kampmax.com"

/** Where customers go for help; the help screens in the app use the same address. */
const DEFAULT_SUPPORT_EMAIL = "support@kampmax.com"

/** Local-format number the team answers calls and WhatsApp on. */
const DEFAULT_PHONE = "08105219630"

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || DEFAULT_EMAIL
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || DEFAULT_PHONE

/** "08105219630" -> "2348105219630" (wa.me wants the number with country code, digits only). */
function toWhatsAppNumber(value: string): string {
  const digits = value.replace(/\D/g, "")
  if (digits.startsWith("234")) return digits
  return `234${digits.replace(/^0+/, "")}`
}

/** "08105219630" -> "+234 810 521 9630", for display and schema.org. */
function toInternational(value: string): string {
  const n = toWhatsAppNumber(value)
  return `+${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6, 9)} ${n.slice(9)}`.trim()
}

/** A WhatsApp chat with the Kampmax team that opens with `message` already typed. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${toWhatsAppNumber(phone)}?text=${encodeURIComponent(message)}`
}

export const contactConfig = {
  email,
  businessEmail: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || email,
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || DEFAULT_SUPPORT_EMAIL,
  privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL || email,
  legalEmail: process.env.NEXT_PUBLIC_LEGAL_EMAIL || email,
  /** As typed locally, for display and tel: links. */
  phone,
  /** International format, for schema.org. */
  phoneInternational: toInternational(phone),
  /** Opens a WhatsApp chat with a friendly first message. */
  whatsappUrl: whatsappUrl("Hi Kampmax, I have a question."),
  /** Physical or mailing address. Empty until configured. */
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "",
} as const
