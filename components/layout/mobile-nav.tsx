"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Menu,
  ShoppingBag,
  Layers,
  Briefcase,
  Calendar,
  GraduationCap,
  Sparkles,
  Compass,
  Building2,
  Info,
  Mail,
  Home,
  Store,
  ArrowRight,
  ChevronRight,
} from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/layout/logo"
import { NavLink } from "@/components/layout/nav-link"
import { mobileNavGroups } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const routeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Home,
  "/marketplace": ShoppingBag,
  "/services": Layers,
  "/jobs": Briefcase,
  "/events": Calendar,
  "/campuses": GraduationCap,
  "/freelancers": Sparkles,
  "/how-it-works": Compass,
  "/for-businesses": Building2,
  "/about": Info,
  "/contact": Mail,
}

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg text-muted-foreground hover:bg-neutral-100 hover:text-foreground lg:hidden dark:hover:bg-neutral-800"
          />
        }
      >
        <Menu className="size-5" aria-hidden="true" />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex h-full w-[85vw] max-w-sm flex-col p-0 sm:max-w-md"
      >
        {/* Drawer Header */}
        <SheetHeader className="border-b border-border/60 px-5 py-4">
          <div className="flex items-center justify-between pr-8">
            <Logo size="sm" />
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-2.5 py-0.5 text-[11px] font-semibold text-primary-700 ring-1 ring-primary-100/80 dark:bg-primary-950/70 dark:text-primary-300 dark:ring-primary-900/60">
              <span className="size-1.5 rounded-full bg-primary-600 animate-pulse dark:bg-primary-400" />
              Campus Hub
            </span>
          </div>
          <SheetTitle className="sr-only">{siteConfig.name} Navigation</SheetTitle>
        </SheetHeader>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
          {/* Quick Home Link */}
          <NavLink
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-primary-50/80 hover:text-primary-700 aria-[current=page]:bg-primary-50 aria-[current=page]:font-semibold aria-[current=page]:text-primary-700 dark:hover:bg-neutral-800/80 dark:aria-[current=page]:bg-neutral-800 dark:aria-[current=page]:text-primary-400"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-7 items-center justify-center rounded-lg bg-neutral-100 text-muted-foreground transition-colors group-hover:bg-primary-100 group-hover:text-primary-700 group-aria-[current=page]:bg-primary-600 group-aria-[current=page]:text-white dark:bg-neutral-800 dark:text-muted-foreground">
                <Home className="size-3.5" />
              </div>
              <span>Home</span>
            </div>
            <ChevronRight className="size-4 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary-600" />
          </NavLink>

          {/* Grouped Links */}
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-1">
              <span className="px-3 text-[11px] font-semibold tracking-wider text-muted-foreground/80 uppercase">
                {group.title}
              </span>
              <div className="flex flex-col gap-0.5">
                {group.items.map((item) => {
                  const Icon = routeIcons[item.href] || Sparkles
                  return (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-3 py-2 text-[13.5px] font-medium text-foreground transition-all hover:bg-primary-50/80 hover:text-primary-700 aria-[current=page]:bg-primary-50 aria-[current=page]:font-semibold aria-[current=page]:text-primary-700 dark:hover:bg-neutral-800/80 dark:aria-[current=page]:bg-neutral-800 dark:aria-[current=page]:text-primary-400"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-7 items-center justify-center rounded-lg bg-neutral-100 text-muted-foreground transition-colors group-hover:bg-primary-100 group-hover:text-primary-700 group-aria-[current=page]:bg-primary-600 group-aria-[current=page]:text-white dark:bg-neutral-800 dark:text-muted-foreground">
                          <Icon className="size-3.5" />
                        </div>
                        <span>{item.title}</span>
                      </div>
                      <ChevronRight className="size-4 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary-600" />
                    </NavLink>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Promo Card: Become a Vendor */}
          <Link
            href="/become-a-vendor"
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between rounded-2xl border border-primary-100/80 bg-linear-to-r from-primary-50/80 to-accent-50/70 p-3.5 transition-all hover:border-primary-200 dark:border-primary-900/60 dark:from-primary-950/40 dark:to-accent-950/30"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-xl bg-primary-600 text-white shadow-xs">
                <Store className="size-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  Sell to Students
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Become a verified vendor
                </p>
              </div>
            </div>
            <ArrowRight className="size-4 text-primary-600 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Drawer Actions */}
        <SheetFooter className="border-t border-border/60 p-4 flex-row gap-2.5">
          <Link
            href={siteConfig.loginUrl}
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-10 flex-1 rounded-xl text-[13.5px] font-medium"
            )}
          >
            Log in
          </Link>
          <Link
            href={siteConfig.registerUrl}
            onClick={() => setOpen(false)}
            className="group inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-linear-to-r from-primary-600 via-primary-500 to-primary-600 bg-[length:200%_auto] text-[13.5px] font-semibold text-white shadow-sm shadow-primary-600/20 transition-all hover:bg-right hover:shadow-md"
          >
            <span>Join Kampmax</span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

