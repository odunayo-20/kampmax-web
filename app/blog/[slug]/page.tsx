import type { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getAdjacentPosts,
  getAllPosts,
  getPostBySlug,
} from "@/app/_data/blog"
import { ArticleAdjacent } from "@/components/blog/article-adjacent"
import { ArticleAuthor } from "@/components/blog/article-author"
import { ArticleContent } from "@/components/blog/article-content"
import { ArticleCta } from "@/components/blog/article-cta"
import { ArticleHeader } from "@/components/blog/article-header"
import { ArticleJsonLd } from "@/components/blog/article-json-ld"
import { ArticleReadingProgress } from "@/components/blog/article-reading-progress"
import { ArticleRelated } from "@/components/blog/article-related"
import { ArticleShare } from "@/components/blog/article-share"
import { Container } from "@/components/layout/container"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Article Not Found | Kampmax Insights",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: `${post.title} | Kampmax Insights`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const adjacent = getAdjacentPosts(slug)

  return (
    <>
      <ArticleReadingProgress />

      <Container className="py-10 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <ArticleHeader post={post} />
          <ArticleContent blocks={post.content} />
          <ArticleShare title={post.title} slug={post.slug} />
          <ArticleAuthor author={post.author} />
          <ArticleAdjacent prev={adjacent.prev} next={adjacent.next} />
          <ArticleCta />
        </article>

        <div className="mx-auto max-w-5xl">
          <ArticleRelated
            currentSlug={post.slug}
            categorySlug={post.categorySlug}
          />
        </div>
      </Container>

      <ArticleJsonLd post={post} />
    </>
  )
}
