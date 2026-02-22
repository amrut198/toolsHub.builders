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
    title: 'Text Tools',
    links: [
      { label: 'Word Counter', href: '/tools/word-counter' },
      { label: 'Character Counter', href: '/tools/character-counter' },
      { label: 'Case Converter', href: '/tools/case-converter' },
      { label: 'Remove Duplicates', href: '/tools/remove-duplicate-lines' },
      { label: 'Text to Slug', href: '/tools/text-to-slug' },
    ],
  },
  developer: {
    title: 'Developer Tools',
    links: [
      { label: 'JSON Formatter', href: '/tools/json-formatter' },
      { label: 'Base64 Encoder', href: '/tools/base64-encoder-decoder' },
      { label: 'HTML Minifier', href: '/tools/html-minifier' },
      { label: 'CSS Minifier', href: '/tools/css-minifier' },
      { label: 'JWT Decoder', href: '/tools/jwt-decoder' },
    ],
  },
  image: {
    title: 'Image Tools',
    links: [
      { label: 'Image to Base64', href: '/tools/image-to-base64' },
      { label: 'Image Compressor', href: '/tools/image-compressor' },
      { label: 'PNG to JPG', href: '/tools/png-to-jpg' },
      { label: 'Resize Image', href: '/tools/resize-image' },
      { label: 'Crop Image', href: '/tools/image-crop' },
    ],
  },
  seo: {
    title: 'SEO Tools',
    links: [
      { label: 'Meta Tag Generator', href: '/tools/meta-tag-generator' },
      { label: 'Robots.txt Generator', href: '/tools/robots-generator' },
      { label: 'Sitemap Generator', href: '/tools/sitemap-generator' },
      { label: 'Keyword Density', href: '/tools/keyword-density-checker' },
      { label: 'Open Graph Gen', href: '/tools/open-graph-generator' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'All Tools', href: '/tools' },
      { label: 'Tutorials', href: '/tutorials' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
  },
};

const legalLinks = {
  title: 'Legal',
  links: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Security', href: '/security' },
  ],
};

const socialLinks = [
  { icon: FaSitemap, href: '/sitemap.xml', label: 'Sitemap' },
  { icon: FaRss, href: '/rss.xml', label: 'RSS Feed' },
  { icon: LuFileText, href: '/llms.txt', label: 'llms.txt' },
  { icon: FaTwitter, href: 'https://twitter.com/toolshubbuilders', label: 'Twitter' },
  { icon: FaGithub, href: 'https://github.com/toolshubbuilders', label: 'GitHub' },
];

const trustBadges = [
  { icon: LuCheck, text: '20K+ Monthly Users' },
  { icon: LuShield, text: 'GDPR Compliant' },
  { icon: LuLock, text: 'No Data Tracking' },
];

export function Block() {
  return (
    <Box bg="gray.100" pt={{ base: '12', md: '14' }} pb="8">
      <Container maxW="7xl">
        <Stack gap={{ base: '10', md: '10' }}>
          {/* Main Footer Content */}
          <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={{ base: '8', md: '6' }}>
            {/* Text Tools Column */}
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

            {/* Developer Tools Column */}
            <VStack align="flex-start" gap="4">
              <Heading size="md" fontWeight="extrabold" color="gray.900">
                {footerLinks.developer.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.developer.links.map((link) => (
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

            {/* Image Tools Column */}
            <VStack align="flex-start" gap="4">
              <Heading size="md" fontWeight="extrabold" color="gray.900">
                {footerLinks.image.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.image.links.map((link) => (
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

            {/* SEO Tools Column */}
            <VStack align="flex-start" gap="4">
              <Heading size="md" fontWeight="extrabold" color="gray.900">
                {footerLinks.seo.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.seo.links.map((link) => (
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
                {legalLinks.title}
              </Heading>
              <Stack gap="3">
                {legalLinks.links.map((link) => (
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
                © 2026 toolsHub.builders — Free online tools for everyone
              </Text>
            </Stack>

            {/* Social Links */}
            <HStack gap="4" flexWrap="wrap">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
