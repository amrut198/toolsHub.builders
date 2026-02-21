import { Metadata } from 'next'
import { Container, Heading, Text, Stack, Box, Link } from '@chakra-ui/react'
import Script from 'next/script'

// Force static generation for optimal performance
export const dynamic = 'force-static';

const publishDate = '2026-02-21'
const lastModified = '2026-02-21'

const shortDescription = 'Learn how toolsHub.builders protects your privacy. We do not store your data - all processing happens in your browser.'

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description: shortDescription,
  url: 'https://toolshub.builders/privacy',
  datePublished: publishDate,
  dateModified: lastModified,
  mainEntity: {
    '@type': 'PrivacyPolicy',
    name: 'toolsHub.builders Privacy Policy',
    text: shortDescription,
    dateModified: lastModified,
    publisher: {
      '@type': 'Organization',
      name: 'toolsHub.builders',
      url: 'https://toolshub.builders',
    },
  },
}

export const metadata: Metadata = {
  title: 'Privacy Policy | toolsHub.builders',
  description: shortDescription,
  alternates: {
    canonical: 'https://toolshub.builders/privacy',
    languages: {
      'en': 'https://toolshub.builders/privacy',
      'en-US': 'https://toolshub.builders/privacy',
    },
  },
  openGraph: {
    title: 'Privacy Policy | toolsHub.builders',
    description: shortDescription,
    url: 'https://toolshub.builders/privacy',
    siteName: 'toolsHub.builders',
    type: 'website',
    images: [
      {
        url: '/opengraph-image?d7b150282b7b5bc',
        width: 1200,
        height: 630,
        alt: 'toolsHub.builders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@toolshubbuilders',
    title: 'Privacy Policy | toolsHub.builders',
    description: shortDescription,
    images: ['/opengraph-image?d7b150282b7b5bc'],
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Script
        id="privacy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <Container maxW="4xl" py={16}>
        <Stack gap={8}>
          <Box>
            <Heading size="2xl" fontWeight="900" mb={4} as={'h1'}>
              Privacy Policy
            </Heading>
            <Text color="gray.600">
              Last updated: February 21, 2026
            </Text>
          </Box>

          <Stack gap={6} as="article">
            <Section
              title="1. Information We Collect"
              content={
                <Stack gap={3}>
                  <Text>At toolsHub.builders, we prioritize your privacy. Heres what we collect:</Text>
                  <UnorderedListItem
                    title="No Personal Data"
                    description="We do not collect, store, or transmit any personal information, names, emails, or identifiable data."
                  />
                  <UnorderedListItem
                    title="No Tool Input Data"
                    description="All text, images, audio, video, or code you process with our tools stays in your browser and is never sent to our servers."
                  />
                  <UnorderedListItem
                    title="Anonymous Analytics"
                    description="We use anonymous analytics to understand usage patterns and improve our tools. No personal identifiers are collected."
                  />
                  <UnorderedListItem
                    title="Browser Data"
                    description="We may collect browser type, operating system, and language preference for optimization purposes."
                  />
                </Stack>
              }
            />

            <Section
              title="2. How We Use Information"
              content={
                <Stack gap={3}>
                  <Text>We use the limited data we collect to:</Text>
                  <UnorderedListItem
                    title="Improve Tools"
                    description="Understand which tools are most popular and how theyre being used to enhance functionality."
                  />
                  <UnorderedListItem
                    title="Fix Bugs"
                    description="Identify and resolve technical issues quickly."
                  />
                  <UnorderedListItem
                    title="Optimize Performance"
                    description="Ensure fast loading times and smooth user experience."
                  />
                </Stack>
              }
            />

            <Section
              title="3. Data Storage & Processing"
              content={
                <Stack gap={3}>
                  <Text fontWeight="600">Client-Side Processing:</Text>
                  <Text>Most of our tools process your data entirely in your browser. This means:</Text>
                  <UnorderedListItem
                    title="No Server Uploads"
                    description="Your files never leave your device."
                  />
                  <UnorderedListItem
                    title="No Data Retention"
                    description="We dont keep copies of your content."
                  />
                  <UnorderedListItem
                    title="Complete Privacy"
                    description="Even we cannot access your data."
                  />
                </Stack>
              }
            />

            <Section
              title="4. Cookies & Local Storage"
              content={
                <Stack gap={3}>
                  <Text>We use:</Text>
                  <UnorderedListItem
                    title="Essential Cookies"
                    description="To keep you logged in (if you choose to create an optional account)."
                  />
                  <UnorderedListItem
                    title="Analytics Cookies"
                    description="To understand how visitors use our site anonymously."
                  />
                  <UnorderedListItem
                    title="Preference Storage"
                    description="To remember your theme and display settings locally in your browser."
                  />
                  <Text>You can disable cookies in your browser settings without affecting tool functionality.</Text>
                </Stack>
              }
            />

            <Section
              title="5. Third-Party Services"
              content={
                <Stack gap={3}>
                  <Text>We use trusted third-party services:</Text>
                  <UnorderedListItem
                    title="Hosting"
                    description="Our site is hosted on Vercels secure infrastructure."
                  />
                  <UnorderedListItem
                    title="Analytics"
                    description="We may use privacy-focused analytics like Plausible or similar services that dont track users."
                  />
                  <UnorderedListItem
                    title="CDN"
                    description="Static assets are delivered through Content Delivery Networks for speed."
                  />
                </Stack>
              }
            />

            <Section
              title="6. Your Rights"
              content={
                <Stack gap={3}>
                  <Text>Since we dont collect personal data, theres nothing to request, delete, or export. However, you have the right to:</Text>
                  <UnorderedListItem
                    title="Opt-Out of Analytics"
                    description="Use browser privacy settings or ad blockers to prevent analytics tracking."
                  />
                  <UnorderedListItem
                    title="Clear Local Data"
                    description="Clear your browser cache and local storage anytime."
                  />
                  <UnorderedListItem
                    title="Contact Us"
                    description="Ask any privacy questions at hello@toolshub.builders"
                  />
                </Stack>
              }
            />

            <Section
              title="7. Childrens Privacy"
              content="Our services are suitable for all ages. We do not knowingly collect information from children under 13. Since we dont collect personal information, this is not applicable."
            />

            <Section
              title="8. International Users"
              content="toolsHub.builders is accessible globally. We process data as described above, which primarily involves no data collection at all. Users outside the United States access our services under the same privacy practices."
            />

            <Section
              title="9. Changes to This Policy"
              content="We may update this privacy policy from time to time. We will notify users of significant changes by posting the new policy on this page with an updated revision date. We encourage you to review this policy periodically."
            />

            <Section
              title="10. Contact Us"
              content={
                <Stack gap={3}>
                  <Text>If you have questions about this privacy policy or our data practices, please contact:</Text>
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
