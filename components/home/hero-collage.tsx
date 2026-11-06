import Link from "next/link"
import { ArrowUpRight, Briefcase, MapPin, Store } from "lucide-react"

import { EventDateBadge } from "@/components/events/event-date-badge"
import { CoverImage } from "@/components/shared/cover-image"
import { cn } from "@/lib/utils"

export type HeroProduct = {
  title: string
  href: string
  image?: string
  /** Formatted price, e.g. "₦250,000". */
  price?: string
  /** Campus short name, e.g. "RUGIPO". */
  campus?: string
}

export type HeroJob = {
  title: string
  href: string
  /** Where it is, e.g. "Remote". */
  meta?: string
  organization?: string
}

export type HeroEvent = {
  title: string
  href: string
  /** ISO calendar date, e.g. "2026-11-14". */
  date: string
  image?: string
  location?: string
  time?: string
  priceLabel?: string
}

type HeroCollageProps = {
  product?: HeroProduct
  job?: HeroJob
  event?: HeroEvent
}

const cardBase =
  "absolute block rounded-2xl bg-white p-3 text-neutral-900 shadow-2xl shadow-primary-950/40 ring-1 ring-white/30 transition-transform duration-300 hover:z-40 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"

/**
 * The hero's visual: three overlapping cards that preview what is live on
 * Kampmax right now. With no data a card becomes a plain call to action
 * rather than a made-up listing.
 */
function HeroCollage({ product, job, event }: HeroCollageProps) {
  return (
    <div className="relative mx-auto h-[27rem] w-full max-w-lg sm:h-[31rem] lg:h-[33rem]">
      <div
        aria-hidden="true"
        className="absolute inset-6 -z-10 rounded-full bg-primary-500/30 blur-3xl"
      />

      {/* Marketplace */}
      <Link
        href={product?.href ?? "/marketplace"}
        className={cn(cardBase, "left-0 top-2 z-10 w-[62%] -rotate-2 animate-float")}
      >
        <div className="relative">
          <CoverImage
            src={product?.image}
            alt={product?.title ?? "Marketplace"}
            priority
            sizes="(min-width: 1024px) 280px, 60vw"
            className="aspect-4/3 w-full rounded-xl"
          />
          {product?.price ? (
            <span className="absolute left-2 top-2 rounded-full bg-primary-950/85 px-2.5 py-1 text-xs font-bold text-white shadow-md backdrop-blur">
              {product.price}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-1 px-1 pb-1 pt-3">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-primary-600">
            <Store className="size-3" aria-hidden="true" />
            Marketplace
          </span>
          <p className="truncate text-sm font-semibold">
            {product?.title ?? "Shop from people on campus"}
          </p>
          <p className="truncate text-xs text-neutral-500">
            {product?.campus ? `Near ${product.campus}` : "Products, listed by students and local sellers"}
          </p>
        </div>
      </Link>

      {/* Events */}
      <Link
        href={event?.href ?? "/events"}
        className={cn(
          cardBase,
          "right-0 top-[36%] z-20 w-[60%] rotate-2 animate-float-delayed"
        )}
      >
        {event ? (
          <div className="flex flex-col gap-3">
            {event.image ? (
              <CoverImage
                src={event.image}
                alt={event.title}
                priority
                sizes="(min-width: 1024px) 260px, 56vw"
                className="aspect-video w-full rounded-xl"
              />
            ) : null}
            <div className="flex items-start gap-3 px-1">
              <EventDateBadge date={event.date} className="w-12 shrink-0 p-1.5" />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600">
                  Event{event.priceLabel ? ` · ${event.priceLabel}` : ""}
                </span>
                <p className="line-clamp-2 text-sm font-semibold leading-snug">{event.title}</p>
                {event.location ? (
                  <p className="flex items-center gap-1 truncate text-xs text-neutral-500">
                    <MapPin className="size-3 shrink-0" aria-hidden="true" />
                    <span className="truncate">{event.location}</span>
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 p-1">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold">See what&apos;s happening on campus</p>
          </div>
        )}
      </Link>

      {/* Jobs */}
      <Link
        href={job?.href ?? "/jobs"}
        className={cn(cardBase, "bottom-0 left-[4%] z-30 w-[64%] -rotate-1 animate-float")}
      >
        <div className="flex items-center gap-3 p-1">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary-600 to-primary-800 text-white">
            <Briefcase className="size-5" aria-hidden="true" />
          </span>
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600">
              Jobs{job?.meta ? ` · ${job.meta}` : ""}
            </span>
            <p className="truncate text-sm font-semibold">{job?.title ?? "Find roles near your campus"}</p>
            {job?.organization ? (
              <p className="truncate text-xs text-neutral-500">{job.organization}</p>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  )
}

export { HeroCollage }
