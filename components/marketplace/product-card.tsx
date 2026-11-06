import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { CoverImage } from "@/components/shared/cover-image"
import { Badge } from "@/components/ui/badge"
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
      className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="flex h-full flex-col rounded-2xl pt-0 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary-950/10 group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
        <CoverImage
          src={product.image}
          alt={product.name}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="aspect-square rounded-none transition-transform duration-500 group-hover:scale-105"
        />
        <CardContent className="flex flex-1 flex-col gap-2 p-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-1.5">
              {category ? <Badge variant="secondary">{category.name}</Badge> : null}
              {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
              {product.condition && product.condition !== "NEW" ? (
                <Badge variant="outline" className="text-muted-foreground">
                  {product.condition.toLowerCase()}
                </Badge>
              ) : null}
            </div>

            <h3 className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary">
              {product.name}
            </h3>

            {product.vendorName ? (
              <p className="text-xs font-medium text-muted-foreground">
                Sold by {product.vendorName}
              </p>
            ) : null}

            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-2 border-t border-border/60 pt-3">
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-lg font-extrabold tracking-tight text-foreground">
                {product.price ? formatPrice(product.price) : "Price on request"}
              </span>
              {product.compareAtPrice && product.price && product.compareAtPrice > product.price ? (
                <span className="text-xs text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              ) : null}
            </div>
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

export { ProductCard }
