import Link from "next/link"

import { CoverImage } from "@/components/shared/cover-image"
import { formatPrice } from "@/lib/format-price"
import { cn } from "@/lib/utils"
import type { MarketplaceProduct } from "@/types/marketplace"

/** Where each of up to three cards sits in the fan. */
const placements = [
  "left-0 top-0 z-10 w-[54%] -rotate-[6deg] animate-float",
  "right-0 top-8 z-20 w-[54%] rotate-[5deg] animate-float-delayed",
  "bottom-0 left-[26%] z-30 w-[50%] -rotate-1 animate-float",
]

/**
 * A fan of the newest listings that have a photo, shown beside the hero text.
 * Renders nothing when no listing has a photo, so the hero stays text-only.
 */
function MarketplaceHeroVisual({ products }: { products: MarketplaceProduct[] }) {
  const shown = products.filter((product) => product.image).slice(0, placements.length)
  if (shown.length === 0) return null

  return (
    <div className="relative mx-auto h-96 w-full max-w-md sm:h-[28rem]">
      <div
        aria-hidden="true"
        className="absolute inset-6 -z-10 rounded-full bg-primary-500/30 blur-3xl"
      />
      {shown.map((product, index) => (
        <Link
          key={product.slug}
          href={`/marketplace/${product.slug}`}
          className={cn(
            "absolute block rounded-2xl bg-white p-2.5 text-neutral-900 shadow-2xl shadow-primary-950/40 ring-1 ring-white/30 transition-transform duration-300 hover:z-40 hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400",
            placements[index]
          )}
        >
          <div className="relative">
            <CoverImage
              src={product.image}
              alt={product.name}
              priority={index === 0}
              sizes="(min-width: 1024px) 220px, 50vw"
              className="aspect-square w-full rounded-xl"
            />
            {product.price ? (
              <span className="absolute left-2 top-2 rounded-full bg-primary-950/85 px-2.5 py-1 text-xs font-bold text-white shadow-md backdrop-blur">
                {formatPrice(product.price)}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col px-1 pb-0.5 pt-2.5">
            <p className="truncate text-sm font-semibold">{product.name}</p>
            {product.vendorName ? (
              <p className="truncate text-xs text-neutral-500">{product.vendorName}</p>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  )
}

export { MarketplaceHeroVisual }
