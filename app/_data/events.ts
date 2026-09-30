import type { Event, EventCategory } from "@/types/event"

/**
 * Configured event categories. Categories can be toggled on/off
 * via `enabled` to reflect what is currently active in the ecosystem.
 */
const categories: EventCategory[] = [
  { slug: "career-tech", name: "Career & Technology", enabled: true },
  { slug: "academic", name: "Academic & Research", enabled: true },
  { slug: "workshops", name: "Workshops & Masterclasses", enabled: true },
  { slug: "arts-culture", name: "Arts & Culture", enabled: true },
  { slug: "campus-life", name: "Campus Life & Social", enabled: true },
  { slug: "business", name: "Business & Startups", enabled: true },
  { slug: "sports", name: "Sports & Wellness", enabled: true },
  { slug: "fellowship-grants", name: "Fellowships & Grants", enabled: false },
  { slug: "other", name: "Other", enabled: true },
]

/**
 * Local mock events dataset. Categorized with realistic dates, venues,
 * and organizers across Nigerian campuses. Contains both upcoming and
 * cleanly separated past events with zero fabricated attendee counts or ratings.
 */
const events: Event[] = [
  {
    slug: "unilag-tech-and-innovation-summit-2026",
    title: "UNILAG Tech & Innovation Summit 2026",
    description:
      "A full-day conference showcasing undergraduate software prototypes, AI research projects, and panel discussions with engineering leaders from across West Africa.",
    categorySlug: "career-tech",
    date: "2026-11-20",
    startTime: "09:30 AM",
    endTime: "04:30 PM",
    location: "Main Auditorium, Akoka Campus",
    campusSlug: "unilag",
    organizerName: "UNILAG Innovation Hub",
    organizerType: "Campus Department",
    highlights: [
      "Keynote panel featuring software architects and startup founders",
      "Student software demo expo with live feedback from mentors",
      "Interactive breakout sessions on systems engineering and product design",
    ],
    importantInfo:
      "Admission is free for all matriculated students. Please bring your student ID card for verification at the auditorium entrance.",
    featured: true,
    isPast: false,
  },
  {
    slug: "oau-annual-software-hackathon",
    title: "OAU Annual 24-Hour Code Jam",
    description:
      "An intensive overnight hackathon challenging interdisciplinary teams to prototype digital tools that solve local campus logistics, academic record access, and hostel services.",
    categorySlug: "career-tech",
    date: "2026-12-04",
    startTime: "10:00 AM",
    endTime: "Next Day 10:00 AM",
    location: "Computer Buildings, Faculty of Technology",
    campusSlug: "oau",
    organizerName: "Ife Developer Collective",
    organizerType: "Student Organization",
    highlights: [
      "Continuous power supply and dedicated high-speed laboratory network",
      "Mentorship desks with seasoned software engineers and designers",
      "Final pitch showcase before academic and industry judges",
    ],
    importantInfo:
      "Participants must bring their own laptops and chargers. Overnight access is restricted to registered hackathon attendees.",
    featured: true,
    isPast: false,
  },
  {
    slug: "ui-postgraduate-and-research-symposium",
    title: "UI Multidisciplinary Research Symposium",
    description:
      "Annual academic colloquium bringing together undergraduate and postgraduate researchers across sciences, humanities, and agriculture to present peer-reviewed abstracts.",
    categorySlug: "academic",
    date: "2026-11-12",
    startTime: "09:00 AM",
    endTime: "02:00 PM",
    location: "Trenchard Hall, University of Ibadan",
    campusSlug: "ui",
    organizerName: "UI Postgraduate Academic Committee",
    organizerType: "Campus Department",
    highlights: [
      "Keynote address on sustainable food security and technology",
      "Concurrent technical oral sessions and scientific poster presentations",
      "Certificate of presentation issued to registered student authors",
    ],
    importantInfo:
      "Seating is open to the university community. Printed symposium abstracts will be provided at the entrance.",
    featured: true,
    isPast: false,
  },
  {
    slug: "futo-renewable-engineering-workshop",
    title: "Clean Energy & Inverter Systems Masterclass",
    description:
      "A practical hands-on workshop guiding engineering undergraduates through solar photovoltaic sizing, charge controller wiring, and battery safety fundamentals.",
    categorySlug: "workshops",
    date: "2026-11-28",
    startTime: "11:00 AM",
    endTime: "03:30 PM",
    location: "SEET Complex, Hall B",
    campusSlug: "futo",
    organizerName: "FUTO Renewable Energy Society",
    organizerType: "Student Organization",
    highlights: [
      "Live demonstration of hybrid inverter setups and solar array calculations",
      "Hands-on diagnostic testing using digital multimeters and load testers",
      "Direct Q&A on commercial solar installation apprenticeship pathways",
    ],
    importantInfo:
      "All testing equipment and protective gear will be provided on-site. Wear closed-toe shoes for workshop access.",
    isPast: false,
  },
  {
    slug: "unn-cultural-arts-and-literary-festival",
    title: "Nsukka Literary & Creative Arts Festival",
    description:
      "A celebration of poetry, theatre, creative writing, and indigenous textile crafts featuring readings by student authors and guest performances by regional arts troupes.",
    categorySlug: "arts-culture",
    date: "2026-12-10",
    startTime: "01:00 PM",
    endTime: "06:00 PM",
    location: "Princess Alexandra Auditorium",
    campusSlug: "unn",
    organizerName: "Nsukka Creative Writers Guild",
    organizerType: "Community Group",
    highlights: [
      "Open mic poetry session and creative fiction anthology launch",
      "Traditional textile and visual art exhibition",
      "Dramatized performance of classic West African stage plays",
    ],
    importantInfo:
      "Entry is open to all students, staff, and visitors. Exhibition pieces will be available for public viewing.",
    isPast: false,
  },
  {
    slug: "abu-agritech-and-supply-chain-fair",
    title: "Zaria Agritech & Farmer-Market Exhibition",
    description:
      "Connecting agricultural technology startups, student agronomists, and local grain merchants to explore grain storage tech, drone mapping, and cooperative market access.",
    categorySlug: "business",
    date: "2026-11-18",
    startTime: "10:00 AM",
    endTime: "04:00 PM",
    location: "Faculty of Agriculture Exhibition Ground",
    campusSlug: "abu",
    organizerName: "Northern Agro-Innovators Network",
    organizerType: "Business",
    highlights: [
      "Interactive machinery and soil analysis equipment demonstrations",
      "Marketplace stalls featuring processed produce and cooperative farm tools",
      "Networking session between student agricultural researchers and traders",
    ],
    importantInfo:
      "Open air event. Covered stands provided for registered exhibitors and student groups.",
    isPast: false,
  },
  {
    slug: "rugipo-campus-entrepreneurship-expo",
    title: "RUGIPO Student Creators & Merchant Fair",
    description:
      "An outdoor exhibition where student artisans, technicians, bakers, and fashion tailors showcase their goods and services to the wider Owo community.",
    categorySlug: "campus-life",
    date: "2026-11-25",
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    location: "Convocation Arena Grounds",
    campusSlug: "rugipo",
    organizerName: "RUGIPO Student Union Directorate",
    organizerType: "Student Organization",
    highlights: [
      "Over 40 student-led pop-up vendor stalls and service stations",
      "Live campus DJ performances and student music entertainment",
      "Public vote and recognition for standout campus small businesses",
    ],
    importantInfo:
      "Cashless payments and mobile transfers accepted across all student stalls.",
    isPast: false,
  },
  {
    slug: "uniabuja-inter-faculty-football-championship",
    title: "Vice-Chancellor's Inter-Faculty Football Finals",
    description:
      "The culminating championship match of the university football league, featuring the Faculty of Management Sciences facing the Faculty of Engineering.",
    categorySlug: "sports",
    date: "2026-12-15",
    startTime: "03:30 PM",
    endTime: "06:00 PM",
    location: "Main Campus Sports Complex",
    campusSlug: "uniabuja",
    organizerName: "University Sports Directorate",
    organizerType: "Campus Department",
    highlights: [
      "Grand finale match followed by medal and trophy presentation ceremony",
      "Student brass band performance and halftime showcases",
      "Dedicated spectator stands with security and first-aid coverage",
    ],
    importantInfo:
      "Gates open at 02:00 PM. Spectator seating is first-come, first-served.",
    isPast: false,
  },
  {
    slug: "unilag-freshers-orientation-and-societies-fair",
    title: "UNILAG Welcome Fair & Societies Showcase",
    description:
      "The annual orientation carnival introducing newly admitted 100-level students to registered societies, tech hubs, departmental associations, and campus services.",
    categorySlug: "campus-life",
    date: "2026-02-14",
    startTime: "10:00 AM",
    endTime: "04:00 PM",
    location: "Multipurpose Hall, Akoka",
    campusSlug: "unilag",
    organizerName: "Student Affairs Division",
    organizerType: "Campus Department",
    highlights: [
      "Interactive booths from 60+ clubs, religious fellowships, and sports teams",
      "Campus map and welfare services informational distribution",
      "Guest welcome address by student leadership and alumni",
    ],
    importantInfo:
      "This event took place earlier in the academic calendar and is archived for historical reference.",
    isPast: true,
  },
  {
    slug: "ui-career-and-cv-workshop-2026",
    title: "UI Graduate Career Clinic & Resume Review",
    description:
      "A high-intensity career preparation workshop where final-year students received one-on-one resume feedback and mock interview practice from corporate HR recruiters.",
    categorySlug: "workshops",
    date: "2026-03-22",
    startTime: "11:00 AM",
    endTime: "03:00 PM",
    location: "Faculty of Arts Theatre",
    campusSlug: "ui",
    organizerName: "UI Career Development Centre",
    organizerType: "Campus Department",
    highlights: [
      "One-on-one resume formatting audits with HR executives",
      "Mock behavioral interview rounds and constructive feedback",
      "Digital skills and corporate communication seminar",
    ],
    importantInfo: "Archived event from the first semester.",
    isPast: true,
  },
]

