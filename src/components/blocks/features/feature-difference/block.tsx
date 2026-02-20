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
  LuUsers,
  LuTrendingUp,
  LuMessageCircle,
  LuRocket,
  LuLockOpen,
  LuClock,
  LuCheck,
} from 'react-icons/lu'

export const Block = () => {
  return (
    <Container maxW="7xl" pb={'10'}>
      <Stack gap={{ base: '12', md: '12' }}>
        {/* Header Section */}
        <Stack gap="6" align="center" textAlign="center">
          <Badge variant="subtle" size="lg" colorPalette="brand">
            What Makes Us Different
          </Badge>
          <Heading size={{ base: '4xl', md: '5xl' }} fontWeight="bold" lineHeight="1.1">
            The TinyCheque Difference
          </Heading>
          <Text color="fg.muted" textStyle="xl" maxW="3xl">
            We're not trying to be the next unicorn. We're building sustainable
            software that actually serves our customers.
          </Text>
        </Stack>

        {/* Features Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
          {features.map((feature) => (
            <Box
              key={feature.title}
              p="8"
              bg="bg.muted"
              borderRadius="xl"
              borderWidth="1px"
              _hover={{ borderColor: 'brand.solid', shadow: 'md' }}
              transition="all 0.2s"
            >
              <Stack gap="4">
                <Icon fontSize="4xl" color="brand.solid">
                  {feature.icon}
                </Icon>
                <Heading size="lg">{feature.title}</Heading>
                <Text color="fg.muted" fontSize="md" lineHeight="1.7">
                  {feature.description}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Call to Action Section */}
        <Stack gap="6">
          <Box
            p="8"
            bg="bg.muted"
            borderRadius="xl"
            borderWidth="1px"
            textAlign="center"
          >
            <Stack gap="4">
              <Heading size="xl" color="colorPalette.fg" colorPalette="brand">
                Sound Too Good to Be True?
              </Heading>
              <Text fontSize="lg" color="fg.muted" maxW="4xl" mx="auto">
                We get it. The SaaS world is full of promises. Try any product free
                for 7-14 days. No credit card required. See for yourself.
              </Text>
              <HStack gap="3" wrap="wrap" justify="center">
                {benefits.map((benefit, index) => (
                  <Badge
                    key={index}
                    size="lg"
                    variant="outline"
                    bg={'white'}
                    colorPalette="white"
                    display="flex"
                    alignItems="center"
                    gap="2"
                  >
                    <Icon color="green.600">
                      <LuCheck />
                    </Icon>
                    {benefit}
                  </Badge>
                ))}
              </HStack>
            </Stack>
          </Box>

        </Stack>
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
    title: 'Built By Operators, For Operators',
    description:
      "Every product solves a problem we faced ourselves. We're not guessing what you need—we've been there.",
    icon: <LuUsers />,
  },
  {
    title: 'Bootstrapped & Profitable',
    description:
      'No VC pressure means no pricing games. We grow sustainably, and our customers benefit.',
    icon: <LuTrendingUp />,
  },
  {
    title: 'First-Party Support',
    description:
      'Email the founders directly. Get answers in hours, not days. We actually care about your success.',
    icon: <LuMessageCircle />,
  },
  {
    title: 'Ship Fast, Iterate Faster',
    description:
      'Small team means rapid deployment. Feature requests become reality in weeks, not quarters.',
    icon: <LuRocket />,
  },
  {
    title: 'No Vendor Lock-In',
    description:
      'Export your data anytime. Integrate with anything. We believe you should own your workflow.',
    icon: <LuLockOpen />,
  },
  {
    title: 'Long-Term Thinking',
    description:
      'Building for decades, not exit multiples. Your success is our business model.',
    icon: <LuClock />,
  },
]

const benefits: string[] = [
  'No Credit Card',
  'Full Feature Access',
  'Cancel Anytime',
]

