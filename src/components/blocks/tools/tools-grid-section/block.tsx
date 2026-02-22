'use client';

import {
  Box,
  Button,
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
  LuFileText,
  LuImage,
  LuMic,
  LuVideo,
  LuCode,
  LuZap,
  LuArrowRight,
  LuStar,
} from 'react-icons/lu'

export const Block = () => {
  const tools = [
    {
      name: 'AI Summarizer',
      description: 'Condense any text into a clear summary',
      icon: LuFileText,
      category: 'Text',
      popular: true,
    },
    {
      name: 'Background Remover',
      description: 'Remove backgrounds from any image',
      icon: LuImage,
      category: 'Image',
      popular: true,
    },
    {
      name: 'Text to Speech',
      description: 'Convert text into natural audio',
      icon: LuMic,
      category: 'Audio',
      popular: false,
    },
    {
      name: 'Video Compressor',
      description: 'Reduce video file size without quality loss',
      icon: LuVideo,
      category: 'Video',
      popular: false,
    },
    {
      name: 'Code Explainer',
      description: 'Understand any code snippet instantly',
      icon: LuCode,
      category: 'Code',
      popular: true,
    },
    {
      name: 'Paraphrasing Tool',
      description: 'Rewrite text while keeping the meaning',
      icon: LuFileText,
      category: 'Text',
      popular: false,
    },
    {
      name: 'Image Upscaler',
      description: 'Enhance image resolution with AI',
      icon: LuImage,
      category: 'Image',
      popular: false,
    },
    {
      name: 'Grammar Checker',
      description: 'Fix grammar and spelling errors',
      icon: LuFileText,
      category: 'Text',
      popular: false,
    },
  ]

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
              The most-used AI tools this week. Try one.
            </Text>
          </Stack>

          {/* Tools Grid */}
          <Grid
            templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
            gap="4"
          >
            {tools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </Grid>

          {/* CTA */}
          <Flex justify="center" pt="4">
            <ChakraLink
              href="/"
              _hover={{ textDecoration: 'none' }}
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
                <Text>View All 50+ Tools</Text>
                <LuArrowRight />
              </HStack>
            </ChakraLink>
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
  popular?: boolean
}

function ToolCard({ name, description, icon: Icon, category, popular }: ToolCardProps) {
  return (
    <ChakraLink
      href="#"
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
  )
}
