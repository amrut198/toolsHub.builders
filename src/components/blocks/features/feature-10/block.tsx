import {
  Badge,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'

export const Block = () => {
  return (
    <Container pt={{ base: '16' }}>
      <Stack gap={{ base: '12' }}>
        {/* Header Section */}
        <VStack maxW="3xl" mx="auto" textAlign="center" gap={{ base: '4', md: '6' }}>
          <Badge variant="subtle" size="lg" colorPalette="brand">
            Trusted by Thousands
          </Badge>
          <Heading as="h2" textStyle={{ base: '3xl', md: '5xl' }} fontWeight="bold">
            Join 10,000+ Users Already Growing with toolshub-builders
          </Heading>
          <Text color="fg.muted" textStyle={{ base: 'md', md: 'lg' }} maxW="2xl">
            Real results from real users. No fake testimonials. No cherry-picked data.
          </Text>
        </VStack>

        {/* Stats Grid */}
        <SimpleGrid
          maxW="5xl"
          mx="auto"
          columns={{ base: 2, md: 2, lg: 4 }}
          gap={{ base: '8', md: '12' }}
        >
          {stats.map((stat) => (
            <VStack key={stat.label} textAlign="center" gap="3">
              <Text
                fontSize={{ base: '3xl', md: '5xl' }}
                fontWeight="bold"
                colorPalette="brand"
                color="colorPalette.solid"
              >
                {stat.value}
              </Text>
              <Text color="fg.muted" textStyle={{ base: 'sm', md: 'md' }} fontWeight="medium">
                {stat.label}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        {/* Trust Badges Section */}
        <Stack gap="6" pt={{ base: '4' }}>
          <Text
            textAlign="center"
            color="fg.muted"
            fontWeight="semibold"
            textStyle={{ base: 'sm', md: 'md' }}
          >
            Trusted and Secured By:
          </Text>
          <HStack
            justify="center"
            wrap="wrap"
            gap={{ base: '4', md: '6' }}
          >
            {trustBadges.map((badge) => (
              <Badge
                key={badge}
                variant="subtle" size="lg" colorPalette="brand"
                px={{ base: '3', md: '4' }}
                py={{ base: '2', md: '2' }}
              >
                {badge}
              </Badge>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Container>
  )
}

const stats = [
  {
    value: '10,000+',
    label: 'Active Users',
  },
  {
    value: '700+',
    label: 'Companies Served',
  },
  {
    value: '4.8/5',
    label: 'Average Rating',
  },
  {
    value: '99.9%',
    label: 'Uptime SLA',
  },
]

const trustBadges = [
  'GDPR Compliant',
  'SOC 2 Type II',
  'ISO 27001',
  'Bank-Grade Encryption',
]
