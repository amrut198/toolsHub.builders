import {
  Badge,
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuAward, LuPiggyBank, LuShield, LuTarget } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container maxW="7xl" py={{ base: '16', md: '16' }}>
      <Stack gap={{ base: '12', md: '16' }}>
        {/* Header Section */}
        <Stack gap="6" align="center" textAlign="center">
          <Heading size={{ base: '4xl', md: '5xl' }} fontWeight="bold" lineHeight="1.1">
            Why You Can Trust Us
          </Heading>
        </Stack>

        {/* Features Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="8">
          {features.map((feature) => (
            <Box key={feature.title}>
              <Stack flexDirection={{ base: 'column', md: 'row' }} gap="5" align="flex-start">
                <Box
                  p="3"
                  borderRadius="lg"
                  bg="brand.muted"
                  color="brand.solid"
                >
                  <Icon fontSize="2xl">
                    {feature.icon}
                  </Icon>
                </Box>
                <Stack gap="2">
                  <Heading size="lg" fontWeight="semibold">
                    {feature.title}
                  </Heading>
                  <Text color="fg.muted" fontSize="md" lineHeight="1.7">
                    {feature.description}
                  </Text>
                </Stack>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Footer Message */}
        <Box
          p="8"
          bg="brand.subtle"
          borderRadius="xl"
          borderWidth="1px"
          borderColor="brand.muted"
        >
          <Text
            textAlign="center"
            fontSize="lg"
            lineHeight="1.7"
            color="fg.emphasized"
            maxW="4xl"
            mx="auto"
          >
            We're not another VC-backed startup burning cash to grow fast. We're operators building 
            sustainable tools that solve real problems. Every product is profitable. Every customer matters.
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'Founded by operators with 15+ years in SaaS',
    description: "Built by people who understand the pain points because we've lived them. Real experience, real solutions.",
    icon: <LuTarget />,
  },
  {
    title: 'Bootstrapped & profitable since day one',
    description: 'No burn rate, no runway pressure. We build sustainable businesses that serve customers, not investors.',
    icon: <LuAward />,
  },
  {
    title: 'No VC funding = No pressure to jack up prices',
    description: "We're not racing to billion-dollar exits. We can keep prices fair because we answer to customers, not VCs.",
    icon: <LuPiggyBank />,
  },
  {
    title: 'Building tools we use ourselves daily',
    description: "Every feature is battle-tested in our own operations. If it's not good enough for us, it's not good enough for you.",
    icon: <LuShield />,
  },
]

