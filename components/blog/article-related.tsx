import { getRelatedPosts } from "@/app/_data/blog"
import { BlogCard } from "@/components/blog/blog-card"

type ArticleRelatedProps = {
  currentSlug: string
  categorySlug: string
}

export function ArticleRelated({
  currentSlug,
  categorySlug,
}: ArticleRelatedProps) {
  const relatedPosts = getRelatedPosts(currentSlug, categorySlug, 3)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section aria-labelledby="related-articles-heading" className="mt-16 sm:mt-24 pt-12 border-t border-border/80">
      <div className="mb-8">
        <h2
          id="related-articles-heading"
          className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
        >
          Related Insights
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Continue exploring related topics and perspectives from our campus network.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
