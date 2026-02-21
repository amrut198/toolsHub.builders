'use client';

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
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
} from 'react-icons/lu'

export const Block = () => {
  const categories = [
    { name: 'Text Tools', icon: LuFileText, count: 12, description: 'Writing, editing, summarizing' },
    { name: 'Image Tools', icon: LuImage, count: 15, description: 'Generation, editing, analysis' },
    { name: 'Audio Tools', icon: LuMic, count: 8, description: 'Voice, music, transcription' },
    { name: 'Video Tools', icon: LuVideo, count: 6, description: 'Creation, editing, compression' },
    { name: 'Code Tools', icon: LuCode, count: 10, description: 'Generation, explanation, conversion' },
    { name: 'Productivity', icon: LuZap, count: 7, description: 'Time-saving utilities' },
  ]

  return (
    <Box bg="white" pb={{ base: '16', md: '20' }}>
      <Container maxW="6xl">
        <Stack gap="10">
          {/* Section Header */}
          <Stack gap="3" align="center" textAlign="center">
            <Heading
              size="2xl"
              fontWeight="extrabold"
              color="gray.900"
              maxW="2xl"
            >
              Tools for Every Task
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Browse tools by category. Everything you need to create, edit, and automate.
            </Text>
          </Stack>

          {/* Categories Grid */}
          <Grid
            templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap="4"
          >
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

interface CategoryCardProps {
  name: string
  icon: React.ElementType
  count: number
  description: string
}

function CategoryCard({ name, icon: Icon, count, description }: CategoryCardProps) {
  const href = `/category/${name.toLowerCase().replace(' ', '-')}`

  return (
    <Link
      href={href}
      _hover={{ textDecoration: 'none' }}
      w="full"
    >
      <Box
        bg="gray.50"
        borderRadius="xl"
        p="6"
        borderWidth="2px"
        borderColor="transparent"
        transition="all 0.2s ease"
        _hover={{
          borderColor: 'brand.300',
          bg: 'white',
          shadow: 'md',
        }}
        w="full"
        h="full"
      >
        <Stack gap="3" h="full">
          <Flex align="center" gap="3">
            <Box
              width="12"
              height="12"
              borderRadius="lg"
              bg="white"
              color="brand.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xl"
              shadow="sm"
            >
              <Icon />
            </Box>
            <Box>
              <Text fontWeight="semibold" fontSize="md" color="gray.900">
                {name}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {count} tools
              </Text>
            </Box>
          </Flex>
          <Text fontSize="sm" color="gray.600">
            {description}
          </Text>
        </Stack>
      </Box>
    </Link>
  )
}
