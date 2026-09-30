import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { AboutApproach } from "@/components/about/about-approach"
import { AboutCampusFirst } from "@/components/about/about-campus-first"
import { AboutEcosystem } from "@/components/about/about-ecosystem"
import { AboutFinalCta } from "@/components/about/about-final-cta"
import { AboutHero } from "@/components/about/about-hero"
import { AboutParticipants } from "@/components/about/about-participants"
import { AboutProblem } from "@/components/about/about-problem"
import { AboutPurpose } from "@/components/about/about-purpose"
import { AboutTechnology } from "@/components/about/about-technology"
import { AboutValues } from "@/components/about/about-values"
import { AboutVision } from "@/components/about/about-vision"
import { AboutWhatIsKampmax } from "@/components/about/about-what-is-kampmax"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kampmax — our mission, interconnected ecosystem, and product philosophy building a more connected campus community.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Kampmax — The Campus Ecosystem, Connected",
    description:
      "Learn about Kampmax — our mission, interconnected ecosystem, and product philosophy building a more connected campus community.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <Container>
        <AboutHero />
      </Container>

      <div className="bg-muted/30">
        <Section>
          <Container>
            <AboutWhatIsKampmax />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <AboutProblem />
        </Container>
      </Section>

      <div className="bg-muted/30">
        <Section>
          <Container>
            <AboutApproach />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <AboutEcosystem />
        </Container>
      </Section>

      <div className="bg-muted/30">
        <Section>
          <Container>
            <AboutParticipants />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <AboutCampusFirst />
        </Container>
      </Section>

      <div className="bg-muted/30">
        <Section>
          <Container>
            <AboutVision />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <AboutValues />
        </Container>
      </Section>

      <div className="bg-muted/30">
        <Section>
          <Container>
            <AboutTechnology />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <AboutPurpose />
        </Container>
      </Section>

      <div className="bg-muted/30">
        <Section>
          <Container>
            <AboutFinalCta />
          </Container>
        </Section>
      </div>
    </>
  )
}
