import Link from "next/link"
import { Briefcase, Calendar, Store } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export type HeroPreviewTile = {
  icon: typeof Store
  label: string
  title: string
  meta: string
  href: string
}

type HeroPreviewProps = {
  product?: { title: string; meta?: string; href?: string }
  job?: { title: string; meta?: string; href?: string }
  event?: { title: string; meta?: string; href?: string }
}

function HeroPreview({ product, job, event }: HeroPreviewProps) {
  const tiles: HeroPreviewTile[] = [
    {
      icon: Store,
      label: "Marketplace",
      title: product?.title ?? "Desk lamp, barely used",
      meta: product?.meta ?? "Near North Campus",
      href: product?.href ?? "/marketplace",
    },
    {
      icon: Briefcase,
      label: "Jobs",
      title: job?.title ?? "Weekend barista, campus café",
      meta: job?.meta ?? "Part-time",
      href: job?.href ?? "/jobs",
    },
    {
      icon: Calendar,
      label: "Events",
      title: event?.title ?? "Fall welcome fair",
      meta: event?.meta ?? "This Saturday",
      href: event?.href ?? "/events",
    },
  ]

  return (
    <div className="flex flex-col gap-3">
      {tiles.map((tile, index) => (
        <Link
          key={tile.label}
          href={tile.href}
          className={`block transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl ${
            index === 1 ? "ml-4 sm:ml-10" : ""
          }`}
        >
          <Card size="sm" className="shadow-xs transition-colors hover:border-primary/40">
            <CardContent className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <tile.icon className="size-4" />
              </span>
              <div className="flex min-w-0 flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{tile.label}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {tile.meta}
                  </span>
                </div>
                <p className="truncate text-sm font-medium text-foreground">
                  {tile.title}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export { HeroPreview }
