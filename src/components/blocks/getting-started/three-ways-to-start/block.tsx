'use client';

import { Box, Container, Heading, Text, VStack, Stack, Badge, SimpleGrid, Button, Flex } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

const steps = [
  {
    number: '1',
    title: 'Pick Your Product',
    description: 'Choose the tool that solves your immediate problem. Start with one. Add more as you grow.',
    buttonText: 'Browse Products',
    buttonHref: '#products',
  },
  {
    number: '2',
    title: 'Start Free Trial',
    description: 'No credit card required. Full access for 7-14 days (depending on product). See results before you pay.',
    buttonText: 'Try Free',
    buttonHref: '#trial',
  },
  {
    number: '3',
    title: 'Go Live in Minutes',
    description: '5-minute setup. Zero technical knowledge required. First results within 24 hours.',
    buttonText: 'Get Started',
    buttonHref: '#signup',
  },
];

export function Block() {
  return (
    <Box pb={{ base: 10 }}>
      <Container maxW="7xl">
        {/* Header */}
        <VStack maxW="3xl" mx="auto" textAlign="center" gap={{ base: '4', md: '6' }} mb={{ base: '10', md: '10' }}>
          <Badge variant="subtle" size="lg" colorPalette="brand">
            Getting Started
          </Badge>

          <Heading as="h2" textStyle={{ base: '3xl', md: '5xl' }} fontWeight="bold">
            Three Ways to Start
          </Heading>

          <Text color="fg.muted" textStyle={{ base: 'md', md: 'lg' }}>
            Simple, transparent, no-nonsense onboarding.
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
              {/* Number Badge */}
              <Flex
                position="absolute"
                top="-4"
                left="8"
                align="center"
                justify="center"
                w="12"
                h="12"
                bg="brand.500"
                color="white"
                borderRadius="full"
                fontWeight="bold"
                fontSize="xl"
              >
                {step.number}
              </Flex>

              <VStack align="stretch" gap={4} mt={6}>
                <Heading as="h3" size="lg" fontWeight="semibold">
                  {step.title}
                </Heading>

                <Text color="fg.muted" lineHeight="tall">
                  {step.description}
                </Text>

                <Button
                  variant="outline"
                  colorPalette="brand"
                  size="lg"
                  mt={'3'}
                  position={'absolute'}
                  bottom={3}
                  _hover={{
                    bg: 'brand.50',
                  }}
                  asChild
                >
                  <a href={step.buttonHref}>
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
            bg="bg.muted"
            borderRadius="xl"
            borderWidth="1px"
            textAlign="center"
          >
            <Stack gap="4">
              <Heading size="xl" color="colorPalette.fg" colorPalette="brand">
                Still Have Questions?
              </Heading>
              <Text fontSize="lg" color="fg.muted" maxW="4xl" mx="auto">
                Book a 15-minute call with our team. We&apos;ll help you pick the right product and get you set up.
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
                  <a href="#contact">
                    <Flex align="center" gap={2}>
                      <Text>Schedule a Call</Text>
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

