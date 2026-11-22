import { Flag, ShieldCheck } from "lucide-react"

import { Container } from "@/components/layout/container"
import { contactConfig } from "@/config/contact"
import { siteConfig } from "@/config/site"

type SafetyTipsProps = {
  title: string
  tips: string[]
  /** What is being reported, for the email subject: a product name, a listing title. */
  reportName: string
  /** Path of the page being reported, so the team can find it. */
  path: string
}

/** Safety tips for a visitor about to deal with someone, with a one-tap way to report the page. */
export function SafetyTips({ title, tips, reportName, path }: SafetyTipsProps) {
  const url = `${siteConfig.url}${path}`
  const subject = encodeURIComponent(`Report listing: ${reportName}`)
  const body = encodeURIComponent(`I want to report this listing: ${url}

Reason:
`)

  return (
    <Container className="pb-10">
      <section
        aria-labelledby="safety-tips"
        className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6"
      >
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
          <h2 id="safety-tips" className="font-heading text-base font-semibold text-foreground">
            {title}
          </h2>
        </div>
        <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          {tips.map((tip) => (
            <li key={tip} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
              {tip}
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${contactConfig.supportEmail}?subject=${subject}&body=${body}`}
          data-track="report-listing"
          className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <Flag className="size-4" aria-hidden="true" />
          Report this listing
        </a>
      </section>
    </Container>
  )
}
