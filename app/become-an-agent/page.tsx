import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { AgentFaq } from "@/components/become-an-agent/agent-faq"
import { AgentFaqJsonLd } from "@/components/become-an-agent/agent-faq-json-ld"
import { AgentFinalCta } from "@/components/become-an-agent/agent-final-cta"
import { AgentHero } from "@/components/become-an-agent/agent-hero"
import { AgentHowItWorks } from "@/components/become-an-agent/agent-how-it-works"
import { AgentPricing } from "@/components/become-an-agent/agent-pricing"
import { AgentRequirements } from "@/components/become-an-agent/agent-requirements"
import { getListingPackage } from "@/lib/accommodation-package"

export const metadata: Metadata = {
  title: "Become an Accommodation Agent",
  description:
    "List rooms and apartments near campus on Kampmax Accommodation. Get verified, publish your listings, and reach students who are looking for somewhere to live.",
  alternates: {
    canonical: "/become-an-agent",
  },
  openGraph: {
    title: "Become an Accommodation Agent | Kampmax",
    description:
      "List rooms and apartments near campus on Kampmax Accommodation. Get verified, publish your listings, and reach students who are looking for somewhere to live.",
    url: "/become-an-agent",
  },
}

export default async function BecomeAnAgentPage() {
  // Pricing is shown from the live package; if it cannot be read, the page says so in words.
  const listingPackage = await getListingPackage()

  return (
    <>
      <AgentHero />

      <Section>
        <Container>
          <AgentHowItWorks />
        </Container>
      </Section>

      <div className="border-y border-border bg-primary-50">
        <Section>
          <Container>
            <AgentRequirements />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <AgentPricing listingPackage={listingPackage} />
        </Container>
      </Section>

      <div className="border-y border-border bg-neutral-50">
        <Section>
          <Container>
            <AgentFaq />
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <AgentFinalCta />
        </Container>
      </Section>

      <AgentFaqJsonLd />
    </>
  )
}
