import { CtaBand } from "@/components/shared/cta-band"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

/** Closes the accommodation pages with an invitation to agents, who supply the listings. */
function AgentCta() {
  return (
    <Section>
      <Container>
        <CtaBand
          title="Have rooms to let near campus?"
          description="List your property on Kampmax and reach students who are looking right now. Agents are verified, and you stay in control of who you reply to."
          primary={{ label: "Become an agent", href: "/become-an-agent" }}
          note="Verified agents only. Pay a small fee per listing."
          secondary={{ label: "How it works", href: "/become-an-agent#how-it-works" }}
        />
      </Container>
    </Section>
  )
}

export { AgentCta }
