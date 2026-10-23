"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  ChevronDown,
  Sparkles,
  Compass,
  Building2,
  Info,
  Mail,
  ArrowRight,
  Store,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { isActivePath } from "@/lib/is-active-path"
import { cn } from "@/lib/utils"

const moreNavItems = [
  {
    title: "How Kampmax Works",
    href: "/how-it-works",
    description: "Step-by-step guide to campus commerce & gigs",
    icon: Compass,
  },
  {
    title: "Freelancers",
    href: "/freelancers",
    description: "Discover skilled students or offer your services",
    icon: Sparkles,
  },
  {
    title: "For Businesses",
    href: "/for-businesses",
    description: "Partner, hire, and connect with universities",
    icon: Building2,
  },
  {
    title: "About",
    href: "/about",
    description: "Our mission to empower student ecosystems",
    icon: Info,
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Need help? Reach our campus support team",
    icon: Mail,
  },
]

function MoreNav() {
  const pathname = usePathname()
  const active = moreNavItems.some((item) => isActivePath(pathname, item.href))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "group inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[13.5px] font-medium transition-all duration-200 outline-none select-none cursor-pointer",
          active
            ? "bg-background font-semibold text-primary-700 shadow-xs ring-1 ring-black/5 dark:text-primary-400 dark:ring-white/10"
            : "text-muted-foreground hover:bg-background/80 hover:text-foreground"
        )}
      >
        <span>More</span>
        <ChevronDown
          className="size-3 text-muted-foreground/80 transition-transform duration-200 group-data-[popup-open]:rotate-180 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-80 rounded-2xl border border-border/80 bg-background/95 p-1.5 shadow-xl shadow-primary-950/10 backdrop-blur-xl sm:w-88"
      >
        <div className="flex flex-col gap-0.5">
          {moreNavItems.map((item) => {
            const Icon = item.icon
            const isItemActive = isActivePath(pathname, item.href)

            return (
              <DropdownMenuItem
                key={item.href}
                render={<Link href={item.href} />}
                className={cn(
                  "group/item flex items-start gap-3 rounded-xl p-2 transition-colors cursor-pointer outline-none",
                  isItemActive
                    ? "bg-primary-50/80 text-primary-700 dark:bg-primary-950/50 dark:text-primary-400"
                    : "hover:bg-neutral-100/70 focus:bg-neutral-100/70 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                )}
              >
                <div
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors mt-0.5",
                    isItemActive
                      ? "bg-primary-600 text-white shadow-xs"
                      : "bg-primary-50 text-primary-600 group-hover/item:bg-primary-600 group-hover/item:text-white dark:bg-neutral-800 dark:text-primary-400 dark:group-hover/item:bg-primary-600 dark:group-hover/item:text-white"
                  )}
                >
                  <Icon className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span
                    className={cn(
                      "text-[13px] font-semibold transition-colors leading-tight",
                      isItemActive
                        ? "text-primary-700 dark:text-primary-400"
                        : "text-foreground group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400"
                    )}
                  >
                    {item.title}
                  </span>
                  <span className="text-[11.5px] text-muted-foreground line-clamp-1 leading-snug">
                    {item.description}
                  </span>
                </div>
              </DropdownMenuItem>
            )
          })}
        </div>

        {/* Featured Mini-Card in Dropdown */}
        <div className="mt-1 border-t border-border/60 pt-1.5">
          <DropdownMenuItem
            render={
              <Link
                href="/become-a-vendor"
                className="group/promo flex items-center justify-between rounded-xl bg-linear-to-r from-primary-50 to-accent-50/60 p-2.5 transition-all hover:from-primary-100/80 hover:to-accent-100/70 dark:from-primary-950/40 dark:to-accent-950/30"
              />
            }
          >
            <div className="flex items-center gap-2.5">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary-600 text-white shadow-xs">
                <Store className="size-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground">
                  Sell on Campus
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Become a verified vendor
                </span>
              </div>
            </div>
            <ArrowRight className="size-3.5 text-primary-600 transition-transform duration-200 group-hover/promo:translate-x-0.5" />
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { MoreNav }

