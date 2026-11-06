import { ApiError, apiFetch, resolveMediaUrl } from "@/lib/api"
import { idFromSlug, slugify, slugWithId } from "@/lib/slug"
import type { Campus } from "@/types/campus"
import type {
  MarketplaceCategory,
  MarketplaceProduct,
} from "@/types/marketplace"

/** Backend category shape (`GET /categories?type=PRODUCT`). */
type ApiCategory = {
  id: string
  name: string
  slug: string
  isActive: boolean
}

type ApiVendor = {
  id: string
  storeName: string
  slug: string
}

/** Backend product shape (`GET /products`). */
type ApiProduct = {
  id: string
  vendorId: string
  categoryId: string | null
  campusId: string | null
  name: string
  slug: string
  description: string | null
  type: string
  condition: string
  price: string | number
  compareAtPrice: string | number | null
  stockQuantity: number
  sku: string | null
  status: string
  images: string[]
  tags: string[]
  location: string | null
  allowDelivery: boolean
  allowPickup: boolean
  deliveryFee: string | number
  hasVariants: boolean
  createdAt: string
}

type ApiProductDetail = ApiProduct & {
  attributes?: Record<string, string>
  variations?: unknown[]
  updatedAt?: string
}

type ApiPage<T> = {
  items: T[]
  meta: { totalPages: number }
}

const PAGE_SIZE = 100 // The backend caps `limit` at 100.
const MAX_PAGES = 3

function toProduct(
  item: ApiProduct,
  campuses: Campus[],
  categoryMap?: Map<string, ApiCategory>,
  vendorMap?: Map<string, ApiVendor>
): MarketplaceProduct {
  const category =
    item.categoryId && categoryMap ? categoryMap.get(item.categoryId) : undefined
  const vendor =
    item.vendorId && vendorMap ? vendorMap.get(item.vendorId) : undefined
  const campus = item.campusId
    ? campuses.find((candidate) => candidate.id === item.campusId)
    : undefined

  const resolvedImages = (item.images ?? [])
    .map((url) => resolveMediaUrl(url))
    .filter((url): url is string => Boolean(url))

  const categorySlug =
    category?.slug ?? (category?.name ? slugify(category.name) : "other")

  return {
    slug: slugWithId(item.name, item.id),
    name: item.name,
    description: item.description ?? "",
    categorySlug,
    categoryName: category?.name,
    image: resolvedImages[0],
    images: resolvedImages,
    price:
      item.price !== null && item.price !== undefined
        ? Number(item.price)
        : undefined,
    compareAtPrice:
      item.compareAtPrice !== null && item.compareAtPrice !== undefined
        ? Number(item.compareAtPrice)
        : undefined,
    condition: item.condition,
    stockQuantity: item.stockQuantity,
    campusSlug: campus?.slug,
    vendorId: item.vendorId,
    vendorName: vendor?.storeName,
    vendorSlug: vendor?.slug,
    location: item.location ?? undefined,
    allowDelivery: item.allowDelivery,
    allowPickup: item.allowPickup,
    deliveryFee:
      item.deliveryFee !== null && item.deliveryFee !== undefined
        ? Number(item.deliveryFee)
        : undefined,
    tags: item.tags ?? [],
  }
}

/** Public products on the marketplace, newest first. `campuses` resolves campus slugs. */
export async function getProducts(
  campuses: Campus[] = []
): Promise<MarketplaceProduct[]> {
  const products: ApiProduct[] = []

  for (let page = 1; page <= MAX_PAGES; page++) {
    const result = await apiFetch<ApiPage<ApiProduct>>("/products", {
      query: { page, limit: PAGE_SIZE, sort: "recent" },
    })
    products.push(...result.items)
    if (page >= result.meta.totalPages) break
  }

  // Load product categories to map categoryId -> categorySlug & name
  let categoryMap: Map<string, ApiCategory> | undefined
  try {
    const catResult = await apiFetch<ApiPage<ApiCategory>>("/categories", {
      query: { type: "PRODUCT", limit: 100 },
    })
    categoryMap = new Map(catResult.items.map((cat) => [cat.id, cat]))
  } catch {
    // Categories endpoint failed; fall back to general category
  }

  // Load vendors to resolve store names
  const vendorIds = [...new Set(products.map((p) => p.vendorId).filter(Boolean))]
  const vendors = await Promise.all(
    vendorIds.map((id) =>
      apiFetch<ApiVendor>(`/vendors/${id}`).catch(() => null)
    )
  )
  const vendorMap = new Map(
    vendors.filter((v): v is ApiVendor => v !== null).map((v) => [v.id, v])
  )

  return products.map((product) =>
    toProduct(product, campuses, categoryMap, vendorMap)
  )
}

/** A single published product by URL segment, or `null` when it does not exist. */
export async function getProduct(
  slug: string,
  campuses: Campus[] = []
): Promise<MarketplaceProduct | null> {
  const id = idFromSlug(slug)

  let item: ApiProductDetail | null = null

  if (id) {
    try {
      item = await apiFetch<ApiProductDetail>(`/products/${id}`)
    } catch (error) {
      if (!(error instanceof ApiError && error.status === 404)) {
        throw error
      }
    }
  }

  // If not found by UUID, try finding by matching slug from active products
  if (!item) {
    try {
      const searchResult = await apiFetch<ApiPage<ApiProduct>>("/products", {
        query: { search: slug, limit: 10 },
      })
      const match = searchResult.items.find(
        (p) => p.slug === slug || p.id === slug
      )
      if (match) {
        item = await apiFetch<ApiProductDetail>(`/products/${match.id}`).catch(
          () => match as ApiProductDetail
        )
      }
    } catch {
      // Search failed
    }
  }

  if (!item) return null

  let categoryMap: Map<string, ApiCategory> | undefined
  if (item.categoryId) {
    try {
      const cat = await apiFetch<ApiCategory>(`/categories/${item.categoryId}`)
      categoryMap = new Map([[cat.id, cat]])
    } catch {
      // Category read failed
    }
  }

  let vendorMap: Map<string, ApiVendor> | undefined
  if (item.vendorId) {
    try {
      const vendor = await apiFetch<ApiVendor>(`/vendors/${item.vendorId}`)
      vendorMap = new Map([[vendor.id, vendor]])
    } catch {
      // Vendor read failed
    }
  }

  return toProduct(item, campuses, categoryMap, vendorMap)
}

/** Product taxonomy categories (`GET /categories?type=PRODUCT`). */
export async function getProductCategories(): Promise<MarketplaceCategory[]> {
  try {
    const result = await apiFetch<ApiPage<ApiCategory>>("/categories", {
      query: { type: "PRODUCT", limit: 100 },
    })
    return result.items.map((cat) => ({
      slug: cat.slug,
      name: cat.name,
      enabled: cat.isActive,
    }))
  } catch (error) {
    if (error instanceof ApiError) return []
    throw error
  }
}

/**
 * Filter pills for the directory: only the categories that have at least one
 * product, so a pill never leads to an empty list. Names come from the
 * taxonomy when it knows the category.
 */
export function activeProductCategories(
  products: MarketplaceProduct[],
  allCategories: MarketplaceCategory[] = []
): MarketplaceCategory[] {
  const categoryMap = new Map(allCategories.map((c) => [c.slug, c]))
  const usedSlugs = new Set(products.map((p) => p.categorySlug))

  return [...usedSlugs].map(
    (slug) =>
      categoryMap.get(slug) ?? { slug, name: slug.replace(/-/g, " "), enabled: true }
  )
}

