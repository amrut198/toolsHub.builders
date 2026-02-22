import { Metadata } from 'next'
import { Container, Heading, Text, Stack, Box, Link, Badge } from '@chakra-ui/react'
import Script from 'next/script'

// Force static generation for optimal performance
export const dynamic = 'force-static';

const publishDate = '2026-02-21'
const lastModified = '2026-02-21'

const shortDescription = 'Learn about cookies used by toolsHub.builders. We use essential cookies for functionality and optional analytics cookies. Your privacy matters.'

const cookieSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Cookie Policy',
  description: shortDescription,
  url: 'https://toolshub.builders/cookies',
  datePublished: publishDate,
  dateModified: lastModified,
  publisher: {
    '@type': 'Organization',
    name: 'toolsHub.builders',
    url: 'https://toolshub.builders',
  },
}

export const metadata: Metadata = {
  title: 'Cookie Policy | toolsHub.builders',
  description: shortDescription,
  alternates: {
    canonical: 'https://toolshub.builders/cookies',
    languages: {
      'en': 'https://toolshub.builders/cookies',
      'en-US': 'https://toolshub.builders/cookies',
    },
  },
  openGraph: {
    title: 'Cookie Policy | toolsHub.builders',
    description: shortDescription,
    url: 'https://toolshub.builders/cookies',
    siteName: 'toolsHub.builders',
    type: 'website',
    images: [{ url: '/opengraph-image?d7b150282b7b5bc', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@toolshubbuilders',
    title: 'Cookie Policy | toolsHub.builders',
    description: shortDescription,
    images: ['/opengraph-image?d7b150282b7b5bc'],
  },
}

export default function CookiesPage() {
  return (
    <>

      {/* JSON-LD Schema */}
      <SchemaOrg />
      <Script
        id="cookies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookieSchema) }}
      />
      <Container maxW="4xl" py={16}>
        <Stack gap={8}>
          <Box>
            <Badge colorPalette="brand" mb={4} px={3} py={1} borderRadius="full" w="fit-content">
              Legal
            </Badge>
            <Heading size="2xl" fontWeight="900" mb={4} as={'h1'}>
              Cookie Policy
            </Heading>
            <Text color="gray.600">
              Last updated: February 21, 2026
            </Text>
          </Box>

          <Stack gap={6} as="article">
            <Section
              title="What Are Cookies?"
              content="Cookies are small text files stored on your device when you visit websites. They help remember your preferences and improve your browsing experience."
            />

            <Section
              title="How We Use Cookies"
              content={
                <Stack gap={3}>
                  <Text>We use cookies for the following purposes:</Text>
                  <UnorderedListItem
                    title="Essential Cookies"
                    description="Required for the website to function properly, including preference storage and security."
                  />
                  <UnorderedListItem
                    title="Analytics Cookies"
                    description="Help us understand how visitors use our site anonymously. No personal data is collected."
                  />
                  <UnorderedListItem
                    title="Functionality Cookies"
                    description="Remember your settings and preferences for a better user experience."
                  />
                </Stack>
              }
            />

            <Section
              title="Types of Cookies We Use"
              content={
                <Stack gap={4}>
                  <CookieType
                    name="Strictly Necessary"
                    description="Essential for the site to work. Cannot be disabled."
                    examples={['Session management', 'Security tokens', 'Preference storage']}
                  />
                  <CookieType
                    name="Analytics"
                    description="Help us improve our services by anonymous usage tracking."
                    examples={['Page views', 'User flows', 'Performance metrics']}
                  />
                  <CookieType
                    name="Preference"
                    description="Remember your settings and choices."
                    examples={['Theme selection', 'Language preference', 'Display settings']}
                  />
                </Stack>
              }
            />

            <Section
              title="Third-Party Cookies"
              content={
                <Stack gap={3}>
                  <Text>We may use trusted third-party services that set their own cookies:</Text>
                  <UnorderedListItem
                    title="Vercel Analytics"
                    description="Our hosting provider may use analytics for performance monitoring."
                  />
                  <UnorderedListItem
                    title="Google Analytics"
                    description="We may use Google Analytics with anonymized IP addresses."
                  />
                </Stack>
              }
            />

            <Section
              title="Your Cookie Choices"
              content={
                <Stack gap={3}>
                  <Text>You have several options regarding cookies:</Text>
                  <UnorderedListItem
                    title="Browser Settings"
                    description="Most browsers allow you to block or delete cookies through settings."
                  />
                  <UnorderedListItem
                    title="Opt-Out"
                    description="You can opt-out of analytics cookies by using privacy-focused browser extensions."
                  />
                  <UnorderedListItem
                    title="No Impact"
                    description="Blocking essential cookies may affect website functionality."
                  />
                </Stack>
              }
            />

            <Section
              title="Managing Cookies"
              content={
                <Stack gap={3}>
                  <Text fontWeight="600">How to manage cookies in popular browsers:</Text>
                  <Box pl={4}>
                    <Text fontSize="sm" color="gray.700" mb={2}>
                      <Text as="strong" color="gray.900">Chrome:</Text> Settings → Privacy and security → Cookies and other site data
                    </Text>
                    <Text fontSize="sm" color="gray.700" mb={2}>
                      <Text as="strong" color="gray.900">Firefox:</Text> Options → Privacy & Security → Cookies and Site Data
                    </Text>
                    <Text fontSize="sm" color="gray.700" mb={2}>
                      <Text as="strong" color="gray.900">Safari:</Text> Preferences → Privacy → Manage Website Data
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      <Text as="strong" color="gray.900">Edge:</Text> Settings → Cookies and permissions → Manage cookies
                    </Text>
                  </Box>
                </Stack>
              }
            />

            <Section
              title="Cookie Duration"
              content={
                <Stack gap={3}>
                  <UnorderedListItem
                    title="Session Cookies"
                    description="Deleted when you close your browser. Used for temporary data."
                  />
                  <UnorderedListItem
                    title="Persistent Cookies"
                    description="Remain on your device for a set period or until deleted. Used for preferences."
                  />
                </Stack>
              }
            />

            <Section
              title="Updates to This Policy"
              content="We may update this cookie policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically."
            />

            <Section
              title="Contact Us"
              content={
                <Stack gap={3}>
                  <Text>If you have questions about our use of cookies, please contact:</Text>
                  <Box>
                    <Text fontWeight="600">Email:</Text>
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
              <Link href="/security" color="brand.500">Security</Link>
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
    <Box pl={4} borderLeft="2px solid" borderColor="brand.200">
      <Text fontWeight="600" color="gray.900">{title}</Text>
      <Text color="gray.600" fontSize="sm">{description}</Text>
    </Box>
  )
}

interface CookieTypeProps {
  name: string
  description: string
  examples: string[]
}

function CookieType({ name, description, examples }: CookieTypeProps) {
  return (
    <Box bg="gray.50" p={5} borderRadius="lg">
      <Text fontWeight="700" color="gray.900" mb={2}>{name}</Text>
      <Text color="gray.600" fontSize="sm" mb={3}>{description}</Text>
      <Text fontSize="sm" color="gray.500">
        <Text as="span" fontWeight="500">Examples:</Text> {examples.join(', ')}
      </Text>
    </Box>
  )
}

import { HStack } from '@chakra-ui/react'
import SchemaOrg from '../components/SchemaOrg';

