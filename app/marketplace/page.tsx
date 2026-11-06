import type { Metadata } from "next"

import { orNullDuringBuild } from "@/lib/api"
import { campusesWithItems, getCampuses } from "@/lib/campuses"
import {
  activeProductCategories,
  getProductCategories,
  getProducts,
} from "@/lib/marketplace"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { MarketplaceBrowser } from "@/components/marketplace/marketplace-browser"
import { MarketplaceHero } from "@/components/marketplace/marketplace-hero"
import { MarketplaceJsonLd } from "@/components/marketplace/marketplace-json-ld"
import { ApiUnavailable } from "@/components/shared/api-unavailable"

export const revalidate = 300

const description =
  "Discover products people are offering around your campus community on Kampmax Marketplace. Search and filter by category to find what you need, or list your own."

export const metadata: Metadata = {
  title: "Marketplace",
  description,
  alternates: {
    canonical: "/marketplace",
  },
  openGraph: {
    title: "Marketplace | Kampmax",
    description,
    url: "/marketplace",
  },
}

export default async function MarketplacePage() {
  const listing = await orNullDuringBuild(async () => {
    const campuses = await getCampuses()
    const [products, categories] = await Promise.all([
      getProducts(campuses),
      getProductCategories(),
    ])
    return { campuses, products, categories }
  })

  return (
    <>
      <MarketplaceHero products={listing?.products ?? []} />

      <Container>
        <div id="browse" className="flex scroll-mt-16 flex-col gap-8 py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Browse"
            title="Everything on the marketplace"
            description="Search, filter by category, or sort by price to narrow things down."
          />
          {listing === null ? (
            <ApiUnavailable subject="products" />
          ) : (
            <MarketplaceBrowser
              products={listing.products}
              categories={activeProductCategories(
                listing.products,
                listing.categories
              )}
              campuses={campusesWithItems(listing.campuses, listing.products)}
            />
          )}
        </div>
      </Container>

      {listing ? <MarketplaceJsonLd products={listing.products} /> : null}
    </>
  )
}
