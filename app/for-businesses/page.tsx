import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { BusinessAudiences } from "@/components/for-businesses/business-audiences"
import { BusinessCapabilities } from "@/components/for-businesses/business-capabilities"
import { BusinessEcosystem } from "@/components/for-businesses/business-ecosystem"
import { BusinessFinalCta } from "@/components/for-businesses/business-final-cta"
import { BusinessHero } from "@/components/for-businesses/business-hero"
import { BusinessHowItWorks } from "@/components/for-businesses/business-how-it-works"
import { BusinessScales } from "@/components/for-businesses/business-scales"
import { BusinessUseCases } from "@/components/for-businesses/business-use-cases"
import { BusinessWhyCampuses } from "@/components/for-businesses/business-why-campuses"

export const metadata: Metadata = {
  title: "For Businesses",
  description:
    "Connect your business with campus communities. Showcase products, offer services, recruit student talent, and promote campus events on Kampmax.",
  alternates: {
    canonical: "/for-businesses",
  },
  openGraph: {
    title: "For Businesses — Connect with Campus Communities | Kampmax",
    description:
      "Connect your business with campus communities. Showcase products, offer services, recruit student talent, and promote campus events on Kampmax.",
    url: "/for-businesses",
  },
}

export default function ForBusinessesPage() {
  return (
    <>
      <div className="relative isolate overflow-hidden border-b border-border bg-linear-to-b from-primary-50 via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] size-128 rounded-full bg-primary-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-[-15%] size-96 rounded-full bg-accent-100/60 blur-3xl"
        />
        <Container className="relative">
          <BusinessHero />
        </Container>
      </div>

      <div className="border-y border-border bg-primary-50">
        <Section>
          <Container>
            <BusinessAudiences />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <BusinessCapabilities />
        </Container>
      </Section>

      <div className="border-y border-border bg-neutral-50">
        <Section>
          <Container>
            <BusinessEcosystem />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <BusinessUseCases />
        </Container>
      </Section>

      <div className="border-y border-border bg-primary-50">
        <Section>
          <Container>
            <BusinessHowItWorks />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <BusinessWhyCampuses />
        </Container>
      </Section>

      <div className="border-y border-border bg-neutral-50">
        <Section>
          <Container>
            <BusinessScales />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <BusinessFinalCta />
        </Container>
      </Section>
    </>
  )
}
