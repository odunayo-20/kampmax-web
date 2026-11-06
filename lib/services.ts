import { ApiError, apiFetch, resolveMediaUrl } from "@/lib/api"
import { idFromSlug, slugify, slugWithId } from "@/lib/slug"
import type { Campus } from "@/types/campus"
import type { Service, ServiceCategory } from "@/types/service"

/** A node of the service taxonomy (`GET /categories/tree?type=SERVICE`). */
export type ApiCategoryNode = {
  id: string
  name: string
  slug: string
  children?: ApiCategoryNode[] | null
}

/** Maps a category id to the broad category it belongs to. */
export type ServiceGroups = Map<string, { slug: string; name: string }>

type ApiServiceCategory = {
  id: string
  name: string
}

type ApiServicePackage = {
  id: string
  name: string
  description: string | null
  price: number | null
  currency: string
  deliveryDays: number | null
  revisions: number | null
  features: string[] | null
}

type ApiServiceFreelancer = {
  id: string
  name: string
  avatar: string | null
}

type ApiFreelancerProfile = {
  id: string
  fullName: string
  avatar: string | null
  campusId: string | null
}

/** Backend shape (`GET /services/public`). */
type ApiService = {
  id: string
  freelancerId: string
  title: string
  slug: string
  description: string | null
  shortDescription: string | null
  category: ApiServiceCategory | null
  startingPrice: number | null
  currency: string
  deliveryDays: number | null
  status: string
  isPublished: boolean
  skills: string[]
  pricingModel: string
  priceMax: number | null
  deliveryValue: number | null
  deliveryUnit: string
  revisions: number | null
  deliverables: string[]
  coverImageUrl: string | null
  packages?: ApiServicePackage[]
  freelancer?: ApiServiceFreelancer
  createdAt: string
  updatedAt: string
}

type ApiPage<T> = {
  items: T[]
  meta: { totalPages: number }
}

const PAGE_SIZE = 100 // The backend caps `limit` at 100.
const MAX_PAGES = 3

/** Services with no category at all are listed under this one. */
const UNCATEGORISED = { slug: "other", name: "Other" } as const

/**
 * The service taxonomy has broad categories ("Technology & IT") that may hold
 * sub-categories ("API Development"). A sub-category rolls up to its parent; a
 * top-level category with no children is a category in its own right.
 */
export function buildServiceGroups(tree: ApiCategoryNode[]): ServiceGroups {
  const groups: ServiceGroups = new Map()

  for (const node of tree) {
    const group = { slug: node.slug, name: node.name }
    groups.set(node.id, group)
    for (const child of node.children ?? []) {
      groups.set(child.id, group)
    }
  }

  return groups
}

async function loadServiceGroups(): Promise<ServiceGroups> {
  return buildServiceGroups(
    await apiFetch<ApiCategoryNode[]>("/categories/tree", { query: { type: "SERVICE" } })
  )
}

export function toService(
  item: ApiService,
  campuses: Campus[],
  freelancerMap?: Map<string, ApiFreelancerProfile>,
  groups: ServiceGroups = new Map()
): Service {
  const profile = item.freelancerId && freelancerMap ? freelancerMap.get(item.freelancerId) : undefined
  const providerName = item.freelancer?.name ?? profile?.fullName
  const providerAvatar = resolveMediaUrl(item.freelancer?.avatar ?? profile?.avatar)
  const providerSlug =
    item.freelancerId && providerName
      ? slugWithId(providerName, item.freelancerId)
      : undefined

  let campusSlug: string | undefined
  if (profile?.campusId) {
    campusSlug = campuses.find((c) => c.id === profile.campusId)?.slug
  }

  // Roll a sub-category up to its broad category, keeping the sub-category name
  // as the detail. Without a taxonomy the service's own category is used as is.
  const own = item.category
  const group = own ? groups.get(own.id) : undefined
  const categorySlug =
    group?.slug ?? (own?.name ? slugify(own.name) : UNCATEGORISED.slug)
  const categoryName = group?.name ?? own?.name ?? UNCATEGORISED.name
  const subcategoryName = own && own.name !== categoryName ? own.name : undefined

  return {
    slug: slugWithId(item.title, item.id),
    name: item.title,
    description: item.description ?? item.shortDescription ?? "",
    categorySlug,
    categoryName,
    subcategoryName,
    image: resolveMediaUrl(item.coverImageUrl),
    providerName,
    providerAvatar,
    providerSlug,
    campusSlug,
    priceFrom: item.startingPrice !== null && item.startingPrice !== undefined ? Number(item.startingPrice) : undefined,
    pricingModel: item.pricingModel,
    currency: item.currency,
    deliveryDays: item.deliveryDays ?? undefined,
    skills: item.skills ?? [],
    deliverables: item.deliverables ?? [],
    packages: item.packages?.map((pkg) => ({
      id: pkg.id,
      name: pkg.name,
      description: pkg.description ?? undefined,
      price: pkg.price !== null && pkg.price !== undefined ? Number(pkg.price) : undefined,
      currency: pkg.currency,
      deliveryDays: pkg.deliveryDays ?? undefined,
      revisions: pkg.revisions ?? undefined,
      features: pkg.features ?? undefined,
    })),
  }
}

