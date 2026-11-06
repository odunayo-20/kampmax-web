import { ApiError, apiFetch, resolveMediaUrl } from "@/lib/api"
import { idFromSlug, slugWithId } from "@/lib/slug"
import type { Campus } from "@/types/campus"
import type { Freelancer, FreelancerCategory } from "@/types/freelancer"

/** Backend shape (`GET /freelancers`). Only the fields this site reads. */
export type ApiFreelancer = {
  id: string
  fullName: string
  avatar: string | null
  professionalTitle: string | null
  bio: string | null
  campusId: string | null
  verificationStatus: string
  availabilityStatus: string
  skills: { name: string; slug: string }[]
}

type ApiPage<T> = {
  items: T[]
  meta: { totalPages: number }
}

const PAGE_SIZE = 100 // The backend caps `limit` at 100.
const MAX_PAGES = 3
/** How many skills are offered as filter pills. */
const MAX_CATEGORIES = 8

const FALLBACK_TITLE = "Freelancer"

const AVAILABILITY = ["AVAILABLE", "BUSY", "UNAVAILABLE"] as const

export function toFreelancer(item: ApiFreelancer, campuses: Campus[]): Freelancer {
  const primary = item.skills[0]
  const availability = AVAILABILITY.find((value) => value === item.availabilityStatus)

  return {
    slug: slugWithId(item.fullName, item.id),
    name: item.fullName,
    headline: item.professionalTitle ?? primary?.name ?? FALLBACK_TITLE,
    primarySkill: primary?.name ?? item.professionalTitle ?? FALLBACK_TITLE,
    skills: item.skills.map((skill) => skill.name),
    skillSlugs: item.skills.map((skill) => skill.slug),
    categorySlug: primary?.slug ?? "general",
    bio: item.bio ?? "",
    avatar: resolveMediaUrl(item.avatar),
    verified: item.verificationStatus === "VERIFIED",
    availability,
    campusSlug: item.campusId
      ? campuses.find((campus) => campus.id === item.campusId)?.slug
      : undefined,
  }
}

/** Public freelancer profiles, newest first. `campuses` resolves each campus slug. */
export async function getFreelancers(campuses: Campus[]): Promise<Freelancer[]> {
  const profiles: ApiFreelancer[] = []

  for (let page = 1; page <= MAX_PAGES; page++) {
    const result = await apiFetch<ApiPage<ApiFreelancer>>("/freelancers", {
      query: { page, limit: PAGE_SIZE, sort: "newest" },
    })
    profiles.push(...result.items)
    if (page >= result.meta.totalPages) break
  }

  return profiles.map((profile) => toFreelancer(profile, campuses))
}

/** A single public profile by URL segment, or `null` when it does not exist. */
export async function getFreelancer(
  slug: string,
  campuses: Campus[]
): Promise<Freelancer | null> {
  const id = idFromSlug(slug)
  if (!id) return null

  try {
    return toFreelancer(await apiFetch<ApiFreelancer>(`/freelancers/${id}`), campuses)
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) return null
    throw error
  }
}

/**
 * Filter pills for the directory: the skills held by the most listed
 * freelancers. The backend has no freelancer categories, only skills.
 */
export function topSkillCategories(freelancers: Freelancer[]): FreelancerCategory[] {
  const counts = new Map<string, { name: string; count: number }>()

  for (const freelancer of freelancers) {
    freelancer.skillSlugs.forEach((slug, index) => {
      const entry = counts.get(slug)
      if (entry) entry.count += 1
      else counts.set(slug, { name: freelancer.skills[index], count: 1 })
    })
  }

  return [...counts.entries()]
    .sort((a, b) => b[1].count - a[1].count || a[1].name.localeCompare(b[1].name))
    .slice(0, MAX_CATEGORIES)
    .map(([slug, { name }]) => ({ slug, name, enabled: true }))
}

/** The category shown on a profile: its primary skill. */
export function primaryCategoryOf(freelancer: Freelancer): FreelancerCategory {
  return {
    slug: freelancer.categorySlug,
    name: freelancer.primarySkill,
    enabled: true,
  }
}
