import Link from "next/link"
import {
  ArrowRight,
  Building2,
  ChevronRight,
  ClipboardList,
  MapPin,
  MessageCircle,
  Package,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react"

import { ProductGallery } from "@/components/marketplace/product-gallery"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { formatPrice } from "@/lib/format-price"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type {
  MarketplaceCategory,
  MarketplaceProduct,
} from "@/types/marketplace"

/** What the buyer does next, all inside the Kampmax app. */
const nextSteps = [
  { icon: MessageCircle, label: "Contact the seller" },
  { icon: ClipboardList, label: "See order options" },
  { icon: ShoppingBag, label: "Place your order" },
]

const stockTones = {
  success: "bg-success-100 text-success-700",
  warning: "bg-warning-100 text-warning-700",
  error: "bg-error-100 text-error-700",
} as const

/** Stock shown to the buyer, or nothing when the API did not say. */
function stockStatus(stock: number | undefined) {
  if (stock === undefined) return undefined
  if (stock <= 0) return { text: "Out of stock", tone: "error" } as const
  if (stock <= 5) return { text: `Only ${stock} left`, tone: "warning" } as const
  return { text: "In stock", tone: "success" } as const
}

function ProductHeader({
  product,
  category,
  campus,
}: {
  product: MarketplaceProduct
  category: MarketplaceCategory | undefined
  campus: Campus | undefined
}) {
  const hasDiscount =
    product.price !== undefined &&
    product.compareAtPrice !== undefined &&
    product.compareAtPrice > product.price
  const discount = hasDiscount
    ? Math.round((1 - product.price! / product.compareAtPrice!) * 100)
    : undefined
  const stock = stockStatus(product.stockQuantity)
  const showSeller =
    product.vendorName ||
    campus ||
    product.location ||
    (product.deliveryFee !== undefined && product.deliveryFee > 0)

  return (
    <div className="py-8 sm:py-12 lg:py-14">
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
      >
        <Link
          href="/marketplace"
          className="rounded-sm font-medium transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Marketplace
        </Link>
        {category ? (
          <>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span>{category.name}</span>
          </>
        ) : null}
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="truncate font-medium text-foreground" aria-current="page">
          {product.name}
        </span>
      </nav>

      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        {/* Stays in view while the details scroll on large screens. */}
        <div className="lg:sticky lg:top-24">
          <ProductGallery
            images={product.images ?? (product.image ? [product.image] : [])}
            name={product.name}
          />
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {category ? <Badge variant="secondary">{category.name}</Badge> : null}
              {campus ? <Badge variant="outline">{campus.shortName}</Badge> : null}
              {product.condition ? (
                <Badge variant="outline" className="capitalize">
                  {product.condition.toLowerCase()}
                </Badge>
              ) : null}
            </div>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl">
              {product.name}
            </h1>

            {product.vendorName ? (
              <p className="text-sm text-muted-foreground">
                Sold by{" "}
                <span className="font-semibold text-foreground">{product.vendorName}</span>
              </p>
            ) : null}
          </div>

          {/* Price, stock and how it gets to you. */}
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
              <p className="font-heading text-4xl font-extrabold tracking-tight text-foreground">
                {product.price ? formatPrice(product.price) : "Price on request"}
              </p>
              {hasDiscount ? (
                <div className="flex items-center gap-2 pb-1">
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.compareAtPrice!)}
                  </span>
                  <Badge variant="accent">Save {discount}%</Badge>
                </div>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {stock ? (
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                    stockTones[stock.tone]
                  )}
                >
                  {stock.text}
                </span>
              ) : null}
              {product.allowDelivery ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
                  <Truck className="size-3.5 text-primary-600" aria-hidden="true" />
                  Delivery available
                </span>
              ) : null}
              {product.allowPickup ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
                  <Package className="size-3.5 text-primary-600" aria-hidden="true" />
                  Pickup available
                </span>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 border-t border-border/70 pt-4">
              <Link
                href={siteConfig.registerUrl}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-13 w-full rounded-xl bg-linear-to-r from-primary-600 to-primary-800 text-base font-bold shadow-lg shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                )}
              >
                Continue on Kampmax
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <ul className="grid gap-2 sm:grid-cols-3">
                {nextSteps.map((step) => (
                  <li
                    key={step.label}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <step.icon className="size-4 shrink-0 text-primary-600" aria-hidden="true" />
                    {step.label}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">
                Continuing takes you into the Kampmax app, where all of this happens.
              </p>
            </div>
          </div>

          {product.description ? (
            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-lg font-bold text-foreground">
                About this item
              </h2>
              <p className="text-base leading-relaxed whitespace-pre-line text-muted-foreground">
                {product.description}
              </p>
              {product.tags && product.tags.length > 0 ? (
                <ul className="flex flex-wrap gap-2 pt-1">
                  {product.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ) : null}

          {showSeller ? (
            <section
              aria-label="Seller and delivery"
              className="flex flex-col gap-4 rounded-2xl border border-border bg-linear-to-br from-primary-50 to-card p-6"
            >
              <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Seller &amp; delivery
              </h2>
              <ul className="flex flex-col gap-3 text-sm">
                {product.vendorName ? (
                  <li className="flex items-center gap-3 font-semibold text-foreground">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                      <Store className="size-4" aria-hidden="true" />
                    </span>
                    {product.vendorName}
                  </li>
                ) : null}
                {campus ? (
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-muted">
                      <Building2 className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      {campus.name} ({campus.shortName})
                      {campus.location ? `, ${campus.location}` : ""}
                    </span>
                  </li>
                ) : null}
                {product.location ? (
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-muted">
                      <MapPin className="size-4" aria-hidden="true" />
                    </span>
                    {product.location}
                  </li>
                ) : null}
                {product.deliveryFee !== undefined && product.deliveryFee > 0 ? (
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-muted">
                      <Truck className="size-4" aria-hidden="true" />
                    </span>
                    Delivery fee: {formatPrice(product.deliveryFee)}
                  </li>
                ) : null}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export { ProductHeader }
