import { describe, expect, it } from "vitest"

import {
  buildSkillGroups,
  directoryCategories,
  primaryCategoryOf,
  toFreelancer,
  type ApiFreelancer,
  type ApiSkillNode,
} from "@/lib/freelancers"
import type { Campus } from "@/types/campus"

const ID = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"

const campuses: Campus[] = [
  { id: "campus-1", slug: "unilag", name: "University of Lagos", shortName: "UNILAG", enabled: true },
]

const node = (id: string, name: string, children?: ApiSkillNode[]): ApiSkillNode => ({
  id,
  name,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  children,
})

// Shaped like the real taxonomy: groups holding skills, plus loose top-level entries.
const tree: ApiSkillNode[] = [
  node("g-web", "Web Development", [node("s-react", "React"), node("s-node", "Node.js")]),
  node("g-design", "Graphics Design", [node("s-logo", "Logo Design")]),
  node("g-photo", "Photography & Video", [node("s-photo", "Photography")]),
  node("loose", "nextjs", []),
]

const groups = buildSkillGroups(tree)

const skill = (skillId: string, name: string) => ({
  skillId,
  name,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
})

const base: ApiFreelancer = {
  id: ID,
  fullName: "Ada Obi",
  avatar: null,
  professionalTitle: "Brand Designer",
  bio: "Designs brands.",
  campusId: null,
  verificationStatus: "VERIFIED",
  availabilityStatus: "AVAILABLE",
  skills: [skill("s-logo", "Logo Design"), skill("s-react", "React"), skill("s-node", "Node.js")],
}

describe("buildSkillGroups", () => {
  it("maps each skill to the group that holds it", () => {
    expect(groups.get("s-react")).toEqual({ slug: "web-development", name: "Web Development" })
    expect(groups.get("s-logo")?.name).toBe("Graphics Design")
  })

  it("treats a childless top-level entry as a loose skill, not a group", () => {
    expect(groups.has("loose")).toBe(false)
    expect([...groups.values()].some((group) => group.name === "nextjs")).toBe(false)
  })
})

describe("toFreelancer categories", () => {
  it("groups skills by category with the biggest group first", () => {
    const freelancer = toFreelancer(base, campuses, groups)
    // Two web skills outweigh one design skill, even though design was added first.
    expect(freelancer.skillGroups.map((group) => group.category.name)).toEqual([
      "Web Development",
      "Graphics Design",
    ])
    expect(freelancer.skillGroups[0].skills).toEqual(["React", "Node.js"])
    expect(freelancer.categorySlug).toBe("web-development")
    expect(freelancer.categoryName).toBe("Web Development")
    expect(freelancer.categorySlugs).toEqual(["web-development", "graphics-design"])
  })

  it("breaks ties by the order the skills were added in", () => {
    const freelancer = toFreelancer(
      { ...base, skills: [skill("s-photo", "Photography"), skill("s-logo", "Logo Design")] },
      campuses,
      groups
    )
    expect(freelancer.categorySlug).toBe("photography-video")
  })

  it("puts skills without a group under Other, after the real groups", () => {
    const freelancer = toFreelancer(
      {
        ...base,
        skills: [skill("s-missing", "Financial Planning"), skill("loose", "nextjs"), skill("s-react", "React")],
      },
      campuses,
      groups
    )
    expect(freelancer.skillGroups.map((group) => group.category.slug)).toEqual(["web-development", "other"])
    expect(freelancer.skillGroups[1].skills).toEqual(["Financial Planning", "nextjs"])
  })

  it("files a freelancer with only ungrouped or no skills under Other", () => {
    expect(toFreelancer({ ...base, skills: [skill("x", "Misc")] }, campuses, groups).categorySlug).toBe("other")
    const none = toFreelancer({ ...base, skills: [] }, campuses, groups)
    expect(none.categorySlug).toBe("other")
    expect(none.skillGroups).toEqual([])
  })

  it("works without a taxonomy (everything is Other)", () => {
    expect(toFreelancer(base, campuses).categorySlug).toBe("other")
  })

  it("shows the main category on the profile", () => {
    const freelancer = toFreelancer(base, campuses, groups)
    expect(primaryCategoryOf(freelancer)).toEqual({
      slug: "web-development",
      name: "Web Development",
      enabled: true,
    })
  })
})

describe("toFreelancer profile", () => {
  it("maps the profile and builds a URL segment ending in the id", () => {
    const freelancer = toFreelancer(base, campuses, groups)
    expect(freelancer.slug).toBe(`ada-obi-${ID}`)
    expect(freelancer.headline).toBe("Brand Designer")
    expect(freelancer.primarySkill).toBe("Logo Design")
    expect(freelancer.skills).toEqual(["Logo Design", "React", "Node.js"])
  })

  it("falls back from title to first skill to a generic headline", () => {
    expect(toFreelancer({ ...base, professionalTitle: null }, campuses, groups).headline).toBe("Logo Design")
    const bare = toFreelancer({ ...base, professionalTitle: null, skills: [], bio: null }, campuses, groups)
    expect(bare.headline).toBe("Freelancer")
    expect(bare.primarySkill).toBe("Freelancer")
    expect(bare.bio).toBe("")
  })

  it("resolves the campus slug, verification and availability", () => {
    const freelancer = toFreelancer({ ...base, campusId: "campus-1" }, campuses, groups)
    expect(freelancer.campusSlug).toBe("unilag")
    expect(freelancer.verified).toBe(true)
    expect(freelancer.availability).toBe("AVAILABLE")

    const other = toFreelancer({ ...base, verificationStatus: "PENDING", availabilityStatus: "SOMETHING_NEW" }, campuses, groups)
    expect(other.verified).toBe(false)
    expect(other.availability).toBeUndefined()
  })
})

describe("directoryCategories", () => {
  const web = (id: string) => toFreelancer({ ...base, id, skills: [skill("s-react", "React")] }, campuses, groups)
  const design = (id: string) => toFreelancer({ ...base, id, skills: [skill("s-logo", "Logo Design")] }, campuses, groups)
  const loose = (id: string) => toFreelancer({ ...base, id, skills: [skill("x", "Misc")] }, campuses, groups)

  it("lists the busiest category first and Other last, once each", () => {
    const list = [loose("1"), design("2"), web("3"), web("4"), loose("5"), loose("6")]
    // "Other" has the most freelancers but still goes last.
    expect(directoryCategories(list).map((category) => category.name)).toEqual([
      "Web Development",
      "Graphics Design",
      "Other",
    ])
  })

  it("counts a freelancer once in every category they belong to", () => {
    const both = toFreelancer(base, campuses, groups)
    // One freelancer in each category is a tie, so they sort by name.
    expect(directoryCategories([both]).map((category) => category.slug)).toEqual([
      "graphics-design",
      "web-development",
    ])
  })

  it("only offers categories that have freelancers", () => {
    expect(directoryCategories([web("1")]).map((category) => category.slug)).toEqual(["web-development"])
    expect(directoryCategories([])).toEqual([])
  })
})
