import type { OpportunityType } from "@/types/job"

/**
 * The kinds of opportunity the Kampmax API can publish (see `lib/jobs.ts` for
 * how its types map onto these slugs). Types can be toggled on/off via
 * `enabled`; opportunities themselves come from the API.
 */
const opportunityTypes: OpportunityType[] = [
  { slug: "internship", name: "Internships", enabled: true },
  { slug: "full-time", name: "Full-Time Roles", enabled: true },
  { slug: "part-time", name: "Part-Time", enabled: true },
  { slug: "contract", name: "Contract Roles", enabled: true },
  { slug: "freelance", name: "Freelance Projects", enabled: true },
]

/** All configured opportunity types that are currently active. */
export function getEnabledOpportunityTypes(): OpportunityType[] {
  return opportunityTypes.filter((type) => type.enabled)
}

/** A single opportunity type by slug, or `undefined` if disabled or not found. */
export function getOpportunityTypeBySlug(
  slug: string
): OpportunityType | undefined {
  return opportunityTypes.find((type) => type.slug === slug && type.enabled)
}
