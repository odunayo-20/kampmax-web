import Link from "next/link"

import { ServiceCoverFallback } from "@/components/services/service-cover-fallback"
import { CoverImage } from "@/components/shared/cover-image"
import { formatPrice } from "@/lib/format-price"
import { cn } from "@/lib/utils"
import type { Service } from "@/types/service"

/** Where each of up to three cards sits in the fan. */
const placements = [
  "left-0 top-0 z-10 w-[56%] -rotate-[5deg] animate-float",
  "right-0 top-10 z-20 w-[56%] rotate-[5deg] animate-float-delayed",
  "bottom-0 left-[24%] z-30 w-[52%] -rotate-1 animate-float",
]

/** Services with a photo are shown first; the rest still make a card. */
function pickServices(services: Service[]): Service[] {
  const withImage = services.filter((service) => service.image)
  const without = services.filter((service) => !service.image)
  return [...withImage, ...without].slice(0, placements.length)
}

/**
 * A fan of live services beside the hero text. A service without a photo gets
 * a branded tile instead of an empty box. Renders nothing with no services.
 */
function ServicesHeroVisual({ services }: { services: Service[] }) {
  const shown = pickServices(services)
  if (shown.length === 0) return null

  return (
    <div className="relative mx-auto h-96 w-full max-w-md sm:h-[28rem]">
      <div
        aria-hidden="true"
        className="absolute inset-6 -z-10 rounded-full bg-primary-500/30 blur-3xl"
      />
      {shown.map((service, index) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className={cn(
            "absolute block rounded-2xl bg-white p-2.5 text-neutral-900 shadow-2xl shadow-primary-950/40 ring-1 ring-white/30 transition-transform duration-300 hover:z-40 hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400",
            placements[index]
          )}
        >
          <div className="relative">
            <CoverImage
              src={service.image}
              alt={service.name}
              priority={index === 0}
              sizes="(min-width: 1024px) 230px, 50vw"
              fallback={
                <ServiceCoverFallback
                  categorySlug={service.categorySlug}
                  categoryName={service.categoryName}
                  className="aspect-16/10 rounded-xl"
                />
              }
              className="aspect-16/10 w-full rounded-xl"
            />
            {service.categoryName ? (
              <span className="absolute left-2 top-2 rounded-full bg-primary-950/85 px-2.5 py-1 text-[11px] font-semibold text-white shadow-md backdrop-blur">
                {service.categoryName}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col gap-0.5 px-1 pb-0.5 pt-2.5">
            <p className="truncate text-sm font-semibold">{service.name}</p>
            <p className="flex items-center justify-between gap-2 text-xs text-neutral-500">
              <span className="truncate">{service.providerName ?? "Kampmax provider"}</span>
              {service.priceFrom ? (
                <span className="shrink-0 font-bold text-primary-700">
                  From {formatPrice(service.priceFrom)}
                </span>
              ) : null}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export { ServicesHeroVisual }
