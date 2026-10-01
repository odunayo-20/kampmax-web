import type { NavGroup, NavItem } from "@/types/nav"

/**
 * Desktop primary navigation. "Home" is intentionally left out here — the
 * logo already serves that role — but it appears explicitly in the mobile
 * drawer per the requested IA. Kept short so it never wraps or crowds out
 * the CTAs; everything else surfaces through "More" instead.
 */
export const primaryNav: NavItem[] = [
  { title: "Marketplace", href: "/marketplace" },
  { title: "Services", href: "/services" },
  { title: "Jobs", href: "/jobs" },
  { title: "Events", href: "/events" },
  { title: "Campuses", href: "/campuses" },
]

/**
 * Secondary destinations surfaced through the desktop "More" menu and
 * folded into the mobile drawer's groups below.
 */
export const moreNav: NavItem[] = [
  { title: "How Kampmax Works", href: "/how-it-works" },
  { title: "Freelancers", href: "/freelancers" },
  { title: "For Businesses", href: "/for-businesses" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]

/** Grouped sections for the mobile navigation drawer. */
export const mobileNavGroups: NavGroup[] = [
  {
    title: "Discover",
    items: [
      { title: "Marketplace", href: "/marketplace" },
      { title: "Services", href: "/services" },
      { title: "Jobs", href: "/jobs" },
      { title: "Events", href: "/events" },
      { title: "Campuses", href: "/campuses" },
    ],
  },
  {
    title: "Explore",
    items: [
      { title: "Freelancers", href: "/freelancers" },
      { title: "How Kampmax Works", href: "/how-it-works" },
      { title: "For Businesses", href: "/for-businesses" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
    ],
  },
]

/** Grouped sections for the footer. */
export const footerNavGroups: NavGroup[] = [
  {
    title: "Discover",
    items: [
      { title: "Marketplace", href: "/marketplace" },
      { title: "Services", href: "/services" },
      { title: "Jobs", href: "/jobs" },
      { title: "Events", href: "/events" },
      { title: "Campuses", href: "/campuses" },
    ],
  },
  {
    title: "Kampmax",
    items: [
      { title: "How Kampmax Works", href: "/how-it-works" },
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Business",
    items: [
      { title: "For Businesses", href: "/for-businesses" },
      { title: "Become a Vendor", href: "/become-a-vendor" },
      {
        title: "Become a Service Provider",
        href: "/become-a-vendor#service-providers",
      },
    ],
  },
]

/** Legal links shown in the footer's bottom utility bar. */
export const legalNav: NavItem[] = [
  { title: "Privacy", href: "/privacy" },
  { title: "Terms", href: "/terms" },
]
