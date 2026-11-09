import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type HeroCardStackItem = {
  icon: LucideIcon
  /** Small label above the title. */
  label?: string
  title: string
  description: string
}

/**
 * A staggered column of white cards for the dark `PageHero`, used where a
 * page describes Kampmax rather than listing real records. Decorative: the
 * same content appears in text further down the page.
 */
function HeroCardStack({ items }: { items: HeroCardStackItem[] }) {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-6 -z-10 rounded-full bg-primary-500/30 blur-3xl" />
      <div className="flex flex-col gap-3.5">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "flex items-center gap-3.5 rounded-2xl bg-white p-4 text-neutral-900 shadow-2xl shadow-primary-950/40 ring-1 ring-white/30",
              index % 2 === 0 ? "mr-6 -rotate-1 animate-float" : "ml-6 rotate-1 animate-float-delayed"
            )}
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary-600 to-primary-800 text-white">
              <item.icon className="size-5" />
            </span>
            <div className="flex min-w-0 flex-col gap-0.5">
              {item.label ? (
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600">
                  {item.label}
                </span>
              ) : null}
              <p className="text-base font-semibold">{item.title}</p>
              <p className="line-clamp-2 text-xs text-neutral-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { HeroCardStack }
export type { HeroCardStackItem }
