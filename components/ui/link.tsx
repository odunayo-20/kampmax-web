import NextLink from "next/link"
import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const linkVariants = cva(
  "rounded-sm transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  {
    variants: {
      variant: {
        default: "text-primary underline-offset-4 hover:underline",
        subtle: "text-muted-foreground hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type LinkProps = ComponentProps<typeof NextLink> & VariantProps<typeof linkVariants>

function Link({ className, variant, ...props }: LinkProps) {
  return (
    <NextLink className={cn(linkVariants({ variant }), className)} {...props} />
  )
}

export { Link, linkVariants }
