import React from 'react';
import { Metadata } from 'next';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Harsh Apex Digital Solutions',
  description:
    'Official Business Terms and Conditions for Harsh Apex Digital Solutions (harshapex.com.lk). Governs website usage, orders, digital service delivery, and payments with PayHere compliance.',
};

export default function TermsAndConditionsPage() {
  return (
    <PolicyLayout
      title="Terms and Conditions"
      badge="PAYHERE COMPLIANT TERMS"
      subtitle="Welcome to Harsh Apex Digital Solutions (harshapex.com.lk). These Terms and Conditions govern your use of our website and the purchase and delivery of digital services and software solutions from our platform."
      lastUpdated="September 2026"
    >
      <div className="space-y-8 text-sm sm:text-base text-white/90 font-light leading-relaxed">
        {/* Intro */}
        <div className="p-5 rounded-2xl bg-[#E7D8FF]/10 border border-[#B8C0FF]/30 text-xs sm:text-sm text-[#E7D8FF] leading-relaxed">
          <p>
            Please read these <strong>Terms and Conditions</strong> carefully before proceeding with any transaction or commissioning work on <strong>harshapex.com.lk</strong>. By accessing our website or engaging our services, you agree to comply with and be bound by these terms.
          </p>
        </div>

        {/* Use of the Website */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            1. Use of the Website
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-2 text-white/80 text-xs sm:text-sm">
            <li>You must be at least 18 years old to use our website or make purchases and book service packages.</li>
            <li>You are responsible for maintaining the confidentiality of any client account credentials and project staging passwords.</li>
            <li>You agree to provide accurate and current information during all project consultations, inquiries, and checkout processes.</li>
            <li>You may not use our website or digital products for any unlawful, defamatory, infringing, or unauthorized purposes.</li>
          </ul>
        </section>

        {/* Product Information and Pricing */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            2. Service Information and Pricing
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-2 text-white/80 text-xs sm:text-sm">
            <li>We strive to provide accurate service descriptions, deliverables, project scopes, and pricing across all packages (Starter, Growth, Enterprise, and Custom Software).</li>
            <li>Prices and package specifications are subject to change without prior notice. Promotional rates or seasonal discounts are valid for a limited time and subject to terms stated at the time of quotation.</li>
            <li>All packages are fully customizable with extra pages or bespoke features for a transparent, budget-friendly rate agreed upon prior to kickoff.</li>
          </ul>
        </section>

        {/* Orders and Payments */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            3. Orders and Payments
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-2 text-white/80 text-xs sm:text-sm">
            <li>By placing an order or commissioning a service on our website, you are submitting an offer to purchase the selected digital service or software engineering scope.</li>
            <li>We reserve the right to refuse or cancel any order for reasons including service unavailability, project scope discrepancies, or suspected fraudulent activity.</li>
            <li>You agree to provide valid and up-to-date payment information and authorize us to charge the agreed project fees (including milestone deposits and balances) using your chosen payment method.</li>
            <li>We use trusted third-party payment processors (such as <strong>PayHere</strong>) to handle payment transactions securely. We do not store sensitive payment card details directly on our servers.</li>
          </ul>
        </section>

        {/* Digital Service Delivery */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            4. Service Delivery & Handover
          </h3>
          <p className="text-xs sm:text-sm text-white/80">
            Harsh Apex provides bespoke digital engineering and web services. Deliverables are deployed electronically via private staging URLs, cloud-hosted production servers, and source code handovers. Project delivery timelines provided in our quotations are realistic estimates based on timely provision of necessary client assets and feedback.
          </p>
        </section>

        {/* Returns and Refunds */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            5. Returns and Refunds
          </h3>
          <p className="text-xs sm:text-sm text-white/80">
            Our cancellation and refund policies govern the conditions for returning services and seeking refunds. Please refer to our official <a href="/return-policy" className="text-[#6DD5C4] underline hover:text-white transition-colors">Refund Policy</a> page for comprehensive information regarding refund eligibility, milestones, and timelines.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            6. Intellectual Property
          </h3>
          <p className="text-xs sm:text-sm text-white/80">
            All original branding, graphics, logos, and content appearing on <strong>harshapex.com.lk</strong> are protected by intellectual property rights and remain the property of Harsh Apex Digital Solutions.
          </p>
          <p className="text-xs sm:text-sm text-white/80">
            Upon receipt of full and final payment for any bespoke project, <strong>all custom-written software code, design assets, and deliverable materials developed exclusively for the client transfer completely to the Client</strong>. Harsh Apex retains customary portfolio demonstration rights unless a separate Non-Disclosure Agreement (NDA) is executed.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            7. Limitation of Liability
          </h3>
          <p className="text-xs sm:text-sm text-white/80">
            In no event shall Harsh Apex Digital Solutions, its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or services, including third-party cloud hosting disruptions or domain registrar downtime.
          </p>
        </section>

        {/* Amendments and Termination */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            8. Amendments and Termination
          </h3>
          <p className="text-xs sm:text-sm text-white/80">
            We reserve the right to modify, update, or terminate these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes.
          </p>
        </section>

        {/* Contact Us */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            9. Contact Information
          </h3>
          <p className="text-xs sm:text-sm text-white/80">
            If you have questions or require clarification regarding these Terms and Conditions, please contact us:
          </p>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm space-y-1.5 font-mono text-white/90">
            <p><strong>Website:</strong> https://harshapex.com.lk</p>
            <p><strong>Entity:</strong> Harsh Apex Digital Solutions</p>
            <p><strong>Email:</strong> chamilka.ch@gmail.com</p>
            <p><strong>Phone / WhatsApp:</strong> +94 77 066 3154</p>
            <p><strong>Offices:</strong> Galle &bull; Colombo &bull; Matara, Sri Lanka</p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
}
