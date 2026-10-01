/**
 * Central contact configuration.
 *
 * Values are environment/config-driven so actual emails, phone numbers,
 * or office details can be set centrally without altering UI components.
 * Unconfigured fields remain empty rather than displaying fabricated data.
 */
export const contactConfig = {
  /** General email address. Empty until configured. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  /** Business & vendor partnerships email. Empty until configured. */
  businessEmail: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "",
  /** Platform support email. Empty until configured. */
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "",
  /** Privacy and data inquiries email. Empty until configured. */
  privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL ?? "",
  /** Legal and regulatory inquiries email. Empty until configured. */
  legalEmail: process.env.NEXT_PUBLIC_LEGAL_EMAIL ?? "",
  /** Contact phone number. Empty until configured. */
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  /** Physical or mailing address. Empty until configured. */
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "",
  /** Official social channels. Empty until verified. */
  socialLinks: [
    { name: "Twitter / X", href: "" },
    { name: "LinkedIn", href: "" },
    { name: "Instagram", href: "" },
  ],
} as const
