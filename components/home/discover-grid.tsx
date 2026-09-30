import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { discoveryItems } from "@/app/_data/homepage"

function DiscoverGrid() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Discover"
        title="Find what you need"
        description="Kampmax organizes everything happening around your campus into a few clear places to look."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {discoveryItems.map((item) => (
          <Link key={item.href} href={item.href} className="group block">
            <Card className="h-full transition-colors group-hover:border-primary/40 group-focus-visible:border-primary/40">
              <CardContent className="flex h-full flex-col gap-3">
                <div className="flex items-start justify-between">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-foreground">
                    <item.icon className="size-4" aria-hidden="true" />
                  </span>
                  {item.badge ? (
                    <Badge variant="accent">{item.badge}</Badge>
                  ) : null}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="flex items-center gap-1.5 text-base font-medium text-foreground">
                    {item.title}
                    <ArrowRight
                      className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export { DiscoverGrid }
