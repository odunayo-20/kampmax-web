import {
  Briefcase,
  Car,
  Code,
  Dumbbell,
  GraduationCap,
  House,
  PartyPopper,
  Palette,
  Printer,
  Sparkles,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react"

import { serviceIconKey, serviceToneIndex, type ServiceIconKey } from "@/lib/service-tile"
import { cn } from "@/lib/utils"

const icons: Record<ServiceIconKey, LucideIcon> = {
  code: Code,
  design: Palette,
  tutoring: GraduationCap,
  beauty: Sparkles,
  repair: Wrench,
  food: UtensilsCrossed,
  transport: Car,
  events: PartyPopper,
  fitness: Dumbbell,
  home: House,
  printing: Printer,
  business: Briefcase,
  default: Wrench,
}

/** Brand-colour gradients the tiles rotate through (see `serviceToneIndex`). */
const tones = [
  "from-primary-500 via-primary-700 to-primary-900",
  "from-info-500 via-info-700 to-primary-900",
  "from-success-500 via-success-700 to-primary-950",
  "from-accent-500 via-accent-700 to-primary-900",
  "from-primary-400 via-primary-800 to-neutral-950",
]

/**
 * What a service shows in place of a cover photo. Most services will not have
 * one, so this is a deliberate branded tile, with an icon and colour taken from
 * the category, rather than a grey "no image" box.
 */
function ServiceCoverFallback({
  categorySlug = "",
  categoryName,
  className,
}: {
  categorySlug?: string
  categoryName?: string
  className?: string
}) {
  const Icon = icons[serviceIconKey(categoryName)]

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden bg-linear-to-br text-white/90",
        tones[serviceToneIndex(categorySlug)],
        className
      )}
    >
      <div className="bg-grid-pattern absolute inset-0 opacity-60" />
      <span className="relative flex size-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
        <Icon className="size-7" />
      </span>
    </div>
  )
}

export { ServiceCoverFallback }
