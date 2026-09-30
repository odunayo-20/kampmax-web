import { SectionHeading } from "@/components/layout/section-heading"
import { valueProps } from "@/app/_data/homepage"

function TrustValues() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        title="Designed around campus life"
        align="center"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((value) => (
          <div key={value.title} className="flex flex-col items-center gap-3 text-center">
            <span className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground ring-1 ring-accent-500/20">
              <value.icon className="size-4" aria-hidden="true" />
            </span>
            <p className="font-medium text-foreground">{value.title}</p>
            <p className="text-sm text-muted-foreground">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export { TrustValues }
