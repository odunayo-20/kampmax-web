import Link from "next/link"
import { ArrowLeft, Building2, User } from "lucide-react"

import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { H1, Lead, Muted } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { formatPrice } from "@/lib/format-price"
import type { Campus } from "@/types/campus"
import type { Service, ServiceCategory } from "@/types/service"

function ServiceHeader({
  service,
  category,
  campus,
}: {
  service: Service
  category: ServiceCategory | undefined
  campus: Campus | undefined
}) {
  return (
    <div className="flex flex-col gap-6 py-16 sm:py-20 lg:py-24">
      <Link
        href="/services"
        className="inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        All Services
      </Link>

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <ImagePlaceholder className="aspect-4/3 w-full rounded-xl" />

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-1.5">
            {category ? <Badge variant="secondary">{category.name}</Badge> : null}
            {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
          </div>

          <H1>{service.name}</H1>

          <p className="text-2xl font-semibold text-foreground">
            {service.priceFrom
              ? `From ${formatPrice(service.priceFrom)}`
              : "Price on request"}
          </p>

          <Lead>{service.description}</Lead>

          {(service.providerName || campus) && (
            <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Provider Information
              </span>
              <div className="flex flex-col gap-1">
                {service.providerName && (
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <User className="size-4 text-muted-foreground" aria-hidden="true" />
                    <span>{service.providerName}</span>
                  </div>
                )}
                {campus && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Building2 className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span>
                      {campus.name} ({campus.shortName})
                      {campus.location ? ` — ${campus.location}` : ""}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2 pt-2">
            <Link
              href={siteConfig.registerUrl}
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "self-start",
              })}
            >
              Continue on Kampmax
            </Link>
            <Muted>
              Continuing takes you into the Kampmax app to contact the provider,
              confirm availability, and manage service requests.
            </Muted>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ServiceHeader }
