import { Metadata } from 'next'
import { Container, Heading, Text, Stack, Box, Link } from '@chakra-ui/react'
import Script from 'next/script'

// Force static generation for optimal performance
export const dynamic = 'force-static';

const publishDate = '2026-02-21'
const lastModified = '2026-02-21'

const shortDescription = 'Read the terms of service for toolsHub.builders. Learn about our free AI tools, your rights, acceptable use policy, and privacy practices.'

const termsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service',
  description: shortDescription,
  url: 'https://toolshub.builders/terms',
  datePublished: publishDate,
  dateModified: lastModified,
  mainEntity: {
    '@type': 'TermsOfService',
    name: 'toolsHub.builders Terms of Service',
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
  title: 'Terms of Service | toolsHub.builders',
  description: shortDescription,
  alternates: {
    canonical: 'https://toolshub.builders/terms',
    languages: {
      'en': 'https://toolshub.builders/terms',
      'en-US': 'https://toolshub.builders/terms',
    },
  },
  openGraph: {
    title: 'Terms of Service | toolsHub.builders',
    description: shortDescription,
    url: 'https://toolshub.builders/terms',
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
    title: 'Terms of Service | toolsHub.builders',
    description: shortDescription,
    images: ['/opengraph-image?d7b150282b7b5bc'],
  },
}

export default function TermsPage() {
  return (
    <>
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <Container maxW="4xl" py={16}>
        <Stack gap={8}>
          <Box>
            <Heading size="2xl" fontWeight="900" mb={4} as={'h1'}>
              Terms of Service
            </Heading>
            <Text color="gray.600">
              Last updated: February 21, 2026
            </Text>
          </Box>

          <Box as="section" bg="gray.50" p={6} borderRadius="lg">
            <Text fontWeight="500">
              By using toolsHub.builders, you agree to these terms. If you disagree, please do not use our website.
            </Text>
          </Box>

          <Stack gap={6}>
            <Section
              title="1. Acceptance of Terms"
              content="By accessing or using toolsHub.builders, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site."
            />

            <Section
              title="2. Description of Service"
              content={
                <Stack gap={3}>
                  <Text>toolsHub.builders provides free AI-powered tools including:</Text>
                  <UnorderedListItem
                    title="Text Tools"
                    description="Summarization, paraphrasing, grammar checking, and more."
                  />
                  <UnorderedListItem
                    title="Image Tools"
                    description="Background removal, upscaling, compression, and generation."
                  />
                  <UnorderedListItem
                    title="Audio Tools"
                    description="Text-to-speech, transcription, and audio processing."
                  />
                  <UnorderedListItem
                    title="Video Tools"
                    description="Compression, conversion, and editing utilities."
                  />
                  <UnorderedListItem
                    title="Code Tools"
                    description="Code generation, explanation, and formatting."
                  />
                  <Text fontWeight="600" mt={2}>All tools are provided free of charge without requiring registration.</Text>
                </Stack>
              }
            />

            <Section
              title="3. User Responsibilities"
              content={
                <Stack gap={3}>
                  <Text>As a user of toolsHub.builders, you agree to:</Text>
                  <UnorderedListItem
                    title="Lawful Use"
                    description="Use our tools only for lawful purposes and in accordance with these terms."
                  />
                  <UnorderedListItem
                    title="No Misuse"
                    description="Not use tools to generate harmful, illegal, or malicious content."
                  />
                  <UnorderedListItem
                    title="Respect Copyright"
                    description="Respect intellectual property rights when processing content."
                  />
                  <UnorderedListItem
                    title="No Abuse"
                    description="Not attempt to abuse, overload, or disrupt our services."
                  />
                </Stack>
              }
            />

            <Section
              title="4. Prohibited Activities"
              content={
                <Stack gap={3}>
                  <Text>You may not:</Text>
                  <UnorderedListItem
                    title="Illegal Content"
                    description="Generate or process content that is illegal, harmful, threatening, abusive, or defamatory."
                  />
                  <UnorderedListItem
                    title="Malicious Use"
                    description="Use tools to create malware, phishing content, or scam materials."
                  />
                  <UnorderedListItem
                    title="Privacy Violations"
                    description="Process private information of others without consent."
                  />
                  <UnorderedListItem
                    title="Automated Abuse"
                    description="Use bots or scripts to abuse our services or overwhelm our servers."
                  />
                  <UnorderedListItem
                    title="Reverse Engineering"
                    description="Attempt to reverse engineer or copy our tool implementations."
                  />
                </Stack>
              }
            />

            <Section
              title="5. Intellectual Property"
              content={
                <Stack gap={3}>
                  <Text><Text as="strong" fontWeight="600">Your Content:</Text> You retain ownership of any content you input into our tools. We do not claim ownership of your data.</Text>
                  <Text><Text as="strong" fontWeight="600">Our Content:</Text> The website design, layout, code, and tool implementations are owned by toolsHub.builders and protected by copyright laws.</Text>
                  <Text><Text as="strong" fontWeight="600">Open Source:</Text> Some components may be based on open-source projects with their respective licenses.</Text>
                </Stack>
              }
            />

            <Section
              title="6. Disclaimers"
              content={
                <Stack gap={3}>
                  <UnorderedListItem
                    title="As-Is Service"
                    description="Tools are provided 'as is' without warranties of any kind, either express or implied."
                  />
                  <UnorderedListItem
                    title="Accuracy"
                    description="AI-generated content may not always be accurate. Verify important outputs independently."
                  />
                  <UnorderedListItem
                    title="Availability"
                    description="We do not guarantee uninterrupted or error-free service."
                  />
                  <UnorderedListItem
                    title="No Professional Advice"
                    description="Our tools are not substitutes for professional advice in legal, medical, financial, or other fields."
                  />
                </Stack>
              }
            />

            <Section
              title="7. Limitation of Liability"
              content="toolsHub.builders and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount you paid to use our services (which is $0)."
            />

            <Section
              title="8. Privacy"
              content={
                <Stack gap={2}>
                  <Text>Your privacy is important to us. Please review our Privacy Policy to understand how we handle data:</Text>
                  <Link color="brand.500" href="/privacy" fontWeight="500">
                    View Privacy Policy →
                  </Link>
                </Stack>
              }
            />

            <Section
              title="9. Modifications to Service"
              content="We reserve the right to modify, suspend, or discontinue any aspect of our services at any time. We may also update these terms periodically. Continued use after changes constitutes acceptance of the new terms."
            />

            <Section
              title="10. Termination"
              content="We reserve the right to terminate or restrict access to our services for any user who violates these terms or abuses our platform, at our sole discretion and without prior notice."
            />

            <Section
              title="11. Governing Law"
              content="These terms are governed by the laws of the jurisdiction where toolsHub.builders is operated. Any disputes shall be resolved in accordance with applicable laws."
            />

            <Section
              title="12. Contact Information"
              content={
                <Stack gap={3}>
                  <Text>For questions about these terms, please contact:</Text>
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
