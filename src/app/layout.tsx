import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import ScrollReveal from '@/components/ScrollReveal';
import './globals.css';

// Inter configured with SF Pro optical metrics and features
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: 'DeewanSolar.com | Authorized Tata Power & Adani Solar Partner in Behror',
  description: 'Official portal for Deewan Solar (DeewanSolar.com). Authorized EPC partner for Tata Power Solar (30-Yr Warranty) & Adani Solar. Claim up to ₹95,000 subsidy, turnkey JVVNL net-metering, and exclusive Solar Loans by State Bank of India (SBI). (Bajaj Finserv EMIs available for showroom electronics). Serving Behror, Neemrana, Kotputli, and Alwar across Rajasthan since 1995. Operating exclusively in Rajasthan (not in Haryana or UP).',
  keywords: 'DeewanSolar.com, Deewan Solar Behror, Tata Power Solar Behror, Adani Solar Behror, Solar Panel Installation Behror, PM Surya Ghar Rajasthan, 95000 Solar Subsidy, SBI Solar Loan, JVVNL Net Metering Behror, Neemrana Solar, Kotputli Solar',
  openGraph: {
    title: 'DeewanSolar.com - Turnkey Tata & Adani Solar in Behror, Rajasthan',
    description: 'Up to ₹95,000 subsidy. Zero power bills with Tata Power Solar & JVVNL Net Metering. Exclusive Solar Loans by SBI.',
    url: 'https://deewansolar.com',
    type: 'website',
    locale: 'en_IN',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1d1d1f] antialiased selection:bg-[#0071e3]/15 selection:text-[#0071e3]">
        <Navbar />
        <main className="flex-1 flex flex-col bg-white">{children}</main>
        <Footer />
        <AIAssistant />
        <ScrollReveal />
      </body>
    </html>
  );
}
