import Link from "next/link"
import { ArrowRight, MapPin, MessageCircle, ShieldCheck } from "lucide-react"

import { MarketplaceHeroVisual } from "@/components/marketplace/marketplace-hero-visual"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"
import type { MarketplaceProduct } from "@/types/marketplace"

const trustPoints = [
  { icon: MapPin, label: "Organized by campus" },
  { icon: MessageCircle, label: "Message sellers directly" },
  { icon: ShieldCheck, label: "Backed by the Kampmax community" },
]

function MarketplaceHero({ products = [] }: { products?: MarketplaceProduct[] }) {
  const count = products.length

  return (
    <PageHero
      eyebrow={
        count > 0
          ? `Marketplace · ${count} ${count === 1 ? "listing" : "listings"} live`
          : "Marketplace"
      }
      title={
        <>
          Discover products around{" "}
          <span className="text-gradient-brand">your campus community.</span>
        </>
      }
      description="Browse what people are offering across the Kampmax ecosystem, from everyday items to campus-made goods. Join Kampmax to message a seller or list something yourself."
      actions={
        <>
          <Link href={siteConfig.registerUrl} className={heroActionClass("primary")}>
            Join Kampmax
            <ArrowRight />
          </Link>
          <Link href="/become-a-vendor" className={heroActionClass("ghost")}>
            Sell on Kampmax
          </Link>
        </>
      }
      points={trustPoints}
    >
      <MarketplaceHeroVisual products={products} />
    </PageHero>
  )
}

export { MarketplaceHero }
