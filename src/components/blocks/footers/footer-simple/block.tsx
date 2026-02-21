'use client';

import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuTwitter, LuGithub, LuLinkedin } from 'react-icons/lu'

export function Block() {
  const footerLinks = {
    tools: {
      title: 'Tools',
      links: [
        { label: 'All Tools', href: '/tools' },
        { label: 'Text Tools', href: '/category/text' },
        { label: 'Image Tools', href: '/category/image' },
        { label: 'Audio Tools', href: '/category/audio' },
        { label: 'Video Tools', href: '/category/video' },
        { label: 'Code Tools', href: '/category/code' },
      ],
    },
    categories: {
      title: 'Categories',
      links: [
        { label: 'Popular', href: '/popular' },
        { label: 'New', href: '/new' },
        { label: 'Writing', href: '/category/writing' },
        { label: 'Productivity', href: '/category/productivity' },
        { label: 'Developer', href: '/category/developer' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
        { label: 'Submit Tool Idea', href: '/submit' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
  }

  const socialLinks = [
    { icon: LuTwitter, href: 'https://twitter.com/toolshub', label: 'Twitter' },
    { icon: LuGithub, href: 'https://github.com/toolshub', label: 'GitHub' },
    { icon: LuLinkedin, href: 'https://linkedin.com/company/toolshub', label: 'LinkedIn' },
  ]

  return (
    <Box bg="gray.900" color="gray.300" py="12">
      <Container maxW="6xl">
        <Stack gap="8">
          {/* Links Grid */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap="8"
            justify="space-between"
          >
            {Object.entries(footerLinks).map(([key, section]) => (
              <Stack key={key} gap="3" minW={{ base: 'full', md: '140px' }}>
                <Text
                  fontWeight="semibold"
                  color="white"
                  fontSize="sm"
                >
                  {section.title}
                </Text>
                <Stack gap="2">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      fontSize="sm"
                      color="gray.400"
                      _hover={{ color: 'brand.400' }}
                      transition="color 0.15s ease"
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Flex>

          <Separator borderColor="gray.800" />

          {/* Bottom Section */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', md: 'center' }}
            gap="4"
          >
            <Text fontSize="sm" color="gray.500">
              © 2025 toolsHub.builders — Free AI tools for everyone
            </Text>

            <HStack gap="4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  color="gray.500"
                  _hover={{ color: 'brand.400' }}
                  transition="color 0.15s ease"
                >
                  <Box as={social.icon} fontSize="lg" />
                </Link>
              ))}
            </HStack>
          </Flex>

          {/* Tagline */}
          <Text
            textAlign="center"
            fontSize="sm"
            color="gray.600"
          >
            Made with ❤️ for creators, students, and developers
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
