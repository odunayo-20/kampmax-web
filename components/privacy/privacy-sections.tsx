import Link from "next/link"
import { ArrowRight, HelpCircle, Mail } from "lucide-react"

import { contactConfig } from "@/config/contact"

export function PrivacySections() {
  const privacyEmail = contactConfig.privacyEmail || contactConfig.email

  return (
    <div className="space-y-12 text-foreground/90 font-sans leading-relaxed">
      {/* 1. Introduction */}
      <section id="introduction" className="scroll-mt-20 border-t border-border/40 pt-8 first:border-t-0 first:pt-0">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          1. Introduction
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax is a campus-focused digital ecosystem designed to connect university communities with local services, freelance skills, marketplace listings, events, and economic opportunities.
          </p>
          <p>
            This Privacy Policy describes our practices regarding the collection, use, and protection of information when you access or interact with the public Kampmax website (<code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground font-mono">kampmax-web</code>).
          </p>
          <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-4 sm:p-5 text-sm sm:text-base text-foreground">
            <strong className="font-semibold text-primary">Public Website Scope:</strong>{" "}
            This policy applies specifically to the public marketing website and visitor interactions. The public website does not currently host authenticated user profiles, payment accounts, or transaction processing. When authenticated application services are launched, those features will be governed by their respective platform terms and service-specific privacy notices.
          </div>
        </div>
      </section>

      {/* 2. Information We May Collect */}
      <section id="information-we-may-collect" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          2. Information We May Collect
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            We collect information only where necessary to provide, protect, and improve the public website experience:
          </p>

          <div className="space-y-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              A. Information You Voluntarily Provide
            </h3>
            <p>
              When you submit inquiries through our contact forms, express interest in vendor or service provider partnerships, or communicate directly with us, you may voluntarily provide:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-foreground/90">
              <li>Full name or preferred name</li>
              <li>Email address</li>
              <li>Topic or category of inquiry</li>
              <li>Campus or institution affiliation (if applicable)</li>
              <li>The textual content and details of your message</li>
            </ul>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              B. Technical Information
            </h3>
            <p>
              When you access our web pages, standard server infrastructure automatically receives and logs basic technical data transmitted by your browser or device, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-foreground/90">
              <li>Internet Protocol (IP) address</li>
              <li>Browser type, language, and operating system</li>
              <li>Requested URLs, date, and timestamp of access</li>
              <li>Referring website addresses</li>
              <li>Basic diagnostic logs used for system maintenance and security monitoring</li>
            </ul>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              C. Information from Future Platform Use
            </h3>
            <p>
              The public website does not collect login passwords, identity verification documents, or credit card numbers. When authenticated application features become available, any collection of transactional or account data will be transparently governed by dedicated platform terms.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How We Use Information */}
      <section id="how-we-use-information" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          3. How We Use Information
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Information collected through the public website is used only for legitimate, transparent purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>Responding to questions, partnership proposals, and support inquiries submitted through our contact channels.</li>
            <li>Providing information, guides, and documentation regarding campus discovery and platform participation.</li>
            <li>Maintaining the stability, performance, and accessibility of our web infrastructure.</li>
            <li>Detecting, preventing, and addressing technical issues, unauthorized access, or malicious activity.</li>
            <li>Complying with applicable legal, regulatory, or administrative requirements.</li>
          </ul>
          <p className="text-sm sm:text-base">
            We do not use personal information collected on this website for automated behavioral profiling, cross-context ad targeting, or sale to data brokers.
          </p>
        </div>
      </section>

      {/* 4. Cookies & Similar Technologies */}
      <section id="cookies" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          4. Cookies &amp; Similar Technologies
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Cookies are small text files placed on your device to support website operations:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>
              <strong className="text-foreground">Essential Technologies:</strong> We may use strictly necessary cookies or client-side storage required to render web pages correctly, preserve user interface settings (such as theme preferences), and maintain session security.
            </li>
            <li>
              <strong className="text-foreground">Optional Tracking Technologies:</strong> The public website does not currently implement third-party advertising cookies, tracking pixels, or cross-site behavioral monitoring.
            </li>
          </ul>
          <p className="text-sm sm:text-base">
            If non-essential analytics or measurement tools are introduced in the future, this policy and associated cookie documentation will be updated to describe those technologies and the choices available to you.
          </p>
        </div>
      </section>

      {/* 5. Third-Party Services */}
      <section id="third-party-services" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          5. Third-Party Services
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            To deliver and operate this public website, we may utilize third-party hosting, network distribution, and technical infrastructure providers.
          </p>
          <p>
            These service providers are granted access only to the technical request data strictly necessary to execute their operational functions, and are obligated to maintain appropriate technical and organizational safeguards. We do not permit service providers to use your information for independent commercial purposes.
          </p>
        </div>
      </section>

      {/* 6. Information Sharing */}
      <section id="information-sharing" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          6. Information Sharing
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            We do not sell, rent, or trade your personal information. Information may be shared only under the following limited circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>
              <strong className="text-foreground">Operational Service Providers:</strong> With technical vendors and infrastructure partners who assist in hosting, securing, and maintaining the website, subject to contractual confidentiality.
            </li>
            <li>
              <strong className="text-foreground">Legal Obligations:</strong> When disclosure is reasonably necessary to comply with applicable laws, court orders, or governmental requests.
            </li>
            <li>
              <strong className="text-foreground">Protection of Rights and Safety:</strong> Where necessary to investigate potential violations, enforce our terms, detect security breaches, or protect the rights, property, and safety of Kampmax, our community, and the public.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. Data Security */}
      <section id="data-security" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          7. Data Security
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            We implement reasonable administrative, technical, and physical safeguards designed to protect personal information against accidental loss, unauthorized access, disclosure, or misuse.
          </p>
          <p>
            However, no transmission method over the internet or electronic data storage system is completely secure. While we take appropriate and ongoing precautions to safeguard your information, we cannot guarantee absolute or impenetrable security.
          </p>
        </div>
      </section>

      {/* 8. Data Retention */}
      <section id="data-retention" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          8. Data Retention
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Information collected through contact inquiries and technical server logs is retained only for as long as reasonably necessary to fulfill the purpose for which it was gathered, resolve communications, troubleshoot security incidents, or comply with applicable legal and operational obligations.
          </p>
          <p>
            Once information is no longer required for these legitimate purposes, it is deleted, purged, or irreversibly anonymized in accordance with standard data hygiene practices.
          </p>
        </div>
      </section>

      {/* 9. Your Rights */}
      <section id="your-rights" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          9. Your Rights
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Depending on your jurisdiction and applicable data protection legislation, you may have rights concerning the personal information you have provided to us, which may include:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>The right to request confirmation of whether we process personal data relating to you, and access to that data.</li>
            <li>The right to request correction of inaccurate, incomplete, or outdated personal information.</li>
            <li>The right to request deletion of personal information, subject to legal or operational retention requirements.</li>
            <li>The right to withdraw consent where data collection was based on your consent.</li>
            <li>The right to ask questions or submit inquiries regarding our privacy practices.</li>
          </ul>
          <p className="text-sm sm:text-base">
            To submit an inquiry or exercise applicable privacy rights, please reach out to us using the contact details provided in Section 13 below.
          </p>
        </div>
      </section>

      {/* 10. Children's Privacy */}
      <section id="childrens-privacy" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          10. Children&apos;s Privacy
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            The public Kampmax website is designed for general audiences, specifically higher-education students, campus organizers, freelance practitioners, and businesses.
          </p>
          <p>
            The website is not directed to children under the age of 13 (or the applicable minimum legal age in your jurisdiction). We do not knowingly solicit or collect personal information from children. If you become aware that a child has provided us with personal information, please notify us immediately so that we can take appropriate steps to delete such data.
          </p>
        </div>
      </section>

      {/* 11. External Links */}
      <section id="external-links" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          11. External Links
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            The public website may include links to external resources, student association pages, vendor websites, or social platforms.
          </p>
          <p>
            Kampmax has no control over the privacy practices, content, or policies of third-party websites. Following an external link is at your own discretion, and we encourage you to review the privacy notices of any third-party websites you visit.
          </p>
        </div>
      </section>

      {/* 12. Policy Changes */}
      <section id="policy-changes" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          12. Policy Changes
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            We may revise this Privacy Policy periodically to reflect updates to our website, emerging technical features, or applicable legal obligations.
          </p>
          <p>
            When changes are made, the revised policy will be posted on this page with an updated &ldquo;Last Updated&rdquo; date at the top of the document. We recommend checking this page periodically to stay informed about our data handling practices.
          </p>
        </div>
      </section>

      {/* 13. Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          13. Contact
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            If you have questions, feedback, or inquiries concerning this Privacy Policy or how your information is handled, you can reach our team through our official contact channels:
          </p>

          <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-7 space-y-4">
            {privacyEmail ? (
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Privacy Inquiries</div>
                  <a
                    href={`mailto:${privacyEmail}`}
                    className="text-sm sm:text-base font-medium text-primary hover:underline underline-offset-4"
                  >
                    {privacyEmail}
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
                    Online Inquiry Channel
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Direct your privacy questions through our centralized contact form. Messages are routed directly to our operations and administrative team.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-border/60">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:underline underline-offset-4 group"
              >
                <span>Submit an inquiry via our Contact page</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
