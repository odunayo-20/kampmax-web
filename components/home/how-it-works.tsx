import { SectionHeading } from "@/components/layout/section-heading"
import { journeySteps } from "@/app/_data/homepage"

function HowItWorks() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="How it works"
        title="From discovering Kampmax to getting involved"
      />

      <ol className="grid gap-8 sm:grid-cols-3">
        {journeySteps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <step.icon className="size-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Step {index + 1}
              </span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export { HowItWorks }
