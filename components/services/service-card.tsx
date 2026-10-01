import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { getCampusBySlug } from "@/app/_data/campuses"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { formatPrice } from "@/lib/format-price"
import type { Service, ServiceCategory } from "@/types/service"

function ServiceCard({
  service,
  category,
}: {
  service: Service
  category: ServiceCategory | undefined
}) {
  const campus = service.campusSlug ? getCampusBySlug(service.campusSlug) : undefined

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="flex h-full flex-col pt-0 shadow-sm transition-all group-hover:shadow-md group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
        <ImagePlaceholder className="aspect-16/10 rounded-none" />
        <CardContent className="flex flex-1 flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-1.5">
              {category ? <Badge variant="secondary">{category.name}</Badge> : null}
              {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
            </div>

            <h3 className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary">
              {service.name}
            </h3>

            {service.providerName ? (
              <p className="text-xs font-medium text-muted-foreground">
                Offered by {service.providerName}
              </p>
            ) : null}

            <p className="line-clamp-2 text-sm text-muted-foreground">
              {service.description}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-2 border-t border-border/60 pt-3">
            <span className="text-sm font-semibold text-foreground">
              {service.priceFrom
                ? `From ${formatPrice(service.priceFrom)}`
                : "Price on request"}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600">
              View Service
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export { ServiceCard }
