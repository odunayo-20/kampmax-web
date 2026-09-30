import { businessCapabilities } from "@/app/_data/for-businesses"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function BusinessCapabilities() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Capabilities"
        title="What you can do as a business on Kampmax"
        description="Kampmax provides structured surfaces for products, services, recruiting, and event announcements across campus communities."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {businessCapabilities.map((capability) => (
          <Card key={capability.title} className="h-full">
            <CardContent className="flex flex-col gap-3 p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <capability.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {capability.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {capability.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { BusinessCapabilities }
