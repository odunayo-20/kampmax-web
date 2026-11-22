"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import { BlogCard } from "@/components/blog/blog-card"
import { SectionHeading } from "@/components/layout/section-heading"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { BlogPost } from "@/types/blog"

const MAX_ARTICLES = 10

/** The newest articles from the blog displayed in a carousel slider. */
function LatestArticles({ posts = [] }: { posts?: BlogPost[] }) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const displayPosts = posts.slice(0, MAX_ARTICLES)

  const checkScroll = useCallback(() => {
    const el = sliderRef.current
    if (!el) return
    const tolerance = 4
    setCanScrollLeft(el.scrollLeft > tolerance)
    setCanScrollRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - tolerance
    )
  }, [])

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll, { passive: true })
    return () => window.removeEventListener("resize", checkScroll)
  }, [checkScroll, displayPosts.length])

  const scroll = (direction: "left" | "right") => {
    const el = sliderRef.current
    if (!el) return
    const step = el.clientWidth * 0.75
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    })
  }

  if (displayPosts.length === 0) return null

  return (
    <div className="flex w-full min-w-0 max-w-full flex-col gap-6 sm:gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Kampmax Insights"
          title="Stories, guides and ideas"
          description="Practical reading on campus life, student enterprise and the opportunities around you."
        />

        <div className="flex items-center justify-between gap-3 self-stretch sm:self-auto sm:justify-end">
          {/* Arrows only when there is something to scroll to. */}
          <div
            className={cn("items-center gap-1.5", canScrollLeft || canScrollRight ? "flex" : "hidden")}
          >
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous articles"
              className="size-11 rounded-full shadow-xs"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next articles"
              className="size-11 rounded-full shadow-xs"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-9 whitespace-nowrap text-xs sm:text-sm"
            )}
          >
            Read the blog
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="relative w-full min-w-0 max-w-full overflow-hidden">
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="no-scrollbar flex w-full min-w-0 max-w-full gap-5 overflow-x-auto py-3 scroll-smooth snap-x snap-mandatory sm:gap-6"
          role="region"
          aria-label="Kampmax Insights slider"
          tabIndex={0}
        >
          {displayPosts.map((post) => (
            <div
              key={post.slug}
              className="flex h-auto w-[82vw] max-w-[340px] shrink-0 snap-start flex-col sm:w-[320px] md:w-[340px] lg:w-[350px]"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { LatestArticles }
