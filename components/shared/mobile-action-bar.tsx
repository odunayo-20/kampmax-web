"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/** The `id` a detail page gives its main action card. */
const ACTION_CARD_ID = "action-card"

/**
 * A slim bar pinned to the bottom of the screen on phones, so a detail page's
 * main button stays in reach while reading. It is hidden on large screens
 * (where the action card is sticky) and whenever the action card itself or the
 * site footer is on screen, so there is never a second copy of the button
 * beside the first.
 */
function MobileActionBar({
  title,
  detail,
  action,
  href,
}: {
  /** The key fact: a price, a name. */
  title: string
  /** A small line under it. */
  detail?: string
  /** The button text. */
  action: string
  href: string
}) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const card = document.getElementById(ACTION_CARD_ID)
    if (!card) return
    const footer = document.querySelector("footer")

    const onScreen = { card: false, footer: false }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === card) onScreen.card = entry.isIntersecting
        else onScreen.footer = entry.isIntersecting
      }
      setShow(!onScreen.card && !onScreen.footer)
    })

    observer.observe(card)
    if (footer) observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      inert={!show}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px] shadow-primary-950/20 backdrop-blur transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-heading text-base font-extrabold tracking-tight text-foreground">
            {title}
          </span>
          {detail ? (
            <span className="truncate text-xs text-muted-foreground">{detail}</span>
          ) : null}
        </div>
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "h-11 shrink-0 rounded-xl bg-linear-to-r from-primary-600 to-primary-800 px-5 text-sm font-bold shadow-lg shadow-primary-600/25"
          )}
        >
          {action}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}

export { MobileActionBar, ACTION_CARD_ID }
