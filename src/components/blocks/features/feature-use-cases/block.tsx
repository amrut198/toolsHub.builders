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
  LuStore,
  LuUsers,
  LuCheck,
  LuBookOpen,
  LuCode,
  LuPalette,
  LuPenTool,
} from 'react-icons/lu'

export const Block = () => {
  return (
    <Container maxW="7xl" pb={'10'} bg="white">
      <Stack gap={{ base: '8', md: '8' }}>
        {/* Header Section */}
        <Stack gap="6" align="center" textAlign="center">
          <Badge variant="subtle" size="lg" colorPalette="brand">
            Use Cases
          </Badge>
          <Heading
            size="2xl"
            fontWeight="extrabold"
            color="gray.900"
            maxW="2xl">
            Built for Everyone
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl">
            From students to professionals, tools that save time every day.
          </Text>
        </Stack>

        {/* Use Cases Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
          {useCases.map((useCase) => (
            <Box
              key={useCase.title}
              p="8"
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
                      p="2"
                      borderRadius="lg"
                      bg="brand.subtle"
                      color="brand.solid"
                    >
                      <Icon fontSize="xl">
                        {useCase.icon}
                      </Icon>
                    </Box>
                    <Heading size="xl" fontWeight="bold" lineHeight="1.2" mt="1">
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
                      <Text fontSize="md" fontWeight="medium">
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
          textAlign="center"
        >
          <Stack gap="4">
            <Heading size="xl" color="colorPalette.fg" colorPalette="brand">
              Ready to Save Time?
            </Heading>
            <Text fontSize="lg" color="fg.muted" maxW="4xl" mx="auto">
              Join thousands who use our tools daily. No sign-up required.
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
    title: 'Students',
    description:
      'Ace assignments faster. Summarize papers, generate citations, rewrite essays in your voice. Graduate with less stress.',
    icon: <LuBookOpen />,
    benefits: [
      '10x faster research',
      'Better grades, less time',
      'Plagiarism-free output',
    ],
  },
  {
    title: 'Marketers',
    description:
      'Create a month of social content in an hour. Generate ad copy that converts. Analyze competitor strategies instantly.',
    icon: <LuMegaphone />,
    benefits: [
      'Save 15+ hours weekly',
      '3x engagement boost',
      'Zero writer\'s block',
    ],
  },
  {
    title: 'Developers',
    description:
      'Debug code in seconds. Generate documentation automatically. Convert between languages. Ship features faster.',
    icon: <LuCode />,
    benefits: [
      'Code 50% faster',
      'Cleaner documentation',
      'Fewer bugs shipped',
    ],
  },
  {
    title: 'Designers',
    description:
      'Generate color palettes from descriptions. Create SVG icons. Extract design tokens. Focus on creativity, not grunt work.',
    icon: <LuPalette />,
    benefits: [
      'Instant inspiration',
      'Consistent design systems',
      'Faster iterations',
    ],
  },
  {
    title: 'Writers',
    description:
      'Beat blank page syndrome. Rewrite clunky sentences. Expand outlines into drafts. Edit in your style, not robot-speak.',
    icon: <LuPenTool />,
    benefits: [
      'Write 3x more daily',
      'Cleaner first drafts',
      'Never stuck for words',
    ],
  },
  {
    title: 'Small Business Owners',
    description:
      'Generate product descriptions. Write email newsletters. Create social posts. Marketing done without hiring agencies.',
    icon: <LuStore />,
    benefits: [
      'Save $5K+ monthly',
      'Professional results fast',
      'No expertise needed',
    ],
  },
]

