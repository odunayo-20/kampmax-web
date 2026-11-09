import Link from "next/link"
import { ArrowRight, Compass, Lightbulb, Store } from "lucide-react"

import { BlogHeroVisual } from "@/components/blog/blog-hero-visual"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { siteConfig } from "@/config/site"
import type { BlogPost } from "@/types/blog"

const points = [
  { icon: Lightbulb, label: "Ideas and guides" },
  { icon: Store, label: "Student entrepreneurship" },
  { icon: Compass, label: "Read without an account" },
]

function BlogHero({ posts = [] }: { posts?: BlogPost[] }) {
  const count = posts.length

  return (
    <PageHero
      eyebrow={
        count > 0
          ? `Kampmax Insights · ${count} ${count === 1 ? "article" : "articles"}`
          : "Kampmax Insights"
      }
      title={
        <>
          Ideas and insights{" "}
          <span className="text-gradient-brand">for campus life.</span>
        </>
      }
      description="Explore perspectives on student entrepreneurship, emerging digital skills, local commerce, and navigating opportunity across university communities."
      actions={
        <>
          <Link href="#articles" className={heroActionClass("primary")}>
            Read the Latest
            <ArrowRight />
          </Link>
          <Link href={siteConfig.registerUrl} className={heroActionClass("ghost")}>
            Join Kampmax
          </Link>
        </>
      }
      points={points}
    >
      <BlogHeroVisual posts={posts} />
    </PageHero>
  )
}

export { BlogHero }
