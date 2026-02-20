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
  Button,
} from '@chakra-ui/react';
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { LuShield, LuLock, LuCheck } from 'react-icons/lu';

const footerLinks = {
  products: {
    title: 'Products',
    links: [
      { label: 'SEOengine.ai', href: 'https://seoengine.ai' },
      { label: 'Autoposting.ai', href: 'https://autoposting.ai' },
      { label: 'Niyam.ai', href: 'https://niyam.ai' },
      { label: 'HappyDemo.io', href: 'https://happydemo.io' },
      { label: 'Jalpaan.ai', href: 'https://jalpaan.ai' },
    ],
  },
  features: {
    title: 'Features',
    links: [
      { label: 'AI-Powered Tools', href: '#features' },
      { label: 'Pay-As-You-Go', href: '#pricing' },
      { label: 'No Vendor Lock-In', href: '#why' },
      { label: 'First-Party Support', href: '#support' },
      { label: 'Integrations', href: '#integrations' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'ROI Calculator', href: '#roi' },
      { label: 'Documentation', href: '#docs' },
      { label: 'Blog', href: '#blog' },
      { label: 'API', href: '#api' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About TinyCheque', href: 'https://tinycheque.com/company/about-us' },
      { label: 'Careers', href: '#careers' },
      { label: 'Partner Program', href: 'https://tinycheque.com/partnership' },
      { label: 'Join Our Community', href: 'https://forms.toolshub.builders/join' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Refund Policy', href: '#refund' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Security', href: '#security' },
    ],
  },
};

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/uditgoenka/', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://x.com/iuditg', label: 'Twitter' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@uditgoenka', label: 'YouTube' },
];

const trustBadges = [
  { icon: LuCheck, text: '99.9% Uptime SLA' },
  { icon: LuShield, text: 'GDPR Compliant' },
  { icon: LuLock, text: 'Bank-Grade Encryption' },
];

export function Block() {
  return (
    <Box bg="bg.muted" pt={{ base: '10' }} pb="8">
      <Container maxW="7xl">
        <Stack gap={{ base: '10', md: '10' }}>
          {/* Main Footer Content */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={{ base: '8', md: '6' }}>
            {/* Products Column */}
            <VStack align="flex-start" gap="4" ml={10}>
              <Heading size="sm" fontWeight="semibold">
                {footerLinks.products.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.products.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="sm"
                    color="fg.muted"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>

            {/* Features Column */}
            <VStack align="flex-start" gap="4" ml={10}>
              <Heading size="sm" fontWeight="semibold">
                {footerLinks.features.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.features.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="sm"
                    color="fg.muted"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>

            {/* Resources Column */}
            <VStack align="flex-start" gap="4" ml={10}>
              <Heading size="sm" fontWeight="semibold">
                {footerLinks.resources.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.resources.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="sm"
                    color="fg.muted"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>

            {/* Company Column */}
            <VStack align="flex-start" gap="4" ml={10}>
              <Heading size="sm" fontWeight="semibold">
                {footerLinks.company.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.company.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="sm"
                    color="fg.muted"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>

            {/* Legal Column */}
            <VStack align="flex-start" gap="4" ml={10}>
              <Heading size="sm" fontWeight="semibold">
                {footerLinks.legal.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.legal.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="sm"
                    color="fg.muted"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>
          </SimpleGrid>

          <Separator p={0} m={0} gap={5}/>

          {/* Office Addresses */}
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            {/* India Office */}
            <VStack align="flex-start" gap="3" ml={10}>
              <Heading size="sm" fontWeight="semibold">
                India Office
              </Heading>
              <Text fontSize="sm" color="fg.muted" lineHeight="tall">
                TinyCheque Ventures Private Limited
                Floor No.: 9 Floor, Tower-B3, Unit No-935,
                Spaze I Tech Park, Sohna Road,
                Gurugram, Haryana, 122018, India
              </Text>
            </VStack>

            {/* US Office */}
            <VStack align="flex-start" gap="3" ml={10}>
              <Heading size="sm" fontWeight="semibold">
                US Office
              </Heading>
              <Text fontSize="sm" color="fg.muted" lineHeight="tall">
                TinyCheque, Inc.
                131 Continental Dr, Suite 305,
                Newark, Delaware 19713, USA
              </Text>
            </VStack>
          </SimpleGrid>

          <Separator />

          {/* Bottom Section */}
          <Stack
            gap="6"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', md: 'center' }}
          >
            {/* Copyright & Trust Badges */}
            <Stack gap="4" flex="1" ml={10}>
              <Text fontSize="sm" color="fg.muted">
                © 2025 toolshub.builders | All products built and owned by TinyCheque
              </Text>
            </Stack>

            {/* Social Links and Join Our Community Button */}
            <HStack gap="4" ml={'10'} mr={'10'} flexWrap="wrap">
              <Button
                asChild
                size="sm"
                colorPalette="brand"
                bg="brand.500"
                color="white"
                _hover={{ bg: "brand.600" }}
                _active={{ bg: "brand.700" }}
              >
                <a href="https://forms.toolshub.builders/join" target="_blank" rel="noopener noreferrer">
                  Join Our Community
                </a>
              </Button>
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
                    fontSize="xl"
                    color="fg.muted"
                    _hover={{ color: 'brand.500' }}
                    transition="color 0.2s"
                  />
                </Link>
              ))}
            </HStack>
          </Stack>

          <Separator />
          
          <Flex gap="6" wrap="wrap" justifyContent={'center'}>
                {trustBadges.map((badge) => (
                  <HStack key={badge.text} gap="2">
                    <Box as={badge.icon} color="brand.500" fontSize="md" />
                    <Text fontSize="xs" color="fg.muted" fontWeight="medium">
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
