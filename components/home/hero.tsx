import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import {
  HeroCollage,
  type HeroEvent,
  type HeroJob,
  type HeroProduct,
} from "@/components/home/hero-collage"
import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

type HeroCampus = {
  slug: string
  shortName: string
  name: string
}

type HeroProps = {
  product?: HeroProduct
  job?: HeroJob
  event?: HeroEvent
  /** Campuses to offer as a one-tap way in. The row is left out when empty. */
  campuses?: HeroCampus[]
}

/** How many campus chips fit before the row turns into a wall of buttons. */
const MAX_CAMPUS_CHIPS = 4

function Hero({ product, job, event, campuses = [] }: HeroProps) {
  const chips = campuses.slice(0, MAX_CAMPUS_CHIPS)

  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      {/* Backdrop: light-blue glow top right, warm gold glow bottom left, faint grid. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_88%_8%,rgba(120,175,255,0.45),transparent_70%),radial-gradient(45%_45%_at_4%_96%,rgba(245,158,11,0.22),transparent_70%)]" />
        <div className="bg-grid-pattern absolute inset-0" />
      </div>

      <Container className="grid items-center gap-16 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-28">
        <div className="flex flex-col gap-8">
          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-balance sm:text-6xl xl:text-7xl">
            Your campus,{" "}
            <span className="text-gradient-brand">all in one place.</span>
          </h1>

          <p className="max-w-xl text-lg/relaxed text-primary-50 sm:text-xl/relaxed">
            Kampmax brings together the marketplace, jobs, services,
            freelancers, and events happening around your campus, so you can
            discover what&apos;s around you and get involved.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.registerUrl}
              data-track="cta_click"
              data-track-location="hero_join"
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
              data-track="cta_click"
              data-track-location="hero_see_whats_live"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-13 rounded-xl border-white/25 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              )}
            >
              See what&apos;s live
            </Link>
          </div>

          {chips.length > 0 ? (
            <nav aria-label="Choose your campus" className="flex flex-col gap-3">
              <p className="flex items-center gap-1.5 text-sm font-semibold text-primary-50">
                <MapPin className="size-4 text-accent-400" aria-hidden="true" />
                Pick your campus
              </p>
              <ul className="flex flex-wrap gap-2">
                {chips.map((campus) => (
                  <li key={campus.slug}>
                    <Link
                      href={`/campuses/${campus.slug}`}
                      title={campus.name}
                      data-track="campus_chip_click"
                      data-track-location={campus.slug}
                      className="inline-flex h-10 items-center rounded-full border border-white/25 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
                    >
                      {campus.shortName}
                    </Link>
                  </li>
                ))}
                {campuses.length > chips.length ? (
                  <li>
                    <Link
                      href="/campuses"
                      data-track="campus_chip_click"
                      data-track-location="all_campuses"
                      className="inline-flex h-10 items-center gap-1 rounded-full px-3 text-sm font-semibold text-accent-400 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
                    >
                      All campuses
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </li>
                ) : null}
              </ul>
            </nav>
          ) : null}

          <p className="text-sm text-primary-50">
            Selling, offering a service, or hiring?{" "}
            <Link
              href="/for-businesses"
              data-track="cta_click"
              data-track-location="hero_for_businesses"
              className="font-semibold text-white underline decoration-accent-400/70 underline-offset-4 transition-colors hover:decoration-accent-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-400"
            >
              Start here
            </Link>
          </p>
        </div>

        {/*
          No entrance animation here: this is the page's largest image, and a
          wrapper that starts at opacity 0 would hide it until JavaScript has
          loaded, which delays the Largest Contentful Paint.
        */}
        <HeroCollage product={product} job={job} event={event} />
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
