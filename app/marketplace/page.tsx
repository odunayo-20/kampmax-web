import type { Metadata } from "next"

import { getEnabledCategories, getProducts } from "@/app/_data/marketplace"
import { MarketplaceBrowser } from "@/components/marketplace/marketplace-browser"
import { MarketplaceHero } from "@/components/marketplace/marketplace-hero"
import { MarketplaceJsonLd } from "@/components/marketplace/marketplace-json-ld"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"

const description =
  "Discover products people are offering around your campus community on Kampmax Marketplace. Search and filter by category to find what you need, or list your own."

export const metadata: Metadata = {
  title: "Marketplace",
  description,
  alternates: {
    canonical: "/marketplace",
  },
  openGraph: {
    title: "Marketplace — Kampmax",
    description,
    url: "/marketplace",
  },
}

export default function MarketplacePage() {
  const products = getProducts()
  const categories = getEnabledCategories()

  return (
    <>
      <div className="relative isolate overflow-hidden border-b border-border bg-linear-to-b from-primary-50 via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-[-10%] size-96 rounded-full bg-primary-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-[-10%] size-80 rounded-full bg-accent-100/60 blur-3xl"
        />
        <Container className="relative">
          <MarketplaceHero />
        </Container>
      </div>

      <Container>
        <div className="flex flex-col gap-8 py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Browse"
            title="What's on the marketplace"
            description="A sample of the kinds of listings you'll find on Kampmax. Search, filter by category, or sort by price to narrow things down."
          />
          <MarketplaceBrowser products={products} categories={categories} />
        </div>
      </Container>

      <MarketplaceJsonLd products={products} />
    </>
  )
}
