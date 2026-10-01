/**
 * Parses a human-readable date like "November 15, 2026" into an ISO date
 * (YYYY-MM-DD); returns undefined if unparseable. Reads local date parts
 * rather than `toISOString()`, which converts through UTC and can shift
 * the date backward by a day.
 */
export function toIsoDate(value: string | undefined): string | undefined {
  if (!value) return undefined
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return undefined

  const year = parsed.getFullYear()
  const month = String(parsed.getMonth() + 1).padStart(2, "0")
  const day = String(parsed.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}
