import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Logo } from "@/components/layout/logo"
import { MobileNav } from "@/components/layout/mobile-nav"
import { buttonVariants } from "@/components/ui/button"
import { mainNav } from "@/config/nav"
import { siteConfig } from "@/config/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo priority />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={`${siteConfig.appUrl}/login`}
            className={buttonVariants({ variant: "ghost" })}
          >
            Log in
          </Link>
          <Link
            href={`${siteConfig.appUrl}/register`}
            className={buttonVariants({ variant: "default" })}
          >
            Get Started
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  )
}
