export type BlogCategory = {
  slug: string
  name: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content?: string
  category: string
  categorySlug: string
  author: {
    name: string
    role?: string
  }
  /** ISO date string, e.g. "2026-09-18" */
  publishedAt: string
  readingTime: number
  featured?: boolean
  image?: string
}
