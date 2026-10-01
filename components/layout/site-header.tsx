import Link from "next/link"

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
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-linear-to-r after:from-primary/0 after:via-accent-500/60 after:to-primary/0">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo priority />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-50 hover:text-primary-700 aria-[current=page]:bg-primary-50 aria-[current=page]:font-semibold aria-[current=page]:text-primary-700"
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

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteConfig.loginUrl}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-9 px-3.5 font-medium"
            )}
          >
            Log in
          </Link>
          <Link
            href={siteConfig.registerUrl}
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-9 rounded-lg px-4 font-semibold shadow-sm shadow-primary-600/20"
            )}
          >
            Join Kampmax
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  )
}
