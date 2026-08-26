import type { Metadata } from 'next';
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wisteria Salon | Erandwane, Pune',
  description:
    'Wisteria Salon in Erandwane, Pune. Explore hair, colour, beauty and grooming services and enquire about your next appointment.',
  keywords: [
    'Wisteria Salon',
    'Salon Erandwane Pune',
    'Hair Studio Pune',
    'Hair Colour Pune',
    'Grooming Erandwane',
    'Hair Cut Pune',
    'Beauty Studio Pune',
  ],
  authors: [{ name: 'Wisteria Salon' }],
  openGraph: {
    title: 'Wisteria Salon | Erandwane, Pune',
    description:
      'Wisteria Salon in Erandwane, Pune. Explore hair, colour, beauty and grooming services and enquire about your next appointment.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Wisteria Salon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wisteria Salon | Erandwane, Pune',
    description:
      'Wisteria Salon in Erandwane, Pune. Explore hair, colour, beauty and grooming services and enquire about your next appointment.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Wisteria Salon',
  description:
    'Wisteria Salon in Erandwane, Pune. Explore hair, colour, beauty and grooming services and enquire about your next appointment.',
  telephone: '+918010880342',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kalmadi Road, near Kalmadi School, next to Kata Kirr Misal, Bhonde Colony, Erandwane',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411004',
    addressCountry: 'IN',
  },
  priceRange: '₹₹',
  paymentAccepted: 'Cash, UPI, Credit Card, Debit Card',
  currenciesAccepted: 'INR',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F3F1EC] text-[#161616] antialiased selection:bg-[#C7353E] selection:text-[#F3F1EC]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
