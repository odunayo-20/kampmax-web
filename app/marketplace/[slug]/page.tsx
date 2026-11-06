import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"

import { orNullDuringBuild } from "@/lib/api"
import { getCampuses } from "@/lib/campuses"
import {
  getProduct,
  getProductCategories,
  getProducts,
} from "@/lib/marketplace"
import { Container } from "@/components/layout/container"
import { ProductHeader } from "@/components/marketplace/product-header"
import { ProductJsonLd } from "@/components/marketplace/product-json-ld"

export const revalidate = 300

type ProductPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const products = await orNullDuringBuild(async () =>
    getProducts(await getCampuses())
  )
  return (products ?? []).map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const campuses = await getCampuses()
  const product = await getProduct(slug, campuses)

  if (!product) {
    return {}
  }

  return {
    title: `${product.name} | Kampmax Marketplace`,
    description: product.description,
    alternates: {
      canonical: `/marketplace/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Kampmax Marketplace`,
      description: product.description,
      url: `/marketplace/${product.slug}`,
      ...(product.image ? { images: [product.image] } : {}),
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const campuses = await getCampuses()
  const product = await getProduct(slug, campuses)

  if (!product) {
    notFound()
  }

  // Canonical redirect when requested by API UUID or outdated name
  if (slug !== product.slug) {
    permanentRedirect(`/marketplace/${product.slug}`)
  }

  const categories = await getProductCategories()
  const category =
    categories.find((candidate) => candidate.slug === product.categorySlug) ??
    (product.categoryName
      ? {
          slug: product.categorySlug,
          name: product.categoryName,
          enabled: true,
        }
      : undefined)

  const campus = product.campusSlug
    ? campuses.find((candidate) => candidate.slug === product.campusSlug)
    : undefined

  return (
    <>
      <Container>
        <ProductHeader product={product} category={category} campus={campus} />
      </Container>

      <ProductJsonLd product={product} category={category} />
    </>
  )
}
