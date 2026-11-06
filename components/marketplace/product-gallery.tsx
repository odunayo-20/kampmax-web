"use client"

import { useState } from "react"

import { CoverImage } from "@/components/shared/cover-image"
import { cn } from "@/lib/utils"

/**
 * Product photos: one large image with a strip of thumbnails below it.
 * Choosing a thumbnail shows that photo in the large slot.
 */
function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [selected, setSelected] = useState(0)
  const index = selected < images.length ? selected : 0
  const current = images[index]

  return (
    <div className="flex flex-col gap-3">
      <CoverImage
        key={current}
        src={current}
        alt={images.length > 1 ? `${name}, image ${index + 1} of ${images.length}` : name}
        priority={index === 0}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="aspect-square w-full rounded-xl"
      />

      {images.length > 1 ? (
        <div
          role="group"
          aria-label={`${name} images`}
          className="flex gap-2 overflow-x-auto p-1"
        >
          {images.map((src, thumbIndex) => {
            const isSelected = thumbIndex === index
            return (
              <button
                key={src}
                type="button"
                aria-label={`Show image ${thumbIndex + 1} of ${images.length}`}
                aria-pressed={isSelected}
                onClick={() => setSelected(thumbIndex)}
                className={cn(
                  "relative size-16 shrink-0 cursor-pointer overflow-hidden rounded-lg border transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  isSelected
                    ? "border-primary ring-2 ring-primary/40"
                    : "border-border opacity-70 hover:opacity-100"
                )}
              >
                <CoverImage src={src} sizes="64px" className="size-full" />
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export { ProductGallery }
