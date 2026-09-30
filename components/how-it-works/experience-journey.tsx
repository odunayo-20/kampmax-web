import { experienceSteps } from "@/app/_data/how-it-works"
import { SectionHeading } from "@/components/layout/section-heading"

function ExperienceJourney() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="How the experience works"
        title="From finding Kampmax to actually using it"
      />

      <ol className="relative flex flex-col gap-8 sm:flex-row sm:gap-4">
        <div
          aria-hidden="true"
          className="absolute top-4 bottom-4 left-4 w-px bg-border sm:top-4 sm:right-4 sm:bottom-auto sm:left-4 sm:h-px sm:w-auto"
        />
        {experienceSteps.map((step, index) => (
          <li
            key={step.title}
            className="relative flex gap-4 sm:flex-1 sm:flex-col sm:items-center sm:gap-3 sm:text-center"
          >
            <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {index + 1}
            </span>
            <div className="flex flex-col gap-1 pt-0.5 sm:pt-0">
              <h3 className="font-heading text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export { ExperienceJourney }
