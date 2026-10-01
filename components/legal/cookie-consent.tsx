"use client"

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { Check, Cookie, Shield, Sliders, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export const COOKIE_PREFERENCES_STORAGE_KEY = "kampmax_cookie_preferences"
export const COOKIE_CONSENT_EVENT = "kampmax:open-cookie-preferences"

export interface CookiePreferences {
  essential: true // Always true
  analytics: boolean
  marketing: boolean
  timestamp: string
}

const emptySubscribe = () => () => {}

function useIsMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}

function getStoredPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(COOKIE_PREFERENCES_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CookiePreferences) : null
  } catch {
    return null
  }
}

/**
 * Utility helper to programmatically open the Cookie Preferences modal
 * from any page or link (e.g. from the Cookie Policy page or footer).
 */
export function openCookiePreferences(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT))
  }
}

export function CookieConsent() {
  const isMounted = useIsMounted()
  const [showModal, setShowModal] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Local state for modal toggles
  const [analyticsConsent, setAnalyticsConsent] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)

  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  // Determine whether banner should show (no preferences saved yet and not dismissed this session)
  const storedPreferences = isMounted ? getStoredPreferences() : null
  const shouldShowBanner = isMounted && !storedPreferences && !hasInteracted && !showModal

  // Listen for programmatic event to open modal
  useEffect(() => {
    const handleOpen = () => {
      const stored = getStoredPreferences()
      if (stored) {
        setAnalyticsConsent(Boolean(stored.analytics))
        setMarketingConsent(Boolean(stored.marketing))
      }
      setShowModal(true)
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, handleOpen)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, handleOpen)
  }, [])

  // Save preferences to localStorage
  const savePreferences = useCallback(
    (analytics: boolean, marketing: boolean) => {
      const prefs: CookiePreferences = {
        essential: true,
        analytics,
        marketing,
        timestamp: new Date().toISOString(),
      }
      try {
        localStorage.setItem(COOKIE_PREFERENCES_STORAGE_KEY, JSON.stringify(prefs))
      } catch {
        // storage disabled or quota exceeded
      }
      setAnalyticsConsent(analytics)
      setMarketingConsent(marketing)
      setHasInteracted(true)
      setShowModal(false)
    },
    []
  )

  const handleAcceptAll = () => {
    savePreferences(true, false) // Marketing is currently not deployed on Kampmax
  }

  const handleAcceptEssential = () => {
    savePreferences(false, false)
  }

  const handleSaveCustom = () => {
    savePreferences(analyticsConsent, marketingConsent)
  }

  // Trap focus and handle ESC key inside modal
  useEffect(() => {
    if (!showModal) {
      if (previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
      return
    }

    previousActiveElement.current = document.activeElement as HTMLElement

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false)
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusableElements.length === 0) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [showModal])

  if (!isMounted) return null

  return (
    <>
      {/* ── Cookie Consent Floating Banner ── */}
      {shouldShowBanner && (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-3 right-3 left-3 z-50 mx-auto max-w-3xl animate-in fade-in-0 slide-in-from-bottom-5 duration-300 sm:bottom-6 sm:right-6 sm:left-6"
        >
          <div className="rounded-2xl border border-border/80 bg-background/95 p-5 shadow-2xl backdrop-blur-md dark:bg-card/95 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Cookie className="size-5" aria-hidden="true" />
                </span>
                <div className="space-y-1.5">
                  <h2 className="font-heading text-base font-semibold text-foreground">
                    Cookie &amp; Privacy Preferences
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Kampmax uses strictly necessary cookies and essential client storage to deliver secure browsing, maintain layout settings, and safeguard platform integrity. We do not use third-party advertising cookies or cross-site tracking pixels on our public website. Learn more in our{" "}
                    <Link
                      href="/cookie-policy"
                      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                    >
                      Cookie Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                    >
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-end gap-2.5 pt-3 border-t border-border/60">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  const stored = getStoredPreferences()
                  if (stored) {
                    setAnalyticsConsent(Boolean(stored.analytics))
                    setMarketingConsent(Boolean(stored.marketing))
                  }
                  setShowModal(true)
                }}
                className="text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                <Sliders className="size-3.5" aria-hidden="true" />
                <span>Customize Choices</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAcceptEssential}
                className="text-xs font-medium"
              >
                Essential Only
              </Button>
              <Button
                type="button"
                variant="default"
                size="sm"
                onClick={handleAcceptAll}
                className="text-xs font-medium"
              >
                Accept All
              </Button>
            </div>
          </div>
        </aside>
      )}

      {/* ── Cookie Preferences Modal ── */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
          aria-describedby="cookie-preferences-description"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in-0 duration-200"
        >
          <div
            ref={modalRef}
            className="w-full max-w-xl max-h-[90vh] flex flex-col rounded-2xl border border-border bg-background shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border/70 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sliders className="size-4" aria-hidden="true" />
                </span>
                <h2
                  id="cookie-preferences-title"
                  className="font-heading text-lg font-bold text-foreground"
                >
                  Cookie Preferences
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Close cookie preferences modal"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 text-sm">
              <p
                id="cookie-preferences-description"
                className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
              >
                Configure which cookie and storage categories you permit Kampmax to use. Strictly necessary technologies are required for core operations and cannot be deactivated.
              </p>

              {/* Category 1: Strictly Necessary */}
              <div className="rounded-xl border border-border/80 bg-muted/40 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="size-4 text-primary" aria-hidden="true" />
                    <span className="font-semibold text-foreground">Strictly Necessary</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-2xs font-semibold text-primary">
                    <Check className="size-3" aria-hidden="true" />
                    Always Active
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Required for web security, load balancing, fraud detection, and saving your consent preferences. Disabling these would prevent the website from functioning properly.
                </p>
              </div>

              {/* Category 2: Performance & Analytics */}
              <div className="rounded-xl border border-border/80 bg-card p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="toggle-analytics"
                    className="cursor-pointer font-semibold text-foreground flex items-center gap-2"
                  >
                    <span>Performance &amp; Diagnostics</span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="toggle-analytics"
                      checked={analyticsConsent}
                      onChange={(e) => setAnalyticsConsent(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-neutral-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Allows anonymous performance monitoring and technical diagnostics to help us improve page load speeds and identify broken components. No personal profiling is conducted.
                </p>
              </div>

              {/* Category 3: Marketing & Advertising */}
              <div className="rounded-xl border border-border/80 bg-muted/30 p-4 space-y-2 opacity-80">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">
                    Marketing &amp; Advertising
                  </span>
                  <span className="inline-flex items-center rounded-full bg-neutral-200 dark:bg-neutral-800 px-2.5 py-0.5 text-2xs font-medium text-muted-foreground">
                    Not in Use
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Kampmax does not deploy third-party advertising cookies, conversion pixels, or cross-site tracking networks on this website.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 bg-muted/20 px-6 py-4">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAcceptEssential}
                className="text-xs font-medium"
              >
                Reject Optional
              </Button>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleSaveCustom}
                  className="text-xs font-medium"
                >
                  Save Preferences
                </Button>
                <Button
                  type="button"
                  variant="default"
                  size="sm"
                  onClick={handleAcceptAll}
                  className="text-xs font-medium"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
