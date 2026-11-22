import Link from "next/link"
import { ArrowRight, MessageCircle, MessageSquare, ShieldCheck } from "lucide-react"

import { HeroCardStack } from "@/components/shared/hero-card-stack"
import { PageHero, heroActionClass } from "@/components/shared/page-hero"
import { contactConfig } from "@/config/contact"
import { contactPathways } from "@/lib/contact"

const points = [
  { icon: MessageSquare, label: "Routed to the right team" },
  { icon: ShieldCheck, label: "No account needed to write" },
]

function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact & Inquiries"
      title={
        <>
          Have a question or want to{" "}
          <span className="text-gradient-brand">work with Kampmax?</span>
        </>
      }
      description="Whether you are a student exploring the platform, a local business or artisan wanting to reach campus audiences, an organization seeking a partnership, or simply need help, we are here to assist."
      actions={
        <>
        <Link href="#inquiry-form" className={heroActionClass("primary")}>
          Send a Message
          <ArrowRight />
        </Link>
        <a
          href={contactConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-track="contact-whatsapp"
          className={heroActionClass("ghost")}
        >
          <MessageCircle />
          Chat on WhatsApp
        </a>
        </>
      }
      points={points}
    >
      <HeroCardStack
        items={contactPathways.slice(0, 4).map((pathway) => ({
          icon: pathway.icon,
          title: pathway.title,
          description: pathway.description,
        }))}
      />
    </PageHero>
  )
}

export { ContactHero }
