import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCampusBySlug } from "@/app/_data/campuses"
import {
  getFreelancerBySlug,
  getFreelancerCategoryBySlug,
  getFreelancers,
} from "@/app/_data/freelancers"
import { Container } from "@/components/layout/container"
import { FreelancerProfile } from "@/components/freelancers/freelancer-profile"

type FreelancerPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getFreelancers().map((freelancer) => ({ slug: freelancer.slug }))
}

export async function generateMetadata({
  params,
}: FreelancerPageProps): Promise<Metadata> {
  const { slug } = await params
  const freelancer = getFreelancerBySlug(slug)

  if (!freelancer) {
    return {}
  }

  return {
    title: `${freelancer.name} | Kampmax Freelancers`,
    description: `${freelancer.headline}. ${freelancer.bio}`,
  }
}

export default async function FreelancerPage({ params }: FreelancerPageProps) {
  const { slug } = await params
  const freelancer = getFreelancerBySlug(slug)

  if (!freelancer) {
    notFound()
  }

  const category = getFreelancerCategoryBySlug(freelancer.categorySlug)
  const campus = freelancer.campusSlug
    ? getCampusBySlug(freelancer.campusSlug)
    : undefined

  return (
    <Container>
      <FreelancerProfile
        freelancer={freelancer}
        category={category}
        campus={campus}
      />
    </Container>
  )
}
