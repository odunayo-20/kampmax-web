import Link from "next/link"

import { Container } from "@/components/layout/container"

type LiveStat = {
  href: string
  value: number
  singular: string
  plural: string
}

/**
 * A slim proof strip under the hero: how much is live on Kampmax right now.
 * Every number comes from the API, and a zero is left out rather than shown,
 * so the strip never advertises an empty platform. With nothing to show it
 * renders nothing.
 */
function LiveStats({ counts }: { counts: Record<string, number> }) {
  const stats: LiveStat[] = [
    { href: "/campuses", value: counts["/campuses"], singular: "campus", plural: "campuses" },
    { href: "/marketplace", value: counts["/marketplace"], singular: "listing", plural: "listings" },
    { href: "/services", value: counts["/services"], singular: "service", plural: "services" },
    { href: "/jobs", value: counts["/jobs"], singular: "open role", plural: "open roles" },
    { href: "/events", value: counts["/events"], singular: "upcoming event", plural: "upcoming events" },
  ].filter((stat) => stat.value > 0)

  if (stats.length === 0) return null

  return (
    <div className="border-b border-border bg-card">
      <Container>
        <ul
          aria-label="Live on Kampmax"
          className="grid grid-cols-2 gap-px sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-8 sm:gap-y-2 sm:py-5"
        >
          {stats.map((stat) => (
            <li key={stat.href} className="min-w-0">
              <Link
                href={stat.href}
                className="group flex items-baseline gap-2 px-1 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:py-0"
              >
                <span className="font-heading text-2xl font-extrabold tabular-nums text-foreground transition-colors group-hover:text-primary">
                  {stat.value.toLocaleString("en-NG")}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.value === 1 ? stat.singular : stat.plural}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export { LiveStats }
