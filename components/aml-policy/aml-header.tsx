import { Calendar, Scale } from "lucide-react"

import { legalConfig } from "@/config/legal"

export function AmlHeader() {
  const { lastUpdated, effectiveDate } = legalConfig.amlPolicy

  return (
    <header className="mb-10 sm:mb-12 border-b border-border/80 pb-8 sm:pb-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Scale className="size-4" aria-hidden="true" />
        </span>
        <span className="text-2xs font-semibold uppercase tracking-wider text-muted-foreground">
          Legal & Transparency
        </span>
      </div>

      <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
        Anti-Money Laundering (AML) Policy
      </h1>

      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 font-normal">
        This document outlines Kampmax&apos;s compliance framework, risk-based safeguards, and standards designed to detect, mitigate, and prevent money laundering, fraud, terrorist financing, and illicit financial activities across our platform.
      </p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Calendar className="size-3.5" aria-hidden="true" />
          <span>Last Updated: <strong className="font-medium text-foreground">{lastUpdated}</strong></span>
        </div>
        {effectiveDate && (
          <div className="flex items-center gap-1.5">
            <span className="text-border" aria-hidden="true">•</span>
            <span>Effective Date: <strong className="font-medium text-foreground">{effectiveDate}</strong></span>
          </div>
        )}
      </div>
    </header>
  )
}
