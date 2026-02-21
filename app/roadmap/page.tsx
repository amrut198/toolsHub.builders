import { Metadata } from 'next'
import { Container, Heading, Text, Stack, Box, Badge, SimpleGrid, Link } from '@chakra-ui/react'
import Script from 'next/script'

// Force static generation for optimal performance
export const dynamic = 'force-static';

const publishDate = '2026-02-21'
const lastModified = '2026-02-21'

const shortDescription = 'Discover what\'s coming next for toolsHub.builders. See our planned features, upcoming tools, and long-term vision.'

const roadmapSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Roadmap',
  description: shortDescription,
  url: 'https://tools-hub-builders.vercel.app/roadmap',
  datePublished: publishDate,
  dateModified: lastModified,
  publisher: {
    '@type': 'Organization',
    name: 'toolsHub.builders',
    url: 'https://tools-hub-builders.vercel.app',
  },
}

const roadmap: {
  quarter: string
  status: 'in-progress' | 'planned' | 'exploration' | 'completed'
  items: {
    title: string
    description: string
    category: string
    icon: string
  }[]
}[] = [
    {
      quarter: 'Q2 2026',
      status: 'in-progress' as const,
      items: [
        {
          title: 'Batch Processing',
          description: 'Process multiple files at once. Upload 10 images, 5 documents, or 3 videos simultaneously.',
          category: 'Productivity',
          icon: '⚡',
        },
        {
          title: 'API Access',
          description: 'Developer API to integrate our AI tools directly into your applications.',
          category: 'Developers',
          icon: '🔌',
        },
        {
          title: 'Custom Themes',
          description: 'Personalize your experience with dark mode and custom color schemes.',
          category: 'UX',
          icon: '🎨',
        },
      ],
    },
    {
      quarter: 'Q3 2026',
      status: 'planned' as const,
      items: [
        {
          title: 'History & Saved Items',
          description: 'Save your tool outputs and access them later from your account.',
          category: 'Productivity',
          icon: '📁',
        },
        {
          title: 'Mobile Apps',
          description: 'Native iOS and Android apps for tools on the go.',
          category: 'Platform',
          icon: '📱',
        },
        {
          title: 'Collaborative Editing',
          description: 'Share tool outputs with teammates and collaborate in real-time.',
          category: 'Teams',
          icon: '👥',
        },
      ],
    },
    {
      quarter: 'Q4 2026',
      status: 'planned' as const,
      items: [
        {
          title: 'Advanced AI Models',
          description: 'Integration with GPT-4, Claude, and Gemini for enhanced capabilities.',
          category: 'AI',
          icon: '🤖',
        },
        {
          title: 'Plugin System',
          description: 'Community-built plugins and extensions for custom workflows.',
          category: 'Platform',
          icon: '🧩',
        },
        {
          title: 'Enterprise Features',
          description: 'Team management, usage analytics, and priority support for organizations.',
          category: 'Business',
          icon: '🏢',
        },
      ],
    },
    {
      quarter: '2027+',
      status: 'exploration' as const,
      items: [
        {
          title: 'Real-time Collaboration',
          description: 'Work together on AI-generated content with live editing.',
          category: 'Teams',
          icon: '🔄',
        },
        {
          title: 'AI Training',
          description: 'Train custom models on your own data for specialized use cases.',
          category: 'AI',
          icon: '🧠',
        },
        {
          title: 'White-Label Solution',
          description: 'Deploy tools on your own domain with custom branding.',
          category: 'Business',
          icon: '🏷️',
        },
      ],
    },
  ]

const statusConfig = {
  'in-progress': {
    label: 'In Progress',
    color: 'blue',
    bgColor: 'blue',
  },
  'planned': {
    label: 'Planned',
    color: 'gray',
    bgColor: 'gray',
  },
  'exploration': {
    label: 'Exploration',
    color: 'purple',
    bgColor: 'purple',
  },
  'completed': {
    label: 'Completed',
    color: 'green',
    bgColor: 'green',
  },
}

