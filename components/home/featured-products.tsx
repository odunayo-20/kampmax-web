import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ProductCard } from "@/components/marketplace/product-card"
import { SectionHeading } from "@/components/layout/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type {
  MarketplaceCategory,
  MarketplaceProduct,
} from "@/types/marketplace"

function FeaturedProducts({
  products = [],
  campuses = [],
  categories = [],
}: {
  products?: MarketplaceProduct[]
  campuses?: Campus[]
  categories?: MarketplaceCategory[]
}) {
  if (products.length === 0) return null

  const displayProducts = products.slice(0, 3)
  const campusBySlug = new Map(campuses.map((c) => [c.slug, c]))
  const categoryBySlug = new Map(categories.map((c) => [c.slug, c]))

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Marketplace"
          title="Fresh on campus"
          description="Explore listings from student sellers, creators, and verified campus businesses."
        />
        <Link
          href="/marketplace"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "self-start whitespace-nowrap sm:self-auto"
          )}
        >
          View All Products
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            category={categoryBySlug.get(product.categorySlug)}
            campus={
              product.campusSlug
                ? campusBySlug.get(product.campusSlug)
                : undefined
            }
          />
        ))}
      </div>
    </div>
  )
}

export { FeaturedProducts }

