import { Metadata } from 'next'
import { Container, Heading, Text, Stack, Box, Link, Badge } from '@chakra-ui/react'
import Script from 'next/script'

// Force static generation for optimal performance
export const dynamic = 'force-static';

const publishDate = '2026-02-21'
const lastModified = '2026-02-21'

const shortDescription = 'Learn about toolsHub.builders security practices. We use HTTPS, client-side processing, and follow security best practices to protect your data.'

const securitySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Security Policy',
  description: shortDescription,
  url: 'https://toolshub.builders/security',
  datePublished: publishDate,
  dateModified: lastModified,
  publisher: {
    '@type': 'Organization',
    name: 'toolsHub.builders',
    url: 'https://toolshub.builders',
  },
}

export const metadata: Metadata = {
  title: 'Security Policy | toolsHub.builders',
  description: shortDescription,
  alternates: {
    canonical: 'https://toolshub.builders/security',
    languages: {
      'en': 'https://toolshub.builders/security',
      'en-US': 'https://toolshub.builders/security',
    },
  },
  openGraph: {
    title: 'Security Policy | toolsHub.builders',
    description: shortDescription,
    url: 'https://toolshub.builders/security',
    siteName: 'toolsHub.builders',
    type: 'website',
    images: [{ url: '/opengraph-image?d7b150282b7b5bc', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@toolshubbuilders',
    title: 'Security Policy | toolsHub.builders',
    description: shortDescription,
    images: ['/opengraph-image?d7b150282b7b5bc'],
  },
}

export default function SecurityPage() {
  return (
    <>
      <Script
        id="security-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(securitySchema) }}
      />
      <Container maxW="4xl" py={16}>
        <Stack gap={8}>
          <Box>
            <Badge colorPalette="green" mb={4} px={3} py={1} borderRadius="full" w="fit-content">
              Security
            </Badge>
            <Heading size="2xl" fontWeight="900" mb={4} as={'h1'}>
              Security Policy
            </Heading>
            <Text color="gray.600">
              Last updated: February 21, 2026
            </Text>
          </Box>

          <Stack gap={6} as="article">
            <Section
              title="Our Security Commitment"
              content="At toolsHub.builders, we take security seriously. Our tools are designed with privacy-first principles, processing data locally in your browser whenever possible."
            />

            <Section
              title="Client-Side Processing"
              content={
                <Stack gap={3}>
                  <Text fontWeight="600">Your data stays on your device:</Text>
                  <UnorderedListItem
                    title="No Server Uploads"
                    description="All text, images, audio, video, and code processing happens in your browser."
                  />
                  <UnorderedListItem
                    title="No Data Storage"
                    description="We do not store, process, or transmit your input data to our servers."
                  />
                  <UnorderedListItem
                    title="Complete Privacy"
                    description="Even our team cannot access your data because it never leaves your device."
                  />
                </Stack>
              }
            />

            <Section
              title="HTTPS & Encryption"
              content={
                <Stack gap={3}>
                  <UnorderedListItem
                    title="SSL/TLS Encryption"
                    description="All connections to our website are encrypted using HTTPS with valid SSL certificates."
                  />
                  <UnorderedListItem
                    title="Secure Hosting"
                    description="We host on Vercel, which uses industry-standard security practices and infrastructure."
                  />
                  <UnorderedListItem
                    title="HTTP Strict Transport Security (HSTS)"
                    description="We enforce HTTPS connections to prevent man-in-the-middle attacks."
                  />
                </Stack>
              }
            />

            <Section
              title="Data Protection"
              content={
                <Stack gap={3}>
                  <UnorderedListItem
                    title="No Personal Data Collection"
                    description="We do not collect names, emails, or personally identifiable information."
                  />
                  <UnorderedListItem
                    title="No Account Required"
                    description="Use our tools without creating an account, eliminating the risk of account breaches."
                  />
                  <UnorderedListItem
                    title="No Tracking"
                    description="We use privacy-focused analytics that do not track individual users."
                  />
                </Stack>
              }
            />

            <Section
              title="Third-Party Services"
              content={
                <Stack gap={3}>
                  <Text>We carefully select third-party services that meet security standards:</Text>
                  <UnorderedListItem
                    title="Hosting Provider"
                    description="Vercel provides secure infrastructure with DDoS protection and edge caching."
                  />
                  <UnorderedListItem
                    title="Analytics"
                    description="We use privacy-focused analytics that anonymize IP addresses."
                  />
                  <UnorderedListItem
                    title="CDN Services"
                    description="Content delivery through secure, encrypted connections only."
                  />
                </Stack>
              }
            />

            <Section
              title="Security Best Practices We Follow"
              content={
                <Stack gap={3}>
                  <UnorderedListItem
                    title="Regular Updates"
                    description="We keep all dependencies and frameworks updated with security patches."
                  />
                  <UnorderedListItem
                    title="Code Review"
                    description="All code changes go through review processes to identify potential vulnerabilities."
                  />
                  <UnorderedListItem
                    title="Secure Headers"
                    description="We implement security headers like CSP, X-Frame-Options, and X-Content-Type-Options."
                  />
                  <UnorderedListItem
                    title="Input Validation"
                    description="All user inputs are validated and sanitized to prevent injection attacks."
                  />
                </Stack>
              }
            />

            <Section
              title="What We Don't Do"
              content={
                <Stack gap={3}>
                  <UnorderedListItem
                    title="No Selling Data"
                    description="We never sell, rent, or share your data because we don't collect it."
                  />
                  <UnorderedListItem
                    title="No Behavioral Tracking"
                    description="We do not track your behavior across websites or build user profiles."
                  />
                  <UnorderedListItem
                    title="No Cookies for Ads"
                    description="We do not use advertising cookies or sell ad space on our platform."
                  />
                </Stack>
              }
            />

            <Section
              title="Vulnerability Disclosure"
              content="If you discover a security vulnerability, please report it responsibly by emailing hello@toolshub.builders. We will investigate and address all legitimate reports promptly."
            />

            <Section
              title="Your Role in Security"
              content={
                <Stack gap={3}>
                  <Text>You can help keep your data secure by:</Text>
                  <UnorderedListItem
                    title="Strong Passwords"
                    description="If you create accounts on any services, use unique, strong passwords."
                  />
                  <UnorderedListItem
                    title="Keep Software Updated"
                    description="Update your browser and operating system regularly."
                  />
                  <UnorderedListItem
                    title="Be Cautious"
                    description="Avoid clicking suspicious links or downloading unknown files."
                  />
                </Stack>
              }
            />

            <Section
              title="Security Updates"
              content="We continuously monitor and improve our security practices. This policy will be updated to reflect any significant changes. Check back periodically for updates."
            />

            <Section
              title="Contact Us"
              content={
                <Stack gap={3}>
                  <Text>For security-related inquiries or to report a vulnerability:</Text>
                  <Box>
                    <Text fontWeight="600">Email:</Text>
                    <Link color="brand.500" href="mailto:security@toolshub.builders">
                      security@toolshub.builders
                    </Link>
                  </Box>
                  <Box>
                    <Text fontWeight="600">General Inquiries:</Text>
                    <Link color="brand.500" href="mailto:hello@toolshub.builders">
                      hello@toolshub.builders
                    </Link>
                  </Box>
                </Stack>
              }
            />
          </Stack>

          {/* Quick Links */}
          <Box mt={8} pt={8} borderTop="1px solid" borderColor="gray.200">
            <Text fontWeight="600" mb={3}>Related Legal Pages:</Text>
            <HStack gap={4} flexWrap="wrap">
              <Link href="/privacy" color="brand.500">Privacy Policy</Link>
              <Link href="/terms" color="brand.500">Terms of Service</Link>
              <Link href="/cookies" color="brand.500">Cookie Policy</Link>
            </HStack>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

interface SectionProps {
  title: string
  content: React.ReactNode
}

function Section({ title, content }: SectionProps) {
  return (
    <Stack gap={3}>
      <Heading size="lg" fontWeight="700">
        {title}
      </Heading>
      {typeof content === 'string' ? <Text color="gray.700">{content}</Text> : content}
    </Stack>
  )
}

interface ListItemProps {
  title: string
  description: string
}

function UnorderedListItem({ title, description }: ListItemProps) {
  return (
    <Box pl={4} borderLeft="2px solid" borderColor="green.200">
      <Text fontWeight="600" color="gray.900">{title}</Text>
      <Text color="gray.600" fontSize="sm">{description}</Text>
    </Box>
  )
}

import { HStack } from '@chakra-ui/react'
