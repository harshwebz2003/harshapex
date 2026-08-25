import type { Metadata } from 'next';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';
import GlobalBackground from '@/components/GlobalBackground';

export const metadata: Metadata = {
  metadataBase: new URL('https://harshapex.com.lk'),
  title: {
    default: 'Harsh Apex | #1 Website Designing & Developing Agency Sri Lanka • POS & Custom Apps',
    template: '%s | Harsh Apex Digital Solutions',
  },
  description:
    'Harsh Apex is Sri Lanka’s premier agency for website designing and developing, custom POS billing systems, mobile apps, and custom software. High-performance, budget-friendly digital solutions engineered to rank #1 and convert visitors into clients.',
  keywords: [
    'website designing and developing',
    'website designing and developing Sri Lanka',
    'web design Sri Lanka',
    'web development Sri Lanka',
    'web design and development company',
    'best web designers in Sri Lanka',
    'custom POS software Sri Lanka',
    'POS systems Colombo',
    'restaurant POS billing system Sri Lanka',
    'retail POS software',
    'mobile app development Sri Lanka',
    'iOS and Android app developers',
    'affordable website design Sri Lanka',
    'budget web design packages',
    'Next.js web development agency',
    'e-commerce website development Sri Lanka',
    'UI UX design studio Colombo',
    'Harsh Apex Digital Solutions',
    'Chamilka Harshan web designer',
    'web design Galle Colombo Matara',
  ],
  authors: [{ name: 'Harsh Apex Digital Solutions', url: 'https://harshapex.com.lk' }],
  creator: 'Harsh Apex Digital Solutions',
  publisher: 'Harsh Apex Digital Solutions',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harshapex.com.lk',
    siteName: 'Harsh Apex Digital Solutions',
    title: 'Harsh Apex | #1 Website Designing & Developing Agency Sri Lanka',
    description:
      'We craft high-performance websites, custom POS billing systems, mobile apps, and enterprise software at budget-friendly prices. 25+ projects delivered across 3+ countries.',
    images: [
      {
        url: 'https://harshapex.com.lk/logo.png',
        width: 1200,
        height: 630,
        alt: 'Harsh Apex Digital Solutions - Website Designing & Developing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Apex | #1 Website Designing & Developing Agency Sri Lanka',
    description:
      'World-class website design, custom POS systems, and mobile applications engineered for explosive business growth.',
    images: ['https://harshapex.com.lk/logo.png'],
    creator: '@harsh.apex',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://harshapex.com.lk',
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
      '@id': 'https://harshapex.com.lk/#organization',
      name: 'Harsh Apex Digital Solutions',
      alternateName: [
        'Harsh Apex',
        'Harsh Apex Web Design',
        'Harsh Apex Software & POS Systems',
      ],
      url: 'https://harshapex.com.lk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://harshapex.com.lk/logo.png',
        width: 512,
        height: 512,
      },
      image: 'https://harshapex.com.lk/logo.png',
      description:
        'Premier digital agency in Sri Lanka specializing in website designing and developing, custom POS systems, mobile applications, e-commerce, and bespoke enterprise software at flexible budget rates.',
      telephone: '+94770663154',
      email: 'chamilka.ch@gmail.com',
      priceRange: 'LKR 45,000 – LKR 500,000+',
      currenciesAccepted: 'LKR, USD, EUR, GBP, AUD',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer, Online Payment Gateway',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Galle Road, Colombo / Matara / Galle',
        addressLocality: 'Colombo',
        addressRegion: 'Western Province',
        postalCode: '00700',
        addressCountry: 'LK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 6.9271,
        longitude: 79.8612,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '08:00',
          closes: '22:00',
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'Sri Lanka' },
        { '@type': 'City', name: 'Colombo' },
        { '@type': 'City', name: 'Galle' },
        { '@type': 'City', name: 'Matara' },
        { '@type': 'City', name: 'Kandy' },
        { '@type': 'City', name: 'Negombo' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Place', name: 'Worldwide' },
      ],
      sameAs: [
        'https://www.tiktok.com/@harsh.apex',
        'https://www.facebook.com/harshapex',
        'https://www.instagram.com/c_harshz/',
        'https://linkedin.com/in/chamilka-harshan',
        'https://github.com/chamilka-ch',
        'https://wa.me/94770663154',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '25',
        reviewCount: '25',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Tharindu Lakshan' },
          datePublished: '2026-02-15',
          reviewBody:
            'Harsh Apex created our photography studio website (tilnogzphotography.com.lk) with outstanding speed and ultra-luxury aesthetics. Inquiries have tripled since launch!',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'NEAT Construction & Hospitality Services' },
          datePublished: '2026-01-20',
          reviewBody:
            'The custom digital platform and estimation workflow built by Harsh Apex doubled our lead volume and customer conversions in just two months.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Nipun Sathsara' },
          datePublished: '2026-03-01',
          reviewBody:
            'Exceptional attention to detail, modern UI/UX design, and fast turnaround. They build systems that truly perform.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Services & Software Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Designing and Developing',
              description:
                'Custom responsive web design, Next.js web applications, WordPress websites, and corporate portals optimized for speed and SEO.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom POS & Billing Systems',
              description:
                'Tailored point of sale software, inventory management, restaurant billing, and retail POS solutions at budget-friendly prices.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development (iOS & Android)',
              description:
                'Native and cross-platform mobile apps with seamless UI/UX, real-time cloud backends, and push notifications.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-Commerce Website Development',
              description:
                'Full-stack online stores with local and international payment gateways (PayHere, Stripe, PayPal) and inventory management.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'UI/UX & Brand Identity Design',
              description:
                'User interface design, motion prototypes, design systems, logos, and high-conversion editorial layouts.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://harshapex.com.lk/#website',
      url: 'https://harshapex.com.lk',
      name: 'Harsh Apex Digital Solutions',
      description: 'Sri Lanka’s #1 Website Designing & Developing Agency',
      publisher: { '@id': 'https://harshapex.com.lk/#organization' },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://harshapex.com.lk/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://harshapex.com.lk/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you build custom POS systems, billing software, and mobile apps for any budget?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! We specialize in engineering custom Point-of-Sale (POS) systems, retail billing software, restaurant management systems, and cross-platform mobile apps (iOS & Android) tailored exactly to your business workflow and budget.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a website designing and developing project typically take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard high-performance websites are typically completed within 1 to 3 weeks. Custom web applications, POS systems, and complex e-commerce platforms typically range between 3 to 6 weeks depending on features.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies do you use for web development in Sri Lanka?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We utilize modern enterprise-grade tech stacks including Next.js 16, React, TypeScript, Tailwind CSS, GSAP, Node.js, Firebase, and cloud serverless architectures for maximum speed, security, and #1 Google search rankings.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide SEO optimization with every website design?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every website we engineer includes comprehensive technical SEO, Schema.org JSON-LD structured data, Core Web Vitals optimization (95+ Lighthouse score), and mobile-first responsive architecture.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="canonical" href="https://harshapex.com.lk" />
        <meta name="theme-color" content="#0D0B1A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="bg-[#0D0B1A] text-white antialiased overflow-x-hidden">
        <LenisProvider>
          <GlobalBackground />
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
