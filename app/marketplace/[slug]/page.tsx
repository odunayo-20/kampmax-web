import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCampusBySlug } from "@/app/_data/campuses"
import { getCategoryBySlug, getProductBySlug, getProducts } from "@/app/_data/marketplace"
import { ProductHeader } from "@/components/marketplace/product-header"
import { ProductJsonLd } from "@/components/marketplace/product-json-ld"
import { Container } from "@/components/layout/container"

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/marketplace/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {}
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/marketplace/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} — Kampmax Marketplace`,
      description: product.description,
      url: `/marketplace/${product.slug}`,
    },
  }
}

export default async function ProductPage({
  params,
}: PageProps<"/marketplace/[slug]">) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const category = getCategoryBySlug(product.categorySlug)
  const campus = product.campusSlug ? getCampusBySlug(product.campusSlug) : undefined

  return (
    <>
      <Container>
        <ProductHeader product={product} category={category} campus={campus} />
      </Container>

      <ProductJsonLd product={product} category={category} />
    </>
  )
}
