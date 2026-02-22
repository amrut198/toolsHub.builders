'use client';

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react'
import {
  LuStar,
  LuArrowRight,
  LuFileText,
  LuCode,
  LuImage,
  LuTrendingUp,
} from 'react-icons/lu'
import NextLink from 'next/link'
import { tools, getPopularTools, toolCategories, type ToolCategory } from '@/lib/tools-data'

export const Block = () => {
  const popularTools = getPopularTools()

  const categoryIcons: Record<ToolCategory, React.ElementType> = {
    text: LuFileText,
    developer: LuCode,
    image: LuImage,
    seo: LuTrendingUp,
  }

  return (
    <Box bg="#fff" pb={{ base: '16', md: '20' }}>
      <Container maxW="6xl">
        <Stack gap="10">
          {/* Section Header */}
          <Stack gap="4" align="center" textAlign="center">
            <HStack gap="2" color="brand.500">
              <LuStar size={18} fill="currentColor" />
              <LuStar size={18} fill="currentColor" />
              <LuStar size={18} fill="currentColor" />
              <LuStar size={18} fill="currentColor" />
              <LuStar size={18} fill="currentColor" />
            </HStack>
            <Heading
              size="2xl"
              fontWeight="extrabold"
              color="gray.900"
            >
              Popular Tools
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              The most-used tools this week. Try one.
            </Text>
          </Stack>

          {/* Tools Grid */}
          <Grid
            templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
            gap="4"
          >
            {popularTools.map((tool) => (
              <ToolCard
                key={tool.id}
                name={tool.title}
                description={tool.description}
                icon={categoryIcons[tool.category]}
                category={toolCategories[tool.category].name}
                slug={tool.slug}
              />
            ))}
          </Grid>

          {/* CTA */}
          <Flex justify="center" pt="4">
            <NextLink href="/tools" passHref legacyBehavior>
              <ChakraLink
                _hover={{ textDecoration: 'none' }}
                w="auto"
              >
                <HStack
                  as="button"
                  gap="2"
                  borderColor="gray.300"
                  color="gray.700"
                  fontWeight="semibold"
                  borderRadius="md"
                  px="8"
                  py="3"
                  borderWidth="1px"
                  bg="white"
                  transition="all 0.15s ease"
                  _hover={{
                    borderColor: 'brand.300',
                    bg: 'brand.50',
                  }}
                >
                  <Text>View All {tools.length} Tools</Text>
                  <LuArrowRight />
                </HStack>
              </ChakraLink>
            </NextLink>
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}

interface ToolCardProps {
  name: string
  description: string
  icon: React.ElementType
  category: string
  slug: string
}

function ToolCard({ name, description, icon: Icon, category, slug }: ToolCardProps) {
  return (
    <NextLink href={`/tools/${slug}`} passHref legacyBehavior>
      <ChakraLink
        _hover={{ textDecoration: 'none' }}
        w="full"
      >
        <Box
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="lg"
          p="5"
          position="relative"
          transition="all 0.2s ease"
          _hover={{
            borderColor: 'brand.300',
            shadow: 'brand-md',
            transform: 'translateY(-4px)',
          }}
          className="tool-card"
          w="full"
          h="full"
        >
          <Stack gap="4" h="full">
            {/* Icon */}
            <Box
              width="12"
              height="12"
              borderRadius="lg"
              bg="brand.50"
              color="brand.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xl"
            >
              <Icon />
            </Box>

            {/* Content */}
            <Stack gap="1">
              <Text
                fontWeight="700"
                fontSize="lg"
                color="gray.900"
              >
                {name}
              </Text>
              <Text fontSize="md" color="gray.500" lineHeight="short">
                {description}
              </Text>
            </Stack>

            {/* Category Badge */}
            <Box
              alignSelf="flex-start"
              bg="brand.50"
              color="brand.500"
              fontSize="xs"
              fontWeight="medium"
              px="2"
              py="1"
              borderRadius="md"
            >
              {category}
            </Box>
          </Stack>
        </Box>
      </ChakraLink>
    </NextLink>
  )
}
