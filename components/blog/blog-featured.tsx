import Link from "next/link"
import { ArrowRight, BookOpen, Clock } from "lucide-react"

import type { BlogPost } from "@/types/blog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

type BlogFeaturedProps = {
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

function BlogFeatured({ post }: BlogFeaturedProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <BookOpen className="size-3.5" aria-hidden="true" />
        </span>
        <span className="text-2xs font-semibold uppercase tracking-wider text-muted-foreground">
          Featured Story
        </span>
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="group block transition-transform hover:-translate-y-0.5"
      >
        <Card className="overflow-hidden border-border/80 bg-gradient-to-br from-card via-card to-primary/5 transition-colors group-hover:border-primary/40">
          <CardContent className="flex flex-col gap-5 p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="default" className="text-2xs">
                {post.category}
              </Badge>
              <div className="flex items-center gap-1.5 text-2xs text-muted-foreground">
                <Clock className="size-3" aria-hidden="true" />
                <span>{post.readingTime} min read</span>
              </div>
              <span className="text-muted-foreground/40">•</span>
              <time
                dateTime={post.publishedAt}
                className="text-2xs text-muted-foreground"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
                {post.title}
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-border/60 pt-4">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-full bg-muted font-heading text-2xs font-semibold text-foreground">
                  {post.author.name.charAt(0)}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-foreground">
                    {post.author.name}
                  </span>
                  {post.author.role && (
                    <span className="text-3xs text-muted-foreground">
                      {post.author.role}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-medium text-primary">
                <span>Read Article</span>
                <ArrowRight
                  className="size-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}

export { BlogFeatured }
