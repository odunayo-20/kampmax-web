import { siteConfig } from "@/config/site"
import type { Opportunity } from "@/types/job"

type JobJsonLdProps = {
  opportunity: Opportunity
}

/**
 * Only type slugs with an unambiguous schema.org employmentType mapping are
 * included. "campus" and "graduate" cover a mix of part-time/temporary/
 * full-time arrangements, so we omit employmentType for those rather than
 * guess.
 */
const employmentTypeBySlug: Record<string, string> = {
  internship: "INTERN",
  "full-time": "FULL_TIME",
  "part-time": "PART_TIME",
  freelance: "CONTRACTOR",
}

/**
 * Parses "November 15, 2026" into an ISO date; returns undefined if
 * unparseable. Reads local date parts rather than `toISOString()`, which
 * converts through UTC and can shift the date backward by a day.
 */
function toIsoDate(value: string | undefined): string | undefined {
  if (!value) return undefined
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return undefined

  const year = parsed.getFullYear()
  const month = String(parsed.getMonth() + 1).padStart(2, "0")
  const day = String(parsed.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function JobJsonLd({ opportunity }: JobJsonLdProps) {
  const url = `${siteConfig.url}/jobs/${opportunity.slug}`
  const validThrough = toIsoDate(opportunity.closingDate)
  const employmentType = employmentTypeBySlug[opportunity.typeSlug]
  const isRemote = opportunity.location?.trim().toLowerCase() === "remote"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: opportunity.title,
    description: opportunity.description,
    url,
    hiringOrganization: {
      "@type": "Organization",
      name: opportunity.organization,
    },
    ...(employmentType ? { employmentType } : {}),
    ...(validThrough ? { validThrough } : {}),
    ...(isRemote
      ? { jobLocationType: "TELECOMMUTE" }
      : opportunity.location
        ? {
            jobLocation: {
              "@type": "Place",
              address: opportunity.location,
            },
          }
        : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}
