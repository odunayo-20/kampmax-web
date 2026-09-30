import type { ComponentProps } from "react"
import { cn } from "cn"

function Display({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "font-heading text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl",
        className
      )}
      {...props}
    />
  )
}

function H1({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl",
        className
      )}
      {...props}
    />
  )
}

function H2({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
        className
      )}
      {...props}
    />
  )
}

function H3({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl",
        className
      )}
      {...props}
    />
  )
}

function H4({ className, ...props }: ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "font-heading text-lg font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  )
}

function Lead({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-lg text-muted-foreground sm:text-xl", className)}
      {...props}
    />
  )
}

function Muted({ className, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
}

function Small({ className, ...props }: ComponentProps<"small">) {
  return (
    <small
      className={cn(
        "text-sm leading-none font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

function Caption({ className, ...props }: ComponentProps<"span">) {
  return (
    <span className={cn("text-xs text-muted-foreground", className)} {...props} />
  )
}

/**
 * Small uppercase "kicker" label used above section headings. Uses the
 * brand's gold accent (from the logo) to mark editorial structure without
 * competing with primary blue CTAs.
 */
function Eyebrow({ className, children, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent-600 uppercase dark:text-accent-400",
        className
      )}
      {...props}
    >
      <span className="size-1.5 rounded-full bg-accent-500" aria-hidden="true" />
      {children}
    </span>
  )
}

export { Display, H1, H2, H3, H4, Lead, Muted, Small, Caption, Eyebrow }
