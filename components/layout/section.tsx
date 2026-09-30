import type { ComponentProps } from "react"
import { cn } from "cn"

/**
 * Establishes the shared vertical rhythm between page sections.
 * Wrap section content in <Container> for horizontal alignment.
 */
function Section({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", className)}
      {...props}
    />
  )
}

export { Section }
