import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { ContactBusinessCta } from "@/components/contact/contact-business-cta"
import { ContactFaq } from "@/components/contact/contact-faq"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactJsonLd } from "@/components/contact/contact-json-ld"
import { ContactPathways } from "@/components/contact/contact-pathways"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Kampmax team for general questions, business opportunities, vendor partnerships, or platform support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Kampmax — The Campus Ecosystem, Connected",
    description:
      "Get in touch with the Kampmax team for general questions, business opportunities, vendor partnerships, or platform support.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden border-b border-border bg-linear-to-b from-primary-50 via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-[-10%] size-96 rounded-full bg-primary-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-[-10%] size-80 rounded-full bg-accent-100/60 blur-3xl"
        />
        <Container className="relative">
          <ContactHero />
        </Container>
      </div>

      {/* Pathways Section */}
      <div className="border-y border-border bg-primary-50">
        <Section>
          <Container>
            <ContactPathways />
          </Container>
        </Section>
      </div>

      {/* Main Contact Form & Sidebar Section */}
      <Section id="inquiry-form" className="scroll-mt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="mb-6 flex flex-col gap-1.5">
                <span className="text-2xs font-semibold uppercase tracking-wider text-primary">
                  Send a Message
                </span>
                <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                  Submit an inquiry to our team
                </h2>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Fill out the form below with your details and message. We will review
                  your request and direct it to the appropriate team.
                </p>
              </div>

              <ContactForm />
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5 xl:col-span-4">
              <ContactBusinessCta />

              <div className="flex flex-col gap-3 rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
                <h4 className="font-heading text-sm font-semibold text-foreground">
                  Response Guidelines
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Inquiries are directed according to selected inquiry type. Business,
                  vendor, and partnership inquiries are reviewed on a rolling basis.
                </p>
                <div className="border-t border-border/60 pt-3 text-3xs text-muted-foreground">
                  Need immediate campus services? Explore the{" "}
                  <Link href="/services" className="font-medium text-primary hover:underline">
                    Services Directory
                  </Link>{" "}
                  or{" "}
                  <Link href="/marketplace" className="font-medium text-primary hover:underline">
                    Marketplace
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <div className="border-y border-border bg-neutral-50">
        <Section>
          <Container>
            <ContactFaq />
          </Container>
        </Section>
      </div>

      <ContactJsonLd />
    </>
  )
}
