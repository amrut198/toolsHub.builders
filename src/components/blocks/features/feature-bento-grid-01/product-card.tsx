"use client"

import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { 
  LuArrowRight, 
  LuSparkles,
} from 'react-icons/lu'

interface ProductCardProps {
  name: string
  domain: string
  description: string
  tagline: string
  tags: string[]
  isPopular?: boolean
}

const productLogos: Record<string, { type: 'image' | 'icon', src?: string, icon?: any }> = {
  'seoengine.ai': { type: 'image', src: '/seoengine.svg' },
  'autoposting.ai': { type: 'image', src: '/autoposting.svg' },
  'niyam.ai': { type: 'image', src: '/Niyam.svg' },
  'happydemo.io': { type: 'image', src: '/happydemo.svg' },
  'jalpaan.ai': { type: 'image', src: '/jalpan.svg' },
}

export const ProductCard = (props: ProductCardProps) => {
  const { name, domain, description, tagline, tags, isPopular } = props
  const productLogo = productLogos[domain] || { type: 'icon', icon: LuSparkles }

  return (
    <Box
      position="relative"
      borderRadius="2xl"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      height="full"
    >
      <Box
        p="8"
        borderRadius="2xl"
        height="full"
        position="relative"
        overflow="hidden"
        bg={'bg.panel'
        }
        borderWidth="2px"
        borderColor={'border.emphasized'}
      >
        {/* Background Decorative Elements */}
        <Box
          position="absolute"
          top="-20px"
          right="-20px"
          width="120px"
          height="120px"
          borderRadius="full"
          bg={'gray.100'}
          opacity="0.4"
          filter="blur(30px)"
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom="-30px"
          left="-30px"
          width="150px"
          height="150px"
          borderRadius="full"
          bg={'gray.200'}
          opacity="0.3"
          filter="blur(40px)"
          pointerEvents="none"
        />

        <Stack gap="6" height="full" position="relative" zIndex="1">
          {/* Popular Badge */}
          {isPopular && (
            <Badge
              position="absolute"
              top="-8"
              right="-8"
              variant="solid"
              size="sm"
              colorPalette="brand"
              display="flex"
              alignItems="center"
              gap="1.5"
              px="4"
              py="2"
              fontWeight="bold"
              animation="pulse 2s ease-in-out infinite"
            >
              <LuSparkles size="14" />
              Most Popular
            </Badge>
          )}

          {/* Product Icon/Logo Header */}
          <Stack gap="4">
            <HStack gap="4" align="start">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {productLogo.type === 'image' && productLogo.src && (
                  <Image
                    src={productLogo.src}
                    alt={`${name} logo`}
                    width={48}
                    height={48}
                    style={{ objectFit: 'contain' }}
                  />
                )}
              </Box>
              <Stack gap="1" flex="1" pt="1">
                <Heading 
                  size="xl" 
                  fontWeight="bold" 
                  color={isPopular ? 'brand.900' : 'brand.solid'}
                  letterSpacing="-0.03em"
                  lineHeight="1.2"
                >
                  {name}
                </Heading>
                <Text 
                  fontSize="xs" 
                  color="fg.muted"
                  fontFamily="mono"
                  fontWeight="medium"
                  bg={isPopular ? 'white' : 'bg.muted'}
                  px="2"
                  py="1"
                  borderRadius="md"
                  width="fit-content"
                >
                  {domain}
                </Text>
              </Stack>
            </HStack>

            {/* Tagline with gradient background */}
            <Box
              p="4"
              borderRadius="lg"
              bg={isPopular 
                ? 'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))'
                : 'bg.muted'
              }
              borderLeftWidth="4px"
              borderLeftColor="brand.solid"
            >
              <Text 
                fontSize="md" 
                fontWeight="semibold" 
                lineHeight="1.5"
                color="fg.emphasized"
              >
                {tagline}
              </Text>
            </Box>
          </Stack>

          {/* Description */}
          <Text 
            color="fg.muted" 
            lineHeight="1.8" 
            flex="1"
            fontSize="sm"
            px="1"
          >
            {description}
          </Text>

          {/* Tags with improved styling */}
          <HStack gap="2" flexWrap="wrap">
            {tags.map((tag, index) => (
              <Badge
                key={tag}
                variant={"subtle"}
                size="md"
                colorPalette="brand"
                px="3"
                py="1.5"
                borderRadius="lg"
                fontWeight="semibold"
                fontSize="xs"
              >
                {tag}
              </Badge>
            ))}
          </HStack>

          {/* Learn More Button with enhanced styling */}
          <Button
            variant="outline"
            colorPalette="brand"
            size="md"
            width="full"
            asChild
          >
            <a 
              href={`https://${domain}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <span>Explore {name.split('.')[0]}</span>
              <LuArrowRight size="18" />
            </a>
          </Button>
        </Stack>
      </Box>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </Box>
  )
}

