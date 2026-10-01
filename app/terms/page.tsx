import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { TermsHeader } from "@/components/terms/terms-header"
import { TermsJsonLd } from "@/components/terms/terms-json-ld"
import { TermsSections } from "@/components/terms/terms-sections"
import { TermsToc } from "@/components/terms/terms-toc"

const description =
  "Read the Kampmax Terms of Service governing platform use, marketplace listings, services, user accounts, and events."

export const metadata: Metadata = {
  title: "Terms of Service",
  description,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Kampmax",
    description,
    url: "/terms",
  },
}

export default function TermsPage() {
  return (
    <>
      <Container className="py-10 sm:py-16">
        <article id="top" className="mx-auto max-w-3xl scroll-mt-16">
          <TermsHeader />
          <TermsToc />
          <TermsSections />
        </article>
      </Container>

      <TermsJsonLd />
    </>
  )
}
