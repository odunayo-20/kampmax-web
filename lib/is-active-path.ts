/**
 * Whether `pathname` represents the given nav `href`, including nested
 * routes (e.g. `/marketplace/[slug]` stays active for `href="/marketplace"`).
 * `/` only matches exactly, otherwise every route would appear active.
 */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}
