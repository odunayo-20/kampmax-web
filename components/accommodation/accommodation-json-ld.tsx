import { siteConfig } from "@/config/site"
import { placeLabel } from "@/lib/accommodation"
import type { AccommodationDetail, AccommodationListing } from "@/types/accommodation"

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so text from a listing can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

const url = (listing: AccommodationListing) => `${siteConfig.url}/accommodation/${listing.slug}`

/** A page of results as an ordered list, so search engines can see each place. */
function ListingsJsonLd({ name, listings }: { name: string; listings: AccommodationListing[] }) {
  if (listings.length === 0) return null
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        itemListElement: listings.map((listing, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: url(listing),
          name: listing.title,
        })),
      }}
    />
  )
}

/** One place: what it is, where, how big, and the rent as an offer. */
function ListingJsonLd({ listing }: { listing: AccommodationDetail }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Accommodation",
        name: listing.title,
        description: listing.description || undefined,
        url: url(listing),
        image: listing.images.length > 0 ? listing.images : undefined,
        numberOfBedrooms: listing.bedrooms,
        numberOfBathroomsTotal: listing.bathrooms,
        amenityFeature: listing.amenities.map((a) => ({
          "@type": "LocationFeatureSpecification",
          name: a.name,
          value: true,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: placeLabel(listing),
          addressRegion: listing.state,
          addressCountry: "NG",
        },
        ...(listing.mapPoint
          ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: listing.mapPoint.latitude,
                longitude: listing.mapPoint.longitude,
              },
            }
          : {}),
        offers: {
          "@type": "Offer",
          url: url(listing),
          price: listing.rent,
          priceCurrency: "NGN",
          availability: "https://schema.org/InStock",
        },
      }}
    />
  )
}

export { ListingJsonLd, ListingsJsonLd }
