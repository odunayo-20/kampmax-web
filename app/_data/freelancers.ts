import type { Freelancer, FreelancerCategory } from "@/types/freelancer"

/**
 * Configurable freelancer skill areas/categories. Can be toggled on/off
 * via `enabled` to reflect what is currently active in the ecosystem.
 */
const categories: FreelancerCategory[] = [
  { slug: "software-development", name: "Software Development", enabled: true },
  { slug: "graphic-design", name: "Graphic Design", enabled: true },
  { slug: "ui-ux-design", name: "UI/UX Design", enabled: true },
  { slug: "photography", name: "Photography", enabled: true },
  { slug: "video-editing", name: "Video Editing", enabled: true },
  { slug: "writing-content", name: "Writing & Content", enabled: true },
  { slug: "digital-marketing", name: "Digital Marketing", enabled: true },
  { slug: "tutoring-academics", name: "Tutoring & Academics", enabled: true },
  { slug: "fashion-styling", name: "Fashion & Styling", enabled: true },
  { slug: "data-research", name: "Data & Research", enabled: false },
  { slug: "other", name: "Other", enabled: true },
]

/**
 * Local mock freelancer profiles. Kept strictly professional with zero
 * private data (no phone numbers, personal emails, or addresses) and
 * no fabricated performance claims (no ratings, review counts, or earnings).
 */
