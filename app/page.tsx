import Link from "next/link"

import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <Container className="flex flex-col items-center gap-6 py-24 text-center sm:py-32">
      <h1 className="font-heading max-w-2xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
        {siteConfig.tagline}
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground text-balance">
        {siteConfig.description}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={`${siteConfig.appUrl}/register`}
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Get Started
        </Link>
        <Link
          href="/how-it-works"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          How it Works
        </Link>
      </div>
    </Container>
  )
}
