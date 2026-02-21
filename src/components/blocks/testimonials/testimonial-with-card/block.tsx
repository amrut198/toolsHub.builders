import { Badge, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { SectionHeader } from './section-header'
import { data } from './data'
import { TestimonialCard } from './testimonial-card'

export const Block = () => (
  <Container pb={{ base: '14', md: '14' }} mb={10} maxW="7xl" bg={'#fff'}
    mx="auto" >
    <Stack gap="12">
      {/* Header Section */}
      <Stack gap="6" align="center" textAlign="center">
        <Badge variant="subtle" size="lg" colorPalette="brand">
          Testimonials
        </Badge>
        <Heading as="h2"
          size="2xl"
          fontWeight="extrabold"
          color="gray.900"
          maxW="2xl">
          What Our Users Say
        </Heading>
        <Text fontSize="lg" color="gray.600" maxW="2xl">
          Real users. Real results. See how our tools save time every day.
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