const freelancers: Freelancer[] = [
  {
    slug: "kolawole-adesina",
    name: "Kolawole Adesina",
    headline: "Brand Designer & Visual Identity Specialist",
    primarySkill: "Graphic Design",
    skills: ["Brand Identity", "Poster Design", "Vector Illustration", "Print Layout"],
    categorySlug: "graphic-design",
    bio: "Independent visual designer crafting brand identities, event graphics, and marketing materials for student organizations, campus fellowships, and commercial ventures.",
    campusSlug: "unilag",
    serviceSlugs: ["campus-brand-and-poster-design"],
  },
  {
    slug: "chioma-okonkwo",
    name: "Chioma Okonkwo",
    headline: "Full-Stack Web Developer & Technical Problem Solver",
    primarySkill: "Software Development",
    skills: ["React", "TypeScript", "Node.js", "Next.js", "REST APIs"],
    categorySlug: "software-development",
    bio: "Computer science student building modern web applications, business landing pages, and responsive web tooling. Passionate about performant, accessible web software.",
    campusSlug: "oau",
    serviceSlugs: ["web-development-and-portfolio-setup"],
  },
  {
    slug: "david-taiwo",
    name: "David Taiwo",
    headline: "Mathematics Tutor & Academic Revision Coach",
    primarySkill: "Tutoring & Academics",
    skills: ["Calculus", "Linear Algebra", "Engineering Maths", "Exam Preparation"],
    categorySlug: "tutoring-academics",
    bio: "Senior engineering student providing structured, step-by-step revision in core mathematical foundations for undergraduate students.",
    campusSlug: "futo",
    serviceSlugs: ["calculus-and-engineering-maths-tutoring"],
  },
  {
    slug: "folake-adeyemi",
    name: "Folake Adeyemi",
    headline: "Product & UI/UX Designer",
    primarySkill: "UI/UX Design",
    skills: ["Figma", "User Research", "Wireframing", "Design Systems", "Prototyping"],
    categorySlug: "ui-ux-design",
    bio: "Product designer focused on intuitive mobile and web interfaces. Enjoys turning complex workflows into clean, human-centered digital experiences.",
    campusSlug: "unilag",
  },
  {
    slug: "emmanuel-eze",
    name: "Emmanuel Eze",
    headline: "Event & Portrait Photographer",
    primarySkill: "Photography",
    skills: ["Milestone Portraits", "Campus Events", "Color Grading", "Lighting Setup"],
    categorySlug: "photography",
    bio: "Campus photographer specializing in natural light portraits, graduation milestones, and documentary event coverage with a crisp visual aesthetic.",
    campusSlug: "ui",
    serviceSlugs: ["portrait-and-convocation-photography"],
  },
  {
    slug: "zainab-bello",
    name: "Zainab Bello",
    headline: "Content Strategist & Copywriter",
    primarySkill: "Writing & Content",
    skills: ["Copywriting", "Article Writing", "Editorial Review", "LinkedIn Strategy"],
    categorySlug: "writing-content",
    bio: "Writer and editor crafting clear, engaging written copy for pitch decks, academic reports, corporate resumes, and digital campaigns.",
    campusSlug: "abu",
    serviceSlugs: ["cv-and-linkedin-profile-review"],
  },
  {
    slug: "tunde-bakare",
    name: "Tunde Bakare",
    headline: "Video Editor & Motion Designer",
    primarySkill: "Video Editing",
    skills: ["Short-form Video", "Premiere Pro", "After Effects", "Reels & TikToks"],
    categorySlug: "video-editing",
    bio: "Video creator helping creators and campus brands produce high-retention video content, event recap reels, and promotional video clips.",
    campusSlug: "unilag",
  },
  {
    slug: "amaka-nwosu",
    name: "Amaka Nwosu",
    headline: "Bespoke Fashion Designer & Stylist",
    primarySkill: "Fashion & Styling",
    skills: ["Custom Tailoring", "Traditional Native Wear", "Pattern Making", "Garment Fitting"],
    categorySlug: "fashion-styling",
    bio: "Fashion designer blending traditional fabrics with contemporary cuts to create bespoke everyday and occasion outfits.",
    campusSlug: "unn",
    serviceSlugs: ["custom-bespoke-tailoring-and-alterations"],
  },
  {
    slug: "samuel-idris",
    name: "Samuel Idris",
    headline: "Growth Marketer & Social Media Manager",
    primarySkill: "Digital Marketing",
    skills: ["Social Media Growth", "Campaign Planning", "Community Building", "Analytics"],
    categorySlug: "digital-marketing",
    bio: "Digital marketing strategist helping student organizations, campus vendors, and local businesses grow their presence across digital channels.",
    campusSlug: "uniabuja",
  },
  {
    slug: "blessing-osagie",
    name: "Blessing Osagie",
    headline: "Hardware Specialist & IT Support Technician",
    primarySkill: "Software Development",
    skills: ["Hardware Diagnostics", "OS Configuration", "Driver Setup", "Data Backup"],
    categorySlug: "software-development",
    bio: "IT technician providing hands-on diagnostics, hardware maintenance, software configuration, and system optimizations for campus laptops.",
    campusSlug: "rugipo",
    serviceSlugs: ["laptop-troubleshooting-and-os-setup"],
  },
]

/** All configured categories that are currently active. */
export function getEnabledFreelancerCategories(): FreelancerCategory[] {
  return categories.filter((category) => category.enabled)
}

/** A single freelancer category by slug, or `undefined` if disabled or not found. */
export function getFreelancerCategoryBySlug(
  slug: string
): FreelancerCategory | undefined {
  return categories.find((category) => category.slug === slug && category.enabled)
}

/** All freelancers whose category is currently active. */
export function getFreelancers(): Freelancer[] {
  const enabledSlugs = new Set(
    getEnabledFreelancerCategories().map((cat) => cat.slug)
  )
  return freelancers.filter((freelancer) => enabledSlugs.has(freelancer.categorySlug))
}

/** A single freelancer by slug, or `undefined` if disabled or not found. */
export function getFreelancerBySlug(slug: string): Freelancer | undefined {
  return getFreelancers().find((freelancer) => freelancer.slug === slug)
}

/** All freelancers associated with a specific campus. */
export function getFreelancersByCampus(campusSlug: string): Freelancer[] {
  return getFreelancers().filter((freelancer) => freelancer.campusSlug === campusSlug)
}
