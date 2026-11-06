import { ApiError, apiFetch, resolveMediaUrl } from "@/lib/api"
import type { BlogArticle, BlogCategory, BlogPost } from "@/types/blog"

/** Backend shapes (`GET /blog/...`). Only the fields this site reads. */
type ApiArticleListItem = {
  title: string
  slug: string
  excerpt: string | null
  coverImage: string | null
  author: { name: string; avatar: string | null }
  category: { name: string; slug: string } | null
  isFeatured: boolean
  publishedAt: string | null
  readingTimeMinutes: number
  createdAt: string
  updatedAt: string
}

type ApiArticleDetail = ApiArticleListItem & {
  contentHtml: string
  ogImage: string | null
  seoTitle: string | null
  seoDescription: string | null
  canonicalUrl: string | null
  related: ApiArticleListItem[]
}

type ApiArticleLookup = {
  article: ApiArticleDetail | null
  redirectTo: string | null
}

type ApiPage<T> = {
  items: T[]
  meta: { total: number; page: number; limit: number; totalPages: number }
}

type ApiCategory = { name: string; slug: string }

type ApiSitemapEntry = { slug: string; lastModified: string }

const UNCATEGORISED = { name: "General", slug: "general" } as const
const PAGE_SIZE = 50 // The backend caps `limit` at 50.
const MAX_PAGES = 4 // Up to 200 articles are listed and searched client-side.

function toPost(item: ApiArticleListItem): BlogPost {
  const category = item.category ?? UNCATEGORISED
  return {
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt ?? "",
    category: category.name,
    categorySlug: category.slug,
    author: {
      name: item.author.name,
      avatar: resolveMediaUrl(item.author.avatar),
    },
    publishedAt: item.publishedAt ?? item.createdAt,
    updatedAt: item.updatedAt,
    readingTime: item.readingTimeMinutes,
    featured: item.isFeatured,
    image: resolveMediaUrl(item.coverImage),
  }
}

function toArticle(detail: ApiArticleDetail): BlogArticle {
  return {
    ...toPost(detail),
    contentHtml: detail.contentHtml,
    seoTitle: detail.seoTitle ?? undefined,
    seoDescription: detail.seoDescription ?? undefined,
    canonicalUrl: detail.canonicalUrl ?? undefined,
    image: resolveMediaUrl(detail.ogImage ?? detail.coverImage),
    related: detail.related.map(toPost),
  }
}

/** Live articles, newest first. */
export async function getAllPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = []

  for (let page = 1; page <= MAX_PAGES; page++) {
    const result = await apiFetch<ApiPage<ApiArticleListItem>>(
      "/blog/articles",
      { query: { page, limit: PAGE_SIZE } }
    )
    posts.push(...result.items.map(toPost))
    if (page >= result.meta.totalPages) break
  }

  return posts
}

export async function getFeaturedPost(): Promise<BlogPost | undefined> {
  const [featured] = await apiFetch<ApiArticleListItem[]>(
    "/blog/articles/featured",
    { query: { limit: 1 } }
  )
  return featured ? toPost(featured) : undefined
}

export async function getCategories(): Promise<BlogCategory[]> {
  const categories = await apiFetch<ApiCategory[]>("/blog/categories")
  return [
    { slug: "all", name: "All Articles" },
    ...categories.map(({ slug, name }) => ({ slug, name })),
  ]
}

export type ArticleLookup =
  | { status: "found"; article: BlogArticle }
  | { status: "moved"; slug: string }
  | { status: "missing" }

/** Resolves a slug to its article, or to the slug an old URL moved to. */
export async function lookupArticle(slug: string): Promise<ArticleLookup> {
  try {
    const { article, redirectTo } = await apiFetch<ApiArticleLookup>(
      `/blog/articles/slug/${encodeURIComponent(slug)}`
    )
    if (article) return { status: "found", article: toArticle(article) }
    if (redirectTo) return { status: "moved", slug: redirectTo }
    return { status: "missing" }
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return { status: "missing" }
    }
    throw error
  }
}

/** Slugs and last-modified times of live articles (static params, sitemap). */
export async function getArticleSitemapEntries(): Promise<
  { slug: string; lastModified: string }[]
> {
  return apiFetch<ApiSitemapEntry[]>("/blog/articles/sitemap")
}

/** The articles published just before and just after `slug`. */
export function getAdjacentPosts(
  slug: string,
  posts: BlogPost[]
): { prev?: BlogPost; next?: BlogPost } {
  const index = posts.findIndex((post) => post.slug === slug)
  if (index === -1) return {}
  // `posts` is newest-first; the site's "previous" is the newer article.
  return { prev: posts[index - 1], next: posts[index + 1] }
}
