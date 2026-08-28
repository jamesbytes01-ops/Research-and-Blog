import type { Metadata } from 'next';
import './globals.css';
import DisclaimerBanner from '@/components/layout/DisclaimerBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Webroot Research & Knowledge Hub',
  description: 'Independent guide for Webroot antivirus products, comparisons, download links, installation steps, keycode activation, and cybersecurity research.',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-full bg-slate-50 text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
