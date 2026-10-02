import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';
import GlobalBackground from '@/components/GlobalBackground';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';

const magoa = localFont({
  src: './fonts/Magoa-FreeDemo.otf',
  variable: '--font-magoa',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://harshapex.com.lk'),
  title: {
    default: 'Harsh Apex | #1 Digital Solutions, Software & Web Design Agency Sri Lanka • POS & SaaS',
    template: '%s | Harsh Apex Digital Solutions',
  },
  description:
    'Harsh Apex Digital Solutions is Sri Lanka’s premier software & digital systems agency. We engineer high-performance websites, custom POS billing systems, ERP software, mobile apps, and AI automation. 25+ projects delivered globally. Zero monthly fees. Get your free demo today!',
  keywords: [
    // Core Web & Agency Keywords
    'website designing and developing',
    'website designing and developing Sri Lanka',
    'best web designers in Sri Lanka',
    'best web development company Sri Lanka',
    'web design Sri Lanka',
    'web development Sri Lanka',
    'web design Colombo',
    'web design Galle Colombo Matara Kandy',
    'Next.js web development agency',
    'e-commerce website development Sri Lanka',
    'affordable website design Sri Lanka',
    'budget web design packages',
    'luxury web design studio',
    'UI UX design studio Colombo',

    // Business Systems, POS & ERP Keywords
    'custom POS software Sri Lanka',
    'best POS system Sri Lanka',
    'POS systems Colombo',
    'restaurant POS billing system Sri Lanka',
    'retail POS software with barcode',
    'inventory management software Sri Lanka',
    'ERP systems Sri Lanka',
    'Smart Business Suite Sri Lanka',
    'iPhone IMEI POS software',
    'laundry management software Sri Lanka',
    'offline billing software Sri Lanka',
    'point of sale software price Sri Lanka',

    // Custom Software, Apps & AI Keywords
    'custom software development Sri Lanka',
    'mobile app development Sri Lanka',
    'iOS and Android app developers',
    'Flutter and React Native developers',
    'SaaS platform development Sri Lanka',
    'AI automation agency Sri Lanka',
    'WhatsApp automation for business Sri Lanka',
    'business management software Sri Lanka',

    // Brand Authority Keywords
    'Harsh Apex',
    'Harsh Apex Digital Solutions',
    'Chamilka Harshan',
    'Chamilka Harshan web designer',
    'Harsh Apex POS system',
    'Harsh Apex Smart Business Suite',
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
    title: 'Harsh Apex | #1 Digital Systems, POS & Web Development Agency Sri Lanka 🚀',
    description:
      'Stop paying monthly software subscriptions. We engineer custom POS systems, high-speed websites, ERPs, and mobile apps with 100% custom code ownership. Explore live systems now!',
    images: [
      {
        url: 'https://harshapex.com.lk/logo.png',
        width: 1200,
        height: 630,
        alt: 'Harsh Apex Digital Solutions - #1 Digital Systems, POS & Web Development Agency Sri Lanka',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Apex | #1 Digital Systems, POS & Web Development Agency Sri Lanka 🚀',
    description:
      'High-performance websites, custom POS billing platforms, ERP software, and AI automations. 25+ successful deployments worldwide. Zero monthly fees.',
    images: ['https://harshapex.com.lk/logo.png'],
    creator: '@harsh.apex',
    site: '@harsh.apex',
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
  classification: 'Digital Solutions, POS Systems, Software Development, Web Design Agency',
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
        'Harsh Apex Software & POS Systems',
        'Harsh Apex Web Design',
        'Harsh Apex Tech Studio',
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
        'Premier digital solutions and software engineering agency in Sri Lanka specializing in high-performance websites, custom POS billing systems, ERP software, mobile applications, and AI automation at budget-friendly rates with zero monthly fees.',
      slogan: 'We Build Digital Systems That Move Businesses Forward',
      knowsAbout: [
        'Website Designing and Developing',
        'Custom POS & Billing Systems',
        'Enterprise Resource Planning (ERP)',
        'SaaS Platforms',
        'Mobile App Development (iOS & Android)',
        'AI & WhatsApp Business Automation',
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Tailwind CSS',
        'Supabase & Firebase',
      ],
      founder: {
        '@type': 'Person',
        name: 'Chamilka Harshan',
        jobTitle: 'Founder & Lead Software Architect',
        sameAs: 'https://linkedin.com/in/chamilka-harshan',
      },
      telephone: '+94770663154',
      email: 'chamilka.ch@gmail.com',
      priceRange: 'LKR 15,000 – LKR 500,000+',
      currenciesAccepted: 'LKR, USD, EUR, GBP, AUD',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer, Online Payment Gateway, PayHere',
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
        name: 'Digital Solutions & Enterprise Software',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Designing and Developing',
              description:
                'Custom responsive web design, Next.js web applications, e-commerce platforms, and corporate portals optimized for speed and #1 Google rankings.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom POS & Billing Systems',
              description:
                'Tailored point-of-sale software, inventory management, restaurant billing, thermal printing, and multi-branch retail POS solutions with zero monthly fees.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Smart Business Suite (POS + ERP + CRM)',
              description:
                'All-in-one business operating system combining POS billing, real-time inventory, CRM, financial P&L reporting, and AI chatbot.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development (iOS & Android)',
              description:
                'High-performance cross-platform mobile apps built with React Native & Flutter with cloud synchronization and offline support.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI & WhatsApp Business Automation',
              description:
                '24/7 intelligent customer chatbots, automated order receipts, invoice notifications, and CRM automated workflows.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Software & SaaS Platform Development',
              description:
                'Bespoke multi-tenant SaaS platforms, internal business portals, and secure cloud database architectures.',
            },
          },
        ],
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://harshapex.com.lk/#smart-business-suite',
      name: 'Harsh Apex Smart Business Suite',
      operatingSystem: 'Web Browser, Windows, macOS, Android, iOS',
      applicationCategory: 'BusinessApplication',
      description:
        'All-in-one business operating system featuring Point of Sale (POS), real-time stock control, CRM, financial analytics, and 24/7 AI chatbot with zero monthly fees.',
      url: 'https://saas.harshapex.com.lk/login',
      offers: [
        {
          '@type': 'Offer',
          name: 'Starter Business Suite',
          price: '49900',
          priceCurrency: 'LKR',
          description: 'POS & Billing System, Real-time Inventory, Customer Database, Lifetime Support',
        },
        {
          '@type': 'Offer',
          name: 'Business Suite (Most Popular)',
          price: '89900',
          priceCurrency: 'LKR',
          description: 'Advanced Inventory, HR & Staff Management, Automated WhatsApp Notifications, Multi-User Roles',
        },
        {
          '@type': 'Offer',
          name: 'Ultimate Business Suite',
          price: '149900',
          priceCurrency: 'LKR',
          description: 'Complete Suite + Connected E-Commerce Website, 24/7 AI Assistant, VIP Priority Lifetime Support',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        ratingCount: '18',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://harshapex.com.lk/#website',
      url: 'https://harshapex.com.lk',
      name: 'Harsh Apex Digital Solutions',
      description: 'Sri Lanka’s #1 Digital Solutions, Software & Web Design Agency',
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
          name: 'What makes Harsh Apex the #1 digital solutions and web development agency in Sri Lanka?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Harsh Apex Digital Solutions combines cutting-edge engineering (Next.js 16, React 19, TypeScript) with bespoke design and budget-friendly pricing. Unlike agencies that use slow templates, we build custom high-performance websites, POS billing systems, ERPs, and mobile apps with zero monthly lock-in fees and verified 5-star results.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you build custom POS systems, billing software, and mobile apps for any budget?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! We specialize in custom Point-of-Sale (POS) systems, retail billing software, restaurant management systems, and cross-platform mobile apps (iOS & Android) tailored exactly to your business workflow and budget with one-time payment options.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in the Harsh Apex Smart Business Suite?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Smart Business Suite is our flagship all-in-one software platform that integrates fast POS billing, real-time inventory management, customer CRM, financial P&L reporting, HR staff management, automated WhatsApp customer notifications, and a 24/7 AI chatbot. Live demo is available at saas.harshapex.com.lk.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a website designing and developing project typically take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard high-performance websites are typically completed within 1 to 3 weeks. Custom web applications, POS systems, and complex e-commerce platforms typically range between 2 to 6 weeks with clear milestone schedules.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you guarantee #1 Google search ranking and SEO optimization?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every website we engineer is built with Google Core Web Vitals optimization (95+ Lighthouse score), Schema.org JSON-LD structured data, responsive mobile-first architecture, OpenGraph social cards, and targeted on-page keyword optimization engineered to dominate search rankings.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="canonical" href="https://harshapex.com.lk" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://harshapex-7e3f7-default-rtdb.firebaseio.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,600,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
        />
        <meta name="theme-color" content="#0D0B1A" />
        <meta name="geo.region" content="LK-11" />
        <meta name="geo.placename" content="Colombo, Western Province, Sri Lanka" />
        <meta name="geo.position" content="6.9271;79.8612" />
        <meta name="ICBM" content="6.9271, 79.8612" />
        <meta name="author" content="Harsh Apex Digital Solutions" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="2 days" />
        <meta name="language" content="English" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('harsh-apex-theme');if(t==='light'){document.documentElement.classList.add('light');document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`${magoa.variable} bg-transparent text-white antialiased overflow-x-hidden w-full max-w-full min-h-screen transition-colors duration-500`}>
        <ThemeProvider>
          <LenisProvider>
            <GlobalBackground />
            <CustomCursor />
            {children}
          </LenisProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
