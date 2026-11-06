import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"

import { orNullDuringBuild } from "@/lib/api"
import { getCampuses } from "@/lib/campuses"
import {
  getService,
  getServiceCategories,
  getServices,
} from "@/lib/services"
import { Container } from "@/components/layout/container"
import { ServiceHeader } from "@/components/services/service-header"
import { ServiceJsonLd } from "@/components/services/service-json-ld"

export const revalidate = 300

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = await orNullDuringBuild(async () =>
    getServices(await getCampuses())
  )
  return (services ?? []).map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const campuses = await getCampuses()
  const service = await getService(slug, campuses)

  if (!service) {
    return {}
  }

  return {
    title: `${service.name} | Kampmax Services`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} | Kampmax Services`,
      description: service.description,
      url: `/services/${service.slug}`,
      ...(service.image ? { images: [service.image] } : {}),
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const campuses = await getCampuses()
  const service = await getService(slug, campuses)

  if (!service) {
    notFound()
  }

  // Canonical redirect when requested by API UUID or outdated name
  if (slug !== service.slug) {
    permanentRedirect(`/services/${service.slug}`)
  }

  const categories = await getServiceCategories()
  const category =
    categories.find((candidate) => candidate.slug === service.categorySlug) ??
    (service.categoryName
      ? {
          slug: service.categorySlug,
          name: service.categoryName,
          enabled: true,
        }
      : undefined)

  const campus = service.campusSlug
    ? campuses.find((candidate) => candidate.slug === service.campusSlug)
    : undefined

  return (
    <>
      <Container>
        <ServiceHeader
          service={service}
          category={category}
          campus={campus}
        />
      </Container>

      <ServiceJsonLd service={service} />
    </>
  )
}
