import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"

import { ListingJsonLd } from "@/components/accommodation/accommodation-json-ld"
import { ListingCard } from "@/components/accommodation/listing-card"
import { ListingDetail } from "@/components/accommodation/listing-detail"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { MobileActionBar } from "@/components/shared/mobile-action-bar"
import { SafetyTips } from "@/components/shared/safety-tips"
import { siteConfig } from "@/config/site"
import { getListing, getListings, placeLabel, rentLabel } from "@/lib/accommodation"
import { getCampuses } from "@/lib/campuses"
import { pageMetadata } from "@/lib/seo"

const SAFETY_TIPS = [
  "Visit and inspect the place before you pay anything.",
  "Never pay a deposit to someone you have not met or to a personal account you cannot verify.",
  "Ask for a written receipt and a tenancy agreement.",
  "Be careful if the rent looks too good to be true or you are rushed to pay.",
]

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const listing = await getListing((await params).slug)
  if (!listing) return { title: "Place no longer available" }

  return pageMetadata({
    title: `${listing.title} | ${placeLabel(listing)}`,
    description: `${listing.categoryName ?? "Accommodation"} for rent in ${placeLabel(listing)}: ${rentLabel(
      listing
    )}. ${listing.description}`,
    path: `/accommodation/${listing.slug}`,
    image: listing.images[0],
  })
}

export default async function ListingPage({ params }: Props) {
  const { slug } = await params
  const listing = await getListing(slug)
  if (!listing) notFound()
  if (slug !== listing.slug) permanentRedirect(`/accommodation/${listing.slug}`)

  // The campus gives the map and distance their reference point, and the places near it keep the visitor browsing.
  const [campuses, nearby] = await Promise.all([
    getCampuses(),
    listing.campusId ? getListings({ campusId: listing.campusId }) : undefined,
  ])
  const campus = campuses.find((item) => item.id === listing.campusId)
  const more = (nearby?.items ?? []).filter((item) => item.id !== listing.id).slice(0, 3)

  return (
    <>
      <MobileActionBar
        title={rentLabel(listing)}
        detail={listing.title}
        action="Enquire"
        href={siteConfig.registerUrl}
      />

      <Container>
        <ListingDetail listing={listing} campus={campus} />
      </Container>

      <SafetyTips
        title="Rent safely"
        tips={SAFETY_TIPS}
        reportName={listing.title}
        path={`/accommodation/${listing.slug}`}
      />

      {more.length > 0 ? (
        <Section className="border-t border-border/60">
          <Container className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Keep looking"
              title={`More places near ${listing.campusName}`}
              description="Other verified listings close to the same campus."
            />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((item) => (
                <li key={item.id}>
                  <ListingCard listing={item} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <ListingJsonLd listing={listing} />
    </>
  )
}
