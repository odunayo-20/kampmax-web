import { valueProps } from "@/app/_data/homepage"
import { SectionHeading } from "@/components/layout/section-heading"
import { FadeIn } from "@/components/shared/fade-in"

function TrustValues() {
  return (
    <div className="flex flex-col gap-12">
      <SectionHeading title="Designed around campus life" align="center" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((value, index) => (
          <FadeIn key={value.title} delay={index * 0.07} className="h-full">
            <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-950/10">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-accent-100 to-primary-100 text-primary-700 ring-1 ring-primary-200/60">
                <value.icon className="size-6" aria-hidden="true" />
              </span>
              <p className="font-heading text-base font-bold text-foreground">
                {value.title}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export { TrustValues }
