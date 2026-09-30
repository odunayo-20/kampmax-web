/**
 * Public, build-time environment configuration.
 *
 * Only `NEXT_PUBLIC_*` variables belong here — they are inlined into the
 * client bundle. Never add secrets to this file. See `.env.local.example`
 * for the variables this project expects.
 */
export const env = {
  /** This site's own public URL (canonical links, sitemap, OG metadata). */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** URL of the authenticated Kampmax application (kampmax-app). */
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.kampmax.com",
  /** URL of the Kampmax API (kampmax-api). Not called from this module yet. */
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "https://api.kampmax.com",
  /** MapTiler API key. Not used until the map/campus-discovery module. */
  mapTilerApiKey: process.env.NEXT_PUBLIC_MAPTILER_API_KEY ?? "",
} as const
