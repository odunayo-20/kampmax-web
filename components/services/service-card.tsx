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
          sizes="(min-width: 1024px) 33vw, 50vw"
          fallback={
            <ServiceCoverFallback
              categorySlug={service.categorySlug}
              categoryName={service.categoryName}
              className="aspect-16/10"
            />
          }
          className="aspect-16/10 rounded-none transition-transform duration-500 group-hover:scale-105"
        />
        <CardContent className="flex flex-1 flex-col gap-2 p-3 sm:gap-3 sm:p-4">
          <div className="flex flex-col gap-1 sm:gap-1.5">
            <div className="flex flex-wrap items-center gap-1">
              {category ? (
                <Badge variant="secondary" className="text-[10px] sm:text-xs font-normal px-2 py-0.5">
                  {category.name}
                </Badge>
              ) : null}
              {campus ? (
                <Badge variant="outline" className="text-[10px] sm:text-xs font-normal px-1.5 py-0.5">
                  {campus.shortName}
                </Badge>
              ) : service.subcategoryName ? (
                <Badge variant="outline" className="text-[10px] sm:text-xs font-normal px-1.5 py-0.5">
                  {service.subcategoryName}
                </Badge>
              ) : null}
            </div>

            <h3 className="line-clamp-2 font-heading text-xs sm:text-base font-semibold leading-tight sm:leading-snug text-foreground transition-colors group-hover:text-primary">
              {service.name}
            </h3>

            {service.providerName ? (
              <div className="flex items-center gap-1.5 pt-0.5 text-[11px] sm:text-xs font-medium text-muted-foreground">
                <FreelancerAvatar
                  name={service.providerName}
                  avatar={service.providerAvatar}
                  size="sm"
                  className="size-5 sm:size-6 text-[9px] sm:text-[10px]"
                />
                <span className="truncate">{service.providerName}</span>
              </div>
            ) : null}

            {service.description ? (
              <p className="line-clamp-2 text-xs sm:text-sm text-muted-foreground hidden sm:block">
                {service.description}
              </p>
            ) : null}
          </div>

          <div className="mt-auto flex items-center justify-between gap-1.5 border-t border-border/60 pt-2 sm:gap-2 sm:pt-2.5">
            <span className="truncate font-heading text-xs sm:text-base font-extrabold tracking-tight text-foreground">
              {servicePriceLabel(service)}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-semibold text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white sm:px-3 sm:py-1.5 sm:text-xs">
              View
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

export { ServiceCard }
