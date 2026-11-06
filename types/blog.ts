export type BlogCategory = {
  slug: string
  name: string
}

/** A published article as shown on cards and lists (no body). */
export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  categorySlug: string
  author: {
    name: string
    avatar?: string
  }
  /** ISO date-time string. */
  publishedAt: string
  updatedAt?: string
  readingTime: number
  featured?: boolean
  /** Absolute URL of the cover image. */
  image?: string
}

/** A published article with its body and SEO fields (article page). */
export type BlogArticle = BlogPost & {
  /** Sanitized HTML produced by the backend. */
  contentHtml: string
  seoTitle?: string
  seoDescription?: string
  canonicalUrl?: string
  related: BlogPost[]
}
