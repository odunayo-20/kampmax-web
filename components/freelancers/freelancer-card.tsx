import Link from "next/link"
import { ArrowRight, BadgeCheck } from "lucide-react"

import { FreelancerAvatar } from "@/components/freelancers/freelancer-avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { Freelancer } from "@/types/freelancer"

function FreelancerCard({
  freelancer,
  campus,
}: {
  freelancer: Freelancer
  campus?: Campus
}) {
  const displayedSkills = freelancer.skills.slice(0, 3)
  const remainingCount = freelancer.skills.length - displayedSkills.length

  return (
    <Link
      href={`/freelancers/${freelancer.slug}`}
      prefetch={false}
      className="group block h-full rounded-xl sm:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="flex h-full flex-col rounded-xl sm:rounded-2xl py-3.5 sm:py-4 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary-950/10 group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
        <CardContent className="flex flex-1 flex-col gap-2.5 sm:gap-4 px-3.5 sm:px-4">
          <div className="flex items-start gap-2.5 sm:gap-3">
            <div className="relative shrink-0">
              <FreelancerAvatar
                name={freelancer.name}
                avatar={freelancer.avatar}
                size="md"
                className="size-10 sm:size-12 text-xs sm:text-sm"
              />
              {freelancer.availability === "AVAILABLE" ? (
                <span
                  className="absolute bottom-0 right-0 size-2.5 sm:size-3 rounded-full border-2 border-card bg-emerald-500"
                  title="Available for work"
                  aria-hidden="true"
                />
              ) : freelancer.availability === "BUSY" ? (
                <span
                  className="absolute bottom-0 right-0 size-2.5 sm:size-3 rounded-full border-2 border-card bg-amber-500"
                  title="Currently busy"
                  aria-hidden="true"
                />
              ) : null}
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <h3 className="flex items-center gap-1 font-heading text-xs sm:text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                <span className="truncate">{freelancer.name}</span>
                {freelancer.verified ? (
                  <>
                    <BadgeCheck
                      className="size-3.5 sm:size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Verified</span>
                  </>
                ) : null}
              </h3>
              <p className="line-clamp-1 text-xs text-muted-foreground">
                {freelancer.headline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            <Badge variant="secondary" className="px-1.5 py-0 text-xs sm:px-2.5 sm:py-0.5 sm:text-xs">
              {freelancer.categoryName}
            </Badge>
            {campus ? (
              <Badge variant="outline" className="px-1.5 py-0 text-xs sm:px-2.5 sm:py-0.5 sm:text-xs">
                {campus.shortName}
              </Badge>
            ) : null}
          </div>

          {freelancer.bio ? (
            <p className="hidden line-clamp-2 text-xs text-muted-foreground sm:block">
              {freelancer.bio}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-1">
            {displayedSkills.map((skill, index) => (
              <span
                key={skill}
                className={cn(
                  "rounded-md bg-muted px-1.5 py-0.5 text-xs sm:px-2 sm:text-xs text-muted-foreground",
                  index >= 2 && "hidden sm:inline-flex"
                )}
              >
                {skill}
              </span>
            ))}
            {remainingCount > 0 ? (
              <span className="text-xs text-muted-foreground">
                +{remainingCount}
              </span>
            ) : null}
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-2.5 sm:pt-3">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span
                className={cn(
                  "size-1.5 sm:size-2 rounded-full shrink-0",
                  freelancer.availability === "AVAILABLE"
                    ? "bg-emerald-500"
                    : freelancer.availability === "BUSY"
                      ? "bg-amber-500"
                      : "bg-muted-foreground/40"
                )}
                aria-hidden="true"
              />
              <span className="truncate">
                {freelancer.availability === "AVAILABLE"
                  ? "Available"
                  : freelancer.availability === "BUSY"
                    ? "Busy"
                    : "Unavailable"}
              </span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-xs font-semibold text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
              <span className="hidden sm:inline">View </span>Profile
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

export { FreelancerCard }
