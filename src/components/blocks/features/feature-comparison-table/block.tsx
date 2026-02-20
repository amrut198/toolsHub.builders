"use client"

import {
  Badge,
  Box,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
  Table,
} from '@chakra-ui/react'
import { LuCheck, LuX } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container maxW="7xl">
      <Stack gap={{ base: '12', md: '16' }}>
        {/* Header Section */}
        <Stack gap="6" align="center" textAlign="center">
          <Badge variant="subtle" size="lg" colorPalette="brand">
            See how we compare
          </Badge>
          <Heading size={{ base: '4xl', md: '5xl' }} fontWeight="bold" lineHeight="1.1">
            toolshub-builders vs. The Competition
          </Heading>
          <Text color="fg.muted" textStyle="xl" maxW="3xl">
            An honest comparison of what makes us different.
          </Text>
        </Stack>

        {/* Comparison Table */}
        <Box
          borderRadius="2xl"
          borderWidth="1px"
          overflow="hidden"
          bg="bg.panel"
        >
          <Table.Root size="lg" variant="outline" interactive border={'border.emphasized'}>
            <Table.Header>
              <Table.Row bg="bg.muted">
                <Table.ColumnHeader
                  fontWeight="bold"
                  fontSize={{ base: 'md', md: 'lg' }}
                  py="6"
                  px={{ base: '4', md: '8' }}
                >
                  Feature
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  fontWeight="bold"
                  fontSize={{ base: 'md', md: 'lg' }}
                  py="6"
                  px={{ base: '4', md: '8' }}
                  textAlign="center"
                  color="brand.600"
                >
                  toolshub-builders
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  fontWeight="bold"
                  fontSize={{ base: 'md', md: 'lg' }}
                  py="6"
                  px={{ base: '4', md: '8' }}
                  textAlign="center"
                  color="red.600"
                >
                  Competition
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {comparisonData.map((item, index) => (
                <Table.Row
                  key={item.feature}
                  _hover={{ bg: 'bg.muted' }}
                  transition="background 0.2s"
                >
                  <Table.Cell
                    fontWeight="semibold"
                    fontSize={{ base: 'sm', md: 'md' }}
                    py="6"
                    px={{ base: '4', md: '8' }}
                  >
                    {item.feature}
                  </Table.Cell>
                  <Table.Cell
                    py="6"
                    px={{ base: '4', md: '8' }}

                  >
                    <Stack gap="2" align="center">
                      <Icon
                        fontSize="2xl"
                        color="brand.600"
                      >
                        <LuCheck />
                      </Icon>
                      <Text
                        textAlign="center"
                        fontSize={{ base: 'xs', md: 'sm' }}
                        color="fg.default"
                        fontWeight="medium"
                      >
                        {item.toolshub}
                      </Text>
                    </Stack>
                  </Table.Cell>
                  <Table.Cell
                    py="6"
                    px={{ base: '4', md: '8' }}
                  >
                    <Stack gap="2" align="center">
                      <Icon
                        fontSize="2xl"
                        color="red.600"
                      >
                        <LuX />
                      </Icon>
                      <Text
                        textAlign="center"
                        fontSize={{ base: 'xs', md: 'sm' }}
                        color="fg.muted"
                      >
                        {item.competition}
                      </Text>
                    </Stack>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>

        {/* Footer Note */}
        <Text
          textAlign="center"
          fontSize="sm"
          color="fg.muted"
          fontStyle="italic"
        >
          Data based on analysis of leading SaaS competitors in our categories. Updated monthly.
        </Text>
      </Stack>
    </Container>
  )
}

interface ComparisonItem {
  feature: string
  toolshub: string
  competition: string
}

const comparisonData: ComparisonItem[] = [
  {
    feature: 'Transparent Pricing',
    toolshub: 'Clear, upfront pricing',
    competition: 'They hide fees and increase prices annually',
  },
  {
    feature: 'Cancel Anytime',
    toolshub: 'No contracts, leave when you want',
    competition: 'Annual contracts trap you for 12 months',
  },
  {
    feature: 'No Per-Seat Pricing',
    toolshub: 'Flat or usage-based pricing',
    competition: 'They charge $50-200 per user',
  },
  {
    feature: 'First-Party Support',
    toolshub: 'Direct access to founders',
    competition: 'Outsourced support with long wait times',
  },
  {
    feature: 'Data Export Anytime',
    toolshub: 'Your data, your choice',
    competition: 'Vendor lock-in by design',
  },
  {
    feature: 'All Features Included',
    toolshub: 'No artificial limits',
    competition: 'Feature gating forces expensive upgrades',
  },
  {
    feature: 'Bootstrapped & Profitable',
    toolshub: 'Sustainable, long-term focus',
    competition: 'VC-backed with pressure to exit',
  },
  {
    feature: 'Pay As You Go Options',
    toolshub: 'Flexible pricing models',
    competition: 'Forced monthly minimums',
  },
]

