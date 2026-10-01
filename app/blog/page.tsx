import type { Metadata } from "next"

import { getAllPosts, getCategories, getFeaturedPost } from "@/app/_data/blog"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { BlogBrowser } from "@/components/blog/blog-browser"
import { BlogCta } from "@/components/blog/blog-cta"
import { BlogFeatured } from "@/components/blog/blog-featured"
import { BlogHero } from "@/components/blog/blog-hero"

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Explore ideas, opportunities, student entrepreneurship, and campus insights from the Kampmax team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Insights — Kampmax",
    description:
      "Explore ideas, opportunities, student entrepreneurship, and campus insights from the Kampmax team.",
    url: "/blog",
  },
}

export default function BlogIndexPage() {
  const allPosts = getAllPosts()
  const featuredPost = getFeaturedPost() || allPosts[0]
  const categories = getCategories()

  return (
    <>
      {/* 1. Hero */}
      <Container>
        <BlogHero />
      </Container>

      {/* 2. Featured Story */}
      {featuredPost && (
        <div className="bg-muted/30">
          <Section>
            <Container>
              <BlogFeatured post={featuredPost} />
            </Container>
          </Section>
        </div>
      )}

      {/* 3. Articles Browser (Categories + Search + Grid) */}
      <Section id="articles" className="scroll-mt-16">
        <Container>
          <div className="mb-8 flex flex-col gap-1">
            <span className="text-2xs font-semibold uppercase tracking-wider text-primary">
              All Stories
            </span>
            <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
              Latest Insights &amp; Guides
            </h2>
          </div>

          <BlogBrowser posts={allPosts} categories={categories} />
        </Container>
      </Section>

      {/* 4. Subtle Platform CTA */}
      <div className="bg-muted/30">
        <Section>
          <Container>
            <BlogCta />
          </Container>
        </Section>
      </div>
    </>
  )
}
