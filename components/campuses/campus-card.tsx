import Link from "next/link"
import { ArrowRight, GraduationCap, MapPin } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import type { Campus } from "@/types/campus"

function CampusCard({ campus }: { campus: Campus }) {
  return (
    <Link
      href={`/campuses/${campus.slug}`}
      className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="h-full transition-colors group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
        <CardContent className="flex h-full flex-col gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-foreground">
            <GraduationCap className="size-4" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="font-heading text-base font-semibold text-foreground">
              {campus.name}
            </h3>
            {campus.location ? (
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                {campus.location}
              </p>
            ) : null}
            {campus.description ? (
              <p className="text-sm text-muted-foreground">
                {campus.description}
              </p>
            ) : null}
          </div>
          <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-foreground">
            Explore Campus
            <ArrowRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

export { CampusCard }
