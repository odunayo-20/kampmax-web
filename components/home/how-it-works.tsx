import { journeySteps } from "@/app/_data/homepage"
import { SectionHeading } from "@/components/layout/section-heading"
import { FadeIn } from "@/components/shared/fade-in"

function HowItWorks() {
  return (
    <div className="flex flex-col gap-14">
      <SectionHeading
        eyebrow="How it works"
        title="From discovering Kampmax to getting involved"
        align="center"
      />

      <ol className="relative grid gap-6 sm:grid-cols-3">
        {/* Dashed line linking the three steps (hidden on narrow screens). */}
        <div
          aria-hidden="true"
          className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-primary-300/70 sm:block"
        />

        {journeySteps.map((step, index) => (
          <li key={step.title} className="relative">
            <FadeIn
              delay={index * 0.1}
              className="flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-950/10"
            >
              <span className="relative flex size-20 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-800 text-white shadow-lg shadow-primary-600/30 ring-8 ring-primary-50">
                <step.icon className="size-8" aria-hidden="true" />
                <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-accent-500 text-xs font-extrabold text-primary-950 shadow-md">
                  {index + 1}
                </span>
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </FadeIn>
          </li>
        ))}
      </ol>
    </div>
  )
}

export { HowItWorks }