/** Public services, newest first. `campuses` resolves provider campus slugs. */
export async function getServices(campuses: Campus[] = []): Promise<Service[]> {
  const groups = await loadServiceGroups()
  const services: ApiService[] = []

  for (let page = 1; page <= MAX_PAGES; page++) {
    const result = await apiFetch<ApiPage<ApiService>>("/services/public", {
      query: { page, limit: PAGE_SIZE, sort: "newest" },
    })
    services.push(...result.items)
    if (page >= result.meta.totalPages) break
  }

  // Resolve freelancer profile data (e.g. campus) for active services
  const freelancerIds = [...new Set(services.map((s) => s.freelancerId).filter(Boolean))]
  const profiles = await Promise.all(
    freelancerIds.map((id) =>
      apiFetch<ApiFreelancerProfile>(`/freelancers/${id}`).catch(() => null)
    )
  )
  const freelancerMap = new Map(
    profiles.filter((p): p is ApiFreelancerProfile => p !== null).map((p) => [p.id, p])
  )

  return services.map((service) => toService(service, campuses, freelancerMap, groups))
}

/** A single published service by URL segment, or `null` when it does not exist. */
export async function getService(
  slug: string,
  campuses: Campus[] = []
): Promise<Service | null> {
  const id = idFromSlug(slug)

  let item: ApiService | null = null

  if (id) {
    try {
      item = await apiFetch<ApiService>(`/services/public/${id}`)
    } catch (error) {
      if (!(error instanceof ApiError && error.status === 404)) {
        throw error
      }
    }
  }

  if (!item) {
    try {
      item = await apiFetch<ApiService>(`/services/slug/${encodeURIComponent(slug)}`)
    } catch (error) {
      if (error instanceof ApiError && error.status === 404) {
        return null
      }
      throw error
    }
  }

  if (!item) return null

  let freelancerProfile: ApiFreelancerProfile | null = null
  if (item.freelancerId) {
    try {
      freelancerProfile = await apiFetch<ApiFreelancerProfile>(`/freelancers/${item.freelancerId}`)
    } catch {
      // Freelancer profile read failed; fall back to the basic info in the service item
    }
  }

  const map = freelancerProfile ? new Map([[freelancerProfile.id, freelancerProfile]]) : undefined
  return toService(item, campuses, map, await loadServiceGroups())
}

/** Public services offered by a specific freelancer profile. */
export async function getServicesByFreelancer(
  freelancerId: string,
  campuses: Campus[] = []
): Promise<Service[]> {
  try {
    const result = await apiFetch<ApiPage<ApiService>>("/services/public", {
      query: { freelancerId, limit: PAGE_SIZE },
    })
    return result.items.map((item) => toService(item, campuses))
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) return []
    throw error
  }
}

/**
 * Filter pills for the directory: every broad category that has at least one
 * service in it, the busiest first and "Other" last. Categories with no
 * services are left out so a pill never leads to an empty list.
 */
export function directoryServiceCategories(services: Service[]): ServiceCategory[] {
  const counts = new Map<string, { category: ServiceCategory; count: number }>()

  for (const service of services) {
    const entry = counts.get(service.categorySlug)
    if (entry) {
      entry.count += 1
    } else {
      counts.set(service.categorySlug, {
        category: {
          slug: service.categorySlug,
          name: service.categoryName ?? UNCATEGORISED.name,
          enabled: true,
        },
        count: 1,
      })
    }
  }

  return [...counts.values()]
    .sort(
      (a, b) =>
        Number(a.category.slug === UNCATEGORISED.slug) -
          Number(b.category.slug === UNCATEGORISED.slug) ||
        b.count - a.count ||
        a.category.name.localeCompare(b.category.name)
    )
    .map(({ category }) => category)
}

/** The broad category shown as a badge on a service. */
export function categoryOf(service: Service): ServiceCategory {
  return {
    slug: service.categorySlug,
    name: service.categoryName ?? UNCATEGORISED.name,
    enabled: true,
  }
}

