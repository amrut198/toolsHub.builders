import { Badge, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { SectionHeader } from './section-header'
import { data } from './data'
import { TestimonialCard } from './testimonial-card'

export const Block = () => (
  <Container pt={{ base: '14', md: '14' }} mb={10} maxW="7xl"
    mx="auto" >
    <Stack gap="12">
      {/* Header Section */}
      <Stack gap="6" align="center" textAlign="center">
        <Badge variant="subtle" size="lg" colorPalette="brand">
          Testimonials
        </Badge>
        <Heading size={{ base: '4xl', md: '5xl' }} fontWeight="bold" lineHeight="1.1">
          What Our Users Say
        </Heading>
        <Text color="fg.muted" textStyle="xl" maxW="3xl">
          Discover how toolshub-builders is helping businesses grow and succeed.
        </Text>
      </Stack>
      <SimpleGrid gap="6" columns={{ base: 1, md: 2, lg: 3 }}>
        {data.map((item) => (
          <TestimonialCard key={item.authorName} data={item} />
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
)
