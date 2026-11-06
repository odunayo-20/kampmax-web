import Link from "next/link"
import { ArrowLeft, ArrowRight, Building2, MapPin, Store, Truck } from "lucide-react"

import { CoverImage } from "@/components/shared/cover-image"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { H1, Lead, Muted } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { formatPrice } from "@/lib/format-price"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type {
  MarketplaceCategory,
  MarketplaceProduct,
} from "@/types/marketplace"

function ProductHeader({
  product,
  category,
  campus,
}: {
  product: MarketplaceProduct
  category: MarketplaceCategory | undefined
  campus: Campus | undefined
}) {
  return (
    <div className="flex flex-col gap-6 py-16 sm:py-20 lg:py-24">
      <Link
        href="/marketplace"
        className="inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        All Products
      </Link>

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-3">
          <CoverImage
            src={product.image}
            alt={product.name}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-square w-full rounded-xl"
          />

          {product.images && product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.images.map((img, index) => (
                <div
                  key={img}
                  className="relative size-16 shrink-0 overflow-hidden rounded-lg border border-border"
                >
                  <CoverImage
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    sizes="64px"
                    className="size-full"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-1.5">
            {category ? <Badge variant="secondary">{category.name}</Badge> : null}
            {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
            {product.condition ? (
              <Badge variant="outline" className="capitalize">
                {product.condition.toLowerCase()}
              </Badge>
            ) : null}
            {product.allowDelivery ? (
              <Badge variant="outline" className="text-muted-foreground">
                Delivery available
              </Badge>
            ) : null}
            {product.allowPickup ? (
              <Badge variant="outline" className="text-muted-foreground">
                Pickup available
              </Badge>
            ) : null}
          </div>

          <H1>{product.name}</H1>

          <div className="flex items-baseline gap-3">
            <p className="text-2xl font-semibold text-foreground sm:text-3xl">
              {product.price ? formatPrice(product.price) : "Price on request"}
            </p>
            {product.compareAtPrice && product.price && product.compareAtPrice > product.price ? (
              <span className="text-base text-muted-foreground line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            ) : null}
          </div>

          <Lead className="whitespace-pre-line">{product.description}</Lead>

          {(product.vendorName || campus || product.location) && (
            <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Seller Information
              </span>
              <div className="flex flex-col gap-1.5">
                {product.vendorName && (
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Store className="size-4 text-muted-foreground" aria-hidden="true" />
                    <span>{product.vendorName}</span>
                  </div>
                )}
                {campus && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Building2 className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span>
                      {campus.name} ({campus.shortName})
                      {campus.location ? ` , ${campus.location}` : ""}
                    </span>
                  </div>
                )}
                {product.location && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span>{product.location}</span>
                  </div>
                )}
                {product.deliveryFee !== undefined && product.deliveryFee > 0 && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Truck className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span>Delivery fee: {formatPrice(product.deliveryFee)}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2 pt-2">
            <Link
              href={siteConfig.registerUrl}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-11 self-start rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
              )}
            >
              Continue on Kampmax
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Muted>
              Continuing takes you into the Kampmax app to contact the seller,
              view order options, and place your order.
            </Muted>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductHeader }
