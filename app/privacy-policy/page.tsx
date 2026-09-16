import React from 'react';
import { Metadata } from 'next';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | Harsh Apex Digital Solutions',
  description:
    'Official Privacy Policy for Harsh Apex Digital Solutions (harshapex.com.lk). How we collect, use, and protect your personal information with PayHere compliance.',
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      badge="PAYHERE COMPLIANT & SECURE"
      subtitle="At Harsh Apex Digital Solutions (harshapex.com.lk), we are committed to protecting the privacy and security of our customers' personal information."
      lastUpdated="September 2026"
    >
      <div className="space-y-8 text-sm sm:text-base text-white/90 font-light leading-relaxed">
        {/* Intro */}
        <div className="p-5 rounded-2xl bg-[#B8C0FF]/10 border border-[#B8C0FF]/30 text-xs sm:text-sm text-[#E7D8FF] leading-relaxed">
          <p>
            This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website (<strong>https://harshapex.com.lk</strong>) or purchase our digital services and software solutions. By using our website, you consent to the practices described in this policy.
          </p>
        </div>

        {/* Information We Collect */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            1. Information We Collect
          </h3>
          <p>When you visit our website, we may collect certain information about you, including:</p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-white/80 text-xs sm:text-sm">
            <li>
              <strong>Personal Identification Information:</strong> Such as your name, email address, and phone numbers provided voluntarily by you during project consultation, quotation requests, or client checkout.
            </li>
            <li>
              <strong>Payment & Billing Information:</strong> Information necessary to process your order, including credit/debit card details, all of which are securely handled by our trusted third-party payment processor <strong>PayHere</strong>. Harsh Apex does not store or process raw credit card numbers on its servers.
            </li>
            <li>
              <strong>Electronic Information:</strong> Such as your IP address, browser type and device information, collected automatically using cookies and similar technologies.
            </li>
          </ul>
        </section>

        {/* Use of Information */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            2. Use of Information
          </h3>
          <p>We may use the collected information for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/80 text-xs sm:text-sm">
            <li>To process and fulfill your orders, including invoicing and digital service delivery.</li>
            <li>To communicate with you regarding your purchases, project milestones, questions, or requests.</li>
            <li>To personalize your browsing experience and recommend digital solutions tailored to your business needs.</li>
            <li>To improve our website, products, and services based on your feedback and browsing patterns.</li>
            <li>To detect and prevent fraud, unauthorized access, and abuse of our services.</li>
          </ul>
        </section>

        {/* Information Sharing */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            3. Information Sharing
          </h3>
          <p>
            We respect your privacy and will not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/80 text-xs sm:text-sm">
            <li>
              <strong>Trusted Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website, processing payments (such as PayHere payment gateway), and delivering services. These providers are contractually obligated to handle your data securely and confidentially.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights, property, or safety, or the rights of others.
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            4. Data Security
          </h3>
          <p>
            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All payment transactions on <strong>harshapex.com.lk</strong> are encrypted using Secure Socket Layer (SSL/TLS) technology and routed through certified payment channels.
          </p>
        </section>

        {/* Cookies and Tracking Technologies */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            5. Cookies and Tracking Technologies
          </h3>
          <p>
            We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and gather information about user preferences and interactions with our website. You can choose to disable cookies through your browser settings, but this may affect certain features and functions of our website.
          </p>
        </section>

        {/* Changes to the Privacy Policy */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            6. Changes to the Privacy Policy
          </h3>
          <p>
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with a revised last updated date. We encourage you to review this policy periodically to stay informed about how we collect, use, and protect your information.
          </p>
        </section>

        {/* Contact Us */}
        <section className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white border-b border-white/10 pb-2">
            7. Contact Us
          </h3>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us using the information provided below:
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
