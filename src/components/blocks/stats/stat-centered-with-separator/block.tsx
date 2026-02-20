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
    <Box bg="bg.subtle" py={{ base: '16', md: '16' }}>
      <Container maxW="7xl">
        <Stack gap={{ base: '12', md: '16' }}>
          {/* Header Section */}
          <Stack gap="6" align="center" textAlign="center">
            <Badge variant="subtle" size="lg" colorPalette="brand">
              Our Story
            </Badge>
            <Text color="fg.muted" textStyle="xl" maxW="3xl">
              The Company Behind $20M in SaaS Revenue
            </Text>
          </Stack>

          {/* Stats Grid */}
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            gap="0"
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            bg="bg.panel"
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
                  <Text color="fg.muted" fontSize="sm">
                    {stat.description}
                  </Text>
                </Stack>
                {index < stats.length - 1 && (
                  <>
                    {/* Vertical separator for desktop */}
                    <Separator
                      orientation="vertical"
                      position="absolute"
                      right="0"
                      top="50%"
                      transform="translateY(-50%)"
                      height="60%"
                      hideBelow="lg"
                    />
                    {/* Horizontal separator for mobile */}
                    <Separator
                      orientation="horizontal"
                      hideFrom="lg"
                    />
                  </>
                )}
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
    value: '$20M+',
    label: 'Revenue Generated',
    description: 'Across our product portfolio',
  },
  {
    value: '10,000+',
    label: 'Active Users',
    description: 'Across 700+ companies',
  },
  {
    value: '5 Products',
    label: 'In Production',
    description: 'All profitable, all growing',
  },
  {
    value: '4.8/5',
    label: 'Average Rating',
    description: 'From verified customers',
  },
]

