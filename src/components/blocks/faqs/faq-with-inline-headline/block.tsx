'use client'
import { Accordion, Button, Container, SimpleGrid, Span, Stack, Box, Text, VStack, Badge, Heading, Link } from '@chakra-ui/react'
import { useState } from 'react'
import { LuMail } from 'react-icons/lu'
import { SectionHeader } from './section-header'
import { faqs } from './data'

export const Block = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <Container py={10} maxW="7xl">
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={{ base: '12', lg: '24' }}>
        <VStack gap={{ base: '4', md: '6' }} alignItems={'flex-start'}>
          <Badge variant="subtle" size="lg" colorPalette="brand">
            FAQ
          </Badge>

          <Heading as="h2" textStyle={{ base: '3xl', md: '5xl' }} fontWeight="bold">
            Questions? We've Got Answers.
          </Heading>

          <Text color="fg.muted" textStyle={{ base: 'md', md: 'lg' }}>
            Everything you need to know about toolshub-builders products and pricing.
          </Text>
        </VStack>

        <Stack gap="8" flex="1">
          <Accordion.Root multiple defaultValue={[faqs[0].question]}>
            {faqs.slice(0, showAll ? faqs.length : 5).map(({ question, answer }) => (
              <Accordion.Item key={question} value={question}>
                <Accordion.ItemTrigger textStyle="lg" py="4">
                  <Span flex="1">{question}</Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent color="fg.muted">
                  <Accordion.ItemBody>{answer}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
          <Button
            size="xl"
            alignSelf="center"
            variant="outline"
            colorPalette="brand"
            onClick={() => setShowAll(true)}
            display={showAll ? 'none' : 'flex'}
          >
            Show more FAQs
          </Button>
        </Stack>
      </SimpleGrid>

    </Container>
  )
}
