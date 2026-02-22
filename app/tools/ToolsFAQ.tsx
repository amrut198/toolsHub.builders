'use client'

import { Accordion, Badge, Box, Container, SimpleGrid, Span, Stack, Text, VStack, Heading, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import { LuMessageCircle } from 'react-icons/lu'

const faqs = [
  {
    question: 'Are all tools really free forever?',
    answer:
      "Yes! All tools on toolsHub.builders are completely free with no hidden fees, no premium tiers, and no credit card required. We believe powerful tools should be accessible to everyone.",
  },
  {
    question: "Do I need to create an account to use the tools?",
    answer:
      'No account required. Simply click on any tool and start using it immediately. No sign-up, no email verification, no waiting. Just instant access to all tools.',
  },
  {
    question: 'Is my data safe and private?',
    answer:
      "Absolutely. We don't store your input data. Everything you process stays in your browser and is never sent to our servers. Your privacy is our priority.",
  },
  {
    question: 'How often do you add new tools?',
    answer:
      'We add new tools weekly. Our team constantly works on expanding the library based on user feedback and emerging capabilities. Follow us on social media for updates.',
  },
  {
    question: 'Can I use these tools for commercial projects?',
    answer:
      "Yes! All tools are free for both personal and commercial use. Whether you're a student, creator, developer, or business owner, you can use our tools without restrictions.",
  },
  {
    question: 'Do the tools have any usage limits?',
    answer:
      'No limits. Use any tool as many times as you need. Unlike other platforms, we dont impose daily caps or restrict features. Everything is fully functional, every time.',
  },
  {
    question: 'What browsers and devices are supported?',
    answer:
      'All tools work on any modern browser (Chrome, Firefox, Safari, Edge) on desktop, tablet, and mobile devices. No downloads or installations required.',
  },
  {
    question: 'Can I request a new tool?',
    answer:
      "Yes! We love hearing from our users. If there's a tool you'd like to see, reach out through our contact page or join our community to share your idea. We prioritize features based on user demand.",
  },
  {
    question: 'How do you keep the tools free?',
    answer:
      'We support our platform through non-intrusive advertising. This allows us to keep all tools free for everyone while maintaining and improving our services.',
  },
  {
    question: 'Are there any AI-powered tools for developers?',
    answer:
      "Yes! We have a dedicated category for code tools including code generation, code explanation, code formatting, JSON tools, regex testers, and more. Perfect for developers of all skill levels.",
  },
]

export const ToolsFAQ = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <Container py={{ base: '16', md: '20' }} maxW="6xl">
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: '12', lg: '16' }}>
        <VStack gap={{ base: '4', md: '6' }} alignItems={'flex-start'}>
          <HStack gap="3">
            <Badge variant="subtle" size="lg" colorScheme="brand" borderRadius="md">
              FAQ
            </Badge>
          </HStack>

          <Heading as="h2" size={{ base: '2xl', md: '3xl' }} fontWeight="extrabold" lineHeight="1" color="gray.900">
            Questions? We've Got Answers.
          </Heading>

          <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.3">
            Everything you need to know about toolsHub.builders — our free tools, privacy, and how we work.
          </Text>
        </VStack>

        <Stack gap="4" flex="1">
          <Accordion.Root multiple defaultValue={[faqs[0].question]}>
            {faqs.slice(0, showAll ? faqs.length : 5).map(({ question, answer }) => (
              <Accordion.Item
                key={question}
                value={question}
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                bg="white"
                overflow="hidden"
                mb={5}
              >
                <Accordion.ItemTrigger
                  textStyle={{ base: 'md', lg: 'lg' }}
                  py="4"
                  px="5"
                  fontWeight="semibold"
                  color="gray.900"
                  _hover={{ bg: 'gray.50' }}
                >
                  <Span flex="1">{question}</Span>
                  <Accordion.ItemIndicator color="brand.500" />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent color="gray.600" px="5" pb="4">
                  <Accordion.ItemBody lineHeight="relaxed">{answer}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
          <Box
            as="button"
            alignSelf="center"
            color="brand.500"
            fontWeight="semibold"
            onClick={() => setShowAll(true)}
            display={showAll ? 'none' : 'flex'}
            alignItems="center"
            gap="2"
            _hover={{ bg: 'brand.50' }}
            borderRadius="md"
            px="4"
            py="2"
            fontSize="sm"
            cursor="pointer"
            bg="transparent"
            border="none"
            transition="all 0.15s ease"
          >
            Show all FAQs
            <Span fontSize="xs">({faqs.length - 5} more)</Span>
          </Box>
        </Stack>
      </SimpleGrid>

    </Container>
  )
}
