import Image from "next/image"

import { cn } from "@/lib/utils"

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 0 || !parts[0]) return "?"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0]! + parts[parts.length - 1]![0]!).toUpperCase()
}

const sizeClasses = {
  sm: "size-9 text-xs",
  md: "size-12 text-sm",
  lg: "size-16 text-lg",
  xl: "size-20 sm:size-24 text-xl sm:text-2xl",
} as const

function FreelancerAvatar({
  name,
  avatar,
  size = "md",
  className,
}: {
  name: string
  avatar?: string
  size?: keyof typeof sizeClasses
  className?: string
}) {
  const initials = getInitials(name)

  if (avatar) {
    return (
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full border border-border bg-muted",
          sizeClasses[size],
          className
        )}
      >
        <Image
          src={avatar}
          alt={`Photo of ${name}`}
          fill
          sizes="(max-width: 768px) 64px, 96px"
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div
      aria-label={`Avatar for ${name}`}
      className={cn(
        "flex shrink-0 select-none items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-heading font-semibold text-primary",
        sizeClasses[size],
        className
      )}
    >
      <span aria-hidden="true">{initials}</span>
    </div>
  )
}

export { FreelancerAvatar }
