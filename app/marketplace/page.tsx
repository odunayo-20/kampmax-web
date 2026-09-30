import type { Metadata } from "next"

import { getEnabledCategories, getProducts } from "@/app/_data/marketplace"
import { MarketplaceBrowser } from "@/components/marketplace/marketplace-browser"
import { MarketplaceHero } from "@/components/marketplace/marketplace-hero"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"

export const metadata: Metadata = {
  title: "Marketplace",
  description:
    "Discover products people are offering around your campus community on Kampmax Marketplace.",
}

export default function MarketplacePage() {
  const products = getProducts()
  const categories = getEnabledCategories()

  return (
    <Container>
      <MarketplaceHero />
      <div className="flex flex-col gap-8 pb-16 sm:pb-20 lg:pb-24">
        <SectionHeading
          eyebrow="Browse"
          title="What's on the marketplace"
          description="A sample of the kinds of listings you'll find on Kampmax. Search or filter by category to narrow things down."
        />
        <MarketplaceBrowser products={products} categories={categories} />
      </div>
    </Container>
  )
}
