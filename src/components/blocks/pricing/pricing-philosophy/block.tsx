"use client"

import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuCheck, LuX, LuRefreshCw, LuDoorOpen, LuEye, LuLockOpen, LuLock, LuUsers, LuLayers, LuCircleAlert } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container maxW="7xl" py={{ base: '16', md: '10' }}>
      <Stack gap={{ base: '12', md: '12' }}>
        {/* Header Section */}
        <Stack gap="6" align="center" textAlign="center">
          <Badge variant="subtle" size="lg" colorPalette="brand">
            Our Pricing Philosophy
          </Badge>
          <Heading size={{ base: '4xl', md: '5xl' }} fontWeight="bold" lineHeight="1.1">
            No Tricks. No Traps.
          </Heading>
          <Text color="fg.muted" textStyle="xl" maxW="3xl">
            Here's how we're different from the rest of the SaaS world.
          </Text>
        </Stack>

        {/* Two Column Comparison */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="8">
          {/* What We Do */}
          <Box
            p="8"
            background="linear-gradient(135deg, var(--chakra-colors-brand-50) 0%, var(--chakra-colors-brand-100) 100%)"
            borderRadius="2xl"
            borderWidth="2px"
            borderColor="brand.100"
          >
            <Stack gap="6">
              <HStack gap="3">
                <Icon fontSize="2xl" color="brand.500">
                  <LuCheck />
                </Icon>
                <Heading size="xl" color="brand.500">
                  What We Do
                </Heading>
              </HStack>

              <Stack gap="5">
                {whatWeDo.map((item) => (
                  <Box key={item.title}>
                    <HStack gap="3" mb="2" align="start">
                      <Icon 
                        fontSize="xl" 
                        color="brand.500"
                        mt="0.5"
                      >
                        {item.icon}
                      </Icon>
                      <Heading size="md">{item.title}</Heading>
                    </HStack>
                    <Text color="fg.muted" fontSize="md" ml="8">
                      {item.description}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>

          {/* What We Don't Do */}
          <Box
            p="8"
            bg="red.50"
            borderRadius="2xl"
            borderWidth="2px"
            borderColor="red.200"
          >
            <Stack gap="6">
              <HStack gap="3">
                <Icon fontSize="2xl" color="red.600">
                  <LuX />
                </Icon>
                <Heading size="xl" color="red.700">
                  What We Don't Do
                </Heading>
              </HStack>

              <Stack gap="5">
                {whatWeDontDo.map((item) => (
                  <Box key={item.title}>
                    <HStack gap="3" mb="2" align="start">
                      <Icon 
                        fontSize="xl" 
                        color="red.600"
                        mt="0.5"
                      >
                        {item.icon}
                      </Icon>
                      <Heading size="md">{item.title}</Heading>
                    </HStack>
                    <Text color="fg.muted" fontSize="md" ml="8">
                      {item.description}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>
        </SimpleGrid>

        {/* Simple Promise */}
        <Box
          p="8"
          bg="bg.muted"
          borderRadius="xl"
          borderWidth="1px"
          textAlign="center"
        >
          <Stack gap="4">
            <Heading size="lg" color="colorPalette.fg" colorPalette="brand">
              Simple Promise
            </Heading>
            <Text fontSize="lg" color="fg.muted" maxW="4xl" mx="auto">
              We charge fairly for valuable tools. You pay for what you use. You leave when you want. That's it.
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

interface PricingItem {
  title: string
  description: string
  icon: React.ReactNode
}

const whatWeDo: PricingItem[] = [
  {
    title: 'Pay As You Go',
    description: 'Mix subscriptions with usage-based pricing. Scale up or down based on your needs.',
    icon: <LuRefreshCw />,
  },
  {
    title: 'Cancel Anytime',
    description: 'No annual lock-ins. No cancellation fees. Leave whenever you want, no questions asked.',
    icon: <LuDoorOpen />,
  },
  {
    title: 'Transparent Pricing',
    description: 'What you see is what you pay. No hidden fees. No surprise charges. Ever.',
    icon: <LuEye />,
  },
  {
    title: 'Fair Feature Access',
    description: 'Core features available to everyone. No artificial limits to force upgrades.',
    icon: <LuLockOpen />,
  },
]

const whatWeDontDo: PricingItem[] = [
  {
    title: 'Annual Lock-Ins',
    description: '"Save 20%" deals that trap you for 12 months while prices skyrocket.',
    icon: <LuLock />,
  },
  {
    title: 'Per-Seat Pricing',
    description: 'Paying $50/user/month means your costs scale linearly forever.',
    icon: <LuUsers />,
  },
  {
    title: 'Feature Gating',
    description: "Basic features moved to 'Enterprise' tier to force expensive upgrades.",
    icon: <LuLayers />,
  },
  {
    title: 'Hidden Fees',
    description: 'Setup fees, migration costs, overage charges you discover too late.',
    icon: <LuCircleAlert />,
  },
]

