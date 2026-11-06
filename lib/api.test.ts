import { afterEach, describe, expect, it, vi } from "vitest"

import { isBuildPhase, orNullDuringBuild, resolveMediaUrl } from "@/lib/api"

afterEach(() => {
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

describe("resolveMediaUrl", () => {
  it("keeps absolute URLs and resolves API media paths against the API host", () => {
    expect(resolveMediaUrl("https://res.cloudinary.com/x/a.webp")).toBe("https://res.cloudinary.com/x/a.webp")
    expect(resolveMediaUrl("/media/a.jpg")).toMatch(/^https?:\/\/[^/]+\/media\/a\.jpg$/)
  })

  it("returns nothing for an empty value", () => {
    expect(resolveMediaUrl(null)).toBeUndefined()
    expect(resolveMediaUrl("")).toBeUndefined()
  })
})

describe("orNullDuringBuild", () => {
  it("passes results through", async () => {
    await expect(orNullDuringBuild(async () => 42)).resolves.toBe(42)
  })

  it("rethrows outside the build so ISR keeps the last good page", async () => {
    vi.stubEnv("NEXT_PHASE", "phase-production-server")
    expect(isBuildPhase()).toBe(false)
    await expect(orNullDuringBuild(async () => { throw new Error("api down") })).rejects.toThrow("api down")
  })

  it("returns null during the build so an unreachable API cannot fail it", async () => {
    vi.stubEnv("NEXT_PHASE", "phase-production-build")
    vi.spyOn(console, "warn").mockImplementation(() => {})
    expect(isBuildPhase()).toBe(true)
    await expect(orNullDuringBuild(async () => { throw new Error("api down") })).resolves.toBeNull()
  })
})
