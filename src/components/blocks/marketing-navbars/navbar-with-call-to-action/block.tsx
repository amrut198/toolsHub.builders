'use client'

import { Box, Button, Container, HStack, Spacer, Stack } from '@chakra-ui/react'
import { Logo } from './logo'
import { MobilePopover } from './mobile-popover'
import { NavbarLinks } from './navbar-links'

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
      bg="bg.panel"
      backdropFilter="blur(10px)"
      backgroundColor="bg.panel/95"
    >
      <Container py={{ base: '3.5', md: '4' }}>
        <HStack justify="space-between">
          <Logo />
          <Spacer hideFrom="lg" />
          <NavbarLinks hideBelow="lg" />
          <HStack gap="3" hideBelow="lg">
            <Button 
              asChild
              size={{ base: 'sm' }} 
              variant="outline"
              colorPalette="brand"
            >
              <a href="https://forms.toolshub.builders/join" target="_blank" rel="noopener noreferrer">
                Join Our Community
              </a>
            </Button>
            <Button size={{ base: 'sm' }} bg="brand.500" color="white" _hover={{ bg: "brand.600" }} _active={{ bg: "brand.700" }}>Start Free Trial</Button>
          </HStack>
          <MobilePopover hideFrom="lg">
            {({ onClose }) => (
              <Stack gap="4">
                <NavbarLinks onLinkClick={onClose} />
                <Stack gap="3" pt="4">
                  <Button 
                    asChild
                    size="sm" 
                    variant="outline"
                    colorPalette="brand"
                  >
                    <a href="https://forms.toolshub.builders/join" target="_blank" rel="noopener noreferrer" onClick={onClose}>
                      Join Our Community
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    bg="brand.500" 
                    color="white" 
                    _hover={{ bg: "brand.600" }} 
                    _active={{ bg: "brand.700" }}
                    onClick={onClose}
                  >
                    Start Free Trial
                  </Button>
                </Stack>
              </Stack>
            )}
          </MobilePopover>
        </HStack>
      </Container>
    </Box>
  )
}
