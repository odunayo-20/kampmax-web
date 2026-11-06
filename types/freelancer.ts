export type FreelancerCategory = {
  slug: string
  name: string
  enabled: boolean
}

export type Freelancer = {
  /** URL segment: the name in words followed by the profile's API id. */
  slug: string
  name: string
  headline: string
  primarySkill: string
  skills: string[]
  /** Slugs of `skills`, in the same order. */
  skillSlugs: string[]
  /** Slug of the primary skill. */
  categorySlug: string
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
