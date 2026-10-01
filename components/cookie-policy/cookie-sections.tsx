import Link from "next/link"
import { ArrowRight, ArrowUp, CheckCircle2, Cookie, HelpCircle, Info, Lock, Mail, Shield, Sliders } from "lucide-react"

import { CookiePreferencesButton } from "@/components/cookie-policy/cookie-preferences-button"
import { contactConfig } from "@/config/contact"

export function CookieSections() {
  const contactEmail = contactConfig.privacyEmail || contactConfig.email || contactConfig.supportEmail

  return (
    <div className="space-y-12 text-foreground/90 font-sans leading-relaxed">
      {/* 1. What Cookies Are */}
      <section id="what-cookies-are" className="scroll-mt-20 border-t border-border/40 pt-8 first:border-t-0 first:pt-0">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          1. What Cookies Are
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Cookies are small data files stored on your computer, smartphone, or tablet when you visit a website. They are widely used by online services to make web pages function properly, remember user actions, and provide necessary security safeguards.
          </p>
          <p>
            In addition to standard HTTP cookies, modern websites may utilize related client-side storage technologies, such as browser local storage (<code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground font-mono">localStorage</code>), session storage, and cache storage. Throughout this policy, references to &ldquo;cookies&rdquo; encompass these related storage mechanisms.
          </p>
          <div className="rounded-xl border border-primary/20 bg-primary/3 p-4 sm:p-5 text-sm sm:text-base text-foreground">
            <strong className="font-semibold text-primary">Public Website Notice:</strong>{" "}
            This Cookie Policy applies specifically to the Kampmax public website (<code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground font-mono">kampmax-web</code>). Our public website is strictly focused on campus discovery, community resources, and platform information.
          </div>
        </div>
      </section>

      {/* 2. How Kampmax Uses Cookies */}
      <section id="how-kampmax-uses-cookies" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          2. How Kampmax Uses Cookies
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax operates with a privacy-first approach. We classify cookies into functional categories to maintain complete transparency about their operational purpose:
          </p>

          <div className="space-y-3">
            <div className="rounded-xl border border-border/70 bg-card p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-base font-semibold text-foreground flex items-center gap-2">
                  <Shield className="size-4 text-primary" aria-hidden="true" />
                  <span>A. Strictly Necessary &amp; Security Cookies</span>
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-2xs font-semibold text-primary">
                  <CheckCircle2 className="size-3" aria-hidden="true" />
                  Always Active
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These technologies are essential for the public website to render correctly, route web traffic securely, prevent malicious bot attacks, protect against cross-site request forgery, and store your selected cookie consent preferences. Because the website cannot function properly without them, they cannot be switched off in our preference center.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-base font-semibold text-foreground flex items-center gap-2">
                  <Lock className="size-4 text-primary" aria-hidden="true" />
                  <span>B. Authentication &amp; Session Storage</span>
                </h3>
                <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-2xs font-medium text-muted-foreground">
                  Future Platform Scope
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The public website does not currently require visitor login or maintain user sessions. When authenticated Kampmax application portals (such as student accounts, vendor management consoles, or employer dashboards) are accessed, secure session tokens and cryptographic authentication cookies will be used to maintain secure login sessions.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-base font-semibold text-foreground flex items-center gap-2">
                  <Sliders className="size-4 text-primary" aria-hidden="true" />
                  <span>C. Preference &amp; Interface Storage</span>
                </h3>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-2xs font-semibold text-primary">
                  Active as Needed
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Preference technologies enable the site to remember non-essential choices you make, such as dismissing informational banners or preserving interface preferences during your visit.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-base font-semibold text-foreground flex items-center gap-2">
                  <Info className="size-4 text-muted-foreground" aria-hidden="true" />
                  <span>D. Performance &amp; Diagnostic Analytics</span>
                </h3>
                <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-2xs font-medium text-muted-foreground">
                  Optional / Future
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The public website does not currently run intrusive tracking analytics. If aggregate performance diagnostic tools are deployed to measure page rendering speeds or identify broken links, visitors will be provided with explicit controls to opt in or opt out.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-base font-semibold text-foreground flex items-center gap-2">
                  <Cookie className="size-4 text-muted-foreground" aria-hidden="true" />
                  <span>E. Marketing &amp; Behavioral Advertising</span>
                </h3>
                <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-2xs font-medium text-muted-foreground">
                  Not in Use
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kampmax does not deploy third-party advertising cookies, retargeting pixels, social media tracking beacons, or cross-site commercial profiling on this public website. We do not sell your browsing history to advertising data brokers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Types of Cookies */}
      <section id="types-of-cookies" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          3. Types of Cookies
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            Cookies used in modern web architecture are categorized based on their duration and the party that manages them:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border/70 bg-card/60 p-4 space-y-1.5">
              <h3 className="font-heading text-sm font-semibold text-foreground">Session Cookies</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Temporary cookies that exist only during an active browser session. They are automatically cleared when you close your web browser or navigate away.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card/60 p-4 space-y-1.5">
              <h3 className="font-heading text-sm font-semibold text-foreground">Persistent Cookies</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Cookies that remain on your device for a predetermined period or until manually deleted. They allow us to recognize returning devices and remember user consent settings.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card/60 p-4 space-y-1.5">
              <h3 className="font-heading text-sm font-semibold text-foreground">First-Party Cookies</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Cookies set and read directly by the Kampmax domain you are currently visiting. These are managed directly under our administrative control.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card/60 p-4 space-y-1.5">
              <h3 className="font-heading text-sm font-semibold text-foreground">Third-Party Cookies</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Cookies placed by external third parties (such as third-party ad networks). As noted, Kampmax does not deploy third-party advertising cookies on our public site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Cookies Are Used */}
      <section id="why-cookies-are-used" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          4. Why Cookies Are Used
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Where cookies or client storage are utilized on the Kampmax website, they serve specific, legitimate purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>
              <strong>Platform Security:</strong> Verifying legitimate browser requests, defending against automated denial-of-service attempts, and protecting web endpoints.
            </li>
            <li>
              <strong>Authentication &amp; Session Integrity:</strong> Preparing platform infrastructure for authenticated accounts and preserving user state across page loads.
            </li>
            <li>
              <strong>Preserving User Preferences:</strong> Retaining user-selected preferences, such as recording your cookie consent configuration so you are not prompted repeatedly on every visit.
            </li>
            <li>
              <strong>Website Functionality:</strong> Ensuring page components, responsive menus, search filters, and campus directory views render seamlessly across devices.
            </li>
            <li>
              <strong>Performance Optimization:</strong> Facilitating caching strategies and low-latency asset delivery through edge server networks.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Third-Party Technologies */}
      <section id="third-party-technologies" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          5. Third-Party Technologies
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            To deliver an optimal digital experience, Kampmax works with reputable infrastructure and developer tool providers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-foreground/90">
            <li>
              <strong>Cloud Hosting &amp; Edge Network:</strong> Our website is deployed on secure cloud hosting networks. These platforms process technical network requests (including IP addresses and request headers) strictly to serve content securely and route traffic.
            </li>
            <li>
              <strong>Campus Mapping Libraries:</strong> The public site provides campus location references using open client-side map rendering technology (MapLibre GL and MapTiler SDK). These libraries render map tiles directly in the client browser without setting advertising tracking cookies.
            </li>
          </ul>
          <p className="text-sm sm:text-base">
            We do not partner with third-party tracking companies or advertising networks that collect cross-site browsing profiles from visitors to this website.
          </p>
        </div>
      </section>

      {/* 6. Managing Your Cookie Preferences */}
      <section id="cookie-preferences" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          6. Managing Your Cookie Preferences
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            You have full control over non-essential cookies. You can review or adjust your preferences on Kampmax at any time using our built-in preference manager:
          </p>

          <div className="rounded-2xl border border-primary/20 bg-primary/3 p-5 sm:p-6 space-y-4">
            <div className="space-y-1">
              <h3 className="font-heading text-base font-semibold text-foreground">
                Kampmax Cookie Preference Center
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Click the button below to open your cookie settings dialog. You can enable or disable optional diagnostic storage while essential security cookies remain safely configured.
              </p>
            </div>
            <div>
              <CookiePreferencesButton />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Browser Controls & Management */}
      <section id="browser-controls" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          7. Browser Controls &amp; Management
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            Most modern web browsers allow you to manage or block cookies through their built-in application settings. You can configure your browser to notify you before a cookie is stored, reject all third-party cookies, or purge existing stored data.
          </p>

          <p>
            To manage cookies in your browser, refer to the official documentation for your specific software:
          </p>

          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Third-party cookies</li>
            <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data</li>
            <li><strong>Apple Safari:</strong> Settings &rarr; Safari &rarr; Privacy &amp; Security</li>
            <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions &rarr; Manage and delete cookies</li>
          </ul>

          <div className="rounded-xl border border-border/80 bg-muted/30 p-4 text-xs sm:text-sm text-muted-foreground">
            <strong className="text-foreground">Important Note:</strong> If you choose to disable all cookies or block essential local storage via your browser settings, some interactive features, form submissions, or visual preferences on the Kampmax website may not function as intended.
          </div>
        </div>
      </section>

      {/* 8. Changes to This Policy */}
      <section id="policy-changes" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          8. Changes to This Policy
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            We may update this Cookie Policy from time to time to reflect operational modifications, technical improvements, or updates to data protection regulations.
          </p>
          <p>
            When changes are made, the revised policy will be posted on this page with an updated &ldquo;Last Updated&rdquo; date at the top. We encourage you to review this policy periodically to stay informed about how we protect your digital privacy.
          </p>
        </div>
      </section>

      {/* 9. Contact Information */}
      <section id="contact" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          9. Contact Information
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            If you have questions or feedback regarding this Cookie Policy or our cookie practices, please contact us:
          </p>

          <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-7 space-y-4">
            {contactEmail ? (
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Privacy &amp; Cookie Inquiries</div>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm sm:text-base font-medium text-primary hover:underline underline-offset-4"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                  <HelpCircle className="size-4" aria-hidden="true" />
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    Inquiry &amp; Support Channel
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Direct your cookie and privacy questions through our centralized contact form. Messages are routed directly to our operations and administrative team.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-border/60 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:underline underline-offset-4 group"
              >
                <span>Contact Kampmax Team</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:underline underline-offset-4 group"
              >
                <span>Read Privacy Policy</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:underline underline-offset-4 group"
              >
                <span>Read Terms of Service</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border/40 pt-8 text-center">
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowUp className="size-3.5" aria-hidden="true" />
          <span>Back to top</span>
        </a>
      </div>
    </div>
  )
}
