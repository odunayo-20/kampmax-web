import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import type { BlogPost } from "@/types/blog"

type ArticleAdjacentProps = {
  prev?: BlogPost
  next?: BlogPost
}

export function ArticleAdjacent({ prev, next }: ArticleAdjacentProps) {
  if (!prev && !next) {
    return null
  }

  return (
    <nav
      aria-label="Adjacent articles"
      className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 pt-6 border-t border-border/60"
    >
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group flex flex-col justify-between rounded-xl border border-border/70 bg-card p-4 transition-all hover:border-primary/40 hover:bg-card/80"
        >
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-primary transition-colors mb-2">
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            <span>Previous Article</span>
          </div>
          <p className="line-clamp-2 text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {prev.title}
          </p>
        </Link>
      ) : (
        <div aria-hidden="true" className="hidden sm:block" />
      )}

      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex flex-col justify-between rounded-xl border border-border/70 bg-card p-4 text-right transition-all hover:border-primary/40 hover:bg-card/80 sm:ml-auto w-full"
        >
          <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground group-hover:text-primary transition-colors mb-2">
            <span>Next Article</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </div>
          <p className="line-clamp-2 text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {next.title}
          </p>
        </Link>
      ) : null}
    </nav>
  )
}
