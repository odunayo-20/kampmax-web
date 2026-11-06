import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"

import { orNullDuringBuild } from "@/lib/api"
import { getCampuses } from "@/lib/campuses"
import {
  getFreelancer,
  getFreelancers,
  primaryCategoryOf,
} from "@/lib/freelancers"
import { Container } from "@/components/layout/container"
import { FreelancerJsonLd } from "@/components/freelancers/freelancer-json-ld"
import { FreelancerProfile } from "@/components/freelancers/freelancer-profile"

export const revalidate = 300

type FreelancerPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const freelancers = await orNullDuringBuild(async () =>
    getFreelancers(await getCampuses())
  )
  return (freelancers ?? []).map((freelancer) => ({ slug: freelancer.slug }))
}

export async function generateMetadata({
  params,
}: FreelancerPageProps): Promise<Metadata> {
  const { slug } = await params
  const freelancer = await getFreelancer(slug, await getCampuses())

  if (!freelancer) {
    return {}
  }

  const description = freelancer.bio
    ? `${freelancer.headline}. ${freelancer.bio}`
    : freelancer.headline

  return {
    title: `${freelancer.name} | Kampmax Freelancers`,
    description,
    alternates: {
      canonical: `/freelancers/${freelancer.slug}`,
    },
    openGraph: {
      title: `${freelancer.name} | Kampmax Freelancers`,
      description,
      url: `/freelancers/${freelancer.slug}`,
      ...(freelancer.avatar ? { images: [freelancer.avatar] } : {}),
    },
  }
}

export default async function FreelancerPage({ params }: FreelancerPageProps) {
  const { slug } = await params
  const campuses = await getCampuses()
  const freelancer = await getFreelancer(slug, campuses)

  if (!freelancer) {
    notFound()
  }

  // The API id identifies the profile; a bare id or an outdated name goes to
  // the current address.
  if (slug !== freelancer.slug) {
    permanentRedirect(`/freelancers/${freelancer.slug}`)
  }

  const campus = freelancer.campusSlug
    ? campuses.find((candidate) => candidate.slug === freelancer.campusSlug)
    : undefined

  return (
    <>
      <Container>
        <FreelancerProfile
          freelancer={freelancer}
          category={primaryCategoryOf(freelancer)}
          campus={campus}
        />
      </Container>

      <FreelancerJsonLd freelancer={freelancer} />
    </>
  )
}
