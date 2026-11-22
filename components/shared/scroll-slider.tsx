"use client"

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * A titled row of cards that scrolls sideways. The cards are ordinary server-rendered
 * children (so their links stay crawlable); only the arrows need the browser.
 */
function ScrollSlider({
  eyebrow,
  title,
  description,
  viewAll,
  label,
  between,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  viewAll: { href: string; label: string }
  /** What the row holds, for screen readers: "Fresh products". */
  label: string
  /** Shown between the heading and the row, e.g. quick links. */
  between?: ReactNode
  children: ReactNode
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const count = Children.count(children)

  const checkScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const tolerance = 4
    setCanScrollLeft(el.scrollLeft > tolerance)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - tolerance)
  }, [])

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll, { passive: true })
    return () => window.removeEventListener("resize", checkScroll)
  }, [checkScroll, count])

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current
    if (!el) return
    const step = el.clientWidth * 0.75
    el.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" })
  }

  if (count === 0) return null

  return (
    <div className="flex w-full min-w-0 max-w-full flex-col gap-6 sm:gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="flex items-center justify-between gap-3 self-stretch sm:self-auto sm:justify-end">
          <div className="flex items-center gap-1.5">
            {(["left", "right"] as const).map((direction) => (
              <Button
                key={direction}
                type="button"
                variant="outline"
                size="icon"
                onClick={() => scroll(direction)}
                disabled={direction === "left" ? !canScrollLeft : !canScrollRight}
                aria-label={`${direction === "left" ? "Previous" : "Next"} ${label.toLowerCase()}`}
                className="size-11 rounded-full shadow-xs"
              >
                {direction === "left" ? (
                  <ChevronLeft className="size-4" aria-hidden="true" />
                ) : (
                  <ChevronRight className="size-4" aria-hidden="true" />
                )}
              </Button>
            ))}
          </div>

          <Link
            href={viewAll.href}
            className={cn(buttonVariants({ variant: "outline" }), "min-h-11 whitespace-nowrap text-xs sm:text-sm")}
          >
            {viewAll.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {between}

      <div className="relative w-full min-w-0 max-w-full overflow-hidden">
        <div
          ref={trackRef}
          onScroll={checkScroll}
          className="no-scrollbar flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-3 sm:gap-5"
          role="region"
          aria-label={`${label} slider`}
          tabIndex={0}
        >
          {Children.map(children, (child) => (
            <div className="flex h-auto w-[78vw] max-w-[280px] shrink-0 snap-start flex-col sm:w-[260px] md:w-[270px] lg:w-[280px]">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { ScrollSlider }
