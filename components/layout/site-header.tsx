"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Logo } from "@/components/layout/logo"
import { MobileNav } from "@/components/layout/mobile-nav"
import { MoreNav } from "@/components/layout/more-nav"
import { NavLink } from "@/components/layout/nav-link"
import { buttonVariants } from "@/components/ui/button"
import { primaryNav } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/80 bg-background/90 shadow-[0_4px_20px_-4px_rgba(11,35,69,0.06)] backdrop-blur-xl dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-linear-to-r after:from-transparent after:via-accent-500/50 after:to-transparent"
          : "border-b border-border/40 bg-background/75 backdrop-blur-md after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-linear-to-r after:from-transparent after:via-primary-500/25 after:to-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* Brand Logo & Campus Badge */}
        <div className="flex items-center gap-3">
          <Logo priority />
          <span className="hidden xl:inline-flex items-center gap-1.5 rounded-full bg-primary-50/90 px-2.5 py-0.5 text-[11px] font-semibold text-primary-700 ring-1 ring-primary-100/80 dark:bg-primary-950/60 dark:text-primary-300 dark:ring-primary-900/60">
            <span className="size-1.5 rounded-full bg-primary-600 animate-pulse dark:bg-primary-400" />
            Campus Hub
          </span>
        </div>

        {/* Center Pill Navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-border/60 bg-neutral-100/70 p-1 backdrop-blur-xs dark:border-neutral-800/80 dark:bg-neutral-900/70">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[13.5px] font-medium text-muted-foreground transition-all duration-200 hover:bg-background/80 hover:text-foreground aria-[current=page]:bg-background aria-[current=page]:font-semibold aria-[current=page]:text-primary-700 aria-[current=page]:shadow-xs aria-[current=page]:ring-1 aria-[current=page]:ring-black/5 dark:aria-[current=page]:text-primary-400 dark:aria-[current=page]:ring-white/10"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <li>
              <MoreNav />
            </li>
          </ul>
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <Link
            href={siteConfig.loginUrl}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-9 rounded-lg px-3.5 text-[13.5px] font-medium text-muted-foreground hover:bg-primary-50 hover:text-primary-700 transition-colors dark:hover:bg-neutral-800"
            )}
          >
            Log in
          </Link>
          <Link
            href={siteConfig.registerUrl}
            className="group relative inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-linear-to-r from-primary-600 via-primary-500 to-primary-600 bg-[length:200%_auto] px-4 text-[13.5px] font-semibold text-white shadow-sm shadow-primary-600/25 transition-all duration-300 hover:bg-right hover:shadow-md hover:shadow-primary-600/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
          >
            <span>Join Kampmax</span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <MobileNav />
      </Container>
    </header>
  )
}

