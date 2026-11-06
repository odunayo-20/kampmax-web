import { describe, expect, it } from "vitest"

import {
  toFreelancer,
  topSkillCategories,
  type ApiFreelancer,
} from "@/lib/freelancers"
import type { Campus } from "@/types/campus"

const ID = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"

const campuses: Campus[] = [
  { id: "campus-1", slug: "unilag", name: "University of Lagos", shortName: "UNILAG", enabled: true },
]

const skill = (name: string) => ({ name, slug: name.toLowerCase().replace(/ /g, "-") })

const base: ApiFreelancer = {
  id: ID,
  fullName: "Ada Obi",
  avatar: null,
  professionalTitle: "Brand Designer",
  bio: "Designs brands.",
  campusId: null,
  verificationStatus: "VERIFIED",
  availabilityStatus: "AVAILABLE",
  skills: [skill("Graphic Design"), skill("Branding")],
}

describe("toFreelancer", () => {
  it("maps the profile and builds a URL segment ending in the id", () => {
    const freelancer = toFreelancer(base, campuses)
    expect(freelancer.slug).toBe(`ada-obi-${ID}`)
    expect(freelancer.headline).toBe("Brand Designer")
    expect(freelancer.primarySkill).toBe("Graphic Design")
    expect(freelancer.categorySlug).toBe("graphic-design")
    expect(freelancer.skillSlugs).toEqual(["graphic-design", "branding"])
  })

  it("falls back from title to first skill to a generic headline", () => {
    expect(toFreelancer({ ...base, professionalTitle: null }, campuses).headline).toBe("Graphic Design")
    const bare = toFreelancer({ ...base, professionalTitle: null, skills: [], bio: null }, campuses)
    expect(bare.headline).toBe("Freelancer")
    expect(bare.primarySkill).toBe("Freelancer")
    expect(bare.bio).toBe("")
    expect(bare.categorySlug).toBe("general")
  })

  it("resolves the campus slug, verification and availability", () => {
    const freelancer = toFreelancer({ ...base, campusId: "campus-1" }, campuses)
    expect(freelancer.campusSlug).toBe("unilag")
    expect(freelancer.verified).toBe(true)
    expect(freelancer.availability).toBe("AVAILABLE")

    const other = toFreelancer({ ...base, verificationStatus: "PENDING", availabilityStatus: "SOMETHING_NEW" }, campuses)
    expect(other.verified).toBe(false)
    expect(other.availability).toBeUndefined()
  })
})

describe("topSkillCategories", () => {
  it("offers the most common skills first, then alphabetically", () => {
    const freelancers = [
      toFreelancer({ ...base, skills: [skill("Photography"), skill("Branding")] }, campuses),
      toFreelancer({ ...base, skills: [skill("Branding"), skill("Illustrator")] }, campuses),
      toFreelancer({ ...base, skills: [skill("Branding")] }, campuses),
    ]
    expect(topSkillCategories(freelancers).map((category) => category.name)).toEqual([
      "Branding",
      "Illustrator",
      "Photography",
    ])
  })

  it("limits the pills to eight", () => {
    const skills = Array.from({ length: 12 }, (_, index) => skill(`Skill ${String(index).padStart(2, "0")}`))
    expect(topSkillCategories([toFreelancer({ ...base, skills }, campuses)])).toHaveLength(8)
  })
})
