import { contactConfig } from "@/config/contact"
import { siteConfig } from "@/config/site"

/**
 * ContactPage + Organization markup. Contact points are only included when
 * actually configured via env vars — an empty `contactConfig` value means
 * unset, so we never emit a fabricated email or phone number.
 */
export function ContactJsonLd() {
  const contactPoints = [
    contactConfig.email && {
      "@type": "ContactPoint",
      email: contactConfig.email,
      contactType: "customer service",
    },
    contactConfig.businessEmail && {
      "@type": "ContactPoint",
      email: contactConfig.businessEmail,
      contactType: "sales",
    },
    contactConfig.supportEmail && {
      "@type": "ContactPoint",
      email: contactConfig.supportEmail,
      contactType: "technical support",
    },
  ].filter(Boolean)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Kampmax",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      ...(contactConfig.phone ? { telephone: contactConfig.phone } : {}),
      ...(contactPoints.length ? { contactPoint: contactPoints } : {}),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}
