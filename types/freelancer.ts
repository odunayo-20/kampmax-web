export type FreelancerCategory = {
  slug: string
  name: string
  enabled: boolean
}

/** A freelancer's skills that belong to one category, e.g. "Web Development". */
export type FreelancerSkillGroup = {
  category: FreelancerCategory
  skills: string[]
}

export type Freelancer = {
  /** URL segment: the name in words followed by the profile's API id. */
  slug: string
  name: string
  headline: string
  primarySkill: string
  skills: string[]
  /** The skills grouped by category, the category with the most skills first. */
  skillGroups: FreelancerSkillGroup[]
  /** Slugs of every category the freelancer's skills fall under, main one first. */
  categorySlugs: string[]
  /** Slug and name of the main category (the one holding most of their skills). */
  categorySlug: string
  categoryName: string
  bio: string
  /** Absolute URL of the profile photo. Professional initials fallback used when omitted. */
  avatar?: string
  /** References a campus slug. Omit when not campus-specific. */
  campusSlug?: string
  /** True when Kampmax has verified this professional. */
  verified?: boolean
  availability?: "AVAILABLE" | "BUSY" | "UNAVAILABLE"
  /** Optional service slugs offered by this professional. */
  serviceSlugs?: string[]
}
