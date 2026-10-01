import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Logo } from "@/components/layout/logo"
import { buttonVariants } from "@/components/ui/button"
import { footerNavGroups, legalNav } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-kampmax-navy text-white">
      {/* Business CTA banner — the footer's headline moment for vendors & partners */}
      <div className="border-b border-white/10 bg-linear-to-r from-primary-800 via-primary-700 to-primary-900">
        <Container className="flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold tracking-wide text-accent-400 uppercase">
              For businesses &amp; vendors
            </p>
            <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Grow your business on Kampmax
            </h2>
            <p className="mt-1 text-sm text-primary-100">
              Reach students across every campus — list services, sell products, and hire talent.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/become-a-vendor"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-accent-500 text-primary-950 font-semibold hover:bg-accent-400"
              )}
            >
              Become a Vendor
              <ArrowUpRight />
            </Link>
            <Link
              href="/for-businesses"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              )}
            >
              For Businesses
            </Link>
          </div>
        </Container>
      </div>

      <Container className="flex flex-col gap-12 py-12 lg:flex-row lg:justify-between">
        <div className="flex max-w-sm flex-col gap-4">
          <Logo variant="white" />
          <p className="text-sm text-primary-100">{siteConfig.tagline}</p>
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm text-primary-100">
              Join the Kampmax community.
            </p>
            <Link
              href={siteConfig.registerUrl}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              )}
            >
              Join Kampmax
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
          {footerNavGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p
                className={cn(
                  "text-sm font-semibold text-white",
                  group.title === "Business" && "text-accent-400"
                )}
              >
                {group.title}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-100 transition-colors hover:text-accent-400"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      <Container className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-primary-200">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <nav aria-label="Legal">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-primary-200 transition-colors hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  )
}
