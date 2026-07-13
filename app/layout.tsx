import type { Metadata } from 'next';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';
import GlobalBackground from '@/components/GlobalBackground';

export const metadata: Metadata = {
  metadataBase: new URL('https://harshapex.com.lk'),
  title: {
    default: 'Harsh Apex Digital Solutions | Premium Web Design & Digital Agency Sri Lanka',
    template: '%s | Harsh Apex Digital Solutions',
  },
  description:
    'Harsh Apex Digital Solutions is a premium digital agency in Sri Lanka specialising in world-class web design, UI/UX, web development, branding, SEO, and digital strategy for startups, SMEs, and enterprises.',
  keywords: [
    'web design Sri Lanka',
    'digital agency Sri Lanka',
    'UI/UX design',
    'web development Sri Lanka',
    'branding agency',
    'SEO Sri Lanka',
    'Next.js development',
    'Harsh Apex',
    'premium website design',
  ],
  authors: [{ name: 'Harsh Apex Digital Solutions', url: 'https://harshapex.com.lk' }],
  creator: 'Harsh Apex Digital Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harshapex.com.lk',
    siteName: 'Harsh Apex Digital Solutions',
    title: 'Harsh Apex Digital Solutions | Premium Digital Agency Sri Lanka',
    description:
      'We craft world-class websites, immersive UI/UX, and growth-driven digital strategies for ambitious brands.',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Harsh Apex Digital Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Apex Digital Solutions | Premium Digital Agency',
    description:
      'World-class web design, UI/UX, branding and digital strategy — crafted for ambitious brands.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://harshapex.com.lk' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://harshapex.com.lk/#organization',
                  name: 'Harsh Apex Digital Solutions',
                  url: 'https://harshapex.com.lk',
                  logo: 'https://harshapex.com.lk/logo.png',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer service',
                    availableLanguage: 'English',
                  },
                  sameAs: [],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://harshapex.com.lk/#website',
                  url: 'https://harshapex.com.lk',
                  name: 'Harsh Apex Digital Solutions',
                  publisher: { '@id': 'https://harshapex.com.lk/#organization' },
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://harshapex.com.lk/#localbusiness',
                  name: 'Harsh Apex Digital Solutions',
                  url: 'https://harshapex.com.lk',
                  image: 'https://harshapex.com.lk/logo.png',
                  address: { '@type': 'PostalAddress', addressCountry: 'LK' },
                  priceRange: 'LKR 45,000 – 500,000+',
                  servesCuisine: undefined,
                  hasMap: undefined,
                },
              ],
            }),
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
