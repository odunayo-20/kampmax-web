import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import {
  HeroCollage,
  type HeroEvent,
  type HeroJob,
  type HeroProduct,
} from "@/components/home/hero-collage"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/shared/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

type HeroProps = {
  product?: HeroProduct
  job?: HeroJob
  event?: HeroEvent
}

const reassurances = [
  "Browse without an account",
  "Organized around your campus",
  "Marketplace, jobs, services and events in one place",
]

function Hero({ product, job, event }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-950 text-white">
      {/* Backdrop: brand-blue glow top right, warm gold glow bottom left, faint grid. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_88%_8%,rgba(47,128,237,0.5),transparent_70%),radial-gradient(45%_45%_at_4%_96%,rgba(245,158,11,0.2),transparent_70%)]" />
        <div className="bg-grid-pattern absolute inset-0" />
      </div>

      <Container className="grid items-center gap-16 pb-28 pt-16 sm:pb-32 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-40 lg:pt-28">
        <div className="flex flex-col gap-8">
          <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary-100 backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-400" />
            </span>
            The campus ecosystem
          </span>

          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-balance sm:text-6xl xl:text-7xl">
            Your campus,{" "}
            <span className="text-gradient-brand">all in one place.</span>
          </h1>

          <p className="max-w-xl text-lg/relaxed text-primary-100/80 sm:text-xl/relaxed">
            Kampmax brings together the marketplace, jobs, services,
            freelancers, and events happening around your campus, so you can
            discover what&apos;s around you and get involved.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.registerUrl}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-13 rounded-xl bg-accent-500 px-8 text-base font-bold text-primary-950 shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-xl hover:shadow-accent-500/30"
              )}
            >
              Join Kampmax
              <ArrowRight />
            </Link>
            <Link
              href="#discover"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-13 rounded-xl border-white/25 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              )}
            >
              Explore Kampmax
            </Link>
          </div>

          <ul className="flex flex-col gap-2.5 text-sm text-primary-100/75">
            {reassurances.map((line) => (
              <li key={line} className="flex items-center gap-2.5">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <FadeIn>
          <HeroCollage product={product} job={job} event={event} />
        </FadeIn>
      </Container>

      {/* Soft edge into the light page below. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
      />
    </section>
  )
}

export { Hero }
