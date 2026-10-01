import type { BlogPost } from "@/types/blog"
import { siteConfig } from "@/config/site"

type ArticleJsonLdProps = {
  post: BlogPost
}

export function ArticleJsonLd({ post }: ArticleJsonLdProps) {
  const isTeam =
    post.author.name.toLowerCase().includes("team") ||
    post.author.name.toLowerCase().includes("kampmax")

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    author: {
      "@type": isTeam ? "Organization" : "Person",
      name: post.author.name,
      ...(post.author.role ? { jobTitle: post.author.role } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.svg`,
      },
    },
    articleSection: post.category,
    inLanguage: "en-US",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}
