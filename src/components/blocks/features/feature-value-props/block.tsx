'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuInfinity, LuZap, LuShield, LuLock } from 'react-icons/lu'

export const Block = () => {
  const valueProps = [
    {
      icon: LuInfinity,
      title: 'Forever Free',
      description: 'No premium tiers. No credit card required. All tools are free, forever.',
    },
    {
      icon: LuZap,
      title: 'Instant Access',
      description: 'No account creation. No email verification. Click and use immediately.',
    },
    {
      icon: LuShield,
      title: 'Privacy First',
      description: 'We don\'t store your data. What you process stays in your browser.',
    },
    {
      icon: LuLock,
      title: 'No Locked Features',
      description: 'Every tool is fully functional. No limits, no paywalls, no upgrades.',
    },
  ]

  return (
    <Box bg="white" py={{ base: '16', md: '20' }}>
      <Container maxW="6xl">
        <Stack gap="8" align="center" textAlign="center">
          {/* Section Header */}
          <Stack gap="3" maxW="3xl">
            <Heading
              size="2xl"
              fontWeight="800"
              color="gray.900"
              as={'h2'}
              lineHeight={'normal'}
            >
              Why Choose toolsHub.builders?
            </Heading>
            <Text fontSize="lg" color="gray.600">
              We built the tools we wished existed. Fast, free, and focused on what matters.
            </Text>
          </Stack>

          {/* Value Props Grid */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap="4"
            pt="4"
          >
            {valueProps.map((prop, index) => (
              <Box
                key={index}
                flex="1"
                p="6"
                borderRadius="xl"
                borderWidth="1px"
                borderColor="gray.200"
                bg="gray.50"
                transition="all 0.2s ease"
                _hover={{
                  borderColor: 'brand.300',
                  bg: 'white',
                  shadow: 'md',
                }}
              >
                <Stack gap="3" align="center">
                  <Box
                    width="12"
                    height="12"
                    borderRadius="lg"
                    bg="brand.500"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xl"
                  >
                    <Icon as={prop.icon} />
                  </Box>
                  <Stack gap="2" align="center">
                    <Text
                      fontWeight="semibold"
                      fontSize="lg"
                      color="gray.900"
                    >
                      {prop.title}
                    </Text>
                    <Text fontSize="md" color="gray.600" lineHeight="relaxed">
                      {prop.description}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}
