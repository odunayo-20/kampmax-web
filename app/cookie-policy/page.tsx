import type { Metadata } from "next"

import { CookieHeader } from "@/components/cookie-policy/cookie-header"
import { CookieJsonLd } from "@/components/cookie-policy/cookie-json-ld"
import { CookieSections } from "@/components/cookie-policy/cookie-sections"
import { CookieToc } from "@/components/cookie-policy/cookie-toc"
import { Container } from "@/components/layout/container"

const description =
  "Read the Kampmax Cookie Policy to understand how cookies and client storage technologies are used on our public website and how to manage your preferences."

export const metadata: Metadata = {
  title: "Cookie Policy",
  description,
  alternates: {
    canonical: "/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Kampmax",
    description,
    url: "/cookie-policy",
  },
}

export default function CookiePolicyPage() {
  return (
    <>
      <Container className="py-10 sm:py-16">
        <article id="top" className="mx-auto max-w-3xl scroll-mt-16">
          <CookieHeader />
          <CookieToc />
          <CookieSections />
        </article>
      </Container>

      <CookieJsonLd />
    </>
  )
}