/** All configured event categories that are currently active. */
export function getEnabledEventCategories(): EventCategory[] {
  return categories.filter((category) => category.enabled)
}

/** A single event category by slug, or `undefined` if disabled or not found. */
export function getEventCategoryBySlug(slug: string): EventCategory | undefined {
  return categories.find((category) => category.slug === slug && category.enabled)
}

/** All events whose category is currently active. */
export function getEvents(): Event[] {
  const enabledSlugs = new Set(getEnabledEventCategories().map((cat) => cat.slug))
  return events.filter((ev) => enabledSlugs.has(ev.categorySlug))
}

/** All upcoming events. */
export function getUpcomingEvents(): Event[] {
  return getEvents().filter((ev) => !ev.isPast)
}

/** All past / archived events. */
export function getPastEvents(): Event[] {
  return getEvents().filter((ev) => ev.isPast)
}

/** All featured upcoming events. */
export function getFeaturedEvents(): Event[] {
  return getUpcomingEvents().filter((ev) => ev.featured)
}

/** A single event by slug, or `undefined` if disabled or not found. */
export function getEventBySlug(slug: string): Event | undefined {
  return getEvents().find((ev) => ev.slug === slug)
}

/** All events associated with a specific campus. */
export function getEventsByCampus(campusSlug: string): Event[] {
  return getEvents().filter((ev) => ev.campusSlug === campusSlug)
}
