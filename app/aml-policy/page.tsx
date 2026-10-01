import type { Metadata } from "next"

import { AmlHeader } from "@/components/aml-policy/aml-header"
import { AmlJsonLd } from "@/components/aml-policy/aml-json-ld"
import { AmlSections } from "@/components/aml-policy/aml-sections"
import { AmlToc } from "@/components/aml-policy/aml-toc"
import { Container } from "@/components/layout/container"

const description =
  "Read the Kampmax Anti-Money Laundering (AML) and Counter-Terrorist Financing Policy outlining our compliance standards, risk-based approach, and transaction monitoring."

export const metadata: Metadata = {
  title: "Anti-Money Laundering (AML) Policy",
  description,
  alternates: {
    canonical: "/aml-policy",
  },
  openGraph: {
    title: "Anti-Money Laundering (AML) Policy | Kampmax",
    description,
    url: "/aml-policy",
  },
}

export default function AmlPolicyPage() {
  return (
    <>
      <Container className="py-10 sm:py-16">
        <article id="top" className="mx-auto max-w-3xl scroll-mt-16">
          <AmlHeader />
          <AmlToc />
          <AmlSections />
        </article>
      </Container>

      <AmlJsonLd />
    </>
  )
}
