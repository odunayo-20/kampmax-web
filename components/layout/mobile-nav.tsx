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
import { mainNav } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { cn } from "cn"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="md:hidden" />}
      >
        <Menu aria-hidden="true" />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <SheetFooter className="flex-row gap-2">
          <Link
            href={`${siteConfig.appUrl}/login`}
            className={cn(buttonVariants({ variant: "outline" }), "flex-1")}
          >
            Log in
          </Link>
          <Link
            href={`${siteConfig.appUrl}/register`}
            className={cn(buttonVariants({ variant: "default" }), "flex-1")}
          >
            Get Started
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
