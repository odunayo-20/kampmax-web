export type BlogCategory = {
  slug: string
  name: string
}

export type BlogContentBlock =
  | {
      type: "paragraph"
      content: string
    }
  | {
      type: "heading"
      level: 2 | 3
      content: string
    }
  | {
      type: "list"
      ordered?: boolean
      items: string[]
    }
  | {
      type: "quote"
      content: string
      citation?: string
    }
  | {
      type: "callout"
      title?: string
      content: string
    }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  categorySlug: string
  author: {
    name: string
    role?: string
  }
  /** ISO date string, e.g. "2026-09-18" */
  publishedAt: string
  updatedAt?: string
  readingTime: number
  featured?: boolean
  image?: string
  content: BlogContentBlock[]
}
