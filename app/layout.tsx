import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Tapcord Engineering | Electrical, Plumbing & Facility Management in Lagos & Onitsha',
  description: 'Expert Electrical, Plumbing, and Facility Management services for residential, commercial, and industrial projects across Lagos and Onitsha, Nigeria.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0A1128] text-[#F8F9FA] font-system">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}