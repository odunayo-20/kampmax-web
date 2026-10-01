import Link from "next/link"
import { ArrowRight, ArrowUp, HelpCircle, Mail } from "lucide-react"

import { contactConfig } from "@/config/contact"

export function RefundSections() {
  const supportEmail = contactConfig.supportEmail || contactConfig.email

  return (
    <div className="space-y-12 text-foreground/90 font-sans leading-relaxed">
      {/* 1. General Refund Principles */}
      <section id="general-principles" className="scroll-mt-20 border-t border-border/40 pt-8 first:border-t-0 first:pt-0">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          1. General Refund Principles
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax provides a trusted campus ecosystem where students, businesses, freelancers, and organizers can trade, hire, and discover opportunities with confidence. This Refund &amp; Cancellation Policy sets out transparent guidelines for resolving order cancellations, failed transactions, returned items, and refund requests across the platform.
          </p>
          <div className="rounded-xl border border-primary/20 bg-primary/3 p-4 sm:p-5 text-sm sm:text-base text-foreground">
            <strong className="font-semibold text-primary">Platform Role:</strong>{" "}
            Kampmax operates as a technology intermediary facilitating transactions between independent Customers and third-party Vendors, Service Providers, Freelancers, or Event Organizers. Contracts for products, services, or events are formed directly between buyer and seller. Kampmax administers platform refund standards and dispute workflows to ensure fairness, security, and integrity across campus interactions.
          </div>
          <p className="text-sm sm:text-base">
            All users are expected to act in good faith, communicate promptly, and provide accurate documentation whenever an order adjustment or refund request arises.
          </p>
        </div>
      </section>

      {/* 2. Physical Products & Marketplace Purchases */}
      <section id="product-purchases" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          2. Physical Products &amp; Marketplace Purchases
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            For physical merchandise, books, electronics, apparel, and campus essentials purchased through the Kampmax Marketplace, the following refund and cancellation conditions apply:
          </p>
          <div className="space-y-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              A. Eligible Refund Scenarios
            </h3>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
              <li><strong>Damaged or Defective Items:</strong> The product received is damaged, broken, defective, or inoperable upon delivery or pickup.</li>
              <li><strong>Incorrect or Mismatched Item:</strong> The delivered item materially differs in size, model, color, condition, or specifications from the vendor&apos;s listing.</li>
              <li><strong>Non-Delivery:</strong> The vendor fails to fulfill, dispatch, or make the item available for campus pickup within the agreed delivery window.</li>
            </ul>
          </div>
          <div className="space-y-2 pt-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              B. Order Cancellations
            </h3>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
              <li><strong>Customer Cancellations:</strong> Customers may cancel an order before the vendor has dispatched or initiated preparation of the item. Once an item is dispatched or handed over, cancellations are treated as returns subject to return eligibility rules.</li>
              <li><strong>Vendor Cancellations:</strong> If a vendor cancels an order due to stock unavailability or inability to deliver, the customer receives an immediate, full refund.</li>
            </ul>
          </div>
          <div className="space-y-2 pt-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              C. Return Condition &amp; Campus Handover
            </h3>
            <p className="text-sm sm:text-base">
              Where a return is approved, items must be returned in the original condition received, including all original packaging, tags, cables, accessories, and accompanying documentation. For campus pickup orders, customers are strongly encouraged to inspect goods at the point of physical handover and report defects immediately.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services & Freelance Engagements */}
      <section id="services-freelancers" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          3. Services &amp; Freelance Engagements
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            Engagements with independent Freelancers and Service Providers involve professional labor and time. Refund considerations are assessed based on project milestones and work performance:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li><strong>Pre-Commencement Cancellation:</strong> If a customer cancels a service before the service provider has commenced work, the customer is entitled to a full refund, less any non-recoverable materials or setup costs agreed beforehand.</li>
            <li><strong>Provider Cancellation:</strong> If a freelancer or service provider is unable to commence or finish an agreed engagement, the customer will receive a full refund of unearned or uncompleted funds.</li>
            <li><strong>Mid-Project Cancellations:</strong> If an ongoing project is discontinued by mutual agreement, refund amounts are prorated based on completed milestones, verified deliverable drafts, and time invested.</li>
            <li><strong>Incomplete or Non-Delivered Services:</strong> If delivered work fundamentally fails to meet the agreed written brief, specifications, or quality standards, the client may request a revision. If the provider cannot rectify the deliverable, the matter may be escalated for dispute review.</li>
          </ul>
        </div>
      </section>

      {/* 4. Digital Products & Downloads */}
      <section id="digital-products" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          4. Digital Products &amp; Downloads
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Digital products—such as downloadable study guides, revision materials, graphic design templates, digital illustrations, and software files—are distinct from physical merchandise due to their immediate reproducibility and consumption.
          </p>
          <div className="rounded-xl border border-primary/20 bg-primary/3 p-4 sm:p-5 text-sm sm:text-base text-foreground">
            <strong className="font-semibold text-primary">Non-Refundable Once Accessed:</strong>{" "}
            Unless required by applicable consumer protection laws, digital purchases are non-refundable once access credentials, download links, or files have been issued, viewed, or downloaded.
          </div>
          <p className="text-sm sm:text-base">
            Refunds for digital products may only be considered if:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-foreground/90">
            <li>The digital file is proven to be corrupted, incomplete, or technically defective, and the vendor cannot provide an operable replacement.</li>
            <li>A verified duplicate payment occurred for the exact same digital asset.</li>
            <li>The vendor or platform failed to deliver the access link or license key following successful payment confirmation.</li>
          </ul>
        </div>
      </section>

      {/* 5. Event Tickets & Admissions */}
      <section id="event-tickets" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          5. Event Tickets &amp; Admissions
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            Tickets purchased through Kampmax for campus conferences, workshops, social events, or sports are subject to event-specific guidelines set by the organizing entity:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li><strong>Event Cancellation:</strong> If an event is cancelled by the Organizer and not rescheduled, ticket holders are entitled to a full refund of the ticket face value.</li>
            <li><strong>Event Postponement or Significant Rescheduling:</strong> If an event is postponed or moved to a substantially different venue, ticket holders may choose to retain their ticket for the rescheduled date or request a refund within the refund window announced by the organizer.</li>
            <li><strong>Customer Change of Mind:</strong> Event tickets are generally non-refundable once purchased if the customer simply cannot attend, unless the organizer&apos;s specific event policy allows returns or transfers.</li>
            <li><strong>Non-Attendance / No-Shows:</strong> Failure to attend an event that took place as scheduled does not qualify for a refund.</li>
            <li><strong>Ticket Validation:</strong> Tickets with QR codes or digital entry passes that have been scanned, redeemed, or verified at the venue are strictly non-refundable.</li>
          </ul>
        </div>
      </section>

      {/* 6. Failed & Erroneous Transactions */}
      <section id="failed-transactions" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          6. Failed &amp; Erroneous Transactions
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            In occasional circumstances, network fluctuations, bank switch timeouts, or device connectivity drops may cause a payment to be debited from your bank account or payment card without generating an immediate order confirmation on the Platform.
          </p>
          <p>
            When such payment discrepancies occur:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>Authorized payment gateways and commercial banking rails execute automatic reconciliation routines. In most instances, uncompleted transactions are reversed automatically by your financial institution.</li>
            <li>If your account is debited without an order confirmation, please retain the transaction reference, date, debit timestamp, amount, and payment method used.</li>
            <li>You can submit these details through our support channel to facilitate verification with the payment provider. Kampmax will coordinate with the processor to confirm whether the funds were captured or reversed.</li>
          </ul>
          <p className="text-sm sm:text-base">
            Because reversal timelines are governed by external banking switches, card associations, and payment aggregators, settlement timeframes depend on the customer&apos;s financial institution.
          </p>
        </div>
      </section>

      {/* 7. Refund Processing */}
      <section id="refund-processing" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          7. Refund Processing &amp; Payouts
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            When a refund is approved by a vendor, service provider, or platform dispute determination:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li><strong>Approval Verification:</strong> The request is verified against transaction logs, delivery confirmations, and party communications.</li>
            <li><strong>Refund Initiation:</strong> Approved refunds are credited back to the original payment method or, where supported and agreed, issued to the user&apos;s platform balance.</li>
            <li><strong>Payment Rail Settlement:</strong> Once initiated, processing cycles depend upon the payment provider, the card network, or the customer&apos;s receiving commercial bank.</li>
          </ul>
        </div>
      </section>

      {/* 8. Exceptions */}
      <section id="exceptions" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          8. Exceptions &amp; Non-Refundable Items
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            The following categories of products and services are strictly non-refundable and non-returnable, except where required by statutory consumer protection provisions or where the vendor explicitly offers extended return terms:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li><strong>Perishable Goods:</strong> Fresh food items, meals, campus snacks, groceries, or floral arrangements that deteriorate quickly.</li>
            <li><strong>Customized &amp; Made-to-Order Items:</strong> Personalized campus merchandise, custom-printed apparel, bespoke crafts, or monogrammed items.</li>
            <li><strong>Personal Care &amp; Sanitary Items:</strong> Opened health, beauty, cosmetics, underwear, or sanitary goods where return poses hygiene risks.</li>
            <li><strong>Accessed Digital Downloads:</strong> Digital content or downloadable assets once the file or link has been accessed or downloaded.</li>
            <li><strong>Validated Event Admissions:</strong> Event tickets after the event has concluded or after admission entry has been scanned.</li>
          </ul>
        </div>
      </section>

      {/* 9. Disputes */}
      <section id="dispute-resolution" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          9. Disputes &amp; Escalation Process
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            When a transaction issue cannot be resolved directly between the customer and vendor or service provider, Kampmax provides a structured dispute escalation pathway:
          </p>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <h3 className="font-semibold text-foreground font-heading">Step 1: Direct Communication</h3>
              <p className="mt-1 text-muted-foreground">The buyer and vendor/provider must first communicate directly in good faith to resolve the issue through product replacement, order adjustment, or mutual refund.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <h3 className="font-semibold text-foreground font-heading">Step 2: Platform Escalation</h3>
              <p className="mt-1 text-muted-foreground">If an amicable resolution is not reached within a reasonable period, either party may escalate the matter to Kampmax Support with order references, photo evidence, delivery receipts, or chat logs.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <h3 className="font-semibold text-foreground font-heading">Step 3: Administrative Determination</h3>
              <p className="mt-1 text-muted-foreground">Kampmax Support reviews submitted evidence objectively against platform policies. For transactions held within platform escrow or settlement holds, Kampmax may render a final determination to release funds or issue a refund.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          10. Contact &amp; Support
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            If you need assistance with an order cancellation, refund status inquiry, or dispute escalation, please reach out to our team:
          </p>

          <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-7 space-y-4">
            {supportEmail ? (
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Refund &amp; Support Inquiries</div>
                  <a
                    href={`mailto:${supportEmail}`}
                    className="text-sm sm:text-base font-medium text-primary hover:underline underline-offset-4"
                  >
                    {supportEmail}
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
                    Online Support Channel
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Submit order dispute and refund queries through our centralized contact form. Messages are routed directly to our operations and customer support team.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-border/60">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:underline underline-offset-4 group"
              >
                <span>Contact Kampmax Support</span>
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
