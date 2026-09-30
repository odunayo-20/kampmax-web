import type { ComponentProps } from "react"
import { cn } from "cn"

function FormMessage({
  className,
  variant = "default",
  ...props
}: ComponentProps<"p"> & { variant?: "default" | "error" }) {
  return (
    <p
      role={variant === "error" ? "alert" : undefined}
      className={cn(
        "text-sm",
        variant === "error" ? "text-destructive" : "text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { FormMessage }
