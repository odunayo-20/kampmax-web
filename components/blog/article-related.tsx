import { BlogCard } from "@/components/blog/blog-card"
import type { BlogPost } from "@/types/blog"

type ArticleRelatedProps = {
  posts: BlogPost[]
}

export function ArticleRelated({ posts }: ArticleRelatedProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section aria-labelledby="related-articles-heading">
      <div className="mb-8">
        <span className="text-2xs font-semibold tracking-wider text-primary uppercase">
          Keep reading
        </span>
        <h2
          id="related-articles-heading"
          className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
        >
          Related insights
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
