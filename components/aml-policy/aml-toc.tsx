import { ListFilter } from "lucide-react"

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "scope", label: "2. Scope of Policy" },
  { id: "definitions", label: "3. Definitions" },
  { id: "risk-based-approach", label: "4. Risk-Based Approach" },
  { id: "customer-due-diligence", label: "5. Customer Due Diligence (CDD)" },
  { id: "enhanced-due-diligence", label: "6. Enhanced Due Diligence (EDD)" },
  { id: "transaction-monitoring", label: "7. Transaction Monitoring" },
  { id: "suspicious-activity", label: "8. Suspicious Activity & Reporting" },
  { id: "prohibited-activity", label: "9. Prohibited Financial Activity" },
  { id: "sanctions-and-restricted-parties", label: "10. Sanctions & Restricted Parties" },
  { id: "record-keeping", label: "11. Record Keeping" },
  { id: "cooperation-with-authorities", label: "12. Cooperation With Authorities" },
  { id: "user-responsibilities", label: "13. User Responsibilities" },
  { id: "account-restrictions", label: "14. Account Restrictions & Remedies" },
  { id: "relationship-with-kyc", label: "15. Relationship With KYC Policy" },
  { id: "policy-changes", label: "16. Policy Updates & Modifications" },
  { id: "contact", label: "17. Compliance Contact & Inquiries" },
]

export function AmlToc() {
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
