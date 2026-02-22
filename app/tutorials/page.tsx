import { Metadata } from 'next'
import { Container, Heading, Text, Stack, Box, Badge, SimpleGrid, Link } from '@chakra-ui/react'
import Script from 'next/script'

// Force static generation for optimal performance
export const dynamic = 'force-static';

const publishDate = '2026-02-21'
const lastModified = '2026-02-21'

const shortDescription = 'Learn how to use toolsHub.builders free AI tools with step-by-step tutorials, guides, and tips for text, image, audio, video, and code tools.'

const tutorialsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Tutorials',
  description: shortDescription,
  url: 'https://toolshub.builders/tutorials',
  datePublished: publishDate,
  dateModified: lastModified,
  publisher: {
    '@type': 'Organization',
    name: 'toolsHub.builders',
    url: 'https://toolshub.builders',
  },
}

export const metadata: Metadata = {
  title: 'Tutorials | toolsHub.builders',
  description: shortDescription,
  keywords: ['AI tools tutorials', 'how to use AI tools', 'toolsHub guides', 'AI tool examples'],
  alternates: {
    canonical: 'https://toolshub.builders/tutorials',
    languages: {
      'en': 'https://toolshub.builders/tutorials',
      'en-US': 'https://toolshub.builders/tutorials',
    },
  },
  openGraph: {
    title: 'Tutorials | toolsHub.builders',
    description: shortDescription,
    url: 'https://toolshub.builders/tutorials',
    siteName: 'toolsHub.builders',
    type: 'website',
    images: [{ url: '/opengraph-image?d7b150282b7b5bc', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@toolshubbuilders',
    title: 'Tutorials | toolsHub.builders',
    description: shortDescription,
    images: ['/opengraph-image?d7b150282b7b5bc'],
  },
}

const tutorials = [
  {
    category: 'Getting Started',
    items: [
      {
        title: 'How to Use AI Summarizer',
        description: 'Learn to condense long articles and documents into clear, concise summaries.',
        slug: 'how-to-use-ai-summarizer',
        difficulty: 'Beginner',
        readTime: '5 min',
      },
      {
        title: 'Removing Image Backgrounds',
        description: 'Step-by-step guide to removing backgrounds from any image using AI.',
        slug: 'how-to-remove-image-backgrounds',
        difficulty: 'Beginner',
        readTime: '3 min',
      },
      {
        title: 'Understanding Code with AI Explainer',
        description: 'Learn how to break down and understand any code snippet.',
        slug: 'how-to-understand-code',
        difficulty: 'Intermediate',
        readTime: '7 min',
      },
    ],
  },
  {
    category: 'Text Tools',
    items: [
      {
        title: 'Paraphrasing Like a Pro',
        description: 'Master the art of rewriting text while preserving meaning.',
        slug: 'paraphrasing-guide',
        difficulty: 'Beginner',
        readTime: '4 min',
      },
      {
        title: 'Grammar Checking Best Practices',
        description: 'How to effectively use our grammar checker to improve your writing.',
        slug: 'grammar-checking-guide',
        difficulty: 'Beginner',
        readTime: '6 min',
      },
      {
        title: 'Text Generation Tips',
        description: 'Get creative AI-generated text for any purpose.',
        slug: 'text-generation-tips',
        difficulty: 'Intermediate',
        readTime: '8 min',
      },
    ],
  },
  {
    category: 'Image Tools',
    items: [
      {
        title: 'Upscaling Images Successfully',
        description: 'Enhance image resolution without losing quality.',
        slug: 'image-upscaling-guide',
        difficulty: 'Beginner',
        readTime: '5 min',
      },
      {
        title: 'AI Image Generation',
        description: 'Create stunning images from text descriptions.',
        slug: 'ai-image-generation-guide',
        difficulty: 'Intermediate',
        readTime: '10 min',
      },
      {
        title: 'Photo Enhancement',
        description: 'Restore and enhance old or low-quality photos.',
        slug: 'photo-enhancement-guide',
        difficulty: 'Beginner',
        readTime: '4 min',
      },
    ],
  },
  {
    category: 'Audio Tools',
    items: [
      {
        title: 'Text to Speech Conversion',
        description: 'Convert written text into natural-sounding audio.',
        slug: 'text-to-speech-guide',
        difficulty: 'Beginner',
        readTime: '5 min',
      },
      {
        title: 'Removing Background Noise',
        description: 'Clean up audio recordings by removing unwanted noise.',
        slug: 'noise-removal-guide',
        difficulty: 'Intermediate',
        readTime: '6 min',
      },
    ],
  },
  {
    category: 'Video Tools',
    items: [
      {
        title: 'Compressing Videos Effectively',
        description: 'Reduce video file size without compromising quality.',
        slug: 'video-compression-guide',
        difficulty: 'Beginner',
        readTime: '7 min',
      },
      {
        title: 'Video to Text Transcription',
        description: 'Extract and transcribe content from videos automatically.',
        slug: 'video-transcription-guide',
        difficulty: 'Intermediate',
        readTime: '8 min',
      },
    ],
  },
  {
    category: 'Code Tools',
    items: [
      {
        title: 'Code Formatting Made Easy',
        description: 'Keep your code clean and consistently formatted.',
        slug: 'code-formatting-guide',
        difficulty: 'Beginner',
        readTime: '5 min',
      },
      {
        title: 'JSON Validation',
        description: 'Validate and debug JSON data structures.',
        slug: 'json-validation-guide',
        difficulty: 'Intermediate',
        readTime: '6 min',
      },
      {
        title: 'Regular Expression Testing',
        description: 'Test and refine regex patterns efficiently.',
        slug: 'regex-testing-guide',
        difficulty: 'Advanced',
        readTime: '10 min',
      },
    ],
  },
]

const difficultyColors = {
  Beginner: 'green',
  Intermediate: 'yellow',
  Advanced: 'red',
}

export default function TutorialsPage() {
  return (
    <>

      {/* JSON-LD Schema */}
      <SchemaOrg />
      <Script
        id="tutorials-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tutorialsSchema) }}
      />
      <Container maxW="6xl" py={16}>
        <Stack gap={12}>
          {/* Header */}
          <Stack gap={4} textAlign="center">
            <Badge colorPalette="brand" px={3} py={1} borderRadius="full" w="fit-content" mx="auto">
              Learn & Grow
            </Badge>
            <Heading
              as={'h1'}
              size={{ base: '3xl', md: '4xl' }}
              fontWeight="900"
              lineHeight="1.1"
              color="gray.900"
              letterSpacing="tight">
              Tutorials & Guides
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="2xl"
              mx="auto"
              lineHeight="relaxed">
              Step-by-step tutorials to help you master our AI tools. From beginners to advanced users.
            </Text>
          </Stack>

          {/* Quick Stats */}
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={6} pb={8}>
            <Stack textAlign="center">
              <Text fontSize="3xl" fontWeight="900" color="brand.500">20+</Text>
              <Text fontSize="sm" color="gray.600">Tutorials</Text>
            </Stack>
            <Stack textAlign="center">
              <Text fontSize="3xl" fontWeight="900" color="brand.500">Beginner</Text>
              <Text fontSize="sm" color="gray.600">Friendly</Text>
            </Stack>
            <Stack textAlign="center">
              <Text fontSize="3xl" fontWeight="900" color="brand.500">5 min</Text>
              <Text fontSize="sm" color="gray.600">Avg. Read Time</Text>
            </Stack>
            <Stack textAlign="center">
              <Text fontSize="3xl" fontWeight="900" color="brand.500">Video</Text>
              <Text fontSize="sm" color="gray.600">Guides Coming</Text>
            </Stack>
          </SimpleGrid>

          {/* Tutorials by Category */}
          {tutorials.map((category) => (
            <Box key={category.category}>
              <Heading size="xl" fontWeight="700" mb={6} color="gray.900">
                {category.category}
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                {category.items.map((tutorial) => (
                  <TutorialCard key={tutorial.slug} tutorial={tutorial} />
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  )
}

interface TutorialCardProps {
  tutorial: {
    title: string
    description: string
    slug: string
    difficulty: string
    readTime: string
  }
}

function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <Link href={`/tutorials`} _hover={{ textDecoration: 'none' }} w="full">
      <Box
        bg="white"
        p={5}
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.200"
        transition="all 0.2s"
        _hover={{
          borderColor: 'brand.300',
          shadow: 'md',
          transform: 'translateY(-2px)',
        }}
        h="full"
        w="full"
      >
        <Stack gap={3}>
          <HStack gap={2}>
            <Badge
              colorPalette={difficultyColors[tutorial.difficulty as keyof typeof difficultyColors] || 'gray'}
              size="md"
            >
              {tutorial.difficulty}
            </Badge>
            <Text fontSize="sm" color="gray.500">
              {tutorial.readTime} read
            </Text>
          </HStack>
          <Heading size="lg" fontWeight="600" color="gray.900">
            {tutorial.title}
          </Heading>
          <Text fontSize="md" color="gray.600" lineHeight="tall">
            {tutorial.description}
          </Text>
        </Stack>
      </Box>
    </Link>
  )
}

import { HStack } from '@chakra-ui/react';
import SchemaOrg from '../components/SchemaOrg';

