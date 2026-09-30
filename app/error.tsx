"use client"

import { useEffect } from "react"

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container className="flex flex-col items-center gap-4 py-24 text-center sm:py-32">
      <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Something went wrong
      </h1>
      <p className="max-w-md text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>
      <Button onClick={reset}>Try again</Button>
    </Container>
  )
}
