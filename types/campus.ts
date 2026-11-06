export type Campus = {
  /** API identifier. Other API records (jobs, events) reference a campus by it. */
  id?: string
  slug: string
  /** Official full name, e.g. "University of Lagos". */
  name: string
  /** Common short form/abbreviation, e.g. "UNILAG". */
  shortName: string
  /** City/state level location , no unverified street addresses. */
  location?: string
  description?: string
  /** Path or absolute URL of a real campus image. Falls back to a placeholder when unset. */
  image?: string
  enabled: boolean
  /** Street address, when the campus has published one. */
  address?: string
  /** Map position. Both are set, or neither. */
  latitude?: number
  longitude?: number
  memberCount?: number
}
