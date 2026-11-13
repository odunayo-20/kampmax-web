"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

import {
  COOKIE_PREFERENCES_CHANGED_EVENT,
  GA_MEASUREMENT_ID,
  hasAnalyticsConsent,
  isValidMeasurementId,
  track,
} from "@/lib/analytics"

/**
 * Loads Google Analytics only after the visitor accepts analytics cookies, and
 * turns on click tracking for any element marked with `data-track`:
 *
 *   <Link data-track="cta_click" data-track-location="hero_join" ... />
 *
 * Renders nothing when no measurement ID is configured.
 */
export function Analytics() {
  const enabled = isValidMeasurementId(GA_MEASUREMENT_ID)
  const [consented, setConsented] = useState(false)

  // Follow the cookie banner: the choice made now, and any later change.
  useEffect(() => {
    if (!enabled) return
    const sync = () => {
      const allowed = hasAnalyticsConsent()
      setConsented(allowed)
      // GA's documented switch for stopping collection after consent is withdrawn.
      ;(window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = !allowed
    }
    sync()
    window.addEventListener(COOKIE_PREFERENCES_CHANGED_EVENT, sync)
    return () => window.removeEventListener(COOKIE_PREFERENCES_CHANGED_EVENT, sync)
  }, [enabled])

  // One delegated listener covers every marked link, including server-rendered ones.
  useEffect(() => {
    if (!enabled || !consented) return
    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-track]")
      const name = target?.dataset.track
      if (!target || !name) return
      track(name, {
        location: target.dataset.trackLocation ?? "",
        path: window.location.pathname,
      })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [enabled, consented])

  if (!enabled || !consented) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  )
}
