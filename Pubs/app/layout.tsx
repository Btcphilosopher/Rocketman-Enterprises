import type {Metadata} from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The MicroPub Collective | Small Pubs. Big Character.',
  description: 'A curated collection of outstanding micropubs across the UK, celebrating great drinks, local community, and British hospitality.',
  openGraph: {
    title: 'The MicroPub Collective | Small Pubs. Big Character.',
    description: 'A curated collection of outstanding micropubs across the UK, celebrating great drinks, local community, and British hospitality.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The MicroPub Collective | Small Pubs. Big Character.',
    description: 'A curated collection of outstanding micropubs across the UK, celebrating great drinks, local community, and British hospitality.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${mono.variable} dark scroll-smooth`}>
      <body className="bg-[#0b1410] text-[#e8e6df] font-sans antialiased selection:bg-[#d4af37]/30 selection:text-[#faedd0]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
