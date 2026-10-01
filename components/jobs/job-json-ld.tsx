import { siteConfig } from "@/config/site"
import { toIsoDate } from "@/lib/to-iso-date"
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
