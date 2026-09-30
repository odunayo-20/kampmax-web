import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      narrow: "max-w-2xl",
      default: "max-w-6xl",
      wide: "max-w-7xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

function Container({
  className,
  size,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
  return (
    <div className={cn(containerVariants({ size }), className)} {...props} />
  )
}

export { Container, containerVariants }
