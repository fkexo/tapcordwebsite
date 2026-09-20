import './globals.css';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

const DEFAULT_TITLE = 'Tapcord Engineering | Electrical, Plumbing & Facility Management in Lagos & Onitsha';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'electrical services Lagos',
    'plumbing services Lagos',
    'facility management Nigeria',
    'MEP contractors Nigeria',
    'home automation Nigeria',
    'electrician Onitsha',
    'plumber Onitsha',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: '/',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: `${SITE_NAME} facility services` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0A1128',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/tapcord-logo.png`,
  image: `${SITE_URL}${OG_IMAGE}`,
  areaServed: [
    { '@type': 'City', name: 'Lagos' },
    { '@type': 'City', name: 'Onitsha' },
  ],
  address: { '@type': 'PostalAddress', addressCountry: 'NG' },
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+2348140790116', contactType: 'customer service', areaServed: 'Lagos' },
    { '@type': 'ContactPoint', telephone: '+2347025455698', contactType: 'customer service', areaServed: 'Onitsha' },
  ],
  makesOffer: ['Electrical Services', 'Plumbing Services', 'Facility Management', 'Home & Office Automation'].map(
    (name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })
  ),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0A1128] text-[#F8F9FA] font-system">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\u003c') }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
