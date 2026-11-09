import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { AboutApproach } from "@/components/about/about-approach"
import { AboutDirection } from "@/components/about/about-direction"
import { AboutEcosystem } from "@/components/about/about-ecosystem"
import { AboutFinalCta } from "@/components/about/about-final-cta"
import { AboutHero } from "@/components/about/about-hero"
import { AboutJsonLd } from "@/components/about/about-json-ld"
import { AboutValues } from "@/components/about/about-values"
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
    title: "About Kampmax , The Campus Ecosystem, Connected",
    description:
      "Learn what Kampmax is, why it exists, who it serves, and our direction building a connected campus ecosystem.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Section A , Hero */}
      <AboutHero />

      {/* Section B , What Is Kampmax? */}
      <div className="border-y border-border bg-primary-50">
        <Section>
          <Container>
            <AboutWhatIsKampmax />
          </Container>
        </Section>
      </div>

      {/* Section C , Why Kampmax Exists */}
      <Section>
        <Container>
          <AboutWhyExists />
        </Container>
      </Section>

      {/* Section D , Our Approach */}
      <div className="border-y border-border bg-neutral-50">
        <Section>
          <Container>
            <AboutApproach />
          </Container>
        </Section>
      </div>

      {/* Section D.5 , Our Values */}
      <Section>
        <Container>
          <AboutValues />
        </Container>
      </Section>

      {/* Section E , The Kampmax Ecosystem */}
      <div className="border-y border-border bg-primary-50">
        <Section>
          <Container>
            <AboutEcosystem />
          </Container>
        </Section>
      </div>

      {/* Section F , Who Kampmax Serves */}
      <Section>
        <Container>
          <AboutWhoWeServe />
        </Container>
      </Section>

      {/* Section G , Our Direction */}
      <div className="border-y border-border bg-neutral-50">
        <Section>
          <Container>
            <AboutDirection />
          </Container>
        </Section>
      </div>

      {/* Section H , Final CTA */}
      <Section>
        <Container>
          <AboutFinalCta />
        </Container>
      </Section>

      <AboutJsonLd />
    </>
  )
}
