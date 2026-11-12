import { describe, expect, it } from "vitest"
import { buildCsp, securityHeaders } from "../security-headers.cjs"

const env = {
  NEXT_PUBLIC_API_URL: "https://api.kampmax.com/api/v1",
  NEXT_PUBLIC_IMAGE_HOSTS: "cdn.kampmax.com",
}
const header = (h: { key: string; value: string }[], key: string) => h.find((x) => x.key === key)?.value

describe("marketing site security headers", () => {
  it("enforces the safe baseline and only reports the full policy by default", () => {
    const h = securityHeaders({ env })
    expect(header(h, "Content-Security-Policy")).toBe(
      "object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
    )
    expect(header(h, "Content-Security-Policy-Report-Only")).toContain("connect-src")
  })

  it("enforces everything, with no duplicate report-only header, when CSP_ENFORCE=true", () => {
    const h = securityHeaders({ env: { ...env, CSP_ENFORCE: "true" } })
    expect(header(h, "Content-Security-Policy")).toContain("script-src")
    expect(header(h, "Content-Security-Policy-Report-Only")).toBeUndefined()
  })

  it("limits what scripts may talk to and what may be framed or embedded", () => {
    const { full } = buildCsp({ env })
    const d = (name: string) => full.split("; ").find((x) => x.startsWith(`${name} `)) ?? ""
    expect(d("connect-src")).toContain("https://api.kampmax.com")
    expect(d("connect-src")).toContain("https://api.maptiler.com")
    expect(d("connect-src")).not.toMatch(/ \*( |$)/)
    expect(d("img-src")).toContain("https://cdn.kampmax.com")
    expect(d("frame-src")).toBe("frame-src 'none'")
    expect(d("worker-src")).toContain("blob:")
  })

  it("keeps eval and hot-reload sockets to development only, and never opens the camera", () => {
    expect(buildCsp({ env }).full).not.toContain("unsafe-eval")
    expect(buildCsp({ env, isDev: true }).full).toContain("'unsafe-eval'")
    expect(header(securityHeaders({ env }), "Permissions-Policy")).toContain("camera=()")
  })
})
