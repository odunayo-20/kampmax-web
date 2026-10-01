"use client"

import * as React from "react"
import { Filter, RotateCcw, Search } from "lucide-react"

import type { BlogCategory, BlogPost } from "@/types/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type BlogBrowserProps = {
  posts: BlogPost[]
  categories: BlogCategory[]
}

function BlogBrowser({ posts, categories }: BlogBrowserProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all")
  const [searchQuery, setSearchQuery] = React.useState<string>("")

  const filteredPosts = React.useMemo(() => {
    return posts.filter((post) => {
      // 1. Category check
      const matchesCategory =
        selectedCategory === "all" || post.categorySlug === selectedCategory

      if (!matchesCategory) return false

      // 2. Search query check
      if (!searchQuery.trim()) return true

      const query = searchQuery.toLowerCase().trim()
      const inTitle = post.title.toLowerCase().includes(query)
      const inExcerpt = post.excerpt.toLowerCase().includes(query)
      const inCategory = post.category.toLowerCase().includes(query)

      return inTitle || inExcerpt || inCategory
    })
  }, [posts, selectedCategory, searchQuery])

  const handleReset = () => {
    setSelectedCategory("all")
    setSearchQuery("")
  }

  const isFiltering = selectedCategory !== "all" || searchQuery.trim().length > 0

  return (
    <div className="flex flex-col gap-8">
      {/* Category Pills & Search Bar Controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Category Pills */}
        <div
          role="tablist"
          aria-label="Filter blog posts by category"
          className="flex flex-wrap items-center gap-1.5"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category.slug
            return (
              <button
                key={category.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category.slug)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-xs shrink-0">
          <Search
            className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search articles or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-3 text-xs"
            aria-label="Search articles or topics"
          />
        </div>
      </div>

      {/* Result Count and Active Filters bar */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Showing {filteredPosts.length}{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
        </span>

        {isFiltering && (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 font-medium text-primary hover:underline"
          >
            <RotateCcw className="size-3" aria-hidden="true" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Articles Grid or Empty State */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div
          role="status"
          className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-16 text-center"
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Filter className="size-6" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-heading text-base font-semibold text-foreground">
              No articles found
            </h3>
            <p className="max-w-sm text-xs text-muted-foreground">
              Try adjusting your search query or selecting another category to
              explore relevant campus insights.
            </p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  )
}

export { BlogBrowser }
