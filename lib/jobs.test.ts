import { describe, expect, it } from "vitest"

import { toOpportunity, typesWithItems, type ApiJob } from "@/lib/jobs"
import type { OpportunityType } from "@/types/job"

describe("typesWithItems", () => {
  const types: OpportunityType[] = [
    { slug: "internship", name: "Internships", enabled: true },
    { slug: "full-time", name: "Full-Time Roles", enabled: true },
    { slug: "freelance", name: "Freelance Projects", enabled: true },
  ]
  const job = (typeSlug: string) =>
    ({ slug: typeSlug, title: "", organization: "", typeSlug, description: "" }) as const

  it("keeps only types that have jobs, in the configured order", () => {
    const jobs = [job("freelance"), job("full-time"), job("freelance")]
    expect(typesWithItems(types, jobs).map((type) => type.slug)).toEqual(["full-time", "freelance"])
  })

  it("offers nothing when there are no jobs, and ignores types the config does not list", () => {
    expect(typesWithItems(types, [])).toEqual([])
    expect(typesWithItems(types, [job("seasonal-work")])).toEqual([])
  })
})
import type { Campus } from "@/types/campus"

const campuses: Campus[] = [
  { id: "campus-1", slug: "rugipo", name: "Rufus Giwa Polytechnic", shortName: "RUGIPO", enabled: true },
]

const base: ApiJob = {
  title: "Software Engineer",
  slug: "software-engineer",
  summary: "Build things.",
  description: "Line one.\nLine two.",
  requirements: null,
  employer: { displayName: "Kora Technologies" },
  campus: null,
  opportunityType: "FULL_TIME",
  locationType: "ONSITE",
  state: null,
  city: null,
  applicationDeadline: null,
  skills: [],
}

describe("toOpportunity", () => {
  it("maps the employer, summary and description", () => {
    const job = toOpportunity(base, campuses)
    expect(job.organization).toBe("Kora Technologies")
    expect(job.summary).toBe("Build things.")
    expect(job.description).toBe("Line one.\nLine two.")
  })

  it("maps each backend type onto a site type slug", () => {
    const slug = (opportunityType: string) => toOpportunity({ ...base, opportunityType }, campuses).typeSlug
    expect(slug("GIG")).toBe("freelance")
    expect(slug("INTERNSHIP")).toBe("internship")
    expect(slug("PART_TIME")).toBe("part-time")
    expect(slug("CONTRACT")).toBe("contract")
    // A type added to the backend later is passed through, not mislabelled.
    expect(slug("SEASONAL_WORK")).toBe("seasonal-work")
  })

  it("turns requirement text into a list without bullets or numbers", () => {
    const job = toOpportunity({ ...base, requirements: "- Knows React\n* Knows TypeScript\n3. Curious mind\n\n- Knows React" }, campuses)
    expect(job.requirements).toEqual(["Knows React", "Knows TypeScript", "Curious mind"])
    expect(toOpportunity(base, campuses).requirements).toBeUndefined()
  })

  it("describes the location by working arrangement", () => {
    const location = (locationType: string, city: string | null = null, state: string | null = null) =>
      toOpportunity({ ...base, locationType, city, state }, campuses).location
    expect(location("REMOTE", "Lagos")).toBe("Remote")
    expect(location("ONSITE", "Abuja", "FCT")).toBe("Abuja, FCT")
    expect(location("HYBRID", "Lagos", "Lagos State")).toBe("Lagos, Lagos State (Hybrid)")
    expect(location("HYBRID")).toBe("Hybrid")
    expect(location("ONSITE")).toBeUndefined()
  })

  it("formats the deadline so the structured data can parse it back", () => {
    const job = toOpportunity({ ...base, applicationDeadline: "2026-12-05T22:59:59.000Z" }, campuses)
    expect(job.closingDate).toBe("December 5, 2026")
    expect(toOpportunity({ ...base, applicationDeadline: "garbage" }, campuses).closingDate).toBeUndefined()
  })

  it("resolves the campus by id and lists skill names", () => {
    const job = toOpportunity(
      { ...base, campus: { id: "campus-1", name: "Rugipo" }, skills: [{ name: "React" }] },
      campuses
    )
    expect(job.campusSlug).toBe("rugipo")
    expect(job.skills).toEqual(["React"])
    expect(toOpportunity({ ...base, campus: { id: "missing", name: "X" } }, campuses).campusSlug).toBeUndefined()
  })
})
