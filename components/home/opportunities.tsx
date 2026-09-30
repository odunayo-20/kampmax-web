import { SectionHeading } from "@/components/layout/section-heading"
import { opportunityItems } from "@/app/_data/homepage"

function Opportunities() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
      <SectionHeading
        eyebrow="Beyond shopping"
        title="Real opportunities, not just listings"
        description="Kampmax goes beyond buying and selling — it's also where campus opportunities get discovered."
      />

      <ul className="flex flex-col divide-y divide-border">
        {opportunityItems.map((item) => (
          <li key={item.title} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
              <item.icon className="size-4" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-0.5">
              <p className="font-medium text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Opportunities }
