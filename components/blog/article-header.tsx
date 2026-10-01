import Link from "next/link"
import { ArrowLeft, Calendar, Clock, RefreshCw } from "lucide-react"

import type { BlogPost } from "@/types/blog"
import { Badge } from "@/components/ui/badge"

type ArticleHeaderProps = {
  post: BlogPost
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  } catch {
    return dateString
  }
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  const initials = getInitials(post.author.name)

  return (
    <header className="mb-10 sm:mb-12 border-b border-border/70 pb-8 sm:pb-10">
      {/* Back to Blog Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft
            className="size-3.5 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          <span>Back to all insights</span>
        </Link>
      </nav>

      {/* Category & Reading Time Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
          {post.category}
        </Badge>
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="size-3.5" aria-hidden="true" />
          <span>{post.readingTime} min read</span>
        </span>
      </div>

      {/* Article Title */}
      <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.18] mb-6">
        {post.title}
      </h1>

      {/* Lead Excerpt */}
      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal mb-8">
        {post.excerpt}
      </p>

      {/* Author and Date Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/50 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-wider ring-1 ring-primary/20"
            aria-hidden="true"
          >
            {initials || "KP"}
          </div>
          <div>
            <div className="font-medium text-foreground">{post.author.name}</div>
            {post.author.role && (
              <div className="text-xs text-muted-foreground">
                {post.author.role}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="size-3.5" aria-hidden="true" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
          {post.updatedAt && post.updatedAt !== post.publishedAt && (
            <div className="flex items-center gap-1.5 text-2xs text-muted-foreground/80">
              <RefreshCw className="size-3" aria-hidden="true" />
              <span>Updated {formatDate(post.updatedAt)}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
