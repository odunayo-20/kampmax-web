/**
 * Central contact configuration.
 *
 * Every value can be overridden with an env var, so a number or address can
 * change without touching UI components. Anything left empty is simply not
 * shown, so the site never displays made-up contact details.
 */

/** Kampmax's public inbox. Each specific inbox falls back to it. */
const DEFAULT_EMAIL = "kampmaxtechnology@gmail.com"

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

export const contactConfig = {
  email,
  businessEmail: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || email,
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || email,
  privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL || email,
  legalEmail: process.env.NEXT_PUBLIC_LEGAL_EMAIL || email,
  /** As typed locally, for display and tel: links. */
  phone,
  /** International format, for schema.org. */
  phoneInternational: toInternational(phone),
  /** Opens a WhatsApp chat with a friendly first message. */
  whatsappUrl: `https://wa.me/${toWhatsAppNumber(phone)}?text=${encodeURIComponent(
    "Hi Kampmax, I have a question."
  )}`,
  /** Physical or mailing address. Empty until configured. */
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "",
} as const
