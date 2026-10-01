import { ListFilter } from "lucide-react"

const sections = [
  { id: "what-cookies-are", label: "1. What Cookies Are" },
  { id: "how-kampmax-uses-cookies", label: "2. How Kampmax Uses Cookies" },
  { id: "types-of-cookies", label: "3. Types of Cookies" },
  { id: "why-cookies-are-used", label: "4. Why Cookies Are Used" },
  { id: "third-party-technologies", label: "5. Third-Party Technologies" },
  { id: "cookie-preferences", label: "6. Managing Your Cookie Preferences" },
  { id: "browser-controls", label: "7. Browser Controls & Management" },
  { id: "policy-changes", label: "8. Changes to This Policy" },
  { id: "contact", label: "9. Contact Information" },
]

export function CookieToc() {
  return (
    <nav
      aria-label="Table of Contents"
      className="my-8 rounded-2xl border border-primary/15 bg-primary/3 p-5 shadow-sm sm:p-6"
    >
      <div className="flex items-center gap-2 mb-3 text-foreground font-heading font-semibold text-sm">
        <ListFilter className="size-4 text-primary" aria-hidden="true" />
        <span>Table of Contents</span>
      </div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-xs sm:text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
