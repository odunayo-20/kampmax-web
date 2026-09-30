import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const stackVariants = cva("flex", {
  variants: {
    direction: {
      column: "flex-col",
      row: "flex-row flex-wrap items-center",
    },
    gap: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
  },
  defaultVariants: {
    direction: "column",
    gap: "md",
  },
})

function Stack({
  className,
  direction,
  gap,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof stackVariants>) {
  return (
    <div className={cn(stackVariants({ direction, gap }), className)} {...props} />
  )
}

export { Stack, stackVariants }
