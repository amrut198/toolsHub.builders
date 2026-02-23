import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Block as Navbar } from '@/src/components/blocks/marketing-navbars/navbar-with-call-to-action/block';
import { Block as Footer } from '@/src/components/blocks/footers/footer-with-four-columns/block';
import ScrollToTop from './components/ScrollToTop';
import SchemaOrg from './components/SchemaOrg';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://toolshub.builders'),
  title: {
    default: "toolsHub.builders - 20+ Free Online Tools",
    template: "%s | toolsHub"
  },
  description: "20+ free online tools for text, developers, images & SEO. Word counter, JSON formatter, image compressor, meta tags & more. No signup required.",
  keywords: ["free online tools", "word counter", "json formatter", "image compressor", "seo tools", "developer tools", "text tools"],
  authors: [{ name: "toolsHub.builders" }],
  creator: "toolsHub.builders",
  publisher: "toolsHub.builders",
  alternates: {
    canonical: 'https://toolshub.builders',
    languages: {
      'en': 'https://toolshub.builders',
      'x-default': 'https://toolshub.builders',
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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="L_6Rg5Hz5yGbl2N_n9MSvjJ2HCY-7uihj3VOcwENPm8" />
        <meta name="msvalidate.01" content="" />
        <meta name="yandex-verification" content="" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="YXeUBKP1EN71AowKkazVRw" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var ahrefs_analytics_script = document.createElement('script');
              ahrefs_analytics_script.async = true;
              ahrefs_analytics_script.src = 'https://analytics.ahrefs.com/analytics.js';
              ahrefs_analytics_script.setAttribute('data-key', 'YXeUBKP1EN71AowKkazVRw');
              document.getElementsByTagName('head')[0].appendChild(ahrefs_analytics_script);
            `,
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7314505581446119"
          crossorigin="anonymous"></script>
      </head>
      <body className="antialiased">
        <Provider>
          <Navbar />
          <div style={{ paddingTop: '65px' }}>
            {children}
          </div>
          <Footer />
          <ScrollToTop />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
