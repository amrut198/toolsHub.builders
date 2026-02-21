import { Metadata } from 'next'
import { Container, Heading, Text, Stack, Box, Badge, HStack, Link } from '@chakra-ui/react'
import Script from 'next/script'

// Force static generation for optimal performance
export const dynamic = 'force-static';

const publishDate = '2026-02-21'
const lastModified = '2026-02-21'

const shortDescription = 'Follow the latest updates, new features, and improvements to toolsHub.builders free AI tools platform.'

const changelogSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Changelog',
  description: shortDescription,
  url: 'https://toolshub.builders/changelog',
  datePublished: publishDate,
  dateModified: lastModified,
  publisher: {
    '@type': 'Organization',
    name: 'toolsHub.builders',
    url: 'https://toolshub.builders',
  },
}

const changelog: {
  version: string
  date: string
  type: 'launch' | 'beta' | 'alpha'
  title: string
  description: string
  features: string[]
}[] = [
    {
      version: '1.0.0',
      date: 'February 2026',
      type: 'launch' as const,
      title: 'Platform Launch',
      description: 'Initial release of toolsHub.builders with 50+ free AI tools across text, image, audio, video, and code categories.',
      features: [
        '50+ AI-powered tools',
        'No sign-up required',
        'Client-side processing for privacy',
        'Mobile-responsive design',
        'Instant results',
      ],
    },
    {
      version: '0.9.0',
      date: 'January 2026',
      type: 'beta' as const,
      title: 'Beta Release',
      description: 'Private beta testing with core tools and user feedback collection.',
      features: [
        'Core 20 tools released',
        'Beta testing program',
        'User feedback integration',
        'Performance optimization',
      ],
    },
    {
      version: '0.5.0',
      date: 'December 2025',
      type: 'alpha' as const,
      title: 'Alpha Release',
      description: 'Initial alpha release with foundational tools and basic UI.',
      features: [
        'MVP with 10 essential tools',
        'Basic user interface',
        'Core infrastructure setup',
      ],
    },
  ]

export const metadata: Metadata = {
  title: 'Changelog | toolsHub.builders',
  description: shortDescription,
  keywords: ['changelog', 'updates', 'release notes', 'new features', 'product updates'],
  alternates: {
    canonical: 'https://toolshub.builders/changelog',
    languages: {
      'en': 'https://toolshub.builders/changelog',
      'en-US': 'https://toolshub.builders/changelog',
    },
  },
  openGraph: {
    title: 'Changelog | toolsHub.builders',
    description: shortDescription,
    url: 'https://toolshub.builders/changelog',
    siteName: 'toolsHub.builders',
    type: 'website',
    images: [{ url: '/opengraph-image?d7b150282b7b5bc', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@toolshubbuilders',
    title: 'Changelog | toolsHub.builders',
    description: shortDescription,
    images: ['/opengraph-image?d7b150282b7b5bc'],
  },
}

const typeColors = {
  launch: 'green',
  beta: 'blue',
  alpha: 'gray',
}

const typeIcons = {
  launch: '🚀',
  beta: '🧪',
  alpha: '🔬',
}

export default function ChangelogPage() {
  return (
    <>
      <Script
        id="changelog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(changelogSchema) }}
      />
      <Container maxW="4xl" py={16}>
        <Stack gap={12}>
          {/* Header */}
          <Stack gap={4} textAlign="center">
            <Badge colorPalette="brand" px={3} py={1} borderRadius="full" w="fit-content" mx="auto">
              What's New
            </Badge>
            <Heading
              as={'h1'}
              size={{ base: '3xl', md: '4xl' }}
              fontWeight="900"
              lineHeight="1.1"
              color="gray.900"
              letterSpacing="tight">
              Changelog
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="2xl"
              mx="auto"
              lineHeight="relaxed">
              Track our progress, new features, and improvements. We ship updates regularly.
            </Text>
          </Stack>

          {/* Changelog Timeline */}
          <Stack gap={8} position="relative">
            <Box
              position="absolute"
              left="50%"
              top="0"
              bottom="0"
              width="2px"
              bg="gray.200"
              transform="translateX(-50%)"
              display={{ base: 'none', md: 'block' }}
            />

            {changelog.map((entry, index) => (
              <ChangelogItem key={index} entry={entry} index={index} />
            ))}
          </Stack>

          {/* What's Coming Next */}
          <Box bg="brand.50" p={8} borderRadius="xl" textAlign="center">
            <Heading size="lg" fontWeight="700" mb={3}>
              What's Coming Next
            </Heading>
            <Text color="gray.700" mb={4}>
              We're constantly improving and adding new tools. Check out our{' '}
              <Link href="/roadmap" color="brand.500" fontWeight="500">
                roadmap
              </Link>{' '}
              for what's planned.
            </Text>
            <Link href="/tools" fontSize={{ base: 'lg', md: 'xl' }}>
              <Badge colorPalette="brand" px={4} py={2} borderRadius="full" fontSize={{ base: 'lg' }}>
                Try Our Tools →
              </Badge>
            </Link>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

interface ChangelogItemProps {
  entry: {
    version: string
    date: string
    type: 'launch' | 'beta' | 'alpha'
    title: string
    description: string
    features: string[]
  }
  index: number
}

function ChangelogItem({ entry, index }: ChangelogItemProps) {
  const isEven = index % 2 === 0

  return (
    <Stack
      direction={{ base: 'column', md: isEven ? 'row' : 'row-reverse' }}
      align="center"
      gap={8}
      position="relative"
    >
      <Box flex={1} textAlign={{ base: 'left', md: isEven ? 'right' : 'left' }}>
        <HStack gap={3} mb={2} justifyContent={{ base: 'flex-start', md: isEven ? 'flex-end' : 'flex-start' }}>
          <Badge
            colorPalette={typeColors[entry.type]}
            px={3}
            py={1}
            borderRadius="full"
            textTransform="uppercase"
            fontSize="xs"
            fontWeight="bold"
          >
            {entry.type}
          </Badge>
          <Text fontSize="sm" color="gray.500" fontWeight="500">
            {entry.date}
          </Text>
        </HStack>
        <Heading size="xl" fontWeight="700" color="gray.900" mb={2}>
          {entry.title}
        </Heading>
        <Text color="gray.600" mb={4}>
          {entry.description}
        </Text>
        <Box>
          <Text fontSize="md" fontWeight="600" color="gray.900" mb={2}>
            New Features:
          </Text>
          <Stack gap={1}>
            {entry.features.map((feature, idx) => (
              <HStack key={idx} gap={2} justifyContent={{ base: 'flex-start', md: isEven ? 'flex-end' : 'flex-start' }}>
                <Text color="brand.500" fontSize="lg">{typeIcons[entry.type]}</Text>
                <Text color="gray.700" fontSize="md">{feature}</Text>
              </HStack>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Version Badge */}
      <Box
        bg="brand.500"
        color="white"
        px={3}
        py={1}
        borderRadius="full"
        fontWeight="bold"
        fontSize="sm"
        minW="80px"
        textAlign="center"
      >
        {entry.version}
      </Box>

      <Box flex={1} display={{ base: 'none', md: 'block' }} />
    </Stack>
  )
}
