/**
 * Tools Listing Page
 * Display all tools with search and filtering
 */

import { Metadata } from 'next';
import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  HStack,
  Badge,
  Button,
  Link
} from '@chakra-ui/react';
import { FiFileText, FiCode, FiImage, FiTrendingUp } from 'react-icons/fi';
import { LuArrowRight } from 'react-icons/lu';
import { SearchInput } from './SearchInput';
import { ToolCard } from '@/components/ToolCard';
import { tools, toolCategories, getFeaturedTools, type ToolCategory } from '@/lib/tools-data';
import { ToolsFAQ } from './ToolsFAQ';
import SchemaOrg from '../components/SchemaOrg';

// Force static generation
export const dynamic = 'force-static';

const siteUrl = 'https://toolshub.builders';
const publishedDate = '2025-01-15';
const modifiedDate = '2026-02-22';

export const metadata: Metadata = {
  title: '20+ Free Online Tools | No Signup',
  description: 'Free online tools for text, developers, images & SEO. Word counter, JSON formatter, image compressor, meta tags & more. Instant results, no signup.',
  keywords: ['free online tools', 'word counter', 'json formatter', 'image compressor', 'seo tools', 'developer tools', 'text tools'],
  authors: [{ name: 'toolsHub.builders' }],
  creator: 'toolsHub.builders',
  publisher: 'toolsHub.builders',

  alternates: {
    canonical: `${siteUrl}/tools`,
    languages: {
      'en': `${siteUrl}/tools`,
      'en-US': `${siteUrl}/tools`,
      'en-GB': `${siteUrl}/tools`,
      'x-default': `${siteUrl}/tools`,
    },
  },

  openGraph: {
    type: 'website',
    title: '20+ Free Online Tools | No Signup Required',
    description: 'Free online tools for text, developers, images & SEO. Word counter, JSON formatter, image compressor, meta tags & more.',
    url: `${siteUrl}/tools`,
    siteName: 'toolsHub.builders',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'toolsHub.builders - Free Online Tools',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@toolshubbuilders',
    creator: '@toolshubbuilders',
    title: '20+ Free Online Tools | No Signup',
    description: 'Free online tools for text, developers, images & SEO. Instant results, no signup required.',
    images: ['/opengraph-image'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

interface ToolsPageProps {
  searchParams: Promise<{ q?: string; category?: ToolCategory }>;
}

export default async function ToolsPage({ searchParams }: ToolsPageProps) {
  const { q, category } = await searchParams;

  // Filter tools based on search and category
  let filteredTools = [...tools];

  if (category && category in toolCategories) {
    filteredTools = filteredTools.filter(tool => tool.category === category);
  }

  if (q) {
    const query = q.toLowerCase();
    filteredTools = filteredTools.filter(tool =>
      tool.title.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
  }

  // Generate schema data
  const toolsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'toolsHub.builders - Free Online Tools Collection',
    description: 'Browse 20+ free online tools for text, developers, images, and SEO.',
    url: `${siteUrl}/tools`,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    about: {
      '@type': 'Thing',
      name: 'Online Tools',
      description: 'Free web-based tools for text processing, development, image editing, and SEO optimization.',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: tools.slice(0, 20).map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: tool.title,
          description: tool.seoDescription,
          url: `${siteUrl}/tools/${tool.slug}`,
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
      })),
    },
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <SchemaOrg />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSchema) }}
      />

      <Box minH="calc(100vh - 65px)">
        {/* Header */}
        <Box bg="white" pt={16}>
          <Container maxW="container.xl">
            <Stack gap={6} justifyContent={'center'} alignItems={'center'}>
              <Heading as="h1" maxW="3xl" size="3xl" fontWeight={800} color="gray.900">
                All Tools
              </Heading>
              <Text fontSize="xl" maxW="3xl" color="gray.600" textAlign={'center'}>
                Explore {tools.length} free online tools for developers, creators, and marketers.
              </Text>

              {/* Search Bar — live filtering via client component */}
              <SearchInput defaultValue={q} />

              {/* Category Filter */}
              <HStack wrap="wrap" maxW="3xl" gap={2}>
                <Link
                  href="/tools"
                  bg={!category ? 'brand.500' : 'transparent'}
                  color={!category ? 'white' : 'gray.700'}
                  border="1px solid"
                  borderColor={!category ? 'brand.500' : 'gray.300'}
                  px={4}
                  py={2}
                  borderRadius="lg"
                  fontSize="sm"
                  fontWeight={600}
                  _hover={{
                    bg: !category ? 'brand.600' : 'gray.50',
                    textDecoration: 'none',
                  }}
                >
                  All Tools
                </Link>
                {Object.entries(toolCategories).map(([key, cat]) => (
                  <Link
                    key={key}
                    href={`/tools?category=${key}`}
                    bg={category === key ? `${cat.color}.500` : 'transparent'}
                    color={category === key ? 'white' : 'gray.700'}
                    border="1px solid"
                    borderColor={category === key ? `${cat.color}.500` : 'gray.300'}
                    px={4}
                    py={2}
                    borderRadius="lg"
                    fontSize="sm"
                    fontWeight={600}
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    _hover={{
                      bg: category === key ? `${cat.color}.600` : 'gray.50',
                      textDecoration: 'none',
                    }}
                  >
                    {key === 'text' && <FiFileText size={14} />}
                    {key === 'developer' && <FiCode size={14} />}
                    {key === 'image' && <FiImage size={14} />}
                    {key === 'seo' && <FiTrendingUp size={14} />}
                    {cat.name}
                  </Link>
                ))}
              </HStack>
            </Stack>
          </Container>
        </Box>

        {/* Results */}
        <Container maxW="7xl" py={10}>
          {/* Active Filters */}
          {(q || category) && (
            <Box mb={6}>
              <HStack gap={2}>
                <Text fontSize="sm" color="gray.600">
                  Filters:
                </Text>
                {category && (
                  <Badge colorScheme="gray" borderRadius="full" px={3}>
                    Category: {toolCategories[category].name}
                  </Badge>
                )}
                {q && (
                  <Badge colorScheme="gray" borderRadius="full" px={3}>
                    Search: "{q}"
                  </Badge>
                )}
              </HStack>
            </Box>
          )}

          {/* Featured Tools */}
          {!q && !category && (
            <Box mb={12}>
              <Heading as="h2" size="xl" fontWeight={700} mb={6}>
                Featured Tools
              </Heading>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
                {getFeaturedTools().map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* All Tools by Category */}
          {!q && !category ? (
            <Stack gap={12}>
              {Object.entries(toolCategories).map(([key, category]) => {
                const categoryTools = tools.filter(t => t.category === key);
                return (
                  <Box key={key}>
                    <Heading as="h2" size="xl" fontWeight={700} mb={6}>
                      {category.name}
                    </Heading>
                    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
                      {categoryTools.map(tool => (
                        <ToolCard key={tool.id} tool={tool} />
                      ))}
                    </SimpleGrid>
                  </Box>
                );
              })}
            </Stack>
          ) : filteredTools.length === 0 ? (
            <Box textAlign="center" py={20}>
              <Text fontSize="5xl" mb={4}>🔍</Text>
              <Heading as="h2" size="lg" fontWeight={700} mb={3} color="gray.700">
                No tools found
              </Heading>
              <Text color="gray.500" mb={6}>
                No tools matched{q ? ` "${q}"` : ''}{category ? ` in this category` : ''}. Try a different search term.
              </Text>
              <Link
                href="/tools"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                }}
              >
                Clear Filters
              </Link>
            </Box>
          ) : (
            <Box>
              <Heading as="h2" size="xl" fontWeight={700} mb={6}>
                {filteredTools.length} {filteredTools.length === 1 ? 'Tool' : 'Tools'} Found
              </Heading>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
                {filteredTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </SimpleGrid>
            </Box>
          )}
        </Container>

        {/* CTA Section */}
        <Box bg="brand.500" py={{ base: '16', md: '20' }} mt={10}>
          <Container maxW="4xl">
            <Stack gap="6" align="center" textAlign="center">
              <Heading
                size="2xl"
                fontWeight="extrabold"
                color="white"
              >
                Ready to Work Smarter?
              </Heading>
              <Text
                fontSize="lg"
                color="white/90"
                maxW="2xl"
              >
                All tools are free. No registration required. Start using them right now.
              </Text>
              <Link href={'/'}>
                <Button
                  size="lg"
                  bg="white"
                  color="brand.500"
                  fontWeight="semibold"
                  borderRadius="md"
                  px="8"
                  _hover={{ bg: "gray.50" }}
                  _active={{ bg: "gray.100" }}
                  className="btn-press"
                >
                  Start Using Tools
                  <HStack gap="2">
                    <LuArrowRight />
                  </HStack>
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>

        {/* FAQ Section */}
        <ToolsFAQ />
      </Box>
    </>
  );
}
