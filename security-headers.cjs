// @ts-check
/**
 * Browser security headers for the Kampmax marketing site. CommonJS so that
 * next.config.ts and the unit test load it the same way in every Node/Next version.
 *
 * The Content-Security-Policy is staged: a safe baseline is ENFORCED now (no
 * plugins, no <base> hijack, no framing, forms only to ourselves) and the full
 * policy is REPORT-ONLY, so the browser console shows what it would block without
 * breaking anything. When staging is quiet, set CSP_ENFORCE=true. 'unsafe-inline'
 * stays in script-src because Next.js injects inline hydration scripts; the
 * directives that stop data theft after an XSS (connect-src, img-src, form-action,
 * frame-src) are strict regardless.
 */

/** @param {string | undefined} value */
function originOf(value) {
  if (!value) return null;
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

/**
 * @param {{ env?: Record<string, string | undefined>, isDev?: boolean }} [options]
 * @returns {{ enforced: string, full: string }}
 */
function buildCsp({ env = process.env, isDev = false } = {}) {
  const api = originOf(env.NEXT_PUBLIC_API_URL) ?? "http://localhost:4000";
  const hosts = (env.NEXT_PUBLIC_IMAGE_HOSTS ?? "")
    .split(",")
    .map((h) => h.trim())
    .filter(Boolean)
    .map((h) => `https://${h}`);

  const full = [
    ["default-src", "'self'"],
    ["script-src", "'self'", "'unsafe-inline'", ...(isDev ? ["'unsafe-eval'"] : [])],
    ["style-src", "'self'", "'unsafe-inline'"],
    ["img-src", "'self'", "data:", "blob:", api, "https://res.cloudinary.com", ...hosts],
    // next/font self-hosts the Google fonts at build time.
    ["font-src", "'self'", "data:"],
    [
      "connect-src",
      "'self'",
      api,
      // MapLibre loads its style, tiles, sprites and glyphs from MapTiler.
      "https://api.maptiler.com",
      ...(isDev ? ["ws://localhost:*", "http://localhost:*"] : []),
    ],
    ["worker-src", "'self'", "blob:"],
    ["child-src", "blob:"],
    ["frame-src", "'none'"],
    ["object-src", "'none'"],
    ["base-uri", "'self'"],
    ["form-action", "'self'"],
    ["frame-ancestors", "'none'"],
    ...(isDev ? [] : [["upgrade-insecure-requests"]]),
  ]
    .map((d) => d.join(" "))
    .join("; ");

  const enforced = "object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'";
  return { enforced, full };
}

/**
 * @param {{ env?: Record<string, string | undefined>, isDev?: boolean }} [options]
 * @returns {{ key: string, value: string }[]}
 */
function securityHeaders(options = {}) {
  const env = options.env ?? process.env;
  const { enforced, full } = buildCsp(options);
  const enforceAll = env.CSP_ENFORCE === "true";
  return [
    { key: "Content-Security-Policy", value: enforceAll ? full : enforced },
    ...(enforceAll ? [] : [{ key: "Content-Security-Policy-Report-Only", value: full }]),
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self), payment=(), usb=()" },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  ];
}

module.exports = { buildCsp, securityHeaders };
