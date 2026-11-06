import Image from "next/image"

import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { cn } from "@/lib/utils"

type CoverImageProps = {
  /** Absolute cover URL; falls back to the placeholder when missing. */
  src?: string
  /** Describes the image. Leave empty when a heading beside it already does. */
  alt?: string
  sizes: string
  priority?: boolean
  /** Render nothing, instead of the placeholder, when there is no image. */
  hideWhenMissing?: boolean
  className?: string
}

function CoverImage({
  src,
  alt = "",
  sizes,
  priority = false,
  hideWhenMissing = false,
  className,
}: CoverImageProps) {
  if (!src) {
    return hideWhenMissing ? null : (
      <ImagePlaceholder className={cn("rounded-none", className)} />
    )
  }

  return (
    <div className={cn("relative aspect-video w-full overflow-hidden bg-muted", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  )
}

export { CoverImage }
