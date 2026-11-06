/**
 * Formats an ISO calendar date ("2026-11-14") as "Saturday, November 14, 2026".
 * Returns the input unchanged when it is not a valid date.
 */
export function formatEventDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T00:00:00Z`)
  if (Number.isNaN(parsed.getTime())) return isoDate

  return parsed.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}
