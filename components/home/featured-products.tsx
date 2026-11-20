"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import { ProductCard } from "@/components/marketplace/product-card"
import { SectionHeading } from "@/components/layout/section-heading"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Campus } from "@/types/campus"
import type {
  MarketplaceCategory,
  MarketplaceProduct,
} from "@/types/marketplace"

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
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const displayProducts = products.slice(0, MAX_FEATURED_PRODUCTS)
  const campusBySlug = new Map(campuses.map((c) => [c.slug, c]))
  const categoryBySlug = new Map(categories.map((c) => [c.slug, c]))

  const checkScroll = useCallback(() => {
    const el = sliderRef.current
    if (!el) return
    const tolerance = 4
    setCanScrollLeft(el.scrollLeft > tolerance)
    setCanScrollRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - tolerance
    )
  }, [])

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll, { passive: true })
    return () => window.removeEventListener("resize", checkScroll)
  }, [checkScroll, displayProducts.length])

  const scroll = (direction: "left" | "right") => {
    const el = sliderRef.current
    if (!el) return
    const step = el.clientWidth * 0.75
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    })
  }

  if (displayProducts.length === 0) return null

  return (
    <div className="flex w-full min-w-0 max-w-full flex-col gap-6 sm:gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Marketplace"
          title="Fresh on campus"
          description="Explore listings from student sellers, creators, and verified campus businesses."
        />

        <div className="flex items-center justify-between gap-3 self-stretch sm:self-auto sm:justify-end">
          <div className="flex items-center gap-1.5">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous products"
              className="size-9 rounded-full shadow-xs"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next products"
              className="size-9 rounded-full shadow-xs"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          <Link
            href="/marketplace"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-9 whitespace-nowrap text-xs sm:text-sm"
            )}
          >
            View All Products
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="relative w-full min-w-0 max-w-full overflow-hidden">
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="no-scrollbar flex w-full min-w-0 max-w-full gap-4 overflow-x-auto py-3 scroll-smooth snap-x snap-mandatory sm:gap-5"
          role="region"
          aria-label="Fresh products slider"
          tabIndex={0}
        >
          {displayProducts.map((product) => (
            <div
              key={product.slug}
              className="flex h-auto w-[78vw] max-w-[280px] shrink-0 snap-start flex-col sm:w-[260px] md:w-[270px] lg:w-[280px]"
            >
              <ProductCard
                product={product}
                category={categoryBySlug.get(product.categorySlug)}
                campus={
                  product.campusSlug
                    ? campusBySlug.get(product.campusSlug)
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { FeaturedProducts }

