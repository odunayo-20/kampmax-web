import { ListFilter } from "lucide-react"

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-may-collect", label: "2. Information We May Collect" },
  { id: "how-we-use-information", label: "3. How We Use Information" },
  { id: "cookies", label: "4. Cookies & Similar Technologies" },
  { id: "third-party-services", label: "5. Third-Party Services" },
  { id: "information-sharing", label: "6. Information Sharing" },
  { id: "data-security", label: "7. Data Security" },
  { id: "data-retention", label: "8. Data Retention" },
  { id: "your-rights", label: "9. Your Rights" },
  { id: "childrens-privacy", label: "10. Children's Privacy" },
  { id: "external-links", label: "11. External Links" },
  { id: "policy-changes", label: "12. Policy Changes" },
  { id: "contact", label: "13. Contact" },
]

export function PrivacyToc() {
  return (
    <nav
      aria-label="Table of Contents"
      className="my-8 rounded-2xl border border-border/80 bg-muted/30 p-5 sm:p-6"
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
