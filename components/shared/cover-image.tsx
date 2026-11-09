"use client"

import { useState, type ReactNode } from "react"
import Image from "next/image"

import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { cn } from "@/lib/utils"

type CoverImageProps = {
  /** Absolute cover URL; falls back to the placeholder when missing or when it fails to load. */
  src?: string
  /** Describes the image. Leave empty when a heading beside it already does. */
  alt?: string
  sizes: string
  priority?: boolean
  /** Render nothing, instead of the placeholder, when there is no usable image. */
  hideWhenMissing?: boolean
  /** Shown instead of the grey placeholder when there is no usable image. */
  fallback?: ReactNode
  className?: string
}

function CoverImage({
  src,
  alt = "",
  sizes,
  priority = false,
  hideWhenMissing = false,
  fallback,
  className,
}: CoverImageProps) {
  // Remember which URL failed, so a different `src` later gets a fresh try.
  const [failedSrc, setFailedSrc] = useState<string>()

  if (!src || failedSrc === src) {
    if (hideWhenMissing) return null
    return fallback ?? <ImagePlaceholder className={cn("rounded-none", className)} />
  }

  return (
    <div className={cn("relative aspect-video w-full overflow-hidden bg-muted", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => setFailedSrc(src)}
        className="object-cover"
      />
    </div>
  )
}

export { CoverImage }
