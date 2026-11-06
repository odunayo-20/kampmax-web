"use client"

import { useEffect } from "react"

import { env } from "@/config/env"

type ArticleViewCounterProps = {
  slug: string
}

/**
 * Counts one read per browser session. Renders nothing, and a failed request
 * is ignored — the reader never sees it.
 */
export function ArticleViewCounter({ slug }: ArticleViewCounterProps) {
  useEffect(() => {
    const key = `kampmax:viewed:${slug}`

    try {
      if (sessionStorage.getItem(key)) return
      sessionStorage.setItem(key, "1")
    } catch {
      // Storage is unavailable (private mode); count the view anyway.
    }

    const url = `${env.apiUrl.replace(/\/+$/, "")}/blog/articles/slug/${encodeURIComponent(slug)}/view`
    fetch(url, { method: "POST", keepalive: true }).catch(() => {})
  }, [slug])

  return null
}
