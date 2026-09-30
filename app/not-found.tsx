import Link from "next/link"

import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-4 py-24 text-center sm:py-32">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link href="/" className={buttonVariants({ variant: "default" })}>
        Back to home
      </Link>
    </Container>
  )
}
