import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CampusDiscovery } from "@/components/how-it-works/campus-discovery"
import { EcosystemMap } from "@/components/how-it-works/ecosystem-map"
import { ExperienceJourney } from "@/components/how-it-works/experience-journey"
import { FinalCta } from "@/components/how-it-works/final-cta"
import { ForFreelancers } from "@/components/how-it-works/for-freelancers"
import { ForOrganizers } from "@/components/how-it-works/for-organizers"
import { ForStudents } from "@/components/how-it-works/for-students"
import { ForVendors } from "@/components/how-it-works/for-vendors"
import { Hero } from "@/components/how-it-works/hero"
import { WhatYouCanDo } from "@/components/how-it-works/what-you-can-do"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} — How It Works` },
  description:
    "See exactly what you can do on Kampmax — discover the marketplace, services, jobs, freelancers, and events connected around your campus.",
}

export default function HowItWorksPage() {
  return (
    <>
      <Container>
        <Hero />
      </Container>

      <Section>
        <Container>
          <EcosystemMap />
        </Container>
      </Section>

      <div className="bg-muted/30">
        <Section id="what-you-can-do" className="scroll-mt-16">
          <Container>
            <WhatYouCanDo />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <ExperienceJourney />
        </Container>
      </Section>

      <div className="bg-muted/30">
        <Section>
          <Container>
            <ForStudents />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <ForVendors />
        </Container>
      </Section>

      <div className="bg-muted/30">
        <Section>
          <Container>
            <ForFreelancers />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <ForOrganizers />
        </Container>
      </Section>

      <div className="bg-muted/30">
        <Section>
          <Container>
            <CampusDiscovery />
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
