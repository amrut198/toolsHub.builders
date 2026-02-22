'use client'

import { Box, Button, Container, HStack, Spacer, Stack } from '@chakra-ui/react'
import { Logo } from './logo'
import { MobilePopover } from './mobile-popover'
import { NavbarLinks } from './navbar-links'
import Link from 'next/link'

export const Block = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      width="100%"
      zIndex="9999"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      bg="white/95"
      backdropFilter="blur(10px)"
    >
      <Container py={{ base: '3', md: '4' }}>
        <HStack justify="space-between" gap="4">
          <Logo />
          <Spacer hideFrom="lg" />
          <NavbarLinks hideBelow="lg" />
          <HStack gap="3" hideBelow="lg">
            <Link href="/about">
              <Button
                size="lg"
                variant="ghost"
                colorPalette="gray"
                fontWeight="semibold"
              >
                About
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                bg="brand.500"
                color="white"
                fontWeight="semibold"
                borderRadius="md"
                _hover={{ bg: "brand.600" }}
                _active={{ bg: "brand.700" }}
                className="btn-press"
              >
                Browse All Tools
              </Button>
            </Link>
          </HStack>
          <MobilePopover hideFrom="lg">
            {({ onClose }) => (
              <Stack gap="4">
                <NavbarLinks onLinkClick={onClose} />
                <Stack gap="3" pt="4">
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="ghost"
                      colorPalette="gray"
                      fontWeight="semibold"
                      onClick={onClose}
                    >
                      About
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      size="md"
                      bg="brand.500"
                      color="white"
                      fontWeight="semibold"
                      borderRadius="lg"
                      _hover={{ bg: "brand.600" }}
                      _active={{ bg: "brand.700" }}
                      onClick={onClose}
                    >
                      Browse All Tools
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            )}
          </MobilePopover>
        </HStack>
      </Container>
    </Box>
  )
}
