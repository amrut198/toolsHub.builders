'use client';

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuArrowRight, LuZap, LuShield, LuInfinity } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container maxW="6xl" pt={{ base: '20' }} bg='#fff'>
      <Stack gap="10" align={{ sm: 'center' }} textAlign="center">
        <Stack gap="4" maxW={{ md: '4xl' }}>
          {/* Badge */}
          <Flex justifyContent="center" mb="2">
            <Badge
              size="lg"
              variant="subtle"
              colorPalette="brand"
              px="3"
              py="1"
              borderRadius="full"
              display="flex"
              alignItems="center"
              gap="2"
            >
              <Icon color="brand.500">
                <LuZap />
              </Icon>
              <Text fontWeight="medium" fontSize="sm">New tools added weekly</Text>
            </Badge>
          </Flex>

          {/* Headline */}
          <Heading
            as={'h1'}
            size={{ base: '3xl', md: '4xl' }}
            fontWeight="900"
            lineHeight="1.1"
            color="gray.900"
            letterSpacing="tight"
          >
            Free AI Tools. No Sign-up.{' '}
            <Text as="span" color="brand.500">Instant Results.</Text>
          </Heading>

          {/* Subheadline */}
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.600"
            maxW="2xl"
            mx="auto"
            lineHeight="relaxed"
          >
            50+ powerful AI tools for text, images, audio, video, and code.
            Completely free. Forever. No registration required.
          </Text>
        </Stack>

        {/* CTA Buttons */}
        <Flex direction={{ base: 'column', sm: 'row' }} gap="3" alignItems="center" justify="center">
          <Link href={'/'}>
            <Button
              size="lg"
              px="8"
              bg="brand.500"
              color="white"
              fontWeight="semibold"
              borderRadius="md"
              _hover={{ bg: "brand.600" }}
              _active={{ bg: "brand.700" }}
              className="btn-press"
            >
              Browse All Tools
              <HStack gap="2" ml="2">
                <LuArrowRight />
              </HStack>
            </Button>
          </Link>
          <Link href={'/'}>
            <Button
              size="lg"
              px="8"
              variant="outline"
              borderColor="gray.300"
              color="gray.700"
              fontWeight="semibold"
              borderRadius="md"
              _hover={{ borderColor: "brand.300", bg: "brand.50" }}
              _active={{ bg: "brand.100" }}
              className="btn-press"
            >
              Try Random Tool
            </Button>
          </Link>
        </Flex>

        {/* Quick Stats */}
        <HStack gap="6" wrap="wrap" justify="center" pt="2">
          <HStack gap="2" color="gray.600">
            <Icon color="success.500" fontSize="lg">
              <LuShield />
            </Icon>
            <Text fontSize="sm" fontWeight="medium">No tracking</Text>
          </HStack>
          <HStack gap="2" color="gray.600">
            <Icon color="success.500" fontSize="lg">
              <LuInfinity />
            </Icon>
            <Text fontSize="sm" fontWeight="medium">Forever free</Text>
          </HStack>
          <HStack gap="2" color="gray.600">
            <Box
              width="2"
              height="2"
              borderRadius="full"
              bg="success.500"
              animation="pulse 2s infinite"
            />
            <Text fontSize="sm" fontWeight="medium">50,000+ users</Text>
          </HStack>
        </HStack>
      </Stack>
    </Container>
  )
}

interface ToolPreviewCardProps {
  icon: React.ReactNode
  label: string
  count: number
}

function ToolPreviewCard({ icon, label, count }: ToolPreviewCardProps) {
  return (
    <Link
      href="#"
      _hover={{ textDecoration: 'none' }}
    >
      <Box
        bg="white"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="lg"
        p="4"
        minW={{ base: 'full', md: '140px' }}
        display="flex"
        alignItems="center"
        gap="3"
        transition="all 0.2s ease"
        _hover={{
          borderColor: 'brand.300',
          shadow: 'md',
          transform: 'translateY(-2px)',
        }}
        className="tool-card"
      >
        <Box
          width="10"
          height="10"
          borderRadius="md"
          bg="brand.50"
          color="brand.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="lg"
        >
          {icon}
        </Box>
        <Stack gap="0" align="flex-start">
          <Text fontWeight="semibold" fontSize="sm" color="gray.800">{label}</Text>
          <Text fontSize="xs" color="gray.500">{count} tools</Text>
        </Stack>
      </Box>
    </Link>
  )
}
