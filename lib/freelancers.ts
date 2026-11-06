import { ApiError, apiFetch, resolveMediaUrl } from "@/lib/api"
import { idFromSlug, slugWithId } from "@/lib/slug"
import type { Campus } from "@/types/campus"
import type {
  Freelancer,
  FreelancerCategory,
  FreelancerSkillGroup,
} from "@/types/freelancer"

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
  skills: { skillId: string; name: string; slug: string }[]
}

/** A node of the skill taxonomy (`GET /categories/tree?type=SKILL`). */
export type ApiSkillNode = {
  id: string
  name: string
  slug: string
  children?: ApiSkillNode[] | null
}

/** Maps a skill's id to the group (category) it belongs to. */
export type SkillGroups = Map<string, { slug: string; name: string }>

type ApiPage<T> = {
  items: T[]
  meta: { totalPages: number }
}

const PAGE_SIZE = 100 // The backend caps `limit` at 100.
const MAX_PAGES = 3

const FALLBACK_TITLE = "Freelancer"

/** Where skills with no group in the taxonomy go. */
const OTHER: FreelancerCategory = { slug: "other", name: "Other", enabled: true }

const AVAILABILITY = ["AVAILABLE", "BUSY", "UNAVAILABLE"] as const

/**
 * The skill taxonomy is two levels deep: groups ("Web Development") holding
 * skills ("React"). Only top-level entries that actually hold skills count as
 * groups; a childless top-level entry is a loose skill and stays ungrouped.
 */
export function buildSkillGroups(tree: ApiSkillNode[]): SkillGroups {
  const groups: SkillGroups = new Map()

  for (const node of tree) {
    if (!node.children?.length) continue
    const group = { slug: node.slug, name: node.name }
    for (const child of node.children) {
      groups.set(child.id, group)
    }
  }

  return groups
}

async function loadSkillGroups(): Promise<SkillGroups> {
  return buildSkillGroups(
    await apiFetch<ApiSkillNode[]>("/categories/tree", { query: { type: "SKILL" } })
  )
}

/**
 * Groups a freelancer's skills by category. The category holding the most
 * skills comes first (ties keep the order the skills were added in), and
 * ungrouped skills come last.
 */
function groupSkills(
  skills: ApiFreelancer["skills"],
  groups: SkillGroups
): FreelancerSkillGroup[] {
  const bySlug = new Map<string, FreelancerSkillGroup>()

  for (const skill of skills) {
    const group = groups.get(skill.skillId)
    const category: FreelancerCategory = group
      ? { slug: group.slug, name: group.name, enabled: true }
      : OTHER

    const entry = bySlug.get(category.slug) ?? { category, skills: [] }
    entry.skills.push(skill.name)
    bySlug.set(category.slug, entry)
  }

  return [...bySlug.values()].sort(
    (a, b) =>
      Number(a.category.slug === OTHER.slug) - Number(b.category.slug === OTHER.slug) ||
      b.skills.length - a.skills.length
  )
}

export function toFreelancer(
  item: ApiFreelancer,
  campuses: Campus[],
  groups: SkillGroups = new Map()
): Freelancer {
  const primary = item.skills[0]
  const availability = AVAILABILITY.find((value) => value === item.availabilityStatus)
  const skillGroups = groupSkills(item.skills, groups)
  const mainCategory = skillGroups[0]?.category ?? OTHER

  return {
    slug: slugWithId(item.fullName, item.id),
    name: item.fullName,
    headline: item.professionalTitle ?? primary?.name ?? FALLBACK_TITLE,
    primarySkill: primary?.name ?? item.professionalTitle ?? FALLBACK_TITLE,
    skills: item.skills.map((skill) => skill.name),
    skillGroups,
    categorySlugs: skillGroups.map((group) => group.category.slug),
    categorySlug: mainCategory.slug,
    categoryName: mainCategory.name,
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
  const groups = await loadSkillGroups()
  const profiles: ApiFreelancer[] = []

  for (let page = 1; page <= MAX_PAGES; page++) {
    const result = await apiFetch<ApiPage<ApiFreelancer>>("/freelancers", {
      query: { page, limit: PAGE_SIZE, sort: "newest" },
    })
    profiles.push(...result.items)
    if (page >= result.meta.totalPages) break
  }

  return profiles.map((profile) => toFreelancer(profile, campuses, groups))
}

/** A single public profile by URL segment, or `null` when it does not exist. */
export async function getFreelancer(
  slug: string,
  campuses: Campus[]
): Promise<Freelancer | null> {
  const id = idFromSlug(slug)
  if (!id) return null

  try {
    const [profile, groups] = await Promise.all([
      apiFetch<ApiFreelancer>(`/freelancers/${id}`),
      loadSkillGroups(),
    ])
    return toFreelancer(profile, campuses, groups)
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) return null
    throw error
  }
}

/**
 * Filter pills for the directory: every category that has at least one
 * freelancer in it, the busiest first and "Other" last.
 */
export function directoryCategories(freelancers: Freelancer[]): FreelancerCategory[] {
  const counts = new Map<string, { category: FreelancerCategory; count: number }>()

  for (const freelancer of freelancers) {
    for (const { category } of freelancer.skillGroups) {
      const entry = counts.get(category.slug)
      if (entry) entry.count += 1
      else counts.set(category.slug, { category, count: 1 })
    }
  }

  return [...counts.values()]
    .sort(
      (a, b) =>
        Number(a.category.slug === OTHER.slug) - Number(b.category.slug === OTHER.slug) ||
        b.count - a.count ||
        a.category.name.localeCompare(b.category.name)
    )
    .map(({ category }) => category)
}

/** The category shown on a profile: the one holding most of their skills. */
export function primaryCategoryOf(freelancer: Freelancer): FreelancerCategory {
  return { slug: freelancer.categorySlug, name: freelancer.categoryName, enabled: true }
}
