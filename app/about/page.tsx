import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { AboutApproach } from "@/components/about/about-approach"
import { AboutDirection } from "@/components/about/about-direction"
import { AboutEcosystem } from "@/components/about/about-ecosystem"
import { AboutFinalCta } from "@/components/about/about-final-cta"
import { AboutHero } from "@/components/about/about-hero"
import { AboutWhatIsKampmax } from "@/components/about/about-what-is-kampmax"
import { AboutWhoWeServe } from "@/components/about/about-who-we-serve"
import { AboutWhyExists } from "@/components/about/about-why-exists"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what Kampmax is, why it exists, who it serves, and our direction building a connected campus ecosystem.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Kampmax — The Campus Ecosystem, Connected",
    description:
      "Learn what Kampmax is, why it exists, who it serves, and our direction building a connected campus ecosystem.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Section A — Hero */}
      <Container>
        <AboutHero />
      </Container>

      {/* Section B — What Is Kampmax? */}
      <div className="bg-muted/30">
        <Section>
          <Container>
            <AboutWhatIsKampmax />
          </Container>
        </Section>
      </div>

      {/* Section C — Why Kampmax Exists */}
      <Section>
        <Container>
          <AboutWhyExists />
        </Container>
      </Section>

      {/* Section D — Our Approach */}
      <div className="bg-muted/30">
        <Section>
          <Container>
            <AboutApproach />
          </Container>
        </Section>
      </div>

      {/* Section E — The Kampmax Ecosystem */}
      <Section>
        <Container>
          <AboutEcosystem />
        </Container>
      </Section>

      {/* Section F — Who Kampmax Serves */}
      <div className="bg-muted/30">
        <Section>
          <Container>
            <AboutWhoWeServe />
          </Container>
        </Section>
      </div>

      {/* Section G — Our Direction */}
      <Section>
        <Container>
          <AboutDirection />
        </Container>
      </Section>

      {/* Section H — Final CTA */}
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
