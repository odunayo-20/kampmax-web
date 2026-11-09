import Link from "next/link"
import { Clock } from "lucide-react"

import { cn } from "@/lib/utils"
import type { BlogPost } from "@/types/blog"

/** Where each of up to three cards sits in the stack. */
const placements = [
  "left-0 top-0 z-10 w-[88%] -rotate-[2deg] animate-float",
  "right-0 top-[40%] z-20 w-[88%] rotate-[2deg] animate-float-delayed",
  "bottom-0 left-[4%] z-30 w-[88%] -rotate-1 animate-float",
]

/** The stack is only as tall as the number of cards needs. */
const heights: Record<number, string> = {
  1: "h-40",
  2: "h-[24rem]",
  3: "h-[28rem]",
}

/**
 * A stack of the newest articles beside the hero text. They are real
 * articles: nothing here is made up. Renders nothing when there are none.
 */
function BlogHeroVisual({ posts }: { posts: BlogPost[] }) {
  const shown = posts.slice(0, placements.length)
  if (shown.length === 0) return null

  return (
    <div className={cn("relative mx-auto w-full max-w-md", heights[shown.length])}>
      <div
        aria-hidden="true"
        className="absolute inset-6 -z-10 rounded-full bg-primary-500/30 blur-3xl"
      />
      {shown.map((post, index) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className={cn(
            "absolute block rounded-2xl bg-white p-4 text-neutral-900 shadow-2xl shadow-primary-950/40 ring-1 ring-white/30 transition-transform duration-300 hover:z-40 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400",
            placements[index]
          )}
        >
          <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600">
            {post.category}
          </span>
          <p className="mt-1 line-clamp-2 text-base font-semibold leading-snug">{post.title}</p>
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-neutral-100 pt-3 text-xs text-neutral-500">
            <span className="truncate">By {post.author.name}</span>
            <span className="inline-flex shrink-0 items-center gap-1.5">
              <Clock className="size-3.5 text-primary-600" aria-hidden="true" />
              {post.readingTime} min read
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export { BlogHeroVisual }
