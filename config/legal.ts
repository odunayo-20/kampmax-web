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
} as const
