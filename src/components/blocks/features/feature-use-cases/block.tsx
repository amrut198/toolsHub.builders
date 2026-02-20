"use client"

import {
  Badge,
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  HStack,
} from '@chakra-ui/react'
import {
  LuMegaphone,
  LuRocket,
  LuStore,
  LuUtensilsCrossed,
  LuScale,
  LuUsers,
  LuTrendingUp,
  LuClock,
  LuDollarSign,
  LuCheck,
} from 'react-icons/lu'

export const Block = () => {
  return (
    <Container maxW="7xl" py={'10'}>
      <Stack gap={{ base: '8', md: '8' }}>
        {/* Header Section */}
        <Stack gap="6" align="center" textAlign="center">
          <Badge variant="subtle" size="lg" colorPalette="brand">
            Use Cases
          </Badge>
          <Heading size={{ base: '4xl', md: '5xl' }} fontWeight="bold" lineHeight="1.1">
            Built for Every Business Size
          </Heading>
          <Text color="fg.muted" textStyle="xl" maxW="3xl">
            From solo founders to enterprise teams, toolshub-builders scales with you.
          </Text>
        </Stack>

        {/* Use Cases Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
          {useCases.map((useCase) => (
            <Box
              key={useCase.title}
              p="8"
              bg="bg.muted"
              borderRadius="xl"
              borderWidth="1px"
              _hover={{
                borderColor: 'brand.solid',
                shadow: 'lg',
                transform: 'translateY(-4px)'
              }}
              transition="all 0.3s"
              display="flex"
              flexDirection="column"
              height="100%"
            >
              <Stack gap="5" flex="1" justifyContent="space-between">
                <Stack gap="5">
                  {/* Icon and Title */}
                  <HStack gap="3" align="center">
                    <Box
                      p="3"
                      borderRadius="lg"
                      bg="brand.subtle"
                      color="brand.solid"
                    >
                      <Icon fontSize="2xl">
                        {useCase.icon}
                      </Icon>
                    </Box>
                    <Heading size="lg" lineHeight="1.2" mt="1">
                      {useCase.title}
                    </Heading>
                  </HStack>

                  {/* Description */}
                  <Text color="fg.muted" fontSize="md" lineHeight="1.7">
                    {useCase.description}
                  </Text>
                </Stack>

                {/* Benefits */}
                <Stack gap="3" pt="2">
                  {useCase.benefits.map((benefit) => (
                    <HStack key={benefit} gap="2" align="start">
                      <Icon
                        fontSize="lg"
                        color="green.600"
                        mt="0.5"
                      >
                        <LuCheck />
                      </Icon>
                      <Text fontSize="sm" fontWeight="medium">
                        {benefit}
                      </Text>
                    </HStack>
                  ))}
                </Stack>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Bottom CTA */}
        <Box
          p="8"
          bg="bg.muted"
          borderRadius="xl"
          borderWidth="1px"
          textAlign="center"
        >
          <Stack gap="4">
            <Heading size="xl" color="colorPalette.fg" colorPalette="brand">
              Ready to Get Started?
            </Heading>
            <Text fontSize="lg" color="fg.muted" maxW="4xl" mx="auto">
              Join thousands of businesses already using toolshub-builders to scale their operations.
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

interface UseCase {
  title: string
  description: string
  icon: React.ReactNode
  benefits: string[]
}

const useCases: UseCase[] = [
  {
    title: 'Marketing Agencies',
    description:
      'Scale content production for multiple clients without hiring writers. Maintain consistent LinkedIn presence. Create demo-ready assets.',
    icon: <LuMegaphone />,
    benefits: [
      '30+ articles/month per client',
      '78% engagement increase',
      'Zero hiring costs',
    ],
  },
  {
    title: 'SaaS Startups',
    description:
      'Build organic visibility while focusing on product. Automate social media. Create perfect product demos that never crash.',
    icon: <LuRocket />,
    benefits: [
      '4,000+ monthly clicks in 6 months',
      '2 hours saved daily',
      '100% uptime demos',
    ],
  },
  {
    title: 'Small Businesses',
    description:
      'Get enterprise-grade tools at small business prices. No long-term contracts. Pay only for what you use.',
    icon: <LuStore />,
    benefits: [
      'Save $83K+ annually',
      'Cancel anytime',
      'First-party support',
    ],
  },
  {
    title: 'Restaurants & Hospitality',
    description:
      'Run your entire restaurant operation without losing 20% to commission-based POS systems. Keep your margins.',
    icon: <LuUtensilsCrossed />,
    benefits: [
      'Zero commission fees',
      'QR ordering built-in',
      'Full inventory management',
    ],
  },
  {
    title: 'Legal Professionals',
    description:
      'Research Indian case law instantly. Draft documents in minutes. Check compliance automatically.',
    icon: <LuScale />,
    benefits: [
      '80% faster research',
      '24/7 legal intelligence',
      'Trusted by MSMEs & corporates',
    ],
  },
  {
    title: 'Consultants & Coaches',
    description:
      'Build thought leadership on LinkedIn. Create SEO-optimized content. Showcase your expertise with professional demos.',
    icon: <LuUsers />,
    benefits: [
      'Consistent online presence',
      'Authority building',
      'Lead generation automation',
    ],
  },
]

