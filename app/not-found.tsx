import Link from 'next/link'
import { Metadata } from 'next'
import { Box, Container, Heading, Text, Button, VStack, HStack, Link as ChakraLink } from '@chakra-ui/react'

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: '404 Not Found | toolsHub.builders',
  description: 'The page you are looking for could not be found. Browse our AI tools directory.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Container maxW="container.md" py={20}>
        <VStack gap={6} textAlign="center">
          {/* 404 Number */}
          <Heading
            fontSize={{ base: "8xl", md: "9xl" }}
            fontWeight="bold"
            bgGradient="to-r"
            gradientFrom="brand.500"
            gradientTo="brand.600"
            bgClip="text"
            lineHeight="1"
          >
            404
          </Heading>

          {/* Main Message */}
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="semibold"
            color="gray.900"
          >
            Page Not Found
          </Heading>

          {/* Description */}
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            maxW="md"
          >
            Sorry, we couldn't find the page you're looking for.
            The page might have been moved or doesn't exist.
          </Text>

          {/* Action Buttons */}
          <HStack gap={3} pt={4} flexWrap="wrap" justifyContent="center">
            <Link href="/" passHref legacyBehavior>
              <Button
                as="a"
                size="lg"
                colorScheme="brand"
              >
                Go Home
              </Button>
            </Link>
            <Link href="/tools" passHref legacyBehavior>
              <Button
                as="a"
                size="lg"
                variant="outline"
              >
                Browse Tools
              </Button>
            </Link>
          </HStack>

          {/* Helpful Links */}
          <Box pt={8}>
            <Text fontWeight="semibold" mb={3} color="gray.700">
              Popular Tools:
            </Text>
            <HStack gap={4} flexWrap="wrap" justifyContent="center">
              <ChakraLink href="/tools/ai-summarizer" color="brand.500">
                AI Summarizer
              </ChakraLink>
              <ChakraLink href="/tools/background-remover" color="brand.500">
                Background Remover
              </ChakraLink>
              <ChakraLink href="/tools/code-explainer" color="brand.500">
                Code Explainer
              </ChakraLink>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
