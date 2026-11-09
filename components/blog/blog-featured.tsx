import Link from "next/link"
import { ArrowRight, BookOpen, Clock } from "lucide-react"

import type { BlogPost } from "@/types/blog"
import { CoverImage } from "@/components/shared/cover-image"
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
        className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <Card className="grid gap-0 overflow-hidden rounded-2xl border-border/80 bg-card py-0 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary-950/10 lg:grid-cols-[1.1fr_1fr]">
          <CoverImage
            src={post.image}
            priority
            sizes="(min-width: 1024px) 600px, 100vw"
            className="aspect-video h-full rounded-none lg:aspect-auto lg:min-h-80 [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-105"
          />
          <CardContent className="flex flex-col justify-center gap-5 p-6 sm:p-10">
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
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
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
                <span className="text-xs font-medium text-foreground">
                  {post.author.name}
                </span>
              </div>

              <div className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <span>Read Article</span>
                <ArrowRight
                  className="size-3.5 transition-transform group-hover:translate-x-0.5"
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
