import Link from "next/link"
import { ArrowRight, MapPin, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import type { Campus } from "@/types/campus"

function CampusCard({ campus }: { campus: Campus }) {
  return (
    <Link
      href={`/campuses/${campus.slug}`}
      prefetch={false}
      className="group block h-full rounded-xl sm:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="h-full rounded-xl sm:rounded-2xl py-3.5 sm:py-4 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary-950/10 group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
        <CardContent className="flex h-full flex-col gap-2.5 sm:gap-4 px-3.5 sm:px-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span
              aria-hidden="true"
              className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-linear-to-br from-primary-600 to-primary-800 px-1 text-xs font-extrabold tracking-tight text-white"
            >
              {campus.shortName.slice(0, 6)}
            </span>
            <div className="flex min-w-0 flex-col gap-0.5">
              <h3 className="font-heading text-xs sm:text-base font-semibold leading-tight text-foreground transition-colors group-hover:text-primary line-clamp-2">
                {campus.name}
              </h3>
              {campus.location ? (
                <p className="flex items-center gap-1 text-xs text-muted-foreground truncate">
                  <MapPin className="size-3 sm:size-3.5 shrink-0" aria-hidden="true" />
                  <span className="truncate">{campus.location}</span>
                </p>
              ) : null}
            </div>
          </div>

          {campus.description ? (
            <p className="hidden line-clamp-2 text-xs text-muted-foreground sm:block">
              {campus.description}
            </p>
          ) : null}

          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-2.5 sm:pt-3">
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              {campus.memberCount ? (
                <>
                  <Users className="size-3 sm:size-3.5 shrink-0" aria-hidden="true" />
                  <span>
                    {campus.memberCount.toLocaleString("en-US")}
                    <span className="hidden sm:inline"> {campus.memberCount === 1 ? "member" : "members"}</span>
                  </span>
                </>
              ) : null}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-xs font-semibold text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
              Explore
              <ArrowRight
                className="size-3 sm:size-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export { CampusCard }
