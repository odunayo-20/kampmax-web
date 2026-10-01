import Link from "next/link"
import { ArrowRight, ArrowUp, CheckCircle2, HelpCircle, Mail, Scale, ShieldAlert, ShieldCheck, Users } from "lucide-react"

import { contactConfig } from "@/config/contact"

export function AmlSections() {
  const complianceEmail = contactConfig.legalEmail || contactConfig.email || contactConfig.supportEmail

  return (
    <div className="space-y-12 text-foreground/90 font-sans leading-relaxed">
      {/* 1. Introduction */}
      <section id="introduction" className="scroll-mt-20 border-t border-border/40 pt-8 first:border-t-0 first:pt-0">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          1. Introduction
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax is committed to maintaining the highest standards of integrity, transparency, and trust across our campus digital ecosystem. We uphold a zero-tolerance policy towards the misuse of our platform, marketplace, and service infrastructure for illicit financial activities.
          </p>
          <p>
            This Anti-Money Laundering (AML) and Counter-Terrorist Financing Policy articulates the compliance standards, risk mitigation procedures, and operational controls implemented to detect, deter, and prevent:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-foreground/90">
            <li>Money laundering and attempts to disguise the origin of illegal funds</li>
            <li>Terrorist financing and support for unlawful organizations</li>
            <li>Financial fraud, identity theft, and unauthorized payment activity</li>
            <li>Circumvention of applicable sanctions and lawful financial controls</li>
            <li>Any other proceeds of unlawful activity flowing through platform interactions</li>
          </ul>

          <div className="rounded-xl border border-primary/20 bg-primary/3 p-4 sm:p-5 text-sm sm:text-base text-foreground space-y-2">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <Scale className="size-4" aria-hidden="true" />
              <span>Platform Legal Status &amp; Compliance Context</span>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Kampmax is a campus technology platform, digital marketplace, and peer discovery network connecting students, freelancers, vendors, and businesses. Kampmax is not a bank, deposit-taking institution, money service business, or licensed payment gateway. Payment processing, escrow collection, and settlement remittances are facilitated through licensed third-party financial institutions and authorized payment partners. This policy establishes our internal platform safeguards and compliance standards.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Scope */}
      <section id="scope" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          2. Scope of Policy
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            This policy applies across the entire Kampmax ecosystem and governs all users, accounts, and financial interactions, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-foreground/90">
            <div className="rounded-xl border border-border/70 bg-card p-3.5 space-y-1">
              <strong className="text-foreground font-semibold flex items-center gap-1.5">
                <Users className="size-3.5 text-primary" aria-hidden="true" />
                User Categories
              </strong>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Buyers, student customers, vendors, service providers, freelance talent, employers, and campus event organizers.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card p-3.5 space-y-1">
              <strong className="text-foreground font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-primary" aria-hidden="true" />
                Transactional Workflows
              </strong>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Marketplace checkouts, freelance milestones, event ticket payments, settlement payouts, and wallet or credit balances.
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base">
            AML controls are applied proportionately based on user role, transaction volume, and risk profile. Not every feature or browsing interaction is subject to identical AML verification; controls scale in accordance with identified transaction risks.
          </p>
        </div>
      </section>

      {/* 3. Definitions */}
      <section id="definitions" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          3. Definitions
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            For the purposes of this Policy, the following definitions apply:
          </p>
          <dl className="space-y-3 text-sm sm:text-base">
            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5">
              <dt className="font-semibold text-foreground">Money Laundering</dt>
              <dd className="mt-1 text-muted-foreground text-xs sm:text-sm">
                The process of converting, transferring, concealing, or disguising the true nature, source, location, disposition, movement, or ownership of proceeds derived from criminal or unlawful activity.
              </dd>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5">
              <dt className="font-semibold text-foreground">Terrorist Financing</dt>
              <dd className="mt-1 text-muted-foreground text-xs sm:text-sm">
                The provision, collection, or management of funds, by any means, with the intention or knowledge that they will be used in full or in part to carry out terrorist acts or support proscribed individuals or groups.
              </dd>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5">
              <dt className="font-semibold text-foreground">Customer / User</dt>
              <dd className="mt-1 text-muted-foreground text-xs sm:text-sm">
                Any individual, registered business, student entrepreneur, vendor, freelancer, or organization that creates an account, conducts transactions, or utilizes services on the Kampmax platform.
              </dd>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5">
              <dt className="font-semibold text-foreground">Beneficial Owner</dt>
              <dd className="mt-1 text-muted-foreground text-xs sm:text-sm">
                The natural person who ultimately owns or controls a business entity, or on whose behalf a transaction is being conducted.
              </dd>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5">
              <dt className="font-semibold text-foreground">Suspicious Activity</dt>
              <dd className="mt-1 text-muted-foreground text-xs sm:text-sm">
                Any transaction, account behavior, or communication that departs from normal, legitimate activity, lacks an apparent lawful or economic purpose, or gives reasonable cause to suspect money laundering, fraud, or compliance breaches.
              </dd>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5">
              <dt className="font-semibold text-foreground">KYC (Know Your Customer)</dt>
              <dd className="mt-1 text-muted-foreground text-xs sm:text-sm">
                The process of identifying, verifying, and validating the identity of users and businesses before or during engagement with platform financial functions.
              </dd>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5">
              <dt className="font-semibold text-foreground">AML (Anti-Money Laundering)</dt>
              <dd className="mt-1 text-muted-foreground text-xs sm:text-sm">
                The comprehensive set of legal regulations, policies, operational controls, and monitoring systems designed to prevent illegal income generation and financial crimes.
              </dd>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5">
              <dt className="font-semibold text-foreground">Transaction</dt>
              <dd className="mt-1 text-muted-foreground text-xs sm:text-sm">
                Any deposit, payment, transfer, purchase, milestone release, fee payment, or payout conducted through or initiated on the Kampmax platform.
              </dd>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5">
              <dt className="font-semibold text-foreground">Source of Funds</dt>
              <dd className="mt-1 text-muted-foreground text-xs sm:text-sm">
                The origin of the monetary funds used in a specific transaction, including personal income, corporate revenue, or verified bank accounts.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 4. Risk-Based Approach */}
      <section id="risk-based-approach" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          4. Risk-Based Approach
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax adopts a proportionate, risk-based approach to compliance. We recognize that risks vary significantly depending on the nature of the user, the campus context, transaction velocity, and the product or service category.
          </p>
          <p>
            Rather than imposing rigid, uniform barriers on routine campus interactions (such as buying a secondhand textbook or ordering small student supplies), compliance controls are calibrated against key risk indicators:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li><strong>User Profile:</strong> Account history, verification tier, and historical behavior patterns.</li>
            <li><strong>Transaction Activity:</strong> Sudden changes in volume, unusual frequency, or uncharacteristically large transfers.</li>
            <li><strong>Payment Methods:</strong> Consistency between account ownership and linked payment instruments.</li>
            <li><strong>Geographic Considerations:</strong> Discrepancies between location data, registered campus affiliation, and financial origins.</li>
            <li><strong>Business Model:</strong> High-risk commercial sectors, bulk digital deliveries, or third-party resale patterns.</li>
            <li><strong>Anomalous Behavior:</strong> Rapid withdrawals immediately following unverified deposits, or rapid cyclical fund movement.</li>
          </ul>
        </div>
      </section>

      {/* 5. Customer Due Diligence (CDD) */}
      <section id="customer-due-diligence" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          5. Customer Due Diligence (CDD)
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            Customer Due Diligence is the foundation of our compliance framework. To protect the community, Kampmax may require users to provide accurate identifying information before participating in payment-enabled features:
          </p>

          <div className="space-y-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">
              Required Information Categories
            </h3>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
              <li><strong>Individual Identification:</strong> Legal name, verified contact information (phone number, email address), date of birth, and official government-issued identification numbers or documents where required.</li>
              <li><strong>Institutional Affiliation:</strong> Campus student or staff verification credentials where applicable.</li>
              <li><strong>Business &amp; Vendor Due Diligence:</strong> Registered business name, trade name, operating address, business registration documentation, and identification of corporate directors or key management.</li>
              <li><strong>Beneficial Ownership:</strong> Information identifying the natural individuals who ultimately own or control registered merchant accounts.</li>
              <li><strong>Source of Funds:</strong> Declarations or documentation regarding the lawful origin of funds where legally required or deemed necessary during compliance review.</li>
            </ul>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground">
            Identity verification procedures and documentation requirements are administered in alignment with platform verification workflows and our companion Know Your Customer (KYC) framework.
          </p>
        </div>
      </section>

      {/* 6. Enhanced Due Diligence (EDD) */}
      <section id="enhanced-due-diligence" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          6. Enhanced Due Diligence (EDD)
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            In scenarios presenting heightened compliance risk, Kampmax applies Enhanced Due Diligence (EDD) protocols. Enhanced scrutiny may be triggered by:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>Substantial or abrupt increases in transaction turnover</li>
            <li>Inconsistencies detected during standard identity validation</li>
            <li>Transactions involving high-value merchandise or atypical freelance project fees</li>
            <li>Accounts linked to complex corporate structures or multiple operating entities</li>
            <li>Accounts subject to chargebacks, payment disputes, or fraud alerts from financial partners</li>
          </ul>
          <p className="text-sm sm:text-base">
            Under EDD, Kampmax may request certified identification records, bank verification statements, corporate filings, proof of commercial delivery, and additional information regarding the commercial purpose of transactions. Accounts may be temporarily placed on hold pending successful completion of EDD reviews.
          </p>
        </div>
      </section>

      {/* 7. Transaction Monitoring */}
      <section id="transaction-monitoring" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          7. Transaction Monitoring
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax utilizes automated monitoring tools and manual compliance workflows to review platform transactions for unusual, suspicious, or illicit patterns.
          </p>
          <p>
            Activity monitored for compliance risks includes, without limitation:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li><strong>Velocity Anomalies:</strong> Multiple rapid transactions executed within brief intervals or immediate withdrawal attempts following initial credit.</li>
            <li><strong>Fund Pass-Through:</strong> Deposits or credit top-ups followed immediately by refund or withdrawal requests without genuine platform engagement or commercial purchase.</li>
            <li><strong>Structuring / Smurfing:</strong> Deliberately breaking down transactions into smaller amounts in an apparent attempt to circumvent verification thresholds.</li>
            <li><strong>Payment Inconsistencies:</strong> Using bank accounts, debit cards, or financial instruments registered in names other than the verified account holder.</li>
            <li><strong>Fictitious Marketplace Activity:</strong> Creating artificial listings, sham services, or circular transactions intended to facilitate peer-to-peer money transfers rather than genuine commerce.</li>
          </ul>
          <p className="text-xs sm:text-sm text-muted-foreground">
            These monitoring indicators are illustrative examples designed to protect marketplace participants and do not constitute an exhaustive list of scrutinized activities.
          </p>
        </div>
      </section>

      {/* 8. Suspicious Activity */}
      <section id="suspicious-activity" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          8. Suspicious Activity &amp; Reporting
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            When transaction monitoring, user reports, or internal audits identify activity that appears suspicious, irregular, or potentially unlawful, Kampmax takes measured, prompt action:
          </p>

          <div className="rounded-xl border border-border/70 bg-card p-5 space-y-3">
            <h3 className="font-heading text-base font-semibold text-foreground flex items-center gap-2">
              <ShieldAlert className="size-4 text-amber-500" aria-hidden="true" />
              <span>Remedial &amp; Investigative Actions</span>
            </h3>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-muted-foreground">
              <li>Requesting supplementary verification documentation or clarification regarding transaction context</li>
              <li>Placing temporary holds on pending transactions or settlement payouts</li>
              <li>Restricting account capabilities, such as disabling payout requests or new listings</li>
              <li>Suspending or permanently terminating user accounts found to violate compliance rules</li>
              <li>Reversing transactions where permitted by banking guidelines and platform agreements</li>
              <li>Submitting formal reports to competent law enforcement bodies or regulatory agencies where legally required</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/80 bg-muted/40 p-4 text-xs sm:text-sm text-muted-foreground">
            <strong className="text-foreground">Confidentiality of Compliance Reviews:</strong> In accordance with statutory anti-tipping-off provisions and regulatory standards, Kampmax may not always be permitted to notify a user prior to applying risk restrictions or when filing reports with authorized enforcement agencies.
          </div>
        </div>
      </section>

      {/* 9. Prohibited Financial Activity */}
      <section id="prohibited-activity" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          9. Prohibited Financial Activity
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            The Kampmax platform may not be used, directly or indirectly, for any illicit financial purpose. Strictly prohibited actions include:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>Conducting transactions involving funds derived from illegal narcotics, theft, cybercrime, extortion, corruption, or unlawful gambling</li>
            <li>Financing or providing material support to designated terrorist individuals, militias, or prohibited associations</li>
            <li>Utilizing stolen credit/debit cards, hijacked bank credentials, or unauthorized payment instruments</li>
            <li>Facilitating informal remittance, unlicensed money transfer, or informal foreign exchange arbitrage through platform listings</li>
            <li>Operating fake or fictitious accounts, identity impersonation, or acting as an unregistered proxy for third parties</li>
            <li>Colluding with buyers or sellers to fabricate invoices, generate fake service deliveries, or manufacture false chargeback claims</li>
            <li>Attempting to bypass platform security filters, transaction verification limits, or geographic restrictions</li>
          </ul>
        </div>
      </section>

      {/* 10. Sanctions & Restricted Parties */}
      <section id="sanctions-and-restricted-parties" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          10. Sanctions &amp; Restricted Parties
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax complies with applicable economic sanctions, export controls, and designated restricted party lists issued by lawful national authorities and international bodies.
          </p>
          <p>
            Users are strictly prohibited from opening accounts, initiating payments, receiving payouts, or conducting commerce on Kampmax if they are:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>An individual or entity subject to applicable domestic or international financial sanctions</li>
            <li>Acting on behalf of or for the benefit of any sanctioned individual or organization</li>
            <li>Operating from an comprehensively embargoed jurisdiction without appropriate lawful authorization</li>
          </ul>
          <p className="text-sm sm:text-base">
            Kampmax may cross-reference account details against relevant sanctions watchlists and terminate or restrict access immediately upon identification of restricted parties.
          </p>
        </div>
      </section>

      {/* 11. Record Keeping */}
      <section id="record-keeping" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          11. Record Keeping
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax maintains comprehensive records of customer verification records, account interactions, and transaction histories for durations necessary to fulfill statutory obligations and legitimate compliance functions.
          </p>
          <p>
            Retained records include:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>User identity records and submitted customer verification materials</li>
            <li>Transaction logs, including timestamps, payment identifiers, amounts, and settlement records</li>
            <li>Internal compliance review documentation and audit logs</li>
            <li>Official communications concerning account restrictions, investigations, or legal inquiries</li>
          </ul>
          <p className="text-sm sm:text-base">
            All records are stored securely in encrypted environments in strict compliance with applicable data protection legislation and our{" "}
            <Link href="/privacy" className="text-primary hover:underline underline-offset-4 font-medium">
              Privacy Policy
            </Link>.
          </p>
        </div>
      </section>

      {/* 12. Cooperation With Authorities */}
      <section id="cooperation-with-authorities" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          12. Cooperation With Authorities
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax cooperates fully and transparently with law enforcement agencies, judicial authorities, financial intelligence units, and statutory regulators in the investigation and prosecution of financial crimes.
          </p>
          <p>
            Where presented with valid subpoenas, court orders, formal warrants, or mandatory statutory disclosure directives, Kampmax may disclose relevant user profile information, transactional data, and audit histories to designated authorities in accordance with applicable procedural laws.
          </p>
          <p className="text-sm sm:text-base">
            We also cooperate with our licensed payment partners and banking networks to investigate chargebacks, resolve fraudulent transfers, and prevent financial loss across the wider digital economy.
          </p>
        </div>
      </section>

      {/* 13. User Responsibilities */}
      <section id="user-responsibilities" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          13. User Responsibilities
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Every user who registers an account or transacts on Kampmax agrees to uphold the following core responsibilities:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>Provide true, accurate, and up-to-date personal, contact, and business registration information.</li>
            <li>Promptly update account profiles upon any material change in legal name, contact details, or business structure.</li>
            <li>Ensure that all payment cards, bank accounts, and settlement accounts linked to your profile are lawfully registered in your own name or authorized commercial entity.</li>
            <li>Respond in a timely and cooperative manner to reasonable compliance requests for identification or transaction documentation.</li>
            <li>Immediately notify Kampmax if you discover unauthorized account access, suspicious transaction alerts, or potential security vulnerabilities.</li>
            <li>Never attempt to structure transactions, create shell accounts, or deploy obfuscation tools to evade platform compliance safeguards.</li>
          </ul>
        </div>
      </section>

      {/* 14. Account Restrictions */}
      <section id="account-restrictions" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          14. Account Restrictions &amp; Remedies
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax reserves the right to take protective measures where an account or transaction presents compliance risks, violates this policy, or breaches our{" "}
            <Link href="/terms" className="text-primary hover:underline underline-offset-4 font-medium">
              Terms of Service
            </Link>.
          </p>
          <p>
            Remedial actions may include:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90">
            <li>Suspending pending payouts or delaying settlement releases during active verification reviews.</li>
            <li>Restricting access to marketplace listing, service proposals, or event ticket sales.</li>
            <li>Refusing or canceling transactions deemed high-risk or irregular, subject to our{" "}
              <Link href="/refund-policy" className="text-primary hover:underline underline-offset-4 font-medium">
                Refund &amp; Cancellation Policy
              </Link>.
            </li>
            <li>Closing or permanently banning accounts engaged in deceptive or prohibited financial conduct.</li>
          </ul>
          <p className="text-sm sm:text-base">
            Users whose accounts are subjected to compliance restrictions may appeal by contacting our compliance desk with supporting documentation, except where prohibited by applicable law.
          </p>
        </div>
      </section>

      {/* 15. Relationship With KYC Framework */}
      <section id="relationship-with-kyc" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          15. Relationship With KYC Policy
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            While closely interconnected, Anti-Money Laundering (AML) and Know Your Customer (KYC) serve complementary roles within our compliance infrastructure:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border/70 bg-card p-4 space-y-1.5">
              <strong className="text-foreground font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                KYC Framework
              </strong>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Focuses specifically on customer identification, identity document validation, campus status verification, and merchant qualification during account onboarding.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card p-4 space-y-1.5">
              <strong className="text-foreground font-semibold flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                AML Framework
              </strong>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Operates continuously across the account lifecycle, analyzing ongoing transactional behavior, detecting anomalies, mitigating financial crimes, and enforcing regulatory standards.
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base">
            Detailed verification tiers, accepted identity credentials, and tier-specific transactional limits will be articulated in the dedicated Kampmax Know Your Customer (KYC) Policy once published.
          </p>
        </div>
      </section>

      {/* 16. Policy Updates */}
      <section id="policy-changes" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          16. Policy Updates &amp; Modifications
        </h2>
        <div className="space-y-3.5 text-base sm:text-lg text-muted-foreground">
          <p>
            Kampmax reviews this AML Policy periodically to ensure alignment with applicable statutory frameworks, emerging financial crime typologies, platform feature releases, and guidance from partner financial institutions.
          </p>
          <p>
            Modifications will be posted on this page with an updated &ldquo;Last Updated&rdquo; date at the top. Material changes will be communicated through appropriate platform notices. Continued access to the Kampmax platform following any update constitutes acceptance of the amended policy.
          </p>
        </div>
      </section>

      {/* 17. Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-border/40 pt-8">
        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
          17. Compliance Contact &amp; Inquiries
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
          <p>
            If you have questions regarding this policy, suspect fraudulent activity on the platform, or need to submit compliance documentation, please reach out to our team:
          </p>

          <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-7 space-y-4">
            {complianceEmail ? (
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Compliance &amp; Legal Desk</div>
                  <a
                    href={`mailto:${complianceEmail}`}
                    className="text-sm sm:text-base font-medium text-primary hover:underline underline-offset-4"
                  >
                    {complianceEmail}
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
                    Online Compliance Channel
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Submit compliance inquiries, fraud reports, or identity clarifications directly through our secure contact portal. Inquiries are handled with strict operational confidentiality.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-border/60 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:underline underline-offset-4 group"
              >
                <span>Submit Compliance Inquiry</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:underline underline-offset-4 group"
              >
                <span>Read Terms of Service</span>
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
                href="/refund-policy"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:underline underline-offset-4 group"
              >
                <span>Read Refund Policy</span>
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
