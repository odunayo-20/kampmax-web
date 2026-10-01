import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CampusEcosystem } from "@/components/home/campus-ecosystem"
import { DiscoverGrid } from "@/components/home/discover-grid"
import { EventsCommunity } from "@/components/home/events-community"
import { FinalCta } from "@/components/home/final-cta"
import { ForBusinesses } from "@/components/home/for-businesses"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { Opportunities } from "@/components/home/opportunities"
import { TrustValues } from "@/components/home/trust-values"
import { WhatIsKampmax } from "@/components/home/what-is-kampmax"

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-linear-to-b from-primary-50 via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] size-128 rounded-full bg-primary-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-[-15%] size-96 rounded-full bg-accent-100/60 blur-3xl"
        />
        <Container className="relative">
          <Hero />
        </Container>
      </div>

      <Section>
        <Container>
          <WhatIsKampmax />
        </Container>
      </Section>

      <Section id="discover" className="scroll-mt-16">
        <Container>
          <DiscoverGrid />
        </Container>
      </Section>

      <div className="border-y border-border bg-primary-50">
        <Section>
          <Container>
            <HowItWorks />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <CampusEcosystem />
        </Container>
      </Section>

      <div className="border-y border-border bg-neutral-50">
        <Section>
          <Container>
            <Opportunities />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <ForBusinesses />
        </Container>
      </Section>

      <Section>
        <Container>
          <EventsCommunity />
        </Container>
      </Section>

      <div className="border-y border-border bg-primary-50">
        <Section>
          <Container>
            <TrustValues />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <FinalCta />
        </Container>
      </Section>
    </>
  )
}
