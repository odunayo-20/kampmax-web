"use client"

import { Sliders } from "lucide-react"

import { openCookiePreferences } from "@/components/legal/cookie-consent"
import { Button } from "@/components/ui/button"

export function CookiePreferencesButton() {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={openCookiePreferences}
      className="inline-flex items-center gap-2 border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary font-medium"
    >
      <Sliders className="size-4" aria-hidden="true" />
      <span>Manage Cookie Preferences</span>
    </Button>
  )
}
