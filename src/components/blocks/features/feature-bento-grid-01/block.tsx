"use client"

import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuArrowRight, LuStar } from 'react-icons/lu'
import { ProductCard } from './product-card'

export const Block = () => {
  return (
    <Container maxW="7xl">
      <Stack gap={{ base: '12', md: '16' }}>
        {/* Header Section */}
        <Stack gap="6" align="center" textAlign="center">
          <Badge variant="subtle" size="lg" colorPalette="brand">
            Our Products
          </Badge>
          <Heading size={{ base: '4xl', md: '5xl' }} fontWeight="bold" lineHeight="1.1">
            Your Complete AI Toolkit
          </Heading>
          <Text color="fg.muted" textStyle="xl" maxW="3xl">
            Five powerful products. One unified ecosystem. Built by operators, for operators.
          </Text>
        </Stack>

        {/* Products Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} justifyContent={'center'} gap="6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </SimpleGrid>

        {/* Footer CTA */}
        <Box
          position="relative"
          p="12"
          background="linear-gradient(135deg, var(--chakra-colors-brand-50) 0%, var(--chakra-colors-brand-100) 100%)"
          borderRadius="2xl"
          borderWidth="2px"
          borderColor="brand.200"
          textAlign="center"
          overflow="hidden"
          boxShadow="0 20px 60px -15px rgba(2, 62, 138, 0.2)"
        >
          {/* Decorative Elements */}
          <Box
            position="absolute"
            top="-50px"
            right="-50px"
            width="150px"
            height="150px"
            borderRadius="full"
            bg="brand.200"
            opacity="0.3"
            filter="blur(40px)"
          />
          <Box
            position="absolute"
            bottom="-30px"
            left="-30px"
            width="120px"
            height="120px"
            borderRadius="full"
            bg="brand.300"
            opacity="0.2"
            filter="blur(30px)"
          />

          <Stack gap="6" align="center" position="relative">
            {/* Icon and Heading */}
            <Stack gap="4" align="center">
              <Box
                p="4"
                borderRadius="full"
                bg="brand.solid"
                color="white"
                boxShadow="0 8px 20px rgba(2, 62, 138, 0.3)"
              >
                <LuStar size="32" />
              </Box>
              <Heading size="2xl" fontWeight="bold" color="brand.900" lineHeight="1.2">
                Can&apos;t decide?
              </Heading>
              <Text fontSize="xl" color="brand.700" fontWeight="medium">
                Start with our most popular product
              </Text>
            </Stack>

            {/* Product Highlight */}
            <Box
              p="6"
              bg="white"
              borderRadius="xl"
              borderWidth="2px"
              borderColor="brand.300"
              boxShadow="0 10px 30px rgba(2, 62, 138, 0.15)"
              maxW="md"
              w="full"
            >
              <Stack gap="4">
                <HStack justify="center" gap="3">
                  <Badge 
                    variant="solid" 
                    size="lg" 
                    colorPalette="brand"
                    px="4"
                    py="2"
                    borderRadius="full"
                    fontWeight="bold"
                  >
                    ⭐ Most Popular
                  </Badge>
                </HStack>
                <Text fontSize="3xl" fontWeight="bold" color="brand.solid" letterSpacing="-0.02em">
                  SEOengine.ai
                </Text>
                <Text fontSize="md" color="fg.muted">
                  Create content that ranks everywhere in 90 seconds
                </Text>
              </Stack>
            </Box>

            {/* CTA Button */}
            <Button
              size="xl"
              colorPalette="brand"
              variant="solid"
              px="8"
              py="7"
              fontSize="lg"
              fontWeight="bold"
              borderRadius="xl"
              boxShadow="0 8px 24px rgba(2, 62, 138, 0.3)"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 32px rgba(2, 62, 138, 0.4)',
              }}
              transition="all 0.3s"
              asChild
            >
              <a href="https://seoengine.ai" target="_blank" rel="noopener noreferrer">
                Get Started with SEOengine.ai
                <LuArrowRight size="20" />
              </a>
            </Button>

            <Text fontSize="sm" color="brand.600" fontWeight="medium">
              Join 10,000+ users creating better content
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

interface Product {
  name: string
  domain: string
  description: string
  tagline: string
  tags: string[]
  isPopular?: boolean
}

const products: Product[] = [
  {
    name: 'SEOengine.ai',
    domain: 'seoengine.ai',
    tagline: 'Create content that ranks everywhere',
    description: 'Generates SEO and AEO-optimized content in 90 seconds. Publication-ready. Your brand voice. Zero fluff. Get $300-quality content for $5.',
    tags: ['SEO', 'Content', 'AI Writing'],
    isPopular: true,
  },
  {
    name: 'Autoposting.ai',
    domain: 'autoposting.ai',
    tagline: 'Build a LinkedIn personal brand while you sleep',
    description: 'AI writes your LinkedIn posts. Schedules them. Grows your network. You show up consistent without the grind. 78% engagement increase on average.',
    tags: ['LinkedIn', 'Social Media', 'Automation'],
  },
  {
    name: 'Niyam.ai',
    domain: 'niyam.ai',
    tagline: 'AI legal research that understands Indian law',
    description: 'Drafts legal documents. Checks compliance. Researches case law. Answers legal questions instantly. Trusted by MSMEs, corporates, and legal professionals.',
    tags: ['Legal', 'Compliance', 'Research'],
  },
  {
    name: 'HappyDemo.io',
    domain: 'happydemo.io',
    tagline: 'Turn AI concepts into interactive product demos',
    description: 'Creates interactive product demos that prospects can click through. No coding. No video editing. Pure engagement. Perfect demos that never crash.',
    tags: ['Sales', 'Demo', 'Interactive'],
  },
  {
    name: 'Jalpaan.ai',
    domain: 'jalpaan.ai',
    tagline: "The restaurant POS that doesn't take a cut",
    description: 'Runs your entire restaurant. QR ordering, inventory, staff scheduling, kitchen display, billing. Zero commissions. Flat monthly fee. Keep your margins.',
    tags: ['Restaurant', 'POS', 'Operations'],
  },
]

