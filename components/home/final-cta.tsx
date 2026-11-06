import { CtaBand } from "@/components/shared/cta-band"
import { siteConfig } from "@/config/site"

function FinalCta() {
  return (
    <CtaBand
      title="Ready to discover what's possible?"
      description="Join Kampmax to start discovering what's happening around your campus."
      primary={{ label: "Join Kampmax", href: siteConfig.registerUrl }}
      secondary={{ label: "Explore Kampmax", href: "#discover" }}
    />
  )
}

export { FinalCta }
