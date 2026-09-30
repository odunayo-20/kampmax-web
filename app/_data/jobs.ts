import type { Opportunity, OpportunityType } from "@/types/job"

/**
 * Configured opportunity types. Types can be toggled on/off
 * via `enabled` to reflect what is currently active in the ecosystem.
 */
const opportunityTypes: OpportunityType[] = [
  { slug: "internship", name: "Internships", enabled: true },
  { slug: "full-time", name: "Full-Time Roles", enabled: true },
  { slug: "part-time", name: "Part-Time", enabled: true },
  { slug: "campus", name: "Campus Opportunities", enabled: true },
  { slug: "freelance", name: "Freelance Projects", enabled: true },
  { slug: "graduate", name: "Graduate Opportunities", enabled: true },
  { slug: "fellowship", name: "Fellowships & Grants", enabled: false },
]

/**
 * Local mock opportunities dataset. Kept strictly professional with zero
 * fabricated statistics, applicant counts, or salary claims.
 */
const opportunities: Opportunity[] = [
  {
    slug: "frontend-engineering-intern",
    title: "Frontend Engineering Intern",
    organization: "Kora Technologies",
    typeSlug: "internship",
    location: "Lagos (Hybrid)",
    campusSlug: "unilag",
    description:
      "Join our core product team to build accessible, responsive user interfaces for modern financial infrastructure and payment tools across Africa.",
    responsibilities: [
      "Implement responsive user interfaces using React, TypeScript, and modern CSS primitives",
      "Collaborate with product designers to review Figma component libraries and interaction flows",
      "Participate in sprint planning, design reviews, and code quality audits",
    ],
    requirements: [
      "Working familiarity with JavaScript/TypeScript, React, and web standards",
      "Enrolled in or recently graduated from a relevant tertiary degree program",
      "Curiosity about web performance, accessibility, and clean component architecture",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Git"],
    closingDate: "November 15, 2026",
    featured: true,
  },
  {
    slug: "departmental-lab-technical-assistant",
    title: "Departmental Lab Technical Assistant",
    organization: "Faculty of Technology, OAU",
    typeSlug: "campus",
    location: "Ile-Ife, Osun State",
    campusSlug: "oau",
    description:
      "Support undergraduate laboratory sessions, assist students with development environment setup, and maintain computing equipment across faculty labs.",
    responsibilities: [
      "Supervise routine laboratory practical sessions for 100- and 200-level engineering courses",
      "Verify workstation hardware, operating system updates, and network connectivity",
      "Assist students with software installations and coursework toolchains",
    ],
    requirements: [
      "Good academic standing in Computer Science, Engineering, or a related discipline",
      "Practical familiarity with Linux and Windows desktop configuration",
      "Reliable attendance and effective student communication skills",
    ],
    skills: ["Hardware Diagnostics", "Linux", "Network Setup", "Troubleshooting"],
    closingDate: "October 30, 2026",
    featured: true,
  },
  {
    slug: "associate-product-designer",
    title: "Associate Product Designer",
    organization: "VentureCraft Studio",
    typeSlug: "graduate",
    location: "Lagos / Remote",
    description:
      "Work alongside senior design leads to conduct user discovery, build wireframes, and design high-fidelity mobile and web prototypes for emerging consumer apps.",
    responsibilities: [
      "Create wireframes, user flows, and interactive prototypes in Figma",
      "Conduct user interviews and synthesize feedback into actionable product improvements",
      "Contribute to multi-platform component design systems and documentation",
    ],
    requirements: [
      "Portfolio demonstrating clean typography, layout discipline, and mobile-first thinking",
      "Proficiency in Figma, component auto-layout, and prototyping techniques",
      "Ability to clearly articulate design decisions and trade-offs",
    ],
    skills: ["Figma", "User Research", "Wireframing", "Design Systems"],
    closingDate: "November 20, 2026",
    featured: true,
  },
  {
    slug: "campus-brand-ambassador-coordinator",
    title: "Campus Brand Ambassador Coordinator",
    organization: "Sterling Education Network",
    typeSlug: "part-time",
    location: "Ibadan, Oyo State",
    campusSlug: "ui",
    description:
      "Coordinate student outreach, lead informational activations, and represent educational initiatives across halls of residence and faculty centers at UI.",
    responsibilities: [
      "Organize monthly on-campus informational booths and workshop activations",
      "Distribute educational literature and guide interested students through enrollment programs",
      "Compile monthly engagement summaries and participant feedback",
    ],
    requirements: [
      "Current student at University of Ibadan with active campus involvement",
      "Outgoing personality with demonstrated organizational or leadership experience",
      "Ability to commit 8–10 hours per week during academic terms",
    ],
    skills: ["Event Coordination", "Public Speaking", "Community Building", "Reporting"],
    closingDate: "November 5, 2026",
  },
  {
    slug: "junior-data-analyst",
    title: "Junior Data Analyst",
    organization: "AgriTech Insights Africa",
    typeSlug: "full-time",
    location: "Abuja, FCT",
    campusSlug: "uniabuja",
    description:
      "Analyze agricultural supply chain data, build interactive dashboards, and prepare monthly performance briefs for smallholder farmer cooperatives.",
    responsibilities: [
      "Clean, structure, and validate regional agricultural dataset feeds",
      "Develop reporting dashboards and charts using Python, SQL, and Power BI",
      "Identify trends in produce delivery timelines and cooperative inventory levels",
    ],
    requirements: [
      "Degree in Computer Science, Statistics, Economics, or related quantitative field",
      "Practical competence with SQL, Python (Pandas), and spreadsheet analytics",
      "Attentive to detail and data integrity verification",
    ],
    skills: ["SQL", "Python", "Power BI", "Data Visualization"],
    closingDate: "December 1, 2026",
  },
  {
    slug: "motion-graphics-freelance-contractor",
    title: "Motion Graphics Freelance Contractor",
    organization: "Pulse Media Collective",
    typeSlug: "freelance",
    location: "Remote",
    description:
      "Create short-form 2D animated explainers, title cards, and social media video bumpers for educational and commercial campaigns.",
    responsibilities: [
      "Animate supplied vector storyboards into smooth 15–30 second motion clips",
      "Apply sound effects and audio synchronizations to finished renders",
      "Deliver project files adhering to standardized production folder structures",
    ],
    requirements: [
      "Demonstrable motion reel featuring 2D vector animation in After Effects",
      "Clear command of keyframe pacing, ease curves, and typography motion",
      "Reliable turnaround on agreed milestone schedules",
    ],
    skills: ["After Effects", "Premiere Pro", "Motion Design", "Storyboarding"],
    closingDate: "November 10, 2026",
  },
  {
    slug: "renewable-energy-field-trainee",
    title: "Renewable Energy Field Trainee",
    organization: "Apex Solar Dynamics",
    typeSlug: "internship",
    location: "Owerri, Imo State",
    campusSlug: "futo",
    description:
      "Participate in solar inverter installation, rooftop panel configuration, and battery storage diagnostics for commercial and residential installations.",
    responsibilities: [
      "Assist lead engineers during on-site solar PV mounting and inverter wiring",
      "Perform initial voltage testing and battery bank diagnostic checks",
      "Document daily field logs and safety compliance records",
    ],
    requirements: [
      "Undergraduate studying Electrical, Mechanical, or Mechatronics Engineering",
      "Familiarity with basic AC/DC electrical principles and safety protocol",
      "Enthusiasm for sustainable energy systems and hands-on field technical work",
    ],
    skills: ["Electrical Diagnostics", "Solar PV", "Field Safety", "Inverter Setup"],
    closingDate: "November 18, 2026",
  },
  {
    slug: "content-and-communications-intern",
    title: "Content & Communications Intern",
    organization: "Northern Youth Innovators",
    typeSlug: "internship",
    location: "Zaria, Kaduna State",
    campusSlug: "abu",
    description:
      "Draft press announcements, format community newsletters, and coordinate editorial content highlighting student innovation in northern universities.",
    responsibilities: [
      "Draft and proofread monthly student venture spotlight articles",
      "Manage publishing schedules for the organization's digital newsletter",
      "Engage with community submissions and student project leads",
    ],
    requirements: [
      "Undergraduate or graduate with sharp written English and editorial sensibility",
      "Previous experience writing for campus publications, blogs, or societies",
      "Familiarity with basic email marketing and collaborative document tools",
    ],
    skills: ["Copywriting", "Editorial Review", "Newsletter Publishing", "Interviewing"],
    closingDate: "November 12, 2026",
  },
  {
    slug: "hardware-maintenance-apprentice",
    title: "Hardware Maintenance Apprentice",
    organization: "PolyTech Repair Hub",
    typeSlug: "campus",
    location: "Owo, Ondo State",
    campusSlug: "rugipo",
    description:
      "Learn and assist with desktop repair, printer maintenance, projector setups, and auditorium audio-visual support across campus facilities.",
    responsibilities: [
      "Assist with diagnosing power supply and display faults on desktop computers",
      "Prepare projector and PA setups for faculty meetings and departmental defenses",
      "Maintain inventory logs of workshop spare parts and testing equipment",
    ],
    requirements: [
      "Student enrolled in Computer Engineering or Electrical Technology at RUGIPO",
      "Basic understanding of PC assembly and circuit diagnostics",
      "Punctual and reliable approach to equipment maintenance tasks",
    ],
    skills: ["PC Assembly", "Audio-Visual Setup", "Hardware Maintenance", "Soldering"],
    closingDate: "November 25, 2026",
  },
]

/** All configured opportunity types that are currently active. */
export function getEnabledOpportunityTypes(): OpportunityType[] {
  return opportunityTypes.filter((type) => type.enabled)
}

/** A single opportunity type by slug, or `undefined` if disabled or not found. */
export function getOpportunityTypeBySlug(
  slug: string
): OpportunityType | undefined {
  return opportunityTypes.find((type) => type.slug === slug && type.enabled)
}

/** All opportunities whose type is currently active. */
export function getOpportunities(): Opportunity[] {
  const enabledSlugs = new Set(
    getEnabledOpportunityTypes().map((type) => type.slug)
  )
  return opportunities.filter((op) => enabledSlugs.has(op.typeSlug))
}

/** A single opportunity by slug, or `undefined` if disabled or not found. */
export function getOpportunityBySlug(slug: string): Opportunity | undefined {
  return getOpportunities().find((op) => op.slug === slug)
}

/** All featured opportunities whose type is currently active. */
export function getFeaturedOpportunities(): Opportunity[] {
  return getOpportunities().filter((op) => op.featured)
}

/** All opportunities associated with a specific campus. */
export function getOpportunitiesByCampus(campusSlug: string): Opportunity[] {
  return getOpportunities().filter((op) => op.campusSlug === campusSlug)
}

/** All opportunities belonging to a specific type. */
export function getOpportunitiesByType(typeSlug: string): Opportunity[] {
  return getOpportunities().filter((op) => op.typeSlug === typeSlug)
}
