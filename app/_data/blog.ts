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
    updatedAt: "2026-09-26",
    readingTime: 5,
    featured: true,
    content: [
      {
        type: "paragraph",
        content:
          "For many undergraduates, the gap between academic theory and practical work experience feels widest during the middle years of university. While class lectures build foundational knowledge, hands-on opportunities are often shared informally through whispered conversations or fast-moving group chats.",
      },
      {
        type: "heading",
        level: 2,
        content: "Look Closely at Departmental Ecosystems",
      },
      {
        type: "paragraph",
        content:
          "University faculties are bustling mini-enterprises. Senior lecturers frequently require research assistants for field surveys, computer labs need technical assistants for operating system setups, and faculty committees need graphic designers for departmental symposiums.",
      },
      {
        type: "list",
        items: [
          "Visit departmental notice boards weekly for lab and teaching assistant openings.",
          "Introduce yourself to postgraduate coordinators who often supervise funded projects.",
          "Volunteer your skills for upcoming faculty week conferences or hackathons.",
        ],
      },
      {
        type: "quote",
        content:
          "The best student opportunities rarely start as formal job postings. They usually begin as small, reliable contributions to problems someone on campus needed solved yesterday.",
        citation: "Campus Enterprise Note",
      },
      {
        type: "heading",
        level: 2,
        content: "Bridging Into Off-Campus & Remote Work",
      },
      {
        type: "paragraph",
        content:
          "Once you have demonstrable coursework or student projects, branch out to regional technology startups and small businesses in your host town. Many regional agencies look for part-time writers, frontend developers, and junior designers who understand local context.",
      },
      {
        type: "callout",
        title: "Action Step for This Week",
        content:
          "Document three projects you completed in coursework or student societies. Summarize what problem they addressed, what tools you used, and keep the link ready to share on your public profile.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        content:
          "Student entrepreneurship in Nigerian universities is rarely a luxury—it is often a practical response to living expenses and a stepping stone toward career independence. However, the most common pitfall is overextending before validating daily campus demand.",
      },
      {
        type: "heading",
        level: 2,
        content: "Solve Immediate Friction in Hostels",
      },
      {
        type: "paragraph",
        content:
          "Instead of trying to launch complex products, look at what fellow hostel residents complain about every week. High-demand items usually center around convenience: late-night snacks during test revision, urgent phone charging accessories, or laundry logistics.",
      },
      {
        type: "list",
        items: [
          "Start with a single product category rather than a broad catalog.",
          "Set clear delivery windows that do not clash with lecture hours.",
          "Keep cash flow simple: avoid offering customer credit that strains working capital.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Protecting Your Academic Schedule",
      },
      {
        type: "paragraph",
        content:
          "No student venture is sustainable if it causes you to miss practicals or fail semester courses. Establish operating boundaries: announce ordering cut-off times and communicate delivery slots clearly upfront.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        content:
          "The internet is filled with advice telling students to learn everything at once: full-stack development, artificial intelligence, UI/UX design, and blockchain. Trying to absorb all of them usually leads to cognitive exhaustion.",
      },
      {
        type: "heading",
        level: 2,
        content: "Prioritize Skills with Immediate Application",
      },
      {
        type: "paragraph",
        content:
          "The most valuable skills for undergraduates are those you can apply directly to real campus needs within two to three months of starting.",
      },
      {
        type: "list",
        items: [
          "Modern Web Design: HTML, CSS, and basic JavaScript to build business landing pages for campus shops.",
          "Technical Writing: Documenting software projects, lab manuals, and guides for student developers.",
          "Data Analysis: Using spreadsheets and basic SQL to help departmental researchers organize field data.",
        ],
      },
      {
        type: "quote",
        content:
          "Depth beats surface awareness. One deployed website with clean code teaches you more than watching twenty video tutorials.",
      },
      {
        type: "paragraph",
        content:
          "Dedicate one uninterrupted hour each evening to building something practical. Consistency during semester weeks compounds faster than last-minute cramming during holiday breaks.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        content:
          "University towns present one of the most concentrated consumer markets in the country. Yet many off-campus printers, tailors, and stationery merchants struggle to reach newly admitted students each academic session.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Limitation of Group Chat Broadcasting",
      },
      {
        type: "paragraph",
        content:
          "Many merchants rely on posting flyers into departmental WhatsApp groups. While immediate, this method quickly exhausts goodwill. Messages get buried in seconds, moderators delete promotional spam, and prospective buyers have no searchable record of what you sell.",
      },
      {
        type: "list",
        items: [
          "Establish a stable public catalog where products and starting rates are always visible.",
          "Offer scheduled campus drop-offs at recognizable faculty landmarks.",
          "Honor turnaround commitments during peak submission periods when deadlines are strict.",
        ],
      },
      {
        type: "callout",
        title: "Key Takeaway for Merchants",
        content:
          "Students value predictable pricing and punctual delivery above flashy discounts. Reliability generates organic hostel recommendations that no flyer can buy.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        content:
          "Freelancing while enrolled in university offers an unmatched opportunity to graduate with a verified track record. However, dealing with real clients requires a level of communication discipline that academic assignments rarely prepare you for.",
      },
      {
        type: "heading",
        level: 2,
        content: "Underpromise and Overcommunicate",
      },
      {
        type: "paragraph",
        content:
          "When taking on client briefs, always factor in power outages, intermittent network connectivity, and sudden midterm test timetables. If a design project takes three days of focused work, quote five days to client.",
      },
      {
        type: "list",
        items: [
          "Write down project scope in bullet points before beginning any design or code.",
          "Request a milestone deposit before starting client work.",
          "Keep project updates proactive: inform clients before they have to ask.",
        ],
      },
    ],
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
    content: [
      {
        type: "paragraph",
        content:
          "Learning modern software engineering in a Nigerian tertiary institution comes with unique constraints: limited laboratory electricity hours, fluctuating mobile internet bundles, and outdated computer hardware.",
      },
      {
        type: "heading",
        level: 2,
        content: "Offline-First Learning Strategies",
      },
      {
        type: "paragraph",
        content:
          "Successful student developers adapt by adopting offline-first workflows. Download documentation (like MDN Web Docs or Dash packages) when on university Wi-Fi, and write code locally using lightweight text editors.",
      },
      {
        type: "list",
        items: [
          "Clone open-source repositories to study real-world code architecture offline.",
          "Focus on fundamentals (HTML, CSS, TypeScript) before jumping into heavy frameworks.",
          "Collaborate with peers in campus tech clubs to share resources and troubleshooting tips.",
        ],
      },
      {
        type: "quote",
        content:
          "Constraints force you to understand how code actually runs under the hood. Resourcefulness is a technical superpower.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        content:
          "The world's most enduring technology companies frequently trace their roots back to student dorm rooms and campus dining tables. The reason is not merely youth; it is the unique density of interdisciplinary collaboration that only universities provide.",
      },
      {
        type: "heading",
        level: 2,
        content: "Connecting Engineering, Business, and Design",
      },
      {
        type: "paragraph",
        content:
          "In a single university, you have software developers in computer science, accountants in management sciences, and creative storytellers in mass communications—all living within walking distance of each other.",
      },
      {
        type: "list",
        items: [
          "Attend events outside your immediate department to meet different skill sets.",
          "Test prototypes on your roommates first for honest, unfiltered user feedback.",
          "Treat campus as a supportive sandbox where early mistakes are cheap and educational.",
        ],
      },
    ],
  },
]

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
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

export function getRelatedPosts(
  currentSlug: string,
  categorySlug: string,
  limit: number = 3
): BlogPost[] {
  const others = getAllPosts().filter((p) => p.slug !== currentSlug)
  // First prioritize same category, then fallback to recent
  const sameCategory = others.filter((p) => p.categorySlug === categorySlug)
  const remaining = others.filter((p) => p.categorySlug !== categorySlug)

  return [...sameCategory, ...remaining].slice(0, limit)
}

export function getAdjacentPosts(currentSlug: string): {
  prev?: BlogPost
  next?: BlogPost
} {
  const all = getAllPosts()
  const index = all.findIndex((p) => p.slug === currentSlug)

  if (index === -1) return {}

  return {
    prev: index > 0 ? all[index - 1] : undefined,
    next: index < all.length - 1 ? all[index + 1] : undefined,
  }
}
