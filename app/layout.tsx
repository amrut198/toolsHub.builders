import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://toolshub.builders'),
  title: {
    default: "toolshub-builders - Innovation & Technology Solutions",
    template: "%s | toolshub-builders"
  },
  description: "toolshub-builders - Your trusted partner in cutting-edge technology solutions. We deliver innovative products and services to help businesses scale and succeed.",
  keywords: ["toolshub-builders", "technology solutions", "innovation", "software development", "digital transformation", "business solutions"],
  authors: [{ name: "toolshub-builders" }],
  creator: "toolshub-builders",
  publisher: "toolshub-builders",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toolshub.builders",
    siteName: "toolshub-builders",
    title: "toolshub-builders - Innovation & Technology Solutions",
    description: "Your trusted partner in cutting-edge technology solutions. We deliver innovative products and services to help businesses scale and succeed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "toolshub-builders - Innovation & Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "toolshub-builders - Innovation & Technology Solutions",
    description: "Your trusted partner in cutting-edge technology solutions. We deliver innovative products and services to help businesses scale and succeed.",
    images: ["/og-image.png"],
    creator: "@toolshub-builders",
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
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icon.png',
      },
    ],
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
