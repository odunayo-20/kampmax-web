import { agentPricingPoints } from "@/app/_data/become-an-agent"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { describeListingPrice, type ListingPackage } from "@/lib/accommodation-package"

/** The price comes from the live package, so this page never disagrees with the app. */
function AgentPricing({ listingPackage }: { listingPackage: ListingPackage | null }) {
  const price = listingPackage ? describeListingPrice(listingPackage) : null

  return (
    <div id="pricing" className="scroll-mt-16 flex flex-col gap-10">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple pricing, per listing"
        description="Applying to become an agent is free. You only pay when you submit a listing."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="border-primary/30 bg-primary-50 lg:row-span-1">
          <CardContent className="flex h-full flex-col justify-center gap-2 p-6">
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              Listing
            </p>
            {price ? (
              <>
                <p className="font-heading text-4xl font-bold text-foreground">
                  {price.headline}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {price.detail}
                </p>
              </>
            ) : (
              <p className="text-sm leading-relaxed text-muted-foreground">
                The listing price is shown in the Kampmax app before you pay for anything.
              </p>
            )}
          </CardContent>
        </Card>

        {agentPricingPoints.map((point) => (
          <Card key={point.title} className="h-full border-border/80">
            <CardContent className="flex flex-col gap-3 p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <point.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {point.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { AgentPricing }
