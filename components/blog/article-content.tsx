import { Info, Sparkles } from "lucide-react"

import type { BlogContentBlock } from "@/types/blog"

type ArticleContentProps = {
  blocks: BlogContentBlock[]
}

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="space-y-6 text-foreground/90 font-sans">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="text-base sm:text-lg leading-relaxed text-foreground/90 font-normal"
              >
                {block.content}
              </p>
            )

          case "heading":
            if (block.level === 3) {
              return (
                <h3
                  key={index}
                  className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-foreground mt-8 mb-3"
                >
                  {block.content}
                </h3>
              )
            }
            return (
              <h2
                key={index}
                className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-10 mb-4 pt-2 border-t border-border/30 first:border-t-0 first:pt-0"
              >
                {block.content}
              </h2>
            )

          case "list":
            if (block.ordered) {
              return (
                <ol
                  key={index}
                  className="my-5 list-decimal pl-6 space-y-2 text-base sm:text-lg leading-relaxed text-foreground/90"
                >
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ol>
              )
            }
            return (
              <ul
                key={index}
                className="my-5 list-disc pl-6 space-y-2 text-base sm:text-lg leading-relaxed text-foreground/90"
              >
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            )

          case "quote":
            return (
              <blockquote
                key={index}
                className="relative my-8 rounded-r-xl border-l-4 border-primary bg-primary/[0.04] p-5 sm:p-6 text-base sm:text-lg italic text-foreground/95"
              >
                <p className="leading-relaxed">“{block.content}”</p>
                {block.citation && (
                  <cite className="mt-3 block text-xs sm:text-sm font-medium not-italic text-muted-foreground">
                    — {block.citation}
                  </cite>
                )}
              </blockquote>
            )

          case "callout":
            return (
              <aside
                key={index}
                aria-label={block.title || "Insight callout"}
                className="my-8 rounded-xl border border-primary/25 bg-primary/[0.03] p-5 sm:p-6 text-foreground"
              >
                <div className="flex items-start gap-3.5">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {block.title?.toLowerCase().includes("tip") ||
                    block.title?.toLowerCase().includes("practical") ? (
                      <Sparkles className="size-4" aria-hidden="true" />
                    ) : (
                      <Info className="size-4" aria-hidden="true" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    {block.title && (
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-foreground">
                        {block.title}
                      </h4>
                    )}
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {block.content}
                    </p>
                  </div>
                </div>
              </aside>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
