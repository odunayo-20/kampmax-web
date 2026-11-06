/** Matches the UUID the API uses as an id, at the end of a string. */
const TRAILING_UUID = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/** Lower-case words joined by hyphens, at most 60 characters. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // drop accents split off by NFKD
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
    .replace(/-+$/g, "")
}

/**
 * Some public API endpoints only know a record by its id. Those pages use a
 * URL segment of readable words followed by the id, so the address says what
 * the page is while the id says which record it is.
 */
export function slugWithId(text: string, id: string): string {
  const words = slugify(text)
  return words ? `${words}-${id}` : id
}

/** The API id at the end of a URL segment, or `null` when there is none. */
export function idFromSlug(slug: string): string | null {
  return slug.match(TRAILING_UUID)?.[0] ?? null
}
