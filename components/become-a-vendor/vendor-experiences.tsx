import {
  serviceExperienceSteps,
  vendorExperienceSteps,
} from "@/app/_data/become-a-vendor"
import { SectionHeading } from "@/components/layout/section-heading"
import { Card, CardContent } from "@/components/ui/card"

function VendorExperiences() {
  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="Platform Experiences"
        title="Tailored experiences for products and services"
        description="Whether you are fulfilling tangible campus orders or providing specialized services, each path offers structured tools."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Vendor Journey Column */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 border-b border-border/80 pb-3">
            <span className="text-2xs font-semibold uppercase tracking-wider text-primary">
              Marketplace Vendors
            </span>
            <h3 className="font-heading text-xl font-semibold text-foreground">
              The Product Seller Experience
            </h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Designed for quick item listings, clear campus pickup coordination, and stock updates.
            </p>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {vendorExperienceSteps.map((step) => (
              <Card key={step.title} size="sm" className="h-full border-border/70 bg-card">
                <CardContent className="flex flex-col gap-2 p-4">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <step.icon className="size-4" aria-hidden="true" />
                  </span>
                  <h4 className="font-heading text-sm font-semibold text-foreground">
                    {step.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Provider Journey Column */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 border-b border-border/80 pb-3">
            <span className="text-2xs font-semibold uppercase tracking-wider text-primary">
              Service Providers & Artisans
            </span>
            <h3 className="font-heading text-xl font-semibold text-foreground">
              The Service Provider Experience
            </h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Structured to communicate your expertise, turnaround times, and starting rates transparently.
            </p>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {serviceExperienceSteps.map((step) => (
              <Card key={step.title} size="sm" className="h-full border-border/70 bg-card">
                <CardContent className="flex flex-col gap-2 p-4">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <step.icon className="size-4" aria-hidden="true" />
                  </span>
                  <h4 className="font-heading text-sm font-semibold text-foreground">
                    {step.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { VendorExperiences }
