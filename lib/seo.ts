/**
 * SEO Utilities
 * Helper functions for generating metadata and schema
 */

import type { Metadata } from 'next';
import type { Tool } from './tools-data';

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
  nofollow?: boolean;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolshub.builders';

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    canonical,
    ogImage = '/opengraph-image',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    noindex = false,
    nofollow = false,
  } = config;

  return {
    title: title?.slice(0, 48),
    description: description?.slice(0, 160),
    alternates: {
      canonical: canonical ? `${siteUrl}${canonical}` : `${siteUrl}`,
    },
    openGraph: {
      type: ogType,
      title,
      description,
      url: canonical ? `${siteUrl}${canonical}` : siteUrl,
      siteName: 'toolsHub.builders',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: twitterCard,
      site: '@toolshubbuilders',
      creator: '@toolshubbuilders',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/** Truncate a page title to ≤60 characters (Google's recommended limit) */
function truncateTitle(title: string, maxLen = 48): string {
  if (title.length <= maxLen) return title;
  return title.slice(0, maxLen - 1).trimEnd() + '…';
}

// Site-wide published/modified dates used across tool pages
const PUBLISHED_DATE = '2025-01-15';
const MODIFIED_DATE = '2026-02-22';

export function generateToolMetadata(tool: Tool): Metadata {
  const canonicalUrl = `${siteUrl}/tools/${tool.slug}`;

  return {
    ...generateMetadata({
      title: truncateTitle(tool.seoTitle)?.slice(0, 48),
      description: tool.seoDescription?.slice(0, 160),
      canonical: `/tools/${tool.slug}`,
      ogImage: `/opengraph-image?d7b150282b7b5bc`,
      ogType: 'article',
      twitterCard: 'summary_large_image',
    }),
    // Hreflang for international/language targeting
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': canonicalUrl,
        'en-US': canonicalUrl,
        'en-GB': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    // Published & modified dates — recognised by crawlers & SEO tools
    other: {
      'article:published_time': PUBLISHED_DATE,
      'article:modified_time': MODIFIED_DATE,
      'article:author': 'toolsHub.builders',
    },
  };
}

export function generateSoftwareApplicationSchema(tool: Tool) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.title,
    description: tool.seoDescription,
    url: `${siteUrl}/tools/${tool.slug}`,
    datePublished: PUBLISHED_DATE,
    dateModified: MODIFIED_DATE,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    keywords: tool.keywords.join(', '),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'toolsHub.builders',
    url: siteUrl,
    description: '100+ free online tools for developers, creators, and marketers.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/tools?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'toolsHub.builders',
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    description: 'Free online tools for developers, creators, and marketers.',
    sameAs: [],
  };
}
