import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { getCampusBySlug } from "@/app/_data/campuses"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { formatPrice } from "@/lib/format-price"
import type { MarketplaceCategory, MarketplaceProduct } from "@/types/marketplace"

function ProductCard({
  product,
  category,
}: {
  product: MarketplaceProduct
  category: MarketplaceCategory | undefined
}) {
  const campus = product.campusSlug ? getCampusBySlug(product.campusSlug) : undefined

  return (
    <Link
      href={`/marketplace/${product.slug}`}
      className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Card className="h-full pt-0 shadow-sm transition-all group-hover:shadow-md group-hover:ring-primary/40 group-focus-visible:ring-primary/40">
        <ImagePlaceholder className="aspect-square rounded-none" />
        <CardContent className="flex h-full flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-heading text-base font-semibold text-foreground">
              {product.name}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5">
              {category ? <Badge variant="secondary">{category.name}</Badge> : null}
              {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between gap-2 pt-2">
            <span className="text-sm font-semibold text-foreground">
              {product.price ? formatPrice(product.price) : "Price on request"}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600">
              View Product
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

export { ProductCard }
