import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "cn"

function Logo({
  className,
  priority = false,
}: {
  className?: string
  priority?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 font-heading text-lg font-semibold tracking-tight text-foreground",
        className
      )}
    >
      <Image
        src="/logo.jpg"
        alt=""
        width={32}
        height={32}
        priority={priority}
        className="size-8 rounded-md"
      />
      {siteConfig.name}
    </Link>
  )
}

export { Logo }