export const metadata: Metadata = {
  title: 'Roadmap | toolsHub.builders',
  description: shortDescription,
  keywords: ['roadmap', 'product roadmap', 'future features', 'planned features', 'what\'s coming'],
  alternates: {
    canonical: 'https://tools-hub-builders.vercel.app/roadmap',
    languages: {
      'en': 'https://tools-hub-builders.vercel.app/roadmap',
      'en-US': 'https://tools-hub-builders.vercel.app/roadmap',
    },
  },
  openGraph: {
    title: 'Roadmap | toolsHub.builders',
    description: shortDescription,
    url: 'https://tools-hub-builders.vercel.app/roadmap',
    siteName: 'toolsHub.builders',
    type: 'website',
    images: [{ url: '/opengraph-image?d7b150282b7b5bc', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@toolshubbuilders',
    title: 'Roadmap | toolsHub.builders',
    description: shortDescription,
    images: ['/opengraph-image?d7b150282b7b5bc'],
  },
}

export default function RoadmapPage() {
  return (
    <>
      <Script
        id="roadmap-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roadmapSchema) }}
      />
      <Container maxW="6xl" py={16}>
        <Stack gap={12}>
          {/* Header */}
          <Stack gap={4} textAlign="center">
            <Badge colorPalette="brand" px={3} py={1} borderRadius="full" w="fit-content" mx="auto">
              Looking Ahead
            </Badge>
            <Heading
              as={'h1'}
              size={{ base: '3xl', md: '4xl' }}
              fontWeight="900"
              lineHeight="1.1"
              color="gray.900"
              letterSpacing="tight">
              Product Roadmap
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="2xl"
              mx="auto"
              lineHeight="relaxed">
              See what we're building next. Our vision is to make AI tools accessible, powerful, and free for everyone.
            </Text>
          </Stack>

          {/* Legend */}
          <HStack gap={6} justify="center" flexWrap="wrap" pb={4}>
            {Object.entries(statusConfig).map(([key, config]) => (
              <HStack key={key} gap={2} alignItems="center">
                <Box
                  width="3"
                  height="3"
                  borderRadius="full"
                  bg={`${config.bgColor}.500`}
                />
                <Text fontSize="md" fontWeight="500" color="gray.700">
                  {config.label}
                </Text>
              </HStack>
            ))}
          </HStack>

          {/* Roadmap Timeline */}
          <Stack gap={10}>
            {roadmap.map((quarter, idx) => (
              <RoadmapQuarter key={idx} quarter={quarter} />
            ))}
          </Stack>

          {/* Call to Action */}
          <Stack gap={4} align="center" bg="gray.50" p={8} borderRadius="xl">
            <Heading size="lg" fontWeight="700">
              Want to influence our roadmap?
            </Heading>
            <Text color="gray.600" textAlign="center" maxW="md">
              We build features based on user feedback. Join our community to vote on upcoming features and suggest new tools.
            </Text>
            <HStack gap={4} justify="center" flexWrap="wrap">
              <Link href="/tools">
                <Badge colorPalette="brand" px={4} py={2} borderRadius="full" cursor="pointer" fontSize={'md'}>
                  Try Tools →
                </Badge>
              </Link>
              <Link href="mailto:hello@toolshub.builders">
                <Badge colorPalette="gray" px={4} py={2} borderRadius="full" cursor="pointer" fontSize={'md'}>
                  Contact Us
                </Badge>
              </Link>
            </HStack>
          </Stack>

          {/* Stats */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} py={8}>
            <Stack textAlign="center">
              <Text fontSize="3xl" fontWeight="900" color="brand.500">50+</Text>
              <Text fontSize="md" color="gray.600">Current Tools</Text>
            </Stack>
            <Stack textAlign="center">
              <Text fontSize="3xl" fontWeight="900" color="brand.500">Weekly</Text>
              <Text fontSize="md" color="gray.600">Updates</Text>
            </Stack>
            <Stack textAlign="center">
              <Text fontSize="3xl" fontWeight="900" color="brand.500">100%</Text>
              <Text fontSize="md" color="gray.600">Free Forever</Text>
            </Stack>
            <Stack textAlign="center">
              <Text fontSize="3xl" fontWeight="900" color="brand.500">No Limits</Text>
              <Text fontSize="md" color="gray.600">Usage Caps</Text>
            </Stack>
            <Stack textAlign="center">
              <Text fontSize="3xl" fontWeight="900" color="brand.500">Client</Text>
              <Text fontSize="md" color="gray.600">Side Privacy</Text>
            </Stack>
            <Stack textAlign="center">
              <Text fontSize="3xl" fontWeight="900" color="brand.500">User</Text>
              <Text fontSize="md" color="gray.600">Requests</Text>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}

interface RoadmapQuarterProps {
  quarter: {
    quarter: string
    status: keyof typeof statusConfig
    items: {
      title: string
      description: string
      category: string
      icon: string
    }[]
  }
}

function RoadmapQuarter({ quarter }: RoadmapQuarterProps) {
  const config = statusConfig[quarter.status]

  return (
    <Stack>
      <HStack justify="space-between" align="center" mb={4}>
        <Heading size="xl" fontWeight="700" color="gray.900">
          {quarter.quarter}
        </Heading>
        <Badge
          colorPalette={config.color}
          variant="outline"
          px={3}
          py={1}
          borderRadius="full"
        >
          {config.label}
        </Badge>
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
        {quarter.items.map((item, idx) => (
          <Box
            key={idx}
            bg="white"
            p={5}
            borderRadius="lg"
            borderWidth="1px"
            borderColor="gray.200"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="1"
              bg={`${config.bgColor}.500`}
            />
            <Stack gap={3}>
              <HStack>
                <Text fontSize="2xl">{item.icon}</Text>
                <Heading size="lg" fontWeight="600" color="gray.900">
                  {item.title}
                </Heading>
              </HStack>
              <Text fontSize="md" color="gray.600" minHeight="48px">
                {item.description}
              </Text>
              <Badge
                size="sm"
                colorPalette="gray"
                variant="subtle"
                w="fit-content"
              >
                {item.category}
              </Badge>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

import { HStack } from '@chakra-ui/react'
