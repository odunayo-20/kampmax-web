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
  /**
   * Base URL of the Kampmax API, including the version prefix
   * (e.g. `https://api.kampmax.com/api/v1`).
   */
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api/v1",
  /** MapTiler API key for the campus and event maps. Maps are hidden when empty. */
  mapTilerApiKey: process.env.NEXT_PUBLIC_MAPTILER_API_KEY ?? "",
} as const
