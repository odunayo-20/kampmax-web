"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavLink } from "@/components/layout/nav-link"
import { mobileNavGroups } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { cn } from "cn"

const navLinkClassName =
  "flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted aria-[current=page]:bg-muted aria-[current=page]:text-primary"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="lg:hidden" />}
      >
        <Menu aria-hidden="true" />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-4 px-4">
          <NavLink
            href="/"
            onClick={() => setOpen(false)}
            className={navLinkClassName}
          >
            Home
          </NavLink>

          {mobileNavGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-1">
              <span className="px-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {group.title}
              </span>
              {group.items.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={navLinkClassName}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
        <SheetFooter className="flex-row gap-2">
          <Link
            href={siteConfig.loginUrl}
            className={cn(buttonVariants({ variant: "outline" }), "flex-1")}
          >
            Log in
          </Link>
          <Link
            href={siteConfig.registerUrl}
            className={cn(buttonVariants({ variant: "default" }), "flex-1")}
          >
            Join Kampmax
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
