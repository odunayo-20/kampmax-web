import { ImageOff } from "lucide-react"
import { cn } from "cn"

/**
 * Fallback for a missing/unavailable image.
 *
 * Convention for real images: wrap `next/image` in a `relative` container
 * sized with an `aspect-*` utility (e.g. `aspect-video`, `aspect-square`),
 * and use `fill` + `object-cover` on the `Image` itself so it always fills
 * that ratio regardless of the source's intrinsic dimensions.
 */
function ImagePlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex aspect-video w-full items-center justify-center rounded-lg bg-muted text-muted-foreground",
        className
      )}
    >
      <ImageOff className="size-6" aria-hidden="true" />
      <span className="sr-only">Image not available</span>
    </div>
  )
}

export { ImagePlaceholder }
