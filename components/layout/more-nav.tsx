"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { moreNav } from "@/config/nav"
import { isActivePath } from "@/lib/is-active-path"
import { cn } from "cn"

function MoreNav() {
  const pathname = usePathname()
  const active = moreNav.some((item) => isActivePath(pathname, item.href))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className={cn(
              "gap-1 text-muted-foreground hover:bg-primary-50 hover:text-primary-700",
              active && "bg-primary-50 font-semibold text-primary-700"
            )}
          />
        }
      >
        More
        <ChevronDown className="size-3.5" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {moreNav.map((item) => (
          <DropdownMenuItem key={item.href} render={<Link href={item.href} />}>
            {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { MoreNav }
