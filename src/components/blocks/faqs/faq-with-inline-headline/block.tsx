'use client'
import { Accordion, Badge, Box, Container, SimpleGrid, Span, Stack, Text, VStack, Heading, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import { LuMessageCircle } from 'react-icons/lu'
import { faqs } from './data'

export const Block = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <Container py={{ base: '16', md: '20' }} maxW="6xl">
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: '12', lg: '16' }}>
        <VStack gap={{ base: '4', md: '6' }} alignItems={'flex-start'}>
          <HStack gap="3">
            <Badge variant="subtle" size="lg" colorPalette="brand" borderRadius="md">
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
