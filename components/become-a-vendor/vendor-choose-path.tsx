import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { vendorPaths } from "@/app/_data/become-a-vendor"
import { SectionHeading } from "@/components/layout/section-heading"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function VendorChoosePath() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Choose Your Path"
        title="Two ways to participate on Kampmax"
        description="Whether you sell tangible products or offer specialized services, Kampmax provides structured directories tailored to how you operate."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {vendorPaths.map((path) => (
          <Card
            key={path.id}
            id={path.id === "services" ? "service-providers" : undefined}
            className={`flex h-full flex-col border-border/80 ${
              path.id === "services" ? "scroll-mt-24" : ""
            }`}
          >
            <CardContent className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <path.icon className="size-6" aria-hidden="true" />
                </span>
                <Badge variant="secondary" className="text-2xs font-normal">
                  {path.badge}
                </Badge>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-2xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {path.subtitle}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                  {path.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {path.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 border-t border-border/60 pt-4">
                <span className="text-2xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Common Offerings
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {path.examples.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-muted px-2.5 py-1 text-3xs font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-2">
                <Link
                  href={siteConfig.registerUrl}
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "h-12 w-full gap-2 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary-600/25"
                  )}
                >
                  <span>{path.ctaText}</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { VendorChoosePath }
