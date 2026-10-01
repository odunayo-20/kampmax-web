import { ListFilter } from "lucide-react"

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "definitions", label: "2. Definitions" },
  { id: "user-accounts", label: "3. User Accounts & Registration" },
  { id: "platform-roles", label: "4. Platform Roles & Participation" },
  { id: "marketplace", label: "5. Marketplace & Product Listings" },
  { id: "services", label: "6. Services & Freelancers" },
  { id: "payments", label: "7. Payments & Transactions" },
  { id: "events", label: "8. Events & Ticketing" },
  { id: "prohibited-activities", label: "9. Prohibited Activities & Conduct" },
  { id: "intellectual-property", label: "10. Intellectual Property Rights" },
  { id: "third-party-services", label: "11. Third-Party Services" },
  { id: "platform-availability", label: "12. Platform Availability" },
  { id: "suspension-termination", label: "13. Suspension & Termination" },
  { id: "disclaimers", label: "14. Disclaimers of Warranties" },
  { id: "limitation-of-liability", label: "15. Limitation of Liability" },
  { id: "indemnification", label: "16. Indemnification" },
  { id: "changes-to-terms", label: "17. Changes to Terms" },
  { id: "governing-law", label: "18. Governing Law & Dispute Resolution" },
  { id: "contact", label: "19. Contact & Inquiries" },
]

export function TermsToc() {
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
