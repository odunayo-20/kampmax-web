import type { Metadata, Viewport } from "next"
import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { CookieConsent } from "@/components/legal/cookie-consent"
import { Analytics } from "@/components/shared/analytics"
import { siteConfig } from "@/config/site"

import "./globals.css"

// Body text. `--font-sans` in globals.css points at this variable.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

// Headings. `--font-heading` in globals.css points at this variable.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  // Only a few small code snippets on the legal pages use it, so it is not
  // worth preloading on every page.
  preload: false,
})

// Colours the browser bar on phones; same as `theme_color` in site.webmanifest.
export const viewport: Viewport = { themeColor: "#1769E0" }

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_NG",
    // The preview image comes from app/opengraph-image.tsx and
    // app/twitter-image.tsx; setting `images` here would override them.
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Browser extensions (Grammarly and similar) add attributes to <body> before
          React loads; without this, React logs a hydration mismatch for them. It only
          covers <body>'s own attributes, not anything rendered inside it. */}
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        {/* First thing a keyboard or screen-reader user reaches: skips the menu. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
