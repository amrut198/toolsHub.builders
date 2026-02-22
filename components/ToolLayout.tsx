/**
 * ToolLayout Component
 * Standardized layout for individual tool pages
 */

import { Fragment } from 'react';

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  HStack,
  Link,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ToolCard } from './ToolCard';
import type { Tool } from '@/lib/tools-data';

interface ToolLayoutProps {
  tool: Tool;
  children: ReactNode;
  features?: string[];
  howToUse?: string[];
  relatedTools?: Tool[];
}

export function ToolLayout({
  tool,
  children,
  features = [],
  howToUse = [],
  relatedTools = [],
}: ToolLayoutProps) {
  return (
    <Box bg="#fff" minH="calc(100vh - 65px)">
      {/* Breadcrumb */}

      {/* Header - Centered */}
      <Box bg="white" pt={16} pb={12}>
        <Container maxW="4xl">
          <Stack gap={6} textAlign="center" alignItems="center">
            <Heading as="h1" size="3xl" fontWeight={800} color="gray.900">
              {tool.title}
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              {tool.description}
            </Text>
          </Stack>
          <HStack gap={2} fontSize="sm" color="gray.600" justifyContent="center" mt={4}>
            <Link href="/">Home</Link>
            <Text>/</Text>
            <Link href="/tools">Tools</Link>
            <Text>/</Text>
            <Text color="brand.500" fontWeight={500}>{tool.title}</Text>
          </HStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="6xl" pb={10}>
        <Flex direction="column" gap={8}>
          {/* Main Column */}
          <Box flex="1">
            {/* Tool UI */}
            <Box
              bg="white"
              borderRadius="2xl"
              shadow="md"
              border="1px solid"
              borderColor="gray.200"
              p={6}
              mb={6}
            >
              {children}
            </Box>

            {/* Features Section */}
            {features.length > 0 && (
              <Box bg="white" borderRadius="2xl" p={6} mb={6} border="1px solid" borderColor="gray.200">
                <Heading as="h2" size="lg" fontWeight={700} mb={4}>
                  Features
                </Heading>
                <Stack gap={3}>
                  {features.map((feature, index) => (
                    <Flex key={index} gap={3} align="start">
                      <Box
                        mt={1}
                        w={5}
                        h={5}
                        borderRadius="full"
                        bg="brand.500"
                        color="white"
                        fontSize="xs"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexShrink={0}
                      >
                        ✓
                      </Box>
                      <Text color="gray.700" fontSize={'lg'}>{feature}</Text>
                    </Flex>
                  ))}
                </Stack>
              </Box>
            )}

            {/* How To Use Section */}
            {howToUse.length > 0 && (
              <Box bg="white" borderRadius="2xl" p={6} mb={6} border="1px solid" borderColor="gray.200">
                <Heading as="h2" size="lg" fontWeight={700} mb={4}>
                  How to Use
                </Heading>
                <Stack gap={3}>
                  {howToUse.map((step, index) => (
                    <Flex key={index} gap={4}>
                      <Box
                        w={8}
                        h={8}
                        borderRadius="lg"
                        bg="brand.100"
                        color="brand.600"
                        fontWeight={700}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexShrink={0}
                      >
                        {index + 1}
                      </Box>
                      <Text color="gray.700" fontSize={'lg'}>
                        {step}
                      </Text>
                    </Flex>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Related Tools */}
            {relatedTools.length > 0 && (
              <Box>
                <Heading as="h2" size="lg" fontWeight={700} mb={4}>
                  Related Tools
                </Heading>
                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
                  {relatedTools.map((relatedTool) => (
                    <ToolCard key={relatedTool.id} tool={relatedTool} variant="compact" />
                  ))}
                </SimpleGrid>
              </Box>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
