import Link from "next/link"
import { ArrowRight, MapPin, MessageCircle, ShieldCheck } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Eyebrow, H1, Lead } from "@/components/ui/typography"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const trustPoints = [
  { icon: MapPin, label: "Organized by campus" },
  { icon: MessageCircle, label: "Message sellers directly" },
  { icon: ShieldCheck, label: "Backed by the Kampmax community" },
]

function MarketplaceHero() {
  return (
    <div className="flex flex-col gap-6 py-16 sm:py-20 lg:py-24">
      <Eyebrow>Marketplace</Eyebrow>
      <H1>Discover products around your campus community.</H1>
      <Lead className="max-w-2xl">
        Browse what people are offering across the Kampmax ecosystem — from
        everyday items to campus-made goods. Join Kampmax to message a
        seller or list something yourself.
      </Lead>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={siteConfig.registerUrl}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "h-11 self-start rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary-600/20"
          )}
        >
          Join Kampmax
          <ArrowRight />
        </Link>
        <Link
          href="/become-a-vendor"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 self-start rounded-lg px-6 text-sm font-semibold"
          )}
        >
          Sell on Kampmax
        </Link>
      </div>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
        {trustPoints.map((point) => (
          <li
            key={point.label}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <point.icon className="size-4 text-primary-600" aria-hidden="true" />
            {point.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { MarketplaceHero }
