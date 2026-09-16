import React from 'react';
import { Metadata } from 'next';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Refund Policy | Harsh Apex Digital Solutions',
  description:
    'Official Refund & Cancellation Policy for Harsh Apex Digital Solutions (harshapex.com.lk). Learn about service cancellations, refund eligibility, and processing timelines.',
};

export default function ReturnPolicyPage() {
  return (
    <PolicyLayout
      title="Refund Policy"
      badge="PAYHERE COMPLIANT & TRANSPARENT"
      subtitle="Thank you for choosing Harsh Apex Digital Solutions (harshapex.com.lk). We value your satisfaction and strive to provide you with the best digital service experience possible."
      lastUpdated="September 2026"
    >
      <div className="space-y-8 text-sm sm:text-base text-white/90 font-light leading-relaxed">
        {/* Notice Card */}
        <div className="p-5 rounded-2xl bg-[#6DD5C4]/10 border border-[#6DD5C4]/30 text-xs sm:text-sm text-[#E7D8FF] leading-relaxed">
          <p>
            This <strong>Refund Policy</strong> outlines the conditions under which cancellations, revisions, and refunds are handled for digital services, web development packages, and custom software solutions purchased through <strong>harshapex.com.lk</strong>.
          </p>
        </div>

        {/* Returns & Cancellations */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            1. Cancellations & Returns
          </h3>
          <p>
            We accept cancellation and refund requests within <strong>7 days</strong> from the date of project confirmation or initial deposit payment, provided that production architectural work or coding has not yet been finalized.
          </p>
          <p className="text-xs sm:text-sm text-white/75">
            To be eligible for a refund, the cancellation request must be submitted in writing via email or WhatsApp accompanied by your official invoice or payment receipt from <strong>harshapex.com.lk</strong>.
          </p>
        </section>

        {/* Refunds */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            2. Refunds Assessment
          </h3>
          <p>
            Once we receive your cancellation request, our billing team will inspect the status of your project milestones. We will immediately notify you via email or phone regarding the approval or rejection of your refund.
          </p>
          <p className="text-xs sm:text-sm text-white/75">
            If your refund is approved, we will initiate a refund to your original method of payment (via our payment gateway <strong>PayHere</strong> or direct bank transfer). Please note that any non-refundable payment gateway processing surcharges incurred during the initial transaction may be deducted from the total refund amount.
          </p>
        </section>

        {/* Exchanges & Package Upgrades */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            3. Exchanges & Service Adjustments
          </h3>
          <p>
            If you wish to exchange your purchased package for a different service tier (e.g., transitioning from the Starter One-Page package to the Growth 5-Page package or custom POS system), please contact our customer support team within <strong>7 days</strong> of placing your order. We will provide you with options to reallocate your paid balance toward the revised project scope.
          </p>
        </section>

        {/* Non-Returnable Items */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            4. Non-Refundable Items & Costs
          </h3>
          <p>Certain types of expenses and services are exempt from refunds:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/80 text-xs sm:text-sm">
            <li>Domain name registration fees (.com, .lk, .org, etc.) paid to external domain registries.</li>
            <li>Third-party cloud hosting fees, server provisioning costs, or SSL certificates already active.</li>
            <li>Custom digital code, databases, or completed websites already deployed to the client&apos;s live production environment.</li>
            <li>Third-party premium software licenses, API subscriptions, or SMS gateway top-ups.</li>
          </ul>
        </section>

        {/* Service Delivery */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            5. Service Delivery & Handover
          </h3>
          <p>
            Because Harsh Apex delivers digital software and engineering services, delivery is conducted electronically via private staging URLs, secure cloud deployment, and source code repository transfer. In the unlikely event that a deliverable is technically defective or does not match agreed specifications, please contact us immediately for prompt resolution under our bug-fixing warranty.
          </p>
        </section>

        {/* Processing Time */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            6. Refund Processing Time
          </h3>
          <p>
            Refunds will be processed within <strong>5 to 10 business days</strong> after we review and approve your cancellation. Please note that it may take additional time for the refunded amount to reflect on your credit/debit card account or bank statement depending on your card issuer or banking provider.
          </p>
        </section>

        {/* Contact Us */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            7. Contact Us
          </h3>
          <p>
            If you have any questions or concerns regarding our Refund Policy, please contact our customer support team. We are here to assist you and ensure your engagement with us is smooth and hassle-free:
          </p>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm space-y-1.5 font-mono text-white/90">
            <p><strong>Website:</strong> https://harshapex.com.lk</p>
            <p><strong>Entity:</strong> Harsh Apex Digital Solutions</p>
            <p><strong>Email:</strong> chamilka.ch@gmail.com</p>
            <p><strong>Phone / WhatsApp:</strong> +94 77 066 3154</p>
            <p><strong>Location:</strong> Galle Road, Colombo &bull; Galle &bull; Matara, Sri Lanka</p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
}
