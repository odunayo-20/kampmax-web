import Link from "next/link"
import { ArrowRight, Compass } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export function ArticleCta() {
  return (
    <div className="my-12 rounded-3xl bg-primary-950 p-6 sm:p-10 relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(47,128,237,0.45),transparent_70%),radial-gradient(45%_60%_at_0%_100%,rgba(245,158,11,0.18),transparent_70%)]" aria-hidden="true" />

      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-2xs font-medium text-primary-100 mb-4">
          <Compass className="size-3" aria-hidden="true" />
          <span>The Campus Ecosystem</span>
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
          Turn Knowledge into Campus Opportunity
        </h3>

        <p className="text-sm sm:text-base text-primary-100/80 leading-relaxed mb-6">
          Whether you offer freelance services, build a student business, or look for verified campus projects, Kampmax gives you direct visibility.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "default",
              size: "default",
              className:
                "h-10 gap-1.5 bg-accent-500 px-5 text-xs font-bold text-primary-950 shadow-lg shadow-accent-500/25 hover:bg-accent-400 sm:text-sm",
            })}
          >
            <span>Join Kampmax</span>
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>

          <Link
            href="/services"
            className={buttonVariants({
              variant: "outline",
              size: "default",
              className:
                "h-10 border-white/25 bg-white/5 px-5 text-xs font-semibold text-white hover:bg-white/10 hover:text-white sm:text-sm",
            })}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  )
}
