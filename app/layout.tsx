import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Block as Navbar } from '@/src/components/blocks/marketing-navbars/navbar-with-call-to-action/block';
import { Block as Footer } from '@/src/components/blocks/footers/footer-with-four-columns/block';
import ScrollToTop from './components/ScrollToTop';
import SchemaOrg from './components/SchemaOrg';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://toolshub.builders'),
  title: {
    default: "toolsHub.builders - 50+ Free AI Tools",
    template: "%s | toolsHub.builders"
  },
  description: "Access 50+ free AI tools for text, images, audio, video, and code. No sign-up required. Instant results.",
  keywords: ["free AI tools", "AI tools directory", "no signup AI tools", "text AI tools", "image AI tools", "productivity tools"],
  authors: [{ name: "toolsHub.builders" }],
  creator: "toolsHub.builders",
  publisher: "toolsHub.builders",
  alternates: {
    canonical: 'https://toolshub.builders',
    languages: {
      'en': 'https://toolshub.builders',
      'en-US': 'https://toolshub.builders',
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toolshub.builders",
    siteName: "toolsHub.builders",
    title: "toolsHub.builders - 50+ Free AI Tools",
    description: "50+ free AI tools for text, images, audio, video, and code. No sign-up required. Instant results.",
    images: [
      {
        url: "/opengraph-image?d7b150282b7b5bc",
        width: 1200,
        height: 630,
        alt: "toolsHub.builders - Free AI Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@toolshubbuilders",
    title: "toolsHub.builders - 50+ Free AI Tools",
    description: "50+ free AI tools. No sign-up. Instant results.",
    images: ["/opengraph-image?d7b150282b7b5bc"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />
        <meta name="yandex-verification" content="" />
      </head>
      <body className={`${plusJakarta.variable} ${dmSans.variable} antialiased`}>
        <SchemaOrg />
        <Provider>
          <Navbar />
          <div style={{ paddingTop: '65px' }}>
            {children}
          </div>
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
