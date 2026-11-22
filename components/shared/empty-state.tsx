import type { ReactNode } from "react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

type EmptyStateProps = {
  icon: LucideIcon
  title: ReactNode
  description: ReactNode
  /** Shows a "Clear filters" button that calls this. */
  onReset?: () => void
  /** Extra actions, such as a link inviting people to add the first item. */
  action?: ReactNode
}

/** The dashed box shown when a list is empty or a search matches nothing. */
function EmptyState({ icon: Icon, title, description, onReset, action }: EmptyStateProps) {
  return (
    <div
      role="status"
      className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border px-4 py-16 text-center"
    >
      <span className="flex size-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <p className="font-heading text-lg font-semibold text-foreground">{title}</p>
      <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      {onReset || action ? (
        <div className="mt-1 flex flex-wrap justify-center gap-2">
          {onReset ? (
            <button
              type="button"
              onClick={onReset}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "min-h-11 rounded-full")}
            >
              Clear filters
            </button>
          ) : null}
          {action}
        </div>
      ) : null}
    </div>
  )
}

/** Invites visitors to add the first item, which is what an empty list needs most. */
function EmptyStateCta({ label }: { label: string }) {
  return (
    <Link
      href={siteConfig.registerUrl}
      className={cn(buttonVariants({ size: "sm" }), "min-h-11 rounded-full")}
    >
      {label}
    </Link>
  )
}

export { EmptyState, EmptyStateCta }
