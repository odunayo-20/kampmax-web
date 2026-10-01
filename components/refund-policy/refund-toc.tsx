import { ListFilter } from "lucide-react"

const sections = [
  { id: "general-principles", label: "1. General Refund Principles" },
  { id: "product-purchases", label: "2. Physical Products & Marketplace Purchases" },
  { id: "services-freelancers", label: "3. Services & Freelance Engagements" },
  { id: "digital-products", label: "4. Digital Products & Downloads" },
  { id: "event-tickets", label: "5. Event Tickets & Admissions" },
  { id: "failed-transactions", label: "6. Failed & Erroneous Transactions" },
  { id: "refund-processing", label: "7. Refund Processing & Payouts" },
  { id: "exceptions", label: "8. Exceptions & Non-Refundable Items" },
  { id: "dispute-resolution", label: "9. Disputes & Escalation Process" },
  { id: "contact", label: "10. Contact & Support" },
]

export function RefundToc() {
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
