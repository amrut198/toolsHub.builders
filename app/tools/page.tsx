import { Metadata } from 'next'
import { Container, Heading, Text, SimpleGrid, Box, Badge, Link, Flex } from '@chakra-ui/react'
import {
  LuFileText,
  LuImage,
  LuMic,
  LuVideo,
  LuCode,
  LuZap,
  LuArrowRight,
} from 'react-icons/lu'

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'All AI Tools | toolsHub.builders',
  description: 'Browse 50+ free AI tools organized by category. Text, image, audio, video, and code tools. No sign-up required.',
  keywords: ['AI tools directory', 'free AI tools list', 'AI tools categories', 'productivity AI tools'],
  alternates: {
    canonical: 'https://tools-hub-builders.vercel.app/tools',
    languages: {
      'en': 'https://tools-hub-builders.vercel.app/tools',
      'en-US': 'https://tools-hub-builders.vercel.app/tools',
    },
  },
  openGraph: {
    title: 'All AI Tools | toolsHub.builders',
    description: 'Browse 50+ free AI tools organized by category. Text, image, audio, video, and code tools.',
    url: 'https://tools-hub-builders.vercel.app/tools',
    siteName: 'toolsHub.builders',
    type: 'website',
    images: [{ url: '/opengraph-image?d7b150282b7b5bc', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@toolshubbuilders',
    title: 'All AI Tools | toolsHub.builders',
    description: 'Browse 50+ free AI tools organized by category.',
    images: ['/opengraph-image?d7b150282b7b5bc'],
  },
}

const toolCategories = [
  {
    name: 'Text Tools',
    icon: LuFileText,
    color: 'blue',
    tools: [
      { name: 'AI Summarizer', slug: 'ai-summarizer', description: 'Condense any text into a clear summary' },
      { name: 'Paraphrasing Tool', slug: 'paraphrasing-tool', description: 'Rewrite text while keeping the meaning' },
      { name: 'Grammar Checker', slug: 'grammar-checker', description: 'Fix grammar and spelling errors' },
      { name: 'Text Generator', slug: 'text-generator', description: 'Generate creative text content' },
      { name: 'Plagiarism Checker', slug: 'plagiarism-checker', description: 'Check content originality' },
      { name: 'Readability Analyzer', slug: 'readability-analyzer', description: 'Analyze text readability score' },
    ],
  },
  {
    name: 'Image Tools',
    icon: LuImage,
    color: 'purple',
    tools: [
      { name: 'Background Remover', slug: 'background-remover', description: 'Remove backgrounds from any image' },
      { name: 'Image Upscaler', slug: 'image-upscaler', description: 'Enhance image resolution with AI' },
      { name: 'Image Compressor', slug: 'image-compressor', description: 'Reduce image file size' },
      { name: 'AI Image Generator', slug: 'ai-image-generator', description: 'Create images from text prompts' },
      { name: 'Image Converter', slug: 'image-converter', description: 'Convert between image formats' },
      { name: 'Photo Enhancer', slug: 'photo-enhancer', description: 'Enhance and restore old photos' },
    ],
  },
  {
    name: 'Audio Tools',
    icon: LuMic,
    color: 'green',
    tools: [
      { name: 'Text to Speech', slug: 'text-to-speech', description: 'Convert text into natural audio' },
      { name: 'Speech to Text', slug: 'speech-to-text', description: 'Transcribe audio to text' },
      { name: 'Voice Cloner', slug: 'voice-cloner', description: 'Clone voices with AI' },
      { name: 'Audio Compressor', slug: 'audio-compressor', description: 'Compress audio files' },
      { name: 'Noise Remover', slug: 'noise-remover', description: 'Remove background noise from audio' },
      { name: 'Audio Format Converter', slug: 'audio-converter', description: 'Convert audio formats' },
    ],
  },
  {
    name: 'Video Tools',
    icon: LuVideo,
    color: 'red',
    tools: [
      { name: 'Video Compressor', slug: 'video-compressor', description: 'Reduce video file size without quality loss' },
      { name: 'Video to Text', slug: 'video-to-text', description: 'Extract and transcribe video content' },
      { name: 'Video Trimmer', slug: 'video-trimmer', description: 'Trim videos online' },
      { name: 'Video Converter', slug: 'video-converter', description: 'Convert video formats' },
      { name: 'Thumbnail Generator', slug: 'thumbnail-generator', description: 'Create video thumbnails' },
      { name: 'Video Watermark Remover', slug: 'watermark-remover', description: 'Remove watermarks from videos' },
    ],
  },
  {
    name: 'Code Tools',
    icon: LuCode,
    color: 'orange',
    tools: [
      { name: 'Code Explainer', slug: 'code-explainer', description: 'Understand any code snippet instantly' },
      { name: 'Code Generator', slug: 'code-generator', description: 'Generate code from descriptions' },
      { name: 'Code Formatter', slug: 'code-formatter', description: 'Format code automatically' },
      { name: 'JSON Validator', slug: 'json-validator', description: 'Validate and format JSON' },
      { name: 'Regex Tester', slug: 'regex-tester', description: 'Test regular expressions' },
      { name: 'Code Converter', slug: 'code-converter', description: 'Convert between programming languages' },
    ],
  },
]

export default function ToolsPage() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="6xl" py={16}>
        {/* Header */}
        <Box textAlign="center" mb={16}>
          <Badge colorPalette="brand" mb={4} px={3} py={1} borderRadius="full">
            50+ Tools Available
          </Badge>
          <Heading size="3xl" fontWeight="900" mb={4} color="gray.900">
            All AI Tools
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
            Explore our complete collection of free AI tools organized by category. No sign-up required.
          </Text>
        </Box>

        {/* Tools by Category */}
        {toolCategories.map((category) => {
          const Icon = category.icon
          return (
            <Box key={category.name} mb={16}>
              <Flex align="center" gap={3} mb={6}>
                <Icon size={32} color={`var(--chakra-colors-${category.color}-500)`} />
                <Heading size="xl" fontWeight="700" color="gray.900">
                  {category.name}
                </Heading>
              </Flex>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                {category.tools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </SimpleGrid>
            </Box>
          )
        })}
      </Container>
    </Box>
  )
}

interface ToolCardProps {
  tool: {
    name: string
    slug: string
    description: string
  }
}

function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      _hover={{ textDecoration: 'none' }}
    >
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
      >
        <Heading size="md" fontWeight="600" mb={2} color="gray.900">
          {tool.name}
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={3}>
          {tool.description}
        </Text>
        <Flex align="center" gap={1} color="brand.500" fontSize="sm" fontWeight="500">
          Try Tool <LuArrowRight size={16} />
        </Flex>
      </Box>
    </Link>
  )
}
