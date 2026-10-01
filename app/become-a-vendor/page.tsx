import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { VendorAudiences } from "@/components/become-a-vendor/vendor-audiences"
import { VendorCampusAdvantage } from "@/components/become-a-vendor/vendor-campus-advantage"
import { VendorChoosePath } from "@/components/become-a-vendor/vendor-choose-path"
import { VendorExperiences } from "@/components/become-a-vendor/vendor-experiences"
import { VendorFaq } from "@/components/become-a-vendor/vendor-faq"
import { VendorFinalCta } from "@/components/become-a-vendor/vendor-final-cta"
import { VendorHero } from "@/components/become-a-vendor/vendor-hero"
import { VendorHowItWorks } from "@/components/become-a-vendor/vendor-how-it-works"
import { VendorShowcase } from "@/components/become-a-vendor/vendor-showcase"
import { VendorTrustQuality } from "@/components/become-a-vendor/vendor-trust-quality"

export const metadata: Metadata = {
  title: "Become a Vendor or Service Provider",
  description:
    "Turn what you sell or what you know into something campus communities can discover. Join Kampmax as a product vendor or skilled service provider.",
  alternates: {
    canonical: "/become-a-vendor",
  },
  openGraph: {
    title: "Become a Vendor or Service Provider — Kampmax",
    description:
      "Turn what you sell or what you know into something campus communities can discover. Join Kampmax as a product vendor or skilled service provider.",
    url: "/become-a-vendor",
  },
}

export default function BecomeAVendorPage() {
  return (
    <>
      {/* 1. Hero */}
      <Container>
        <VendorHero />
      </Container>

      {/* 2. Choose Your Path (Sell Products vs. Offer Services) */}
      <div className="bg-muted/30">
        <Section>
          <Container>
            <VendorChoosePath />
          </Container>
        </Section>
      </div>

      {/* 3. Who Can Join */}
      <Section>
        <Container>
          <VendorAudiences />
        </Container>
      </Section>

      {/* 4. What You Can Showcase */}
      <div className="bg-muted/30">
        <Section>
          <Container>
            <VendorShowcase />
          </Container>
        </Section>
      </div>

      {/* 5. How It Works */}
      <Section>
        <Container>
          <VendorHowItWorks />
        </Container>
      </Section>

      {/* 6. Vendor & Service Provider Experience */}
      <div className="bg-muted/30">
        <Section>
          <Container>
            <VendorExperiences />
          </Container>
        </Section>
      </div>

      {/* 7. Campus-Focused Advantage */}
      <Section>
        <Container>
          <VendorCampusAdvantage />
        </Container>
      </Section>

      {/* 8. Trust & Quality Expectations */}
      <div className="bg-muted/30">
        <Section>
          <Container>
            <VendorTrustQuality />
          </Container>
        </Section>
      </div>

      {/* 9. Frequently Asked Questions */}
      <Section>
        <Container>
          <VendorFaq />
        </Container>
      </Section>

      {/* 10. Final Conversion Section */}
      <div className="bg-muted/30">
        <Section>
          <Container>
            <VendorFinalCta />
          </Container>
        </Section>
      </div>
    </>
  )
}
