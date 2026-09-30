export type Campus = {
  slug: string
  /** Official full name, e.g. "University of Lagos". */
  name: string
  /** Common short form/abbreviation, e.g. "UNILAG". */
  shortName: string
  /** City/state level location — no unverified street addresses. */
  location?: string
  description?: string
  /** Path to a real campus image. Falls back to a placeholder when unset. */
  image?: string
  enabled: boolean
}
