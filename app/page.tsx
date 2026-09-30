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
      <Container>
        <Hero />
      </Container>

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

      <div className="bg-muted/30">
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

      <div className="bg-muted/30">
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

      <div className="bg-muted/30">
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
