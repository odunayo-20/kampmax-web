import { Mail, MessageCircle, Phone } from "lucide-react"

import { contactConfig } from "@/config/contact"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

type Tone = "light" | "dark"

/** Brand-new tab links to official profiles. Only profiles that are set show. */
export function SocialLinks({ tone = "light", className }: { tone?: Tone; className?: string }) {
  if (siteConfig.socialLinks.length === 0) return null
  return (
    <ul className={cn("flex flex-wrap gap-x-4 gap-y-1", className)} aria-label="Kampmax on social media">
      {siteConfig.socialLinks.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer me"
            className={cn(
              "inline-flex min-h-11 items-center text-sm font-medium transition-colors",
              tone === "dark"
                ? "text-primary-100 hover:text-accent-400"
                : "text-primary hover:underline"
            )}
          >
            {s.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

/** WhatsApp, call and email, with 44px tap targets. */
export function ContactChannels({ tone = "light", className }: { tone?: Tone; className?: string }) {
  const link = cn(
    "inline-flex min-h-11 items-center gap-2 text-sm font-medium transition-colors",
    tone === "dark" ? "text-primary-100 hover:text-accent-400" : "text-foreground hover:text-primary"
  )
  return (
    <ul className={cn("flex flex-col", className)}>
      <li>
        <a
          href={contactConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-track="contact-whatsapp"
          className={link}
        >
          <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
          Chat on WhatsApp
        </a>
      </li>
      <li>
        <a href={`tel:${contactConfig.phone}`} data-track="contact-call" className={link}>
          <Phone className="size-4 shrink-0" aria-hidden="true" />
          {contactConfig.phone}
        </a>
      </li>
      <li>
        <a href={`mailto:${contactConfig.email}`} data-track="contact-email" className={link}>
          <Mail className="size-4 shrink-0" aria-hidden="true" />
          {contactConfig.email}
        </a>
      </li>
    </ul>
  )
}
