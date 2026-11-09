/** Which icon a service tile shows, chosen from the service's category name. */
export type ServiceIconKey =
  | "code"
  | "design"
  | "tutoring"
  | "beauty"
  | "repair"
  | "food"
  | "transport"
  | "events"
  | "fitness"
  | "home"
  | "printing"
  | "business"
  | "default"

/** First match wins, so the more specific words come first. */
const rules: [RegExp, ServiceIconKey][] = [
  [/repair|maintenance/i, "repair"],
  [/tutor|lesson|educat|teach/i, "tutoring"],
  [/beauty|hair|makeup|personal care/i, "beauty"],
  [/food|cater|cook|bak/i, "food"],
  [/transport|delivery|ride|logistic/i, "transport"],
  [/event|entertain|music|photo/i, "events"],
  [/fitness|wellness|health|sport/i, "fitness"],
  [/print|stationer/i, "printing"],
  [/home|clean|house/i, "home"],
  [/design|creative|art|graphic/i, "design"],
  [/tech|\bit\b|web|software|digital|freelanc|computer|data/i, "code"],
  [/business|professional|consult|account|legal/i, "business"],
]

export function serviceIconKey(categoryName?: string): ServiceIconKey {
  if (!categoryName) return "default"
  return rules.find(([pattern]) => pattern.test(categoryName))?.[1] ?? "default"
}

/** How many gradient looks the tiles rotate through. */
export const SERVICE_TONE_COUNT = 5

/**
 * A stable number from 0 to SERVICE_TONE_COUNT - 1 for a category slug, so a
 * category always gets the same colours and neighbours tend to differ.
 */
export function serviceToneIndex(categorySlug: string): number {
  let hash = 0
  for (const char of categorySlug) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  }
  return hash % SERVICE_TONE_COUNT
}
