import Link from "next/link"

import { campusDiscoveryCategories } from "@/app/_data/campuses"
import { SectionHeading } from "@/components/layout/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Campus } from "@/types/campus"

/**
 * Categories are shown whether or not their route exists yet — visitors
 * should see the full shape of the ecosystem — but only ones with
 * `available: true` render as links. The rest are marked "Coming soon"
 * instead of pointing at a route that isn't built.
 */
function CampusDiscover({ campus }: { campus: Campus }) {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Discover"
        title={`What's around ${campus.shortName}`}
        description={`Kampmax helps the ${campus.shortName} community discover products, services, people with useful skills, jobs, and events — all organized around this campus as it grows.`}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {campusDiscoveryCategories.map((category) => {
          const card = (
            <Card
              className={
                category.available
                  ? "h-full transition-colors group-hover:ring-primary/40 group-focus-visible:ring-primary/40"
                  : "h-full opacity-60"
              }
            >
              <CardContent className="flex h-full flex-col gap-3">
                <div className="flex items-start justify-between">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <category.icon className="size-4" aria-hidden="true" />
                  </span>
                  {!category.available && (
                    <Badge variant="outline">Coming soon</Badge>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-medium text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          )

          if (category.available) {
            return (
              <Link
                key={category.title}
                href={category.href}
                className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {card}
              </Link>
            )
          }

          return (
            <div key={category.title} className="block">
              {card}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { CampusDiscover }
