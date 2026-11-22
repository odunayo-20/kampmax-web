import { ProductCard } from "@/components/marketplace/product-card"
import { ScrollSlider } from "@/components/shared/scroll-slider"
import type { Campus } from "@/types/campus"
import type { MarketplaceCategory, MarketplaceProduct } from "@/types/marketplace"

const MAX_FEATURED_PRODUCTS = 12

function FeaturedProducts({
  products = [],
  campuses = [],
  categories = [],
}: {
  products?: MarketplaceProduct[]
  campuses?: Campus[]
  categories?: MarketplaceCategory[]
}) {
  const campusBySlug = new Map(campuses.map((c) => [c.slug, c]))
  const categoryBySlug = new Map(categories.map((c) => [c.slug, c]))

  return (
    <ScrollSlider
      eyebrow="Marketplace"
      title="Fresh on campus"
      description="Explore listings from student sellers, creators, and verified campus businesses."
      viewAll={{ href: "/marketplace", label: "View All Products" }}
      label="Fresh products"
    >
      {products.slice(0, MAX_FEATURED_PRODUCTS).map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
          category={categoryBySlug.get(product.categorySlug)}
          campus={product.campusSlug ? campusBySlug.get(product.campusSlug) : undefined}
        />
      ))}
    </ScrollSlider>
  )
}

export { FeaturedProducts }
