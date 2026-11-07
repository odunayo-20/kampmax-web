import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ProductCard } from "@/components/marketplace/product-card"
import { SectionHeading } from "@/components/layout/section-heading"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type { MarketplaceCategory, MarketplaceProduct } from "@/types/marketplace"

const MAX_RELATED = 4

/** Other listings, those in the same category first. */
export function pickRelatedProducts(
  current: MarketplaceProduct,
  all: MarketplaceProduct[]
): MarketplaceProduct[] {
  const others = all.filter((product) => product.slug !== current.slug)
  const sameCategory = others.filter((p) => p.categorySlug === current.categorySlug)
  const rest = others.filter((p) => p.categorySlug !== current.categorySlug)
  return [...sameCategory, ...rest].slice(0, MAX_RELATED)
}

/** "More from the marketplace" under a product. Left out when there is nothing else. */
function RelatedProducts({
  products,
  categories,
  campuses,
}: {
  products: MarketplaceProduct[]
  categories: MarketplaceCategory[]
  campuses: Campus[]
}) {
  if (products.length === 0) return null

  const categoryBySlug = new Map(categories.map((c) => [c.slug, c]))
  const campusBySlug = new Map(campuses.map((c) => [c.slug, c]))

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Keep browsing" title="More from the marketplace" />
        <Link
          href="/marketplace"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 self-start rounded-xl whitespace-nowrap sm:self-auto"
          )}
        >
          View all products
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <FadeIn key={product.slug} delay={index * 0.07} className="h-full">
            <ProductCard
              product={product}
              category={categoryBySlug.get(product.categorySlug)}
              campus={product.campusSlug ? campusBySlug.get(product.campusSlug) : undefined}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export { RelatedProducts }
