'use client';

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Heading,
  HStack,
  VStack,
  Separator,
  Flex,
} from '@chakra-ui/react';
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaRss,
  FaSitemap,
} from 'react-icons/fa';
import { LuShield, LuLock, LuCheck, LuFileText } from 'react-icons/lu';

const footerLinks = {
  tools: {
    title: 'Tools',
    links: [
      { label: 'Text Tools', href: '/' },
      { label: 'Image Tools', href: '/' },
      { label: 'Audio Tools', href: '/' },
      { label: 'Video Tools', href: '/' },
      { label: 'Code Tools', href: '/' },
    ],
  },
  categories: {
    title: 'Categories',
    links: [
      { label: 'All Tools', href: '/' },
      { label: 'Popular', href: '/' },
      { label: 'New', href: '/' },
      { label: 'Productivity', href: '/' },
      { label: 'Developer Tools', href: '/' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Tutorials', href: '/tutorials' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/' },
      { label: 'Careers', href: '/' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Security', href: '/security' },
    ],
  },
};

const socialLinks = [
  { icon: FaSitemap, href: '/sitemap.xml', label: 'Sitemap' },
  { icon: FaRss, href: '/rss.xml', label: 'RSS Feed' },
  { icon: LuFileText, href: '/llms.txt', label: 'llms.txt' },
];

const trustBadges = [
  { icon: LuCheck, text: '50K+ Monthly Users' },
  { icon: LuShield, text: 'GDPR Compliant' },
  { icon: LuLock, text: 'No Data Tracking' },
];

export function Block() {
  return (
    <Box bg="gray.100" pt={{ base: '12', md: '14' }} pb="8">
      <Container maxW="7xl">
        <Stack gap={{ base: '10', md: '10' }}>
          {/* Main Footer Content */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={{ base: '8', md: '6' }}>
            {/* Tools Column */}
            <VStack align="flex-start" gap="4">
              <Heading size="md" fontWeight="extrabold" color="gray.900">
                {footerLinks.tools.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.tools.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="md"
                    color="gray.600"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>

            {/* Categories Column */}
            <VStack align="flex-start" gap="4">
              <Heading size="md" fontWeight="extrabold" color="gray.900">
                {footerLinks.categories.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.categories.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="md"
                    color="gray.600"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>

            {/* Resources Column */}
            <VStack align="flex-start" gap="4">
              <Heading size="md" fontWeight="extrabold" color="gray.900">
                {footerLinks.resources.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.resources.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="md"
                    color="gray.600"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>

            {/* Company Column */}
            <VStack align="flex-start" gap="4">
              <Heading size="md" fontWeight="extrabold" color="gray.900">
                {footerLinks.company.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.company.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="md"
                    color="gray.600"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>

            {/* Legal Column */}
            <VStack align="flex-start" gap="4">
              <Heading size="md" fontWeight="extrabold" color="gray.900">
                {footerLinks.legal.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.legal.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="md"
                    color="gray.600"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>
          </SimpleGrid>

          <Separator borderColor="gray.200" />

          {/* Bottom Section */}
          <Stack
            gap="6"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', md: 'center' }}
          >
            {/* Copyright */}
            <Stack gap="2">
              <Text fontSize="md" color="gray.600">
                © 2026 toolsHub.builders — Free AI tools for everyone
              </Text>
            </Stack>

            {/* Social Links */}
            <HStack gap="4" flexWrap="wrap">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Box
                    as={social.icon}
                    fontSize="lg"
                    color="gray.500"
                    _hover={{ color: 'brand.500' }}
                    transition="color 0.2s"
                  />
                </Link>
              ))}
            </HStack>
          </Stack>

          <Separator borderColor="gray.200" />

          {/* Trust Badges */}
          <Flex gap="6" wrap="wrap" justifyContent="center">
            {trustBadges.map((badge) => (
              <HStack key={badge.text} gap="2">
                <Box as={badge.icon} color="success.500" fontSize="sm" />
                <Text fontSize="md" color="gray.600" fontWeight="medium">
                  {badge.text}
                </Text>
              </HStack>
            ))}
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
