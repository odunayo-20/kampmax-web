import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

import type { BlogPost } from "@/types/blog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

type BlogCardProps = {
  post: BlogPost
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  } catch {
    return dateString
  }
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col transition-transform hover:-translate-y-0.5"
      >
        <Card className="flex h-full flex-col border-border/80 bg-card transition-colors group-hover:border-primary/40">
          <CardContent className="flex flex-1 flex-col gap-3.5 p-6">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-2xs font-normal">
                {post.category}
              </Badge>
              <div className="flex items-center gap-1 text-3xs text-muted-foreground">
                <Clock className="size-3" aria-hidden="true" />
                <span>{post.readingTime} min</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <h3 className="font-heading text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3">
              <time
                dateTime={post.publishedAt}
                className="text-2xs text-muted-foreground"
              >
                {formatDate(post.publishedAt)}
              </time>

              <div className="flex items-center gap-1 text-xs font-medium text-primary">
                <span>Read</span>
                <ArrowRight
                  className="size-3 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </article>
  )
}

export { BlogCard }
