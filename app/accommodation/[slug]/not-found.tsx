import Link from "next/link"

import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { whatsappUrl } from "@/config/contact"
import { cn } from "@/lib/utils"

/** Shown when a place has been taken, has expired or never existed. Keeps the visitor looking. */
export default function ListingNotFound() {
  return (
    <Container className="flex flex-col items-center gap-4 py-24 text-center sm:py-32">
      <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        This place is no longer available
      </h1>
      <p className="max-w-md text-muted-foreground">
        It may have been taken or taken down by the agent. There are more places waiting for you.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/accommodation" className={cn(buttonVariants({ size: "lg" }), "min-h-11")}>
          See available places
        </Link>
        <a
          href={whatsappUrl("Hi Kampmax, I am looking for accommodation near my campus.")}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "min-h-11")}
        >
          Tell us what you need
        </a>
      </div>
    </Container>
  )
}
