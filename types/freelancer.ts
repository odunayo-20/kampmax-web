export type FreelancerCategory = {
  slug: string
  name: string
  enabled: boolean
}

export type Freelancer = {
  slug: string
  name: string
  headline: string
  primarySkill: string
  skills: string[]
  categorySlug: string
  bio: string
  /** Path to a real photo when configured. Professional initials fallback used when omitted. */
  avatar?: string
  /** References a Module 06 campus slug. Omit when not campus-specific. */
  campusSlug?: string
  /** Optional service slugs from Module 08 offered by this professional. */
  serviceSlugs?: string[]
}
