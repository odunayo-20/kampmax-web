/**
 * Central legal configuration for Kampmax public website.
 *
 * Keeps legal dates and policy versioning unified across pages
 * without hardcoding or scattering arbitrary dates across UI files.
 */
export const legalConfig = {
  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: "October 1, 2026",
    effectiveDate: "October 1, 2026",
  },
  termsOfService: {
    title: "Terms of Service",
    lastUpdated: "October 1, 2026",
    effectiveDate: "October 1, 2026",
  },
  refundPolicy: {
    title: "Refund & Cancellation Policy",
    lastUpdated: "October 1, 2026",
    effectiveDate: "October 1, 2026",
  },
  cookiePolicy: {
    title: "Cookie Policy",
    lastUpdated: "October 1, 2026",
    effectiveDate: "October 1, 2026",
  },
  amlPolicy: {
    title: "Anti-Money Laundering Policy",
    lastUpdated: "October 1, 2026",
    effectiveDate: "October 1, 2026",
  },
} as const
