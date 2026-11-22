import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { cleanText } from "@/lib/text"

/** Search results show about 155 characters; longer text is cut off. */
const MAX_DESCRIPTION = 155

/** A description shorter than this ("dsv") is not worth showing in search results. */
const MIN_DESCRIPTION = 30

/** Used when a page has no image of its own (served by app/opengraph-image.tsx). */
const DEFAULT_SHARE_IMAGE = "/opengraph-image"

/** Cleaned text cut at a word boundary with an ellipsis, to fit a search snippet. */
export function metaDescription(
  text: string | null | undefined,
  fallback: string = siteConfig.description
): string {
  const own = cleanText(text)
  const clean = own.length >= MIN_DESCRIPTION ? own : fallback
  if (clean.length <= MAX_DESCRIPTION) return clean
  const cut = clean.slice(0, MAX_DESCRIPTION - 1)
  return `${cut.slice(0, cut.lastIndexOf(" ") > 80 ? cut.lastIndexOf(" ") : cut.length)}…`
}

type PageMetadataInput = {
  /** Page name only. The layout adds "| Kampmax", so never include the brand. */
  title: string
  description?: string | null
  /** Used when the description is missing or too thin to be useful; defaults to the site description. */
  fallbackDescription?: string
  /** Path of the page, used for the canonical link and the share URL. */
  path: string
  /** Page's own share image; the Kampmax card is used when there is none. */
  image?: string | null
  type?: "website" | "article"
}

/**
 * The metadata every page needs: title, description, canonical link and
 * Open Graph / Twitter cards, with a share image always present.
 */
export function pageMetadata({
  title,
  description,
  fallbackDescription,
  path,
  image,
  type = "website",
}: PageMetadataInput): Metadata {
  const cleanTitle = cleanText(title)
  const summary = metaDescription(description, fallbackDescription)
  const images = [image || DEFAULT_SHARE_IMAGE]
  return {
    title: cleanTitle,
    description: summary,
    alternates: { canonical: path },
    openGraph: {
      type,
      title: `${cleanTitle} | ${siteConfig.name}`,
      description: summary,
      url: path,
      siteName: siteConfig.name,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${cleanTitle} | ${siteConfig.name}`,
      description: summary,
      images,
    },
  }
}
