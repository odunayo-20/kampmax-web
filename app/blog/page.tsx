import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"

import { orNullDuringBuild } from "@/lib/api"
import { getAllPosts, getCategories, getFeaturedPost } from "@/lib/blog"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { BlogBrowser } from "@/components/blog/blog-browser"
import { BlogCta } from "@/components/blog/blog-cta"
import { BlogFeatured } from "@/components/blog/blog-featured"
import { BlogHero } from "@/components/blog/blog-hero"
import { ApiUnavailable } from "@/components/shared/api-unavailable"

export const revalidate = 300

export const metadata: Metadata = pageMetadata({
  title: "Blog & Insights",
  description: "Explore ideas, opportunities, student entrepreneurship, and campus insights from the Kampmax team.",
  path: "/blog",
})

export default async function BlogIndexPage() {
  const content = await orNullDuringBuild(async () => {
    const [allPosts, featured, categories] = await Promise.all([
      getAllPosts(),
      getFeaturedPost(),
      getCategories(),
    ])
    return { allPosts, featuredPost: featured ?? allPosts[0], categories }
  })

  return (
    <>
      {/* 1. Hero */}
      <BlogHero posts={content?.allPosts ?? []} />

      {content === null ? (
        <Section>
          <Container>
            <ApiUnavailable subject="articles" />
          </Container>
        </Section>
      ) : (
        <>
          {/* 2. Featured Story */}
          {content.featuredPost && (
            <div className="bg-muted/30">
              <Section>
                <Container>
                  <BlogFeatured post={content.featuredPost} />
                </Container>
              </Section>
            </div>
          )}

          {/* 3. Articles Browser (Categories + Search + Grid) */}
          <Section id="articles" className="scroll-mt-16">
            <Container>
              <div className="mb-8 flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  All Stories
                </span>
                <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                  Latest Insights &amp; Guides
                </h2>
              </div>

              <BlogBrowser
                posts={content.allPosts}
                categories={content.categories}
              />
            </Container>
          </Section>
        </>
      )}

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
