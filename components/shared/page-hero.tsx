import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  /** Small label above the headline. */
  eyebrow: ReactNode
  /** The headline. Wrap a phrase in `<span className="text-gradient-brand">` to highlight it. */
  title: ReactNode
  description: ReactNode
  /** Buttons; style them with `heroActionClass`. */
  actions?: ReactNode
  /** Short reassurance points shown under the buttons. */
  points?: { icon: LucideIcon; label: string }[]
  /** Visual shown beside the text on large screens, below it on small ones. */
  children?: ReactNode
}

/** Button styles for use on the dark hero. */
function heroActionClass(kind: "primary" | "ghost") {
  return cn(
    buttonVariants({ variant: kind === "primary" ? "default" : "outline", size: "lg" }),
    "h-12 rounded-xl px-7 text-base",
    kind === "primary"
      ? "bg-accent-500 font-bold text-primary-950 shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:bg-accent-400"
      : "border-white/25 bg-white/5 font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
  )
}

/**
 * The dark navy hero that opens a page: gradient glows, a faint grid, a
 * headline, and an optional visual on the right. The home page hero uses the
 * same look.
 */
function PageHero({
  eyebrow,
  title,
  description,
  actions,
  points,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_90%_0%,rgba(47,128,237,0.45),transparent_70%),radial-gradient(45%_50%_at_0%_100%,rgba(245,158,11,0.18),transparent_70%)]" />
        <div className="bg-grid-pattern absolute inset-0" />
      </div>

      <Container
        className={cn(
          "grid items-center gap-14 py-16 sm:py-20 lg:py-24",
          children && "lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
        )}
      >
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary-100 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-accent-400" aria-hidden="true" />
            {eyebrow}
          </span>

          <h1
            className={cn(
              "max-w-3xl font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl",
              // Beside a visual the text column is narrower, so the headline steps down.
              children ? "lg:text-[2.85rem]/[1.1]" : "lg:text-6xl"
            )}
          >
            {title}
          </h1>

          <p className="max-w-2xl text-lg/relaxed text-primary-100/80 sm:text-xl/relaxed">
            {description}
          </p>

          {actions ? (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">{actions}</div>
          ) : null}

          {points && points.length > 0 ? (
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-sm text-primary-100/75">
              {points.map((point) => (
                <li key={point.label} className="flex items-center gap-2">
                  <point.icon className="size-4 text-accent-400" aria-hidden="true" />
                  {point.label}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {children ? <FadeIn>{children}</FadeIn> : null}
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
      />
    </section>
  )
}

export { PageHero, heroActionClass }
