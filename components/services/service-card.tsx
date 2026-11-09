import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { FreelancerAvatar } from "@/components/freelancers/freelancer-avatar"
import { ServiceCoverFallback } from "@/components/services/service-cover-fallback"
import { CoverImage } from "@/components/shared/cover-image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { servicePriceLabel } from "@/lib/service-price"
import type { Campus } from "@/types/campus"
import type { Service, ServiceCategory } from "@/types/service"

function ServiceCard({
  service,
  category,
  campus,
}: {
  service: Service
  category: ServiceCategory | undefined
  campus?: Campus
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="flex h-full flex-col rounded-2xl pt-0 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary-950/10 group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
        <CoverImage
          src={service.image}
          alt={service.name}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          fallback={
            <ServiceCoverFallback
              categorySlug={service.categorySlug}
              categoryName={service.categoryName}
              className="aspect-16/10"
            />
          }
          className="aspect-16/10 rounded-none transition-transform duration-500 group-hover:scale-105"
        />
        <CardContent className="flex flex-1 flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-1.5">
              {category ? <Badge variant="secondary">{category.name}</Badge> : null}
              {service.subcategoryName ? (
                <Badge variant="outline">{service.subcategoryName}</Badge>
              ) : null}
              {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
            </div>

            <h3 className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary">
              {service.name}
            </h3>

            {service.providerName ? (
              <div className="flex items-center gap-2 pt-0.5 text-xs font-medium text-muted-foreground">
                <FreelancerAvatar
                  name={service.providerName}
                  avatar={service.providerAvatar}
                  size="sm"
                  className="size-6 text-[10px]"
                />
                <span className="truncate">Offered by {service.providerName}</span>
              </div>
            ) : null}

            <p className="line-clamp-2 text-sm text-muted-foreground">
              {service.description}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-2 border-t border-border/60 pt-3">
            <span className="font-heading text-base font-extrabold tracking-tight text-foreground">
              {servicePriceLabel(service)}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
              View
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

export { ServiceCard }
