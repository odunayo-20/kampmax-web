import { ApiError, apiFetch } from "@/lib/api"
import type { Campus } from "@/types/campus"
import type { Opportunity, OpportunityType } from "@/types/job"

/** Backend shape (`GET /jobs`). Only the fields this site reads. */
export type ApiJob = {
  title: string
  slug: string
  summary: string | null
  description: string | null
  requirements: string | null
  employer: { displayName: string }
  campus: { id: string; name: string } | null
  opportunityType: string
  locationType: string
  state: string | null
  city: string | null
  applicationDeadline: string | null
  skills: { name: string }[]
}

type ApiPage<T> = {
  items: T[]
  meta: { totalPages: number }
}

const PAGE_SIZE = 100 // The backend caps `limit` at 100.
const MAX_PAGES = 3

/** Backend opportunity types mapped onto the site's type slugs (config/jobs). */
const TYPE_SLUG_BY_API_TYPE: Record<string, string> = {
  GIG: "freelance",
  INTERNSHIP: "internship",
  FULL_TIME: "full-time",
  PART_TIME: "part-time",
  CONTRACT: "contract",
}

/** Splits free text into list items, dropping bullet and number prefixes. */
function toList(text: string | null): string[] | undefined {
  if (!text) return undefined
  const items = text
    .split(/\r?\n/)
    .map((line) => line.replace(/^\s*(?:[-*•]|\d+[.)])\s+/, "").trim())
    .filter(Boolean)
  return items.length > 0 ? [...new Set(items)] : undefined
}

function toLocation(job: ApiJob): string | undefined {
  if (job.locationType === "REMOTE") return "Remote"

  const place = [job.city, job.state].filter(Boolean).join(", ")
  const hybrid = job.locationType === "HYBRID" ? "Hybrid" : undefined

  if (place && hybrid) return `${place} (${hybrid})`
  return place || hybrid
}

/** "November 15, 2026" — the format the page and its structured data expect. */
function toClosingDate(value: string | null): string | undefined {
  if (!value) return undefined
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return undefined
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}

export function toOpportunity(job: ApiJob, campuses: Campus[]): Opportunity {
  const campus = job.campus
    ? campuses.find((candidate) => candidate.id === job.campus?.id)
    : undefined

  return {
    slug: job.slug,
    title: job.title,
    organization: job.employer.displayName,
    typeSlug:
      TYPE_SLUG_BY_API_TYPE[job.opportunityType] ??
      job.opportunityType.toLowerCase().replace(/_/g, "-"),
    location: toLocation(job),
    campusSlug: campus?.slug,
    summary: job.summary ?? undefined,
    description: job.description ?? job.summary ?? "",
    requirements: toList(job.requirements),
    skills: job.skills.length > 0 ? job.skills.map((skill) => skill.name) : undefined,
    closingDate: toClosingDate(job.applicationDeadline),
  }
}

/**
 * The opportunity types a directory can usefully filter by: those with at
 * least one opportunity. A type with nothing in it only leads to an empty list.
 */
export function typesWithItems(
  types: OpportunityType[],
  opportunities: Opportunity[]
): OpportunityType[] {
  const used = new Set(opportunities.map((opportunity) => opportunity.typeSlug))
  return types.filter((type) => used.has(type.slug))
}

/** Published opportunities, newest first. `campuses` resolves each job's campus slug. */
export async function getOpportunities(campuses: Campus[]): Promise<Opportunity[]> {
  const jobs: ApiJob[] = []

  for (let page = 1; page <= MAX_PAGES; page++) {
    const result = await apiFetch<ApiPage<ApiJob>>("/jobs", {
      query: { page, limit: PAGE_SIZE, sort: "newest" },
    })
    jobs.push(...result.items)
    if (page >= result.meta.totalPages) break
  }

  return jobs.map((job) => toOpportunity(job, campuses))
}

/** A single published opportunity, or `null` when it does not exist. */
export async function getOpportunity(
  slug: string,
  campuses: Campus[]
): Promise<Opportunity | null> {
  try {
    const job = await apiFetch<ApiJob>(`/jobs/slug/${encodeURIComponent(slug)}`)
    return toOpportunity(job, campuses)
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) return null
    throw error
  }
}
