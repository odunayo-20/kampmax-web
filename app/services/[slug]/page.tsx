import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCampusBySlug } from "@/app/_data/campuses"
import {
  getServiceBySlug,
  getServiceCategoryBySlug,
  getServices,
} from "@/app/_data/services"
import { Container } from "@/components/layout/container"
import { ServiceHeader } from "@/components/services/service-header"

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return {
    title: `${service.name} | Kampmax Services`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const category = getServiceCategoryBySlug(service.categorySlug)
  const campus = service.campusSlug ? getCampusBySlug(service.campusSlug) : undefined

  return (
    <Container>
      <ServiceHeader service={service} category={category} campus={campus} />
    </Container>
  )
}
