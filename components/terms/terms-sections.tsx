import Link from "next/link"
import { ArrowRight, ArrowUp, HelpCircle, Mail } from "lucide-react"

import { contactConfig } from "@/config/contact"

export function TermsSections() {
  const legalEmail = contactConfig.legalEmail || contactConfig.supportEmail || contactConfig.email

  return (
    <div className="space-y-12 text-foreground/90 font-sans leading-relaxed">
      {/* 1. Introduction */}
      <section id="introduction" className="scroll-mt-20 border-t border-border/40 pt-8 first:border-t-0 first:pt-0">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          1. Introduction
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Welcome to Kampmax. Kampmax is a campus-focused digital ecosystem and multi-sided technology platform designed to connect university students, local vendors, freelancers, service providers, event organizers, and campus communities with marketplace commerce, skilled services, student jobs, and campus events.
          </p>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Kampmax (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing, browsing, registering for, or using our website, web applications, or digital services, you confirm that you have read, understood, and agreed to be bound by these Terms.
          </p>
          <div className="rounded-xl border border-primary/20 bg-primary/3 p-4 sm:p-5 text-sm sm:text-base text-foreground">
            <strong className="font-semibold text-primary">Intermediary Platform Scope:</strong>{" "}
            Kampmax operates an online platform that enables independent buyers, vendors, service providers, freelancers, and organizers to discover and interact with one another. Unless expressly stated in writing, Kampmax is not a retailer, employer, contractor, broker, insurer, or event organizer, and does not take ownership of vendor merchandise or provide freelance services directly.
          </div>
          <p>
            <strong>Eligibility:</strong> You must be at least 18 years old or the legal age of majority in your jurisdiction, or have the express permission and supervision of a parent or legal guardian where permissible, to use the platform. By using the platform, you represent and warrant that you have the legal capacity and authority to enter into these Terms.
          </p>
        </div>
      </section>

      {/* 2. Definitions */}
      <section id="definitions" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          2. Definitions
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>For the purposes of these Terms, the following definitions apply:</p>
          <dl className="grid grid-cols-1 gap-3 sm:gap-4 text-sm sm:text-base">
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">Kampmax</dt>
              <dd className="mt-1 text-muted-foreground">The platform operator, technology provider, and brand operating the public website and associated campus digital services.</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">Platform</dt>
              <dd className="mt-1 text-muted-foreground">The websites, web applications, mobile interfaces, software, APIs, content, and related digital infrastructure provided by Kampmax.</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">User</dt>
              <dd className="mt-1 text-muted-foreground">Any individual, student, business, or organization that accesses, visits, or interacts with the Platform.</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">Customer</dt>
              <dd className="mt-1 text-muted-foreground">A User who browses, purchases, books, or consumes Products, Services, or Event tickets on the Platform.</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">Vendor</dt>
              <dd className="mt-1 text-muted-foreground">An independent business, student merchant, or seller who lists and sells physical merchandise or goods via the Platform.</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">Service Provider &amp; Freelancer</dt>
              <dd className="mt-1 text-muted-foreground">An independent contractor, student specialist, or enterprise offering commercial, technical, creative, or personal services through the Platform.</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">Employer</dt>
              <dd className="mt-1 text-muted-foreground">An organization, business, or entity that posts student job opportunities, internships, or campus assignments on the Platform.</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">Organizer</dt>
              <dd className="mt-1 text-muted-foreground">An individual, campus association, or organization that lists, promotes, or tickets campus events, workshops, or activities.</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">Product &amp; Digital Product</dt>
              <dd className="mt-1 text-muted-foreground">Tangible goods, merchandise, or electronically delivered materials (such as documents or digital assets) listed for sale by Vendors.</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">Service</dt>
              <dd className="mt-1 text-muted-foreground">Any skilled task, professional engagement, project delivery, or labor performed by Freelancers or Service Providers.</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">Event &amp; Transaction</dt>
              <dd className="mt-1 text-muted-foreground">Scheduled gatherings ticketed on the Platform, and any commercial contract, booking, or monetary exchange concluded between Users.</dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3.5 sm:p-4">
              <dt className="font-semibold text-foreground font-heading">Payment &amp; Account</dt>
              <dd className="mt-1 text-muted-foreground">Monetary consideration transferred via authorized payment rails, and a registered User profile containing credentials and activity history.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 3. User Accounts */}
      <section id="user-accounts" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          3. User Accounts &amp; Registration
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            Certain features of the Kampmax platform require creating an Account. When creating an Account, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>Provide true, accurate, current, and complete information as prompted by registration forms.</li>
            <li>Maintain and promptly update your account profile and contact details to keep them accurate and complete.</li>
            <li>Safeguard your authentication credentials, passwords, and security tokens against unauthorized access.</li>
            <li>Accept full responsibility for all activities, actions, messages, and orders that occur under your Account credentials.</li>
            <li>Notify Kampmax immediately if you suspect or discover any unauthorized access or security breach involving your Account.</li>
          </ul>
          <div className="space-y-2 pt-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              One-Account Rule &amp; Verification
            </h3>
            <p className="text-sm sm:text-base">
              Users may not create multiple accounts for manipulative, fraudulent, deceptive, or abusive purposes, including evading previous account restrictions, fabricating marketplace reviews, or gaming promotional programs. Kampmax reserves the right to verify user identities, campus affiliations, or business documentation at any time to preserve platform safety and community trust.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Platform Roles */}
      <section id="platform-roles" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          4. Platform Roles &amp; Participation
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax accommodates distinct participant roles within the campus ecosystem, including Customers, Vendors, Service Providers, Freelancers, Employers, Event Organizers, and Platform Administrators.
          </p>
          <div className="rounded-xl border border-primary/20 bg-primary/3 p-4 sm:p-5 text-sm sm:text-base text-foreground">
            <strong className="font-semibold text-primary">Role Eligibility:</strong>{" "}
            Creating an initial User account does not automatically grant authorization to operate under every role. Specific roles—such as listing products as a Vendor, delivering services as a Freelancer, posting jobs as an Employer, or selling event tickets as an Organizer—require dedicated onboarding steps, profile verification, and express administrative approval.
          </div>
          <p className="text-sm sm:text-base">
            Kampmax reserves the right to review role applications, assess qualifications, impose role-specific criteria, or revoke role privileges if a user fails to comply with role guidelines or community standards.
          </p>
        </div>
      </section>

      {/* 5. Marketplace */}
      <section id="marketplace" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          5. Marketplace &amp; Product Listings
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            The Kampmax Marketplace enables Vendors to showcase and sell products to campus community members.
          </p>
          <div className="space-y-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              A. Listing Accuracy &amp; Vendor Responsibilities
            </h3>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
              <li>Vendors must provide accurate, clear, and non-misleading descriptions, pricing, inventory availability, specifications, and genuine photographs for all listed items.</li>
              <li>Vendors warrant that listed products are authentic, lawful, safe, and free from liens or third-party intellectual property infringement.</li>
              <li>Vendors are solely responsible for packing, preparing, dispatching, or fulfilling confirmed orders in accordance with promised campus delivery or pickup arrangements.</li>
              <li>Vendors must comply with applicable consumer protection standards, fair trading practices, and local product safety requirements.</li>
            </ul>
          </div>
          <div className="space-y-2 pt-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              B. Customer Responsibilities &amp; Fulfillment
            </h3>
            <p className="text-sm sm:text-base">
              Customers must review listing descriptions and terms prior to ordering, provide accurate delivery or pickup coordinates, and inspect items upon receipt. The purchase contract is formed directly between the Customer and the Vendor; Kampmax facilitates discovery, order routing, and communication.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Services */}
      <section id="services" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          6. Services &amp; Freelance Work
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax provides service directories and freelance showcases to connect campus talent with clients seeking professional, creative, technical, or personal services.
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li><strong>Service Listings:</strong> Providers and Freelancers must accurately state their skills, experience, project scopes, turnaround times, and pricing models.</li>
            <li><strong>Professional Delivery:</strong> Providers agree to perform services with due diligence, competence, and adherence to agreed project briefs and deadlines.</li>
            <li><strong>Independent Contractor Status:</strong> Service Providers and Freelancers act strictly as independent contractors. No employment, joint venture, agency, or partnership relationship is established with Kampmax.</li>
            <li><strong>Review &amp; Acceptance:</strong> Customers must review completed milestones and deliverables in good faith and communicate adjustments or acceptance within reasonable timelines.</li>
            <li><strong>Cancellations &amp; Disputes:</strong> Service cancellations and dispute procedures are governed by agreed project specifications and our Refund &amp; Cancellation Policy.</li>
          </ul>
        </div>
      </section>

      {/* 7. Payments */}
      <section id="payments" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          7. Payments &amp; Transactions
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            When financial transactions occur on the Platform, they are subject to transparent payment rules and secure processing:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li><strong>Licensed Payment Intermediation:</strong> All monetary payments are processed via authorized, licensed third-party payment gateways and financial technology partners. Kampmax does not store raw credit card numbers or banking credentials on public servers.</li>
            <li><strong>Transaction Confirmation:</strong> A transaction is officially confirmed only once the payment gateway issues a valid confirmation response and electronic receipt.</li>
            <li><strong>Failed or Reversed Payments:</strong> If a payment fails, is flagged for suspected fraud, or is reversed by a banking network, the associated order or booking may be cancelled, suspended, or reversed.</li>
            <li><strong>Platform Fees:</strong> Kampmax may charge platform service fees or processing fees on certain transactions. Any applicable fees are disclosed prior to transaction confirmation.</li>
            <li><strong>Vendor &amp; Provider Settlements:</strong> Funds due to Vendors and Service Providers are remitted according to platform settlement schedules, subject to necessary dispute-hold and clearance periods.</li>
          </ul>
          <p className="text-sm sm:text-base">
            Refunds, charge adjustments, and transaction cancellations are strictly governed by our dedicated{" "}
            <Link href="/refund-policy" className="text-primary hover:underline underline-offset-4 font-medium">
              Refund &amp; Cancellation Policy
            </Link>.
          </p>
        </div>
      </section>

      {/* 8. Events */}
      <section id="events" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          8. Events &amp; Ticketing
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            The Platform provides event listing and ticketing infrastructure for campus seminars, workshops, cultural gatherings, and student entertainment:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li><strong>Organizer Obligations:</strong> Event Organizers are solely responsible for the planning, safety, security, venue booking, legal compliance, and accurate description of their events. Organizers must honor all valid tickets issued through the Platform.</li>
            <li><strong>Ticket Issuance &amp; Verification:</strong> Valid ticket purchases generate digital passes containing unique verification codes or QR codes. Tickets are verifiable upon entrance by the Organizer.</li>
            <li><strong>Admission &amp; Conduct:</strong> Organizers retain the right to enforce venue admission policies, code-of-conduct guidelines, and age restrictions. Disorderly or abusive conduct may result in refusal of entry without refund.</li>
            <li><strong>Cancellation &amp; Postponement:</strong> If an event is cancelled, rescheduled, or substantially altered, Organizers must notify attendees promptly and honor applicable refunds as outlined in our Refund &amp; Cancellation Policy.</li>
          </ul>
        </div>
      </section>

      {/* 9. Prohibited Activities */}
      <section id="prohibited-activities" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          9. Prohibited Activities &amp; Conduct
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            To maintain a safe, trusted, and respectful environment across all campus communities, Users must adhere to our standards of conduct. You agree that you will not:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>Violate any applicable local, state, national, or international law, regulation, or campus institutional policy.</li>
            <li>List, offer, sell, or solicit any prohibited goods, illegal substances, counterfeit items, stolen property, or unauthorized academic materials.</li>
            <li>Engage in fraud, misrepresentation, deceptive pricing, impersonation, or identity theft.</li>
            <li>Harass, stalk, threaten, defame, abuse, or discriminate against any User or member of the Kampmax team.</li>
            <li>Scrape, crawl, harvest, or extract data from the Platform using automated tools, bots, or scripts without prior written authorization.</li>
            <li>Interfere with, tamper with, breach, or attempt to circumvent security mechanisms, access controls, or platform rate limits.</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Platform software or underlying algorithms.</li>
            <li>Post spam, unsolicited promotional messages, malicious code, viruses, or harmful files.</li>
          </ul>
          <p className="text-sm sm:text-base">
            These restrictions apply in conjunction with the separate Acceptable Use Policy and Prohibited Products Policy established for the platform ecosystem.
          </p>
        </div>
      </section>

      {/* 10. Intellectual Property */}
      <section id="intellectual-property" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          10. Intellectual Property Rights
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <div className="space-y-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              A. Kampmax Intellectual Property
            </h3>
            <p className="text-sm sm:text-base">
              The Platform, including all visual interfaces, logos, trademarks, website design, text, graphics, icons, software, algorithms, and documentation, is the exclusive property of Kampmax and its licensors, protected by intellectual property laws. You may not copy, reproduce, modify, distribute, or create derivative works without our prior written consent.
            </p>
          </div>
          <div className="space-y-2 pt-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              B. User Content &amp; Platform License
            </h3>
            <p className="text-sm sm:text-base">
              Users retain ownership of the original text, photos, portfolio pieces, listing descriptions, reviews, and materials they submit to the Platform (&ldquo;User Content&rdquo;). By submitting User Content, you grant Kampmax a non-exclusive, worldwide, royalty-free, transferable license to host, store, display, reproduce, modify, and distribute such content solely for the purpose of operating, improving, and promoting the Platform.
            </p>
          </div>
          <div className="space-y-2 pt-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              C. Infringement Complaints
            </h3>
            <p className="text-sm sm:text-base">
              We respect third-party intellectual property rights. If you believe any content on the Platform infringes your copyright or trademark, please contact our legal team with verifiable details of the infringement.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Third-Party Services */}
      <section id="third-party-services" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          11. Third-Party Services &amp; Integrations
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            The Platform may integrate with or link to third-party services, including payment processors, identity verification providers, campus mapping services, cloud infrastructure, and analytics platforms.
          </p>
          <p>
            Your interactions with third-party providers are governed by their respective terms of service and privacy policies. Kampmax does not operate, control, or assume responsibility for the performance, uptime, security, or practices of any third-party service provider.
          </p>
        </div>
      </section>

      {/* 12. Platform Availability */}
      <section id="platform-availability" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          12. Platform Availability &amp; Modifications
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            While we strive to ensure optimal platform reliability and performance, Kampmax does not guarantee continuous, uninterrupted, or error-free availability. The platform may experience periodic maintenance windows, system updates, network latency, or technical interruptions.
          </p>
          <p>
            Kampmax reserves the right to modify, enhance, restrict, suspend, or discontinue any feature, directory, tool, or section of the Platform at any time, with or without prior notice, without liability to users.
          </p>
        </div>
      </section>

      {/* 13. Suspension and Termination */}
      <section id="suspension-termination" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          13. Suspension &amp; Termination
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax reserves the right, in its sole discretion and without liability, to restrict, suspend, or terminate your Account, revoke role permissions, remove listings, or freeze pending transactions if:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>You breach any provision of these Terms or related platform policies.</li>
            <li>We detect or reasonably suspect fraudulent, unauthorized, unlawful, or deceptive activity.</li>
            <li>Your actions pose a security threat, legal liability, or reputational harm to Kampmax, other users, or campus communities.</li>
            <li>Required to do so by applicable law, regulatory authority, or campus institutional request.</li>
            <li>Your Account experiences prolonged inactivity.</li>
          </ul>
          <p className="text-sm sm:text-base">
            Users whose accounts are suspended or terminated may submit an appeal through our official support channel. Upon termination, provisions that by their nature should survive—including ownership of intellectual property, warranty disclaimers, indemnity, and limitations of liability—shall remain in full effect.
          </p>
        </div>
      </section>

      {/* 14. Disclaimers */}
      <section id="disclaimers" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          14. Disclaimers of Warranties
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            The Platform, including all content, listings, tools, and features, is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express, implied, statutory, or otherwise.
          </p>
          <p>
            To the maximum extent permitted by applicable law, Kampmax disclaims all representations and warranties, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, quiet enjoyment, and accuracy of data.
          </p>
          <p>
            Kampmax makes no warranty regarding the quality, suitability, safety, or legality of any Products sold by Vendors, Services performed by Freelancers, or Events hosted by Organizers. All commercial interactions are conducted at your own risk.
          </p>
        </div>
      </section>

      {/* 15. Limitation of Liability */}
      <section id="limitation-of-liability" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          15. Limitation of Liability
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            To the maximum extent permitted by applicable law, in no event shall Kampmax, its directors, officers, employees, agents, affiliates, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, goodwill, service interruptions, or other intangible losses arising out of or related to your access to or inability to use the Platform.
          </p>
          <p>
            Subject to applicable mandatory statutory provisions, the total cumulative liability of Kampmax for all claims arising out of or in connection with these Terms or the Platform shall not exceed the total fees paid by you to Kampmax for platform services in the twelve (12) months preceding the event giving rise to liability, or a nominal statutory amount where no fees were paid.
          </p>
        </div>
      </section>

      {/* 16. Indemnification */}
      <section id="indemnification" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          16. Indemnification
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            You agree to defend, indemnify, and hold harmless Kampmax, its parent entities, subsidiaries, officers, directors, employees, and contractors from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising from or relating to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>Your access to or use of the Platform.</li>
            <li>Your User Content, product listings, service deliverables, or event promotions.</li>
            <li>Your violation of these Terms or any applicable statutory or regulatory requirements.</li>
            <li>Any transaction, dispute, or conflict between you and another User, Customer, Vendor, Provider, or Organizer.</li>
          </ul>
        </div>
      </section>

      {/* 17. Changes to Terms */}
      <section id="changes-to-terms" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          17. Changes to Terms
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            We may amend or update these Terms periodically to accommodate platform growth, new features, or legislative changes. When updates occur, we will publish the amended Terms on this page and revise the &ldquo;Last Updated&rdquo; and &ldquo;Effective Date&rdquo; at the top of the document.
          </p>
          <p>
            Your continued use of the Platform following the publication of revised Terms signifies your agreement to and acceptance of the revised provisions. We encourage Users to review this page periodically.
          </p>
        </div>
      </section>

      {/* 18. Governing Law and Disputes */}
      <section id="governing-law" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          18. Governing Law &amp; Dispute Resolution
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            These Terms of Service and any disputes or claims arising out of or related to their subject matter shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
          </p>
          <p>
            In the event of any controversy, claim, or disagreement between a User and Kampmax, the parties agree to first attempt to resolve the dispute in good faith through informal consultation and negotiation by submitting written notice to our support team.
          </p>
          <div className="rounded-xl border border-primary/20 bg-primary/3 p-4 sm:p-5 text-sm sm:text-base text-foreground">
            <strong className="font-semibold text-primary">Implementation Notice:</strong>{" "}
            This document represents a website implementation draft prepared for the public platform. Formal statutory dispute resolution clauses, jurisdiction provisions, and arbitration frameworks remain subject to final corporate and legal confirmation prior to production enforcement.
          </div>
        </div>
      </section>

      {/* 19. Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          19. Contact &amp; Inquiries
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            If you have questions, feedback, or legal inquiries concerning these Terms of Service, please reach out to our team through our official communication channels:
          </p>

          <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-7 space-y-4">
            {legalEmail ? (
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Legal Inquiries</div>
                  <a
                    href={`mailto:${legalEmail}`}
                    className="text-sm sm:text-base font-medium text-primary hover:underline underline-offset-4"
                  >
                    {legalEmail}
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
                    Direct your legal, compliance, or terms inquiries through our centralized contact form. Messages are routed directly to our operations and legal administration team.
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

      {/* Back to top */}
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
