import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { RefundHeader } from "@/components/refund-policy/refund-header"
import { RefundJsonLd } from "@/components/refund-policy/refund-json-ld"
import { RefundSections } from "@/components/refund-policy/refund-sections"
import { RefundToc } from "@/components/refund-policy/refund-toc"

const description =
  "Read the Kampmax Refund & Cancellation Policy for marketplace purchases, freelance services, digital items, and event tickets."

export const metadata: Metadata = {
  title: "Refund Policy",
  description,
  alternates: {
    canonical: "/refund-policy",
  },
  openGraph: {
    title: "Refund Policy | Kampmax",
    description,
    url: "/refund-policy",
  },
}

export default function RefundPolicyPage() {
  return (
    <>
      <Container className="py-10 sm:py-16">
        <article id="top" className="mx-auto max-w-3xl scroll-mt-16">
          <RefundHeader />
          <RefundToc />
          <RefundSections />
        </article>
      </Container>

      <RefundJsonLd />
    </>
  )
}
