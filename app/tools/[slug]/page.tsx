import { Metadata } from 'next'
import { Container, Heading, Text, Box, Button, HStack, Badge, Stack, SimpleGrid, Link as ChakraLink } from '@chakra-ui/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Force static generation for optimal performance
export const dynamic = 'force-static';

// Tool data - in production this would come from a database/API
const tools: Record<string, {
  name: string
  description: string
  category: string
  longDescription: string
  features: string[]
  seoTitle: string
  seoDescription: string
  keywords: string[]
}> = {
  'ai-summarizer': {
    name: 'AI Summarizer',
    description: 'Condense any text into a clear summary',
    category: 'Text',
    longDescription: 'Transform long articles, documents, and reports into concise summaries. Our AI-powered summarizer understands context and extracts key information while maintaining accuracy.',
    features: [
      'Summarize up to 10,000 characters at once',
      'Adjust summary length from bullet points to paragraphs',
      'Maintain original context and meaning',
      'Works with articles, essays, reports, and more',
      'No data stored - processes in browser',
    ],
    seoTitle: 'AI Summarizer - Free Text Summarization Tool | toolsHub.builders',
    seoDescription: 'Free AI summarizer to condense long text into clear summaries. Summarize articles, essays, documents. No sign-up required. Instant results.',
    keywords: ['ai summarizer', 'text summarizer', 'summarize article', 'summarize text', 'article summarizer', 'free summarizer'],
  },
  'background-remover': {
    name: 'Background Remover',
    description: 'Remove backgrounds from any image',
    category: 'Image',
    longDescription: 'Remove image backgrounds instantly with AI. Perfect for product photos, portraits, and graphics. Get transparent PNGs ready for any use case.',
    features: [
      'One-click background removal',
      'Handles complex edges like hair and fur',
      'Output as transparent PNG',
      'No watermarks on results',
      'Works with people, products, and graphics',
    ],
    seoTitle: 'Background Remover - Free AI Background Removal Tool | toolsHub.builders',
    seoDescription: 'Remove image backgrounds instantly with AI. Get transparent PNGs without watermarks. Free tool, no sign-up required.',
    keywords: ['background remover', 'remove background', 'transparent background', 'bg remover', 'image background remover'],
  },
  'code-explainer': {
    name: 'Code Explainer',
    description: 'Understand any code snippet instantly',
    category: 'Code',
    longDescription: 'Get plain English explanations of code snippets. Perfect for learning new languages, debugging, or understanding complex algorithms.',
    features: [
      'Supports 20+ programming languages',
      'Line-by-line breakdown',
      'Explains logic and patterns',
      'Suggests improvements',
      'Helps learn and debug',
    ],
    seoTitle: 'Code Explainer - Understand Any Code Instantly | toolsHub.builders',
    seoDescription: 'Free AI code explainer. Get plain English explanations of code in 20+ languages. Learn, debug, and understand code instantly.',
    keywords: ['code explainer', 'explain code', 'understand code', 'code analyzer', 'what does this code do', 'code helper'],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(tools).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const tool = tools[slug]

  if (!tool) {
    return {
      title: 'Tool Not Found | toolsHub.builders',
    }
  }

  // Shorter title for SEO (under 60 chars)
  const shortTitle = `${tool.name} | toolsHub.builders`

  return {
    title: shortTitle,
    description: tool.seoDescription,
    keywords: tool.keywords,
    alternates: {
      canonical: `https://tools-hub-builders.vercel.app/tools/${slug}`,
      languages: {
        'en': `https://tools-hub-builders.vercel.app/tools/${slug}`,
        'en-US': `https://tools-hub-builders.vercel.app/tools/${slug}`,
      },
    },
    openGraph: {
      title: shortTitle,
      description: tool.seoDescription,
      url: `https://tools-hub-builders.vercel.app/tools/${slug}`,
      siteName: 'toolsHub.builders',
      type: 'website',
      images: [
        {
          url: '/opengraph-image?d7b150282b7b5bc',
          width: 1200,
          height: 630,
          alt: tool.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@toolshubbuilders',
      title: shortTitle,
      description: tool.seoDescription,
      images: ['/opengraph-image?d7b150282b7b5bc'],
    },
  }
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params
  const tool = tools[slug]

  if (!tool) {
    notFound()
  }

  // Get related tools
  const relatedTools = Object.entries(tools)
    .filter(([key]) => key !== slug)
    .filter(([, t]) => t.category === tool.category)
    .slice(0, 3)

  return (
    <Box bg="gray.50" minH="100vh">
      {/* Header */}
      <Box bg="white" borderBottom="1px" borderColor="gray.200">
        <Container maxW="6xl" py={8}>
          <Link href="/tools">
            <Button
              variant="ghost"
              size="sm"
              mb={4}
            >
              ← Back to Tools
            </Button>
          </Link>
          <HStack gap={3} mb={4}>
            <Badge colorPalette="brand" px={3} py={1} borderRadius="full">
              {tool.category}
            </Badge>
            <Badge colorPalette="green" px={3} py={1} borderRadius="full">
              100% Free
            </Badge>
          </HStack>
          <Heading size="3xl" fontWeight="900" color="gray.900" mb={4}>
            {tool.name}
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            {tool.longDescription}
          </Text>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="6xl" py={12}>
        {/* Tool Interface Placeholder */}
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          shadow="sm"
          borderWidth="1px"
          borderColor="gray.200"
          mb={12}
          minH="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="gray.400" fontSize="lg">
            Tool interface would go here
          </Text>
        </Box>

        {/* Features */}
        <Box mb={12}>
          <Heading size="lg" fontWeight="700" mb={6}>
            Features
          </Heading>
          <Box as="ul" pl={5}>
            {tool.features.map((feature, index) => (
              <Box
                key={index}
                as="li"
                mb={3}
                fontSize="lg"
                color="gray.700"
                _before={{
                  content: '"✓"',
                  color: 'brand.500',
                  fontWeight: 'bold',
                  mr: 2,
                }}
              >
                {feature}
              </Box>
            ))}
          </Box>
        </Box>

        {/* How to Use */}
        <Box mb={12}>
          <Heading size="lg" fontWeight="700" mb={6}>
            How to Use
          </Heading>
          <Box as="ol" pl={5}>
            <Box as="li" mb={3} fontSize="lg" color="gray.700">
              Enter your content or file in the input area above
            </Box>
            <Box as="li" mb={3} fontSize="lg" color="gray.700">
              Adjust any settings if needed
            </Box>
            <Box as="li" mb={3} fontSize="lg" color="gray.700">
              Click the process button
            </Box>
            <Box as="li" mb={3} fontSize="lg" color="gray.700">
              Get instant results - download or copy as needed
            </Box>
          </Box>
        </Box>

        {/* FAQ */}
        <Box>
          <Heading size="lg" fontWeight="700" mb={6}>
            Frequently Asked Questions
          </Heading>
          <Stack gap={4}>
            <FAQItem
              question={`Is the ${tool.name} really free?`}
              answer="Yes! This tool is completely free with no limits, no premium tiers, and no hidden fees."
            />
            <FAQItem
              question="Do you store my data?"
              answer="No. All processing happens in your browser. We never see or store your input data."
            />
            <FAQItem
              question="Can I use this for commercial projects?"
              answer="Absolutely! All tools on toolsHub.builders are free for both personal and commercial use."
            />
          </Stack>
        </Box>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <Box mt={12}>
            <Heading size="lg" fontWeight="700" mb={6}>
              Related Tools
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
              {relatedTools.map(([relatedSlug, relatedTool]) => (
                <Link
                  key={relatedSlug}
                  href={`/tools/${relatedSlug}`}
                >
                  <Box
                    bg="white"
                    p={5}
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor="gray.200"
                    _hover={{
                      borderColor: 'brand.300',
                      shadow: 'md',
                    }}
                    transition="all 0.2s"
                  >
                    <Text fontWeight="600" mb={2} color="gray.900">
                      {relatedTool.name}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {relatedTool.description}
                    </Text>
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Container>
    </Box>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <Box bg="white" p={5} borderRadius="lg" borderWidth="1px" borderColor="gray.200">
      <Text fontWeight="600" mb={2} color="gray.900">
        {question}
      </Text>
      <Text color="gray.600">{answer}</Text>
    </Box>
  )
}
