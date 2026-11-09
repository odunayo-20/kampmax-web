import Link from "next/link"
import { ArrowRight, BadgeCheck } from "lucide-react"

import { FreelancerAvatar } from "@/components/freelancers/freelancer-avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="flex h-full flex-col rounded-2xl pt-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary-950/10 group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
        <CardContent className="flex flex-1 flex-col gap-4">
          <div className="flex items-start gap-3">
            <FreelancerAvatar
              name={freelancer.name}
              avatar={freelancer.avatar}
              size="md"
            />
            <div className="flex min-w-0 flex-1 flex-col">
              <h3 className="flex items-center gap-1.5 font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                <span className="truncate">{freelancer.name}</span>
                {freelancer.verified ? (
                  <>
                    <BadgeCheck
                      className="size-4 shrink-0 text-primary"
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

          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant="secondary">{freelancer.categoryName}</Badge>
            {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
          </div>

          <p className="line-clamp-2 text-sm text-muted-foreground">
            {freelancer.bio}
          </p>

          <div className="flex flex-wrap items-center gap-1">
            {displayedSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {skill}
              </span>
            ))}
            {remainingCount > 0 ? (
              <span className="text-xs text-muted-foreground">
                +{remainingCount} more
              </span>
            ) : null}
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3">
            <span className="text-xs text-muted-foreground">
              {freelancer.availability === "AVAILABLE"
                ? "Available for work"
                : freelancer.availability === "BUSY"
                  ? "Currently busy"
                  : ""}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
              View Profile
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
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
