type ArticleContentProps = {
  /** Sanitized HTML from the Kampmax API (allow-list enforced server-side). */
  html: string
}

/**
 * Renders an article body. The backend sanitizes article HTML against a strict
 * allow-list before storing it, so it is rendered as-is; typography lives in
 * `.article-prose` (app/globals.css).
 */
export function ArticleContent({ html }: ArticleContentProps) {
  return (
    <div
      className="article-prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
