import {
  Badge,
  Box,
  Container,
  Heading,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

export const Block = () => {
  return (
    <Box bg="#fff" pb={{ base: '16', md: '16' }}>
      <Container maxW="7xl">
        <Stack gap={{ base: '12' }}>
          {/* Header Section */}
          <Stack gap="6" align="center" textAlign="center">
            <Badge variant="subtle" size="lg" colorPalette="brand">
              Trusted by Thousands
            </Badge>
            <Heading
              size="2xl"
              fontWeight="800"
              color="gray.900"
              maxW="2xl"
              lineHeight={'normal'}
            >
              Free tools that actually work. No sign-up required.
            </Heading>
          </Stack>

          {/* Stats Grid */}
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            gap="0"
            overflow="hidden"
            bg="#fff"
          >
            {stats.map((stat, index) => (
              <Box key={stat.label}>
                <Stack
                  gap="3"
                  py={{ base: '8', md: '10' }}
                  px={{ base: '6', md: '8' }}
                  textAlign="center"
                  position="relative"
                >
                  <Heading size={{ base: '3xl', md: '4xl' }} fontWeight="bold" color="brand.solid">
                    {stat.value}
                  </Heading>
                  <Text fontWeight="semibold" fontSize="lg" color="fg.emphasized">
                    {stat.label}
                  </Text>
                  <Text color="fg.muted" fontSize="md">
                    {stat.description}
                  </Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}

interface Stat {
  value: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    value: '50+',
    label: 'Free Tools',
    description: 'No credit card. No limits.',
  },
  {
    value: '50K+',
    label: 'Monthly Users',
    description: 'Real people. Real results.',
  },
  {
    value: '12',
    label: 'Categories',
    description: 'Text, images, audio, video, code.',
  },
  {
    value: '4.8/5',
    label: 'User Rating',
    description: 'Based on 2,000+ reviews.',
  },
]

