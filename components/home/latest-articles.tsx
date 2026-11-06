import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { BlogCard } from "@/components/blog/blog-card"
import { BlogFeatured } from "@/components/blog/blog-featured"
import { SectionHeading } from "@/components/layout/section-heading"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { BlogPost } from "@/types/blog"

/** The newest few articles from the blog. Left out when there are none. */
function LatestArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null

  const shown = posts.slice(0, 3)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Kampmax Insights"
          title="Stories, guides and ideas"
          description="Practical reading on campus life, student enterprise and the opportunities around you."
        />
        <Link
          href="/blog"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 self-start whitespace-nowrap rounded-xl sm:self-auto"
          )}
        >
          Read the blog
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {shown.length === 1 ? (
        // A lone article reads better as a full-width featured story than as
        // one card with empty space beside it.
        <FadeIn>
          <BlogFeatured post={shown[0]} />
        </FadeIn>
      ) : (
        <div
          className={cn(
            "grid gap-6 sm:grid-cols-2",
            shown.length >= 3 && "lg:grid-cols-3"
          )}
        >
          {shown.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.08}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  )
}

export { LatestArticles }
