"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import type { ComponentProps } from "react"

import { isActivePath } from "@/lib/is-active-path"
import { cn } from "cn"

type NavLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string
}

/**
 * A `next/link` that knows whether it points at the current route
 * (including nested routes, e.g. `/jobs/[slug]` keeps "Jobs" active) and
 * exposes it via `aria-current="page"` plus a hook for active styling.
 */
function NavLink({ href, className, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const active = isActivePath(pathname, href)

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(className)}
      {...props}
    />
  )
}

export { NavLink }
