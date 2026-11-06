import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"

import { orNullDuringBuild } from "@/lib/api"
import {
  getAdjacentPosts,
  getAllPosts,
  getArticleSitemapEntries,
  lookupArticle,
} from "@/lib/blog"
import { ArticleAdjacent } from "@/components/blog/article-adjacent"
import { ArticleAuthor } from "@/components/blog/article-author"
import { ArticleContent } from "@/components/blog/article-content"
import { ArticleCta } from "@/components/blog/article-cta"
import { ArticleHeader } from "@/components/blog/article-header"
import { ArticleJsonLd } from "@/components/blog/article-json-ld"
import { ArticleReadingProgress } from "@/components/blog/article-reading-progress"
import { ArticleRelated } from "@/components/blog/article-related"
import { ArticleShare } from "@/components/blog/article-share"
import { ArticleViewCounter } from "@/components/blog/article-view-counter"
import { BlogCover } from "@/components/blog/blog-cover"
import { Container } from "@/components/layout/container"

export const revalidate = 300

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const entries = await orNullDuringBuild(getArticleSitemapEntries)
  return (entries ?? []).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const lookup = await lookupArticle(slug)

  if (lookup.status !== "found") {
    return {
      title: "Article Not Found | Kampmax Insights",
      description: "The requested article could not be found.",
    }
  }

  const post = lookup.article
  const title = post.seoTitle ?? post.title
  const description = post.seoDescription ?? post.excerpt

  return {
    title: `${title} | Kampmax Insights`,
    description,
    alternates: {
      canonical: post.canonicalUrl ?? `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      section: post.category,
      ...(post.image ? { images: [post.image] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(post.image ? { images: [post.image] } : {}),
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const lookup = await lookupArticle(slug)

  if (lookup.status === "moved") {
    permanentRedirect(`/blog/${lookup.slug}`)
  }
  if (lookup.status === "missing") {
    notFound()
  }

  const post = lookup.article
  const adjacent = getAdjacentPosts(post.slug, await getAllPosts())

  return (
    <>
      <ArticleReadingProgress />
      <ArticleViewCounter slug={post.slug} />

      <Container className="py-10 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <ArticleHeader post={post} />
          <BlogCover
            src={post.image}
            alt={post.title}
            priority
            hideWhenMissing
            sizes="(min-width: 768px) 768px, 100vw"
            className="mb-10 aspect-video rounded-2xl sm:mb-12"
          />
          <ArticleContent html={post.contentHtml} />
          <ArticleShare title={post.title} slug={post.slug} />
          <ArticleAuthor author={post.author} />
          <ArticleAdjacent prev={adjacent.prev} next={adjacent.next} />
          <ArticleCta />
        </article>

        <div className="mx-auto max-w-5xl">
          <ArticleRelated posts={post.related} />
        </div>
      </Container>

      <ArticleJsonLd post={post} />
    </>
  )
}
