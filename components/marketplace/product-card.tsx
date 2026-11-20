import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { CoverImage } from "@/components/shared/cover-image"
import { Card, CardContent } from "@/components/ui/card"
import { formatPrice } from "@/lib/format-price"
import type { Campus } from "@/types/campus"
import type {
  MarketplaceCategory,
  MarketplaceProduct,
} from "@/types/marketplace"

function ProductCard({
  product,
  category,
  campus,
}: {
  product: MarketplaceProduct
  category: MarketplaceCategory | undefined
  campus?: Campus
}) {
  return (
    <Link
      href={`/marketplace/${product.slug}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="flex h-full flex-col rounded-2xl pt-0 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary-950/10 group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
        <CoverImage
          src={product.image}
          alt={product.name}
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="aspect-square rounded-none transition-transform duration-500 group-hover:scale-105"
        />
        <CardContent className="flex flex-1 flex-col gap-1.5 p-3 sm:gap-2 sm:p-4">
          <div className="flex min-w-0 flex-col gap-0.5 sm:gap-1">
            <p className="truncate text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-[11px]">
              {[category?.name, campus?.shortName].filter(Boolean).join(" · ") ||
                "Marketplace"}
            </p>

            <h3 className="line-clamp-2 font-heading text-xs font-semibold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-base sm:leading-snug">
              {product.name}
            </h3>

            {product.vendorName ? (
              <p className="truncate text-[11px] text-muted-foreground sm:text-xs">
                {product.vendorName}
              </p>
            ) : null}
          </div>

          <div className="mt-auto flex items-center justify-between gap-1.5 border-t border-border/60 pt-2 sm:gap-2 sm:pt-2.5">
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-heading text-xs font-bold tracking-tight text-foreground sm:text-base">
                {product.price ? formatPrice(product.price) : "Price on request"}
              </span>
              {product.compareAtPrice && product.price && product.compareAtPrice > product.price ? (
                <span className="text-[10px] text-muted-foreground line-through sm:text-[11px]">
                  {formatPrice(product.compareAtPrice)}
                </span>
              ) : null}
            </div>
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white sm:size-7">
              <ArrowRight
                className="size-3 transition-transform group-hover:translate-x-0.5 sm:size-3.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export { ProductCard }
