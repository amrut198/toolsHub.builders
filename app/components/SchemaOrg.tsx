'use client'

import { useEffect } from 'react'

// Unique ID to track if schema has been added
const SCHEMA_ID = 'toolshub-schema-org'

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'toolsHub.builders',
    alternateName: 'ToolsHub',
    url: 'https://toolshub.builders',
    description: '50+ free AI tools for text, images, audio, video, and code. No sign-up required. Instant results.',
    publisher: {
      '@type': 'Organization',
      name: 'toolsHub.builders',
      url: 'https://toolshub.builders',
      logo: {
        '@type': 'ImageObject',
        url: 'https://toolshub.builders/icon.png',
        width: 32,
        height: 32,
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'toolsHub.builders',
    url: 'https://toolshub.builders',
    logo: 'https://toolshub.builders/icon.png',
    description: 'Free AI tools directory for students, creators, and developers',
    sameAs: [
      'https://twitter.com/toolshubbuilders',
      'https://github.com/toolshubbuilders',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@toolshub.builders',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'toolsHub.builders',
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
      ratingCount: '50000',
      bestRating: '5',
      worstRating: '1',
    },
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are all tools really free forever?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes! All tools on toolsHub.builders are completely free with no hidden fees, no premium tiers, and no credit card required.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to create an account to use the tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No account required. Simply click on any tool and start using it immediately. No sign-up, no email verification, no waiting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data safe and private?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. We don't store your input data. Everything you process stays in your browser and is never sent to our servers.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use these tools for commercial projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes! All tools are free for both personal and commercial use. Whether you're a student, creator, developer, or business owner.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do the tools have any usage limits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No limits. Use any tool as many times as you need. Unlike other platforms, we dont impose daily caps or restrict features.',
      },
    },
  ],
}

export default function SchemaOrg() {
  useEffect(() => {
    // Check if schema already exists
    if (document.getElementById(SCHEMA_ID)) {
      return
    }

    // Add all schema.org data
    const allSchemas = [...schemas, faqSchema]

    const scriptElements: HTMLScriptElement[] = []

    allSchemas.forEach((schema) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = SCHEMA_ID
      script.setAttribute('data-schema', schema['@type'])
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
      scriptElements.push(script)
    })

    // Cleanup function to remove scripts
    return () => {
      scriptElements.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    }
  }, [])

  return null
}
