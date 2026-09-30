import type { NavItem } from "@/types/nav"

/**
 * Primary site navigation. Kept intentionally short — not every Kampmax
 * feature needs a top-level link; the rest are surfaced through on-page
 * CTAs and search as those sections are built out.
 */
export const mainNav: NavItem[] = [
  { title: "How it Works", href: "/how-it-works" },
  { title: "Marketplace", href: "/marketplace" },
  { title: "Jobs", href: "/jobs" },
  { title: "Events", href: "/events" },
  { title: "For Businesses", href: "/for-businesses" },
  { title: "About", href: "/about" },
]

/**
 * Utility/legal links surfaced in the footer, not the primary nav.
 */
export const footerNav: NavItem[] = [
  { title: "Contact", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
]
