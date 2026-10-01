import type { BlogCategory, BlogPost } from "@/types/blog"

export const blogCategories: BlogCategory[] = [
  { slug: "all", name: "All Articles" },
  { slug: "opportunities", name: "Opportunities" },
  { slug: "entrepreneurship", name: "Entrepreneurship" },
  { slug: "digital-skills", name: "Digital Skills" },
  { slug: "business", name: "Business" },
  { slug: "campus-life", name: "Campus Life" },
  { slug: "technology", name: "Technology" },
  { slug: "guides", name: "Guides" },
]

export const blogPosts: BlogPost[] = [
  {
    slug: "how-students-can-discover-opportunities-around-campus",
    title: "How Students Can Discover Real Opportunities Around Campus",
    excerpt:
      "From departmental project shifts and university tech hubs to remote internships, actionable ways undergraduates can connect with work experience before graduation.",
    category: "Opportunities",
    categorySlug: "opportunities",
    author: {
      name: "Kampmax Editorial Team",
      role: "Campus Insights",
    },
    publishedAt: "2026-09-24",
    readingTime: 5,
    featured: true,
  },
  {
    slug: "starting-a-small-business-while-in-school",
    title: "Starting a Sustainable Campus Venture While in School",
    excerpt:
      "Managing academic workloads, identifying everyday student needs, and establishing consistent customer trust in a university environment.",
    category: "Entrepreneurship",
    categorySlug: "entrepreneurship",
    author: {
      name: "Kampmax Editorial Team",
      role: "Student Enterprise",
    },
    publishedAt: "2026-09-20",
    readingTime: 4,
    featured: false,
  },
  {
    slug: "digital-skills-worth-learning-alongside-your-degree",
    title: "Digital Skills Worth Learning Alongside Your Degree",
    excerpt:
      "A practical look at web design, data management, technical writing, and workflow automation that complement academic studies without overwhelming revision schedules.",
    category: "Digital Skills",
    categorySlug: "digital-skills",
    author: {
      name: "Kampmax Editorial Team",
      role: "Skills & Learning",
    },
    publishedAt: "2026-09-15",
    readingTime: 6,
    featured: false,
  },
  {
    slug: "how-local-businesses-can-serve-campus-communities",
    title: "How Local Businesses Can Better Serve University Communities",
    excerpt:
      "Practical advice for neighborhood bookshops, printers, and eateries wanting to engage students without invasive promotional tactics or spamming group chats.",
    category: "Business",
    categorySlug: "business",
    author: {
      name: "Kampmax Editorial Team",
      role: "Local Commerce",
    },
    publishedAt: "2026-09-11",
    readingTime: 5,
    featured: false,
  },
  {
    slug: "understanding-freelancing-as-an-undergraduate",
    title: "Understanding Freelancing as an Undergraduate",
    excerpt:
      "Setting realistic delivery expectations, communicating with non-student clients, and pricing professional skills fairly as your portfolio grows.",
    category: "Campus Life",
    categorySlug: "campus-life",
    author: {
      name: "Kampmax Editorial Team",
      role: "Freelance & Talent",
    },
    publishedAt: "2026-09-06",
    readingTime: 4,
    featured: false,
  },
  {
    slug: "building-high-impact-technical-skills-on-a-student-budget",
    title: "Building High-Impact Technical Skills on a Student Budget",
    excerpt:
      "Navigating data costs, intermittent power, and open-source documentation to build demonstrable portfolio projects that stand out to regional employers.",
    category: "Technology",
    categorySlug: "technology",
    author: {
      name: "Kampmax Editorial Team",
      role: "Tech Education",
    },
    publishedAt: "2026-08-30",
    readingTime: 5,
    featured: false,
  },
  {
    slug: "why-strong-campus-communities-foster-better-student-ventures",
    title: "Why Strong Campus Communities Foster Better Student Ventures",
    excerpt:
      "Peer feedback, localized word-of-mouth, and interdisciplinary collaboration as catalysts for student projects that outlast university days.",
    category: "Guides",
    categorySlug: "guides",
    author: {
      name: "Kampmax Editorial Team",
      role: "Community Insights",
    },
    publishedAt: "2026-08-22",
    readingTime: 4,
    featured: false,
  },
]

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured) || blogPosts[0]
}

export function getNonFeaturedPosts(): BlogPost[] {
  const featured = getFeaturedPost()
  return getAllPosts().filter((p) => p.slug !== featured?.slug)
}

export function getCategories(): BlogCategory[] {
  return blogCategories
}
