import Link from "next/link"
import { BadgeCheck, BedDouble, ChevronRight, Clock, MapPin, MessageCircle } from "lucide-react"

import { ProductGallery } from "@/components/marketplace/product-gallery"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { buttonVariants } from "@/components/ui/button"
import { whatsappUrl } from "@/config/contact"
import { siteConfig } from "@/config/site"
import {
  frequencyLabel,
  furnishingLabel,
  placeLabel,
  rentLabel,
  sizeLabel,
} from "@/lib/accommodation"
import { formatPrice } from "@/lib/format-price"
import { cn } from "@/lib/utils"
import type { AccommodationDetail } from "@/types/accommodation"

/** The chat that starts on WhatsApp already says which place it is about. */
function whatsappLink(listing: AccommodationDetail): string {
  return whatsappUrl(
    `Hi Kampmax, I am interested in "${listing.title}" (${siteConfig.url}/accommodation/${listing.slug}). Is it still available?`
  )
}

function Charges({ listing }: { listing: AccommodationDetail }) {
  const { charges } = listing
  const rows = [
    { label: `Rent (${frequencyLabel(listing.paymentFrequency)})`, value: charges.rent },
    { label: "Caution fee (refundable)", value: charges.cautionFee },
    { label: "Agency fee", value: charges.agencyFee },
    { label: "Agreement fee", value: charges.agreementFee },
    { label: "Other charges", value: charges.otherCharges },
  ].filter((row) => row.value > 0)

  return (
    <section aria-labelledby="charges" className="flex flex-col gap-3">
      <h2 id="charges" className="font-heading text-lg font-semibold text-foreground">
        What you pay
      </h2>
      <dl className="divide-y divide-border/60 rounded-xl border border-border bg-card text-sm">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between gap-4 px-4 py-3">
            <dt className="text-muted-foreground">{row.label}</dt>
            <dd className="font-medium text-foreground">{formatPrice(row.value)}</dd>
          </div>
        ))}
        <div className="flex justify-between gap-4 bg-primary-50/60 px-4 py-3 font-semibold">
          <dt className="text-foreground">Total to move in</dt>
          <dd className="text-primary-700">{formatPrice(charges.totalUpfront)}</dd>
        </div>
      </dl>
    </section>
  )
}

function AgentCard({ listing }: { listing: AccommodationDetail }) {
  const { agent } = listing
  const since = agent.memberSince
    ? new Date(agent.memberSince).toLocaleDateString("en-NG", { month: "long", year: "numeric" })
    : null
  return (
    <section aria-labelledby="agent" className="flex flex-col gap-3">
      <h2 id="agent" className="font-heading text-lg font-semibold text-foreground">
        Listed by
      </h2>
      <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-50 font-heading text-lg font-bold text-primary-700">
          {agent.name.charAt(0).toUpperCase()}
        </span>
        <div className="flex min-w-0 flex-col gap-1">
          <p className="flex flex-wrap items-center gap-2 font-semibold text-foreground">
            {agent.name}
            <span className="inline-flex items-center gap-1 text-xs font-medium text-success-700">
              <BadgeCheck className="size-4" aria-hidden="true" />
              Verified agent
            </span>
          </p>
          <p className="text-sm text-muted-foreground">
            {agent.activeListings} {agent.activeListings === 1 ? "place" : "places"} listed
            {since ? ` · On Kampmax since ${since}` : ""}
          </p>
          {agent.typicalReplyHours !== undefined ? (
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="size-3.5" aria-hidden="true" />
              {agent.typicalReplyHours <= 1
                ? "Usually replies within an hour"
                : `Usually replies within ${agent.typicalReplyHours} hours`}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

/** Everything about one place: photos, price, fees, facilities, the agent and how to ask. */
function ListingDetail({ listing }: { listing: AccommodationDetail }) {
  const size = "h-12 w-full rounded-xl text-base"
  return (
    <div className="flex flex-col gap-8 py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <Link href="/accommodation" className="inline-flex min-h-11 items-center hover:text-foreground hover:underline">
          Accommodation
        </Link>
        {listing.campusName ? (
          <>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span>{listing.campusName}</span>
          </>
        ) : null}
      </nav>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {listing.images.length > 0 ? (
          <ProductGallery images={listing.images} name={listing.title} />
        ) : (
          <ImagePlaceholder className="aspect-4/3 w-full rounded-2xl" />
        )}

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            {listing.categoryName ? (
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {listing.categoryName}
              </p>
            ) : null}
            <h1 className="font-heading text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
              {listing.title}
            </h1>
            <p className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {placeLabel(listing)}
              {listing.landmark ? `, near ${listing.landmark}` : ""}
            </p>
            <p className="flex flex-wrap items-center gap-x-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <BedDouble className="size-4" aria-hidden="true" />
                {sizeLabel(listing)}
              </span>
              <span>{furnishingLabel(listing.furnishing)}</span>
            </p>
          </div>

          <div id="action-card" className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm lg:sticky lg:top-24">
            <p className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
              {rentLabel(listing)}
            </p>
            <p className="text-sm text-muted-foreground">
              Total to move in: {formatPrice(listing.charges.totalUpfront)}
            </p>
            <a
              href={whatsappLink(listing)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="accommodation-whatsapp"
              className={cn(buttonVariants({ size: "lg" }), size)}
            >
              <MessageCircle />
              Ask on WhatsApp
            </a>
            <Link
              href={siteConfig.registerUrl}
              data-track="accommodation-enquire"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), size)}
            >
              Enquire on Kampmax
            </Link>
            <p className="text-center text-xs text-muted-foreground">
              The agent&apos;s phone number stays private. Free to join.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="flex flex-col gap-8">
          {listing.description ? (
            <section aria-labelledby="about" className="flex flex-col gap-3">
              <h2 id="about" className="font-heading text-lg font-semibold text-foreground">
                About this place
              </h2>
              <p className="whitespace-pre-line text-base/relaxed text-muted-foreground">
                {listing.description}
              </p>
            </section>
          ) : null}

          {listing.amenities.length > 0 ? (
            <section aria-labelledby="facilities" className="flex flex-col gap-3">
              <h2 id="facilities" className="font-heading text-lg font-semibold text-foreground">
                Facilities
              </h2>
              <ul className="flex flex-wrap gap-2">
                {listing.amenities.map((amenity) => (
                  <li
                    key={amenity.slug}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                  >
                    {amenity.name}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <div className="flex flex-col gap-8">
          <Charges listing={listing} />
          <AgentCard listing={listing} />
        </div>
      </div>
    </div>
  )
}

export { ListingDetail }
