import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { PrivacyHeader } from "@/components/privacy/privacy-header"
import { PrivacySections } from "@/components/privacy/privacy-sections"
import { PrivacyToc } from "@/components/privacy/privacy-toc"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Kampmax Privacy Policy to understand how we handle information in connection with our public website and communications.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Kampmax",
    description:
      "Read the Kampmax Privacy Policy to understand how we handle information in connection with our public website and communications.",
    url: "/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <Container className="py-10 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <PrivacyHeader />
        <PrivacyToc />
        <PrivacySections />
      </article>
    </Container>
  )
}
