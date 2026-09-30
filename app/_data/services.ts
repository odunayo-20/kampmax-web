import type { Service, ServiceCategory } from "@/types/service"

/**
 * Configured service categories. Categories can be toggled on/off
 * via `enabled` to reflect what is currently active in the ecosystem.
 */
const categories: ServiceCategory[] = [
  { slug: "design", name: "Design", enabled: true },
  { slug: "technology", name: "Technology", enabled: true },
  { slug: "education-tutoring", name: "Education & Tutoring", enabled: true },
  { slug: "photography-video", name: "Photography & Video", enabled: true },
  { slug: "beauty-personal-care", name: "Beauty & Personal Care", enabled: true },
  { slug: "repairs-maintenance", name: "Repairs & Maintenance", enabled: true },
  { slug: "printing", name: "Printing", enabled: true },
  { slug: "fashion-tailoring", name: "Fashion & Tailoring", enabled: true },
  { slug: "events", name: "Events", enabled: true },
  { slug: "business-services", name: "Business Services", enabled: true },
  { slug: "agricultural-services", name: "Agricultural Services", enabled: false },
  { slug: "other", name: "Other", enabled: true },
]

/**
 * Local mock service listings. Structured cleanly behind accessor functions
 * so that replacing this with a Kampmax API integration later requires no
 * changes to the UI components.
 */
const services: Service[] = [
  {
    slug: "campus-brand-and-poster-design",
    name: "Campus Brand & Poster Design",
    description:
      "Flyers, club logos, social media graphics, and event posters tailored for student organizations, campus fellowships, and departmental campaigns.",
    categorySlug: "design",
    providerName: "Kolawole Graphics",
    campusSlug: "unilag",
    priceFrom: 5000,
  },
  {
    slug: "laptop-troubleshooting-and-os-setup",
    name: "Laptop Troubleshooting & OS Setup",
    description:
      "Operating system reinstallation, driver updates, malware removal, performance optimization, and general software troubleshooting for student laptops.",
    categorySlug: "technology",
    providerName: "TechFix Diagnostics",
    campusSlug: "oau",
    priceFrom: 4000,
  },
  {
    slug: "calculus-and-engineering-maths-tutoring",
    name: "Calculus & Engineering Mathematics Tutoring",
    description:
      "Focused one-on-one and small group revision sessions covering engineering mathematics, differential equations, and calculus coursework.",
    categorySlug: "education-tutoring",
    providerName: "Engr. David T.",
    campusSlug: "futo",
    priceFrom: 3000,
  },
  {
    slug: "portrait-and-convocation-photography",
    name: "Portrait & Convocation Photography",
    description:
      "High-resolution outdoor portrait sessions, graduation milestones, and event photo coverage around campus landmarks and halls.",
    categorySlug: "photography-video",
    providerName: "Lumière Visuals",
    campusSlug: "ui",
    priceFrom: 12000,
  },
  {
    slug: "braiding-and-locs-styling",
    name: "Braiding & Locs Styling",
    description:
      "Protective hair styling including knotless braids, twists, box braids, and loc maintenance scheduled conveniently around class timetables.",
    categorySlug: "beauty-personal-care",
    providerName: "Grace Touch Salon",
    campusSlug: "unn",
    priceFrom: 7000,
  },
  {
    slug: "smartphone-screen-and-battery-repair",
    name: "Smartphone Screen & Battery Replacement",
    description:
      "Screen replacements, charging port repairs, and battery diagnostics for popular Android and iOS smartphones with quick turnaround.",
    categorySlug: "repairs-maintenance",
    providerName: "QuickFix Campus Hub",
    campusSlug: "abu",
    priceFrom: 6500,
  },
  {
    slug: "final-year-project-printing-and-binding",
    name: "Final Year Project Printing & Hardcover Binding",
    description:
      "Document collation, high-speed monochrome and color printing, and official hardcover project binding adhering to university standards.",
    categorySlug: "printing",
    providerName: "Campus Press & Bindery",
    campusSlug: "rugipo",
    priceFrom: 2500,
  },
  {
    slug: "custom-bespoke-tailoring-and-alterations",
    name: "Custom Bespoke Tailoring & Alterations",
    description:
      "Custom tailoring for traditional and corporate wear, native styles, dinner wear, and rapid garment resizing and alterations.",
    categorySlug: "fashion-tailoring",
    providerName: "Oasis Stitches",
    campusSlug: "uniabuja",
    priceFrom: 8000,
  },
  {
    slug: "event-sound-and-pa-equipment-rental",
    name: "Event Sound & PA Equipment Rental",
    description:
      "Complete public address sound setups, microphones, speakers, and audio management for campus seminars, faculty dinners, and society events.",
    categorySlug: "events",
    providerName: "Apex Sound Systems",
    campusSlug: "unilag",
    priceFrom: 25000,
  },
  {
    slug: "cv-and-linkedin-profile-review",
    name: "CV & LinkedIn Profile Optimization",
    description:
      "Resume restructuring, formatting, and profile review designed to help students and recent graduates target internships and entry-level corporate roles.",
    categorySlug: "business-services",
    providerName: "CareerBridge Consulting",
    priceFrom: 4500,
  },
  {
    slug: "custom-hostel-carpentry-and-furniture-repair",
    name: "Custom Hostel Carpentry & Furniture Repair",
    description:
      "Reading desk repairs, bookshelf fabrication, bed frame reinforcement, wardrobe hinge fixes, and basic woodwork for hostel and lodge rooms.",
    categorySlug: "other",
    providerName: "Ade & Sons Woodcraft",
    campusSlug: "ui",
    priceFrom: 3500,
  },
  {
    slug: "web-development-and-portfolio-setup",
    name: "Web Development & Portfolio Setup",
    description:
      "Custom responsive websites, landing pages, and portfolio sites for campus creators, student brands, and small commercial initiatives.",
    categorySlug: "technology",
    providerName: "DevCircle Studios",
  },
]

/** All configured categories that are currently active. */
export function getEnabledServiceCategories(): ServiceCategory[] {
  return categories.filter((category) => category.enabled)
}

/** A single service category by slug, or `undefined` if disabled or not found. */
export function getServiceCategoryBySlug(slug: string): ServiceCategory | undefined {
  return categories.find((category) => category.slug === slug && category.enabled)
}

/** All services whose category is currently active. */
export function getServices(): Service[] {
  const enabledSlugs = new Set(getEnabledServiceCategories().map((cat) => cat.slug))
  return services.filter((service) => enabledSlugs.has(service.categorySlug))
}

/** A single service by slug, or `undefined` if disabled or not found. */
export function getServiceBySlug(slug: string): Service | undefined {
  return getServices().find((service) => service.slug === slug)
}

/** All services associated with a specific campus. */
export function getServicesByCampus(campusSlug: string): Service[] {
  return getServices().filter((service) => service.campusSlug === campusSlug)
}
