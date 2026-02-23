'use client';

import { Box, Container, Heading, Text, VStack, Stack, Badge, SimpleGrid, Button, Flex } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

const steps = [
  {
    number: '1',
    title: 'Find Your Tool',
    description: 'Browse 50+ tools by category or search by task. Each tool solves one specific problem. Fast.',
    buttonText: 'Browse Tools',
    buttonHref: '#tools',
  },
  {
    number: '2',
    title: 'Use It Instantly',
    description: 'No sign-up. No forms. Just open and use. Your data isn\'t stored. Privacy-first, always.',
    buttonText: 'Try Random Tool',
    buttonHref: '#random',
  },
  {
    number: '3',
    title: 'Get Results',
    description: 'Copy, download, or share. Bookmark favorites. Come back anytime. Everything stays free, forever.',
    buttonText: 'Start Using',
    buttonHref: '#start',
  },
];

export function Block() {
  return (
    <Box pb={{ base: 10 }} bg={'#fff'}>
      <Container maxW="7xl">
        {/* Header */}
        <VStack maxW="3xl" mx="auto" textAlign="center" gap={{ base: '4', md: '6' }} mb={{ base: '10', md: '10' }}>
          <Badge variant="subtle" size="lg" colorPalette="brand">
            Getting Started
          </Badge>

          <Heading as="h2"
            size="2xl"
            fontWeight="extrabold"
            color="gray.900"
            maxW="2xl">
            How It Works
          </Heading>

          <Text fontSize="lg" color="gray.600" maxW="2xl">
            Three simple steps. No sign-up required.
          </Text>
        </VStack>

        {/* Three Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} mb={{ base: 10, md: 10 }}>
          {steps.map((step) => (
            <Box
              key={step.number}
              position="relative"
              bg="white"
              borderRadius="2xl"
              border="1px solid"
              borderColor="gray.200"
              height={'250px'}
              p={8}
              transition="all 0.3s"
              _hover={{
                borderColor: 'brand.500',
                transform: 'translateY(-4px)',
              }}
            >

              <VStack align="center" gap={4}>
                <Heading as="h3" size="lg" fontWeight="700">
                  {step.title}
                </Heading>

                <Text fontSize="md" color="gray.600" textAlign="center" >
                  {step.description}
                </Text>

                <Button
                  variant="outline"
                  colorPalette="brand"
                  size="lg"
                  position={'absolute'}
                  bottom={8}
                  _hover={{
                    bg: 'brand.50',
                  }}
                  asChild
                >
                  <a href={'/tools'}>
                    <Flex align="center" gap={2}>
                      <Text>{step.buttonText}</Text>
                      <FiArrowRight />
                    </Flex>
                  </a>
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* CTA Section */}
        {/* Call to Action Section */}
        <Stack gap="6">
          <Box
            p="8"
            textAlign="center"
          >
            <Stack gap="4">
              <Heading size="xl" color="colorPalette.fg" colorPalette="brand">
                Need a Specific Tool?
              </Heading>
              <Text fontSize="lg" color="fg.muted" maxW="4xl" mx="auto">
                Can&apos;t find what you need? We&apos;re adding new tools weekly. Suggest a tool and we&apos;ll build it.
              </Text>

              <Box>
                <Button
                  variant="outline"
                  colorPalette="brand"
                  size="lg"
                  _hover={{
                    bg: 'brand.50',
                  }}
                  asChild
                >
                  <a href="/tools">
                    <Flex align="center" gap={2}>
                      <Text>Suggest a Tool</Text>
                      <FiArrowRight />
                    </Flex>
                  </a>
                </Button>
              </Box>
            </Stack>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}

