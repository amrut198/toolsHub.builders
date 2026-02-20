'use client';

import { useState } from 'react';
import { Box, Container, Flex, Heading, Text, VStack, HStack, Badge, Stack } from '@chakra-ui/react';

export function Block() {
  const [teamSize, setTeamSize] = useState(1);
  const [monthlySpend, setMonthlySpend] = useState(1800);

  // Pricing logic based on the images
  const calculatetoolshub = (size: number) => {
    // Base pricing: $160 for 1 user, scaling up
    if (size <= 5) return 160 + (size - 1) * 10;
    if (size <= 10) return 200 + (size - 5) * 15;
    if (size <= 25) return 275 + (size - 10) * 20;
    return 650 + (size - 50) * 5;
  };

  const toolshub = calculatetoolshub(teamSize);
  const competitionCost = monthlySpend;
  const monthlySavings = competitionCost - toolshub;
  const annualSavings = monthlySavings * 12;
  const savingsPercent = competitionCost > 0 ? Math.round((monthlySavings / competitionCost) * 100) : 0;

  return (
    <Box pb={{ base: 10, md: 10 }}>
      <Container maxW="7xl">
        {/* Header */}
        <VStack maxW="7xl" mx="auto" textAlign="center" gap={{ base: '4', md: '6' }} mb={'8'}>
          <Badge variant="subtle" size="lg" colorPalette="brand">
            💰 ROI Calculator
          </Badge>
          <Heading as="h2" textStyle={{ base: '3xl', md: '5xl' }} fontWeight="bold">
            The Real Cost of NOT Using toolshub-builders
          </Heading>
          <Text color="fg.muted" textStyle={{ base: 'md', md: 'lg' }} maxW="2xl">
            See how much you could save
          </Text>
        </VStack>

        {/* Calculator Grid */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={6}
          mb={8}
        >
          {/* Left Panel - Your Current Situation */}
          <Box
            flex="1"
            bg="white"
            borderRadius="2xl"
            border="1px solid"
            borderColor="gray.200"
            p={8}
          >
            <Heading
              as="h3"
              fontSize="xl"
              fontWeight="semibold"
              mb={8}
              color="gray.900"
            >
              Your Current Situation
            </Heading>

            {/* Team Size Slider */}
            <VStack gap={2} mb={8} align="stretch">
              <HStack justify="space-between">
                <Text fontWeight="medium" color="gray.700">
                  Team Size
                </Text>
                <Text fontSize="2xl" fontWeight="bold" color="gray.900">
                  {teamSize}
                </Text>
              </HStack>

              <Box position="relative">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    outline: 'none',
                    background: `linear-gradient(to right, #023E8A 0%, #023E8A ${teamSize}%, #E2E8F0 ${teamSize}%, #E2E8F0 100%)`,
                    WebkitAppearance: 'none',
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                  className="custom-slider"
                />
              </Box>

              <Text fontSize="sm" color="gray.600">
                Number of team members using SaaS tools
              </Text>
            </VStack>

            {/* Monthly SaaS Spend Slider */}
            <VStack gap={2} align="stretch">
              <HStack justify="space-between">
                <Text fontWeight="medium" color="gray.700">
                  Monthly SaaS Spend
                </Text>
                <Text fontSize="2xl" fontWeight="bold" color="gray.900">
                  ${monthlySpend.toLocaleString()}
                </Text>
              </HStack>

              <Box position="relative">
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    outline: 'none',
                    background: `linear-gradient(to right, #023E8A 0%, #023E8A ${((monthlySpend - 100) / 9900) * 100}%, #E2E8F0 ${((monthlySpend - 100) / 9900) * 100}%, #E2E8F0 100%)`,
                    WebkitAppearance: 'none',
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                  className="custom-slider"
                />
              </Box>

              <Text fontSize="sm" color="gray.600">
                Current monthly spend on similar tools
              </Text>
            </VStack>
          </Box>

          {/* Right Panel - Your Savings */}
          <Box
            flex="1"
            bg="bg.muted"
            borderRadius="2xl"
            border="1px solid"
            borderColor="bg.muted"
            p={8}
          >
            <HStack mb={8} gap={2}>
              <Text fontSize="xl" color="black">📈</Text>
              <Heading
                as="h3"
                fontSize="xl"
                fontWeight="semibold"
                color="black"
              >
                Your Savings with toolshub-builders
              </Heading>
            </HStack>

            <VStack gap={4} align="stretch">
              {/* toolshub-builders Cost */}
              <Box
                bg="white"
                borderRadius="xl"
                p={4}
              >
                <Text fontSize="sm" color="black" mb={1}>
                  toolshub-builders Monthly Cost
                </Text>
                <Text fontSize="2xl" fontWeight="bold" color="black">
                  ${toolshub}
                </Text>
              </Box>

              {/* Competition Cost */}
              <Box
                bg="white"
                borderRadius="xl"
                p={4}
              >
                <Text fontSize="sm" color="black" mb={1}>
                  Competition Monthly Cost
                </Text>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="black"
                  textDecoration="line-through"
                  textDecorationColor="gray.600"
                >
                  ${competitionCost.toLocaleString()}
                </Text>
              </Box>

              {/* Monthly Savings */}
              <Box
                bg="white"
                borderRadius="xl"
                p={4}
              >
                <Text fontSize="sm" color="black" mb={1}>
                  Monthly Savings
                </Text>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color={monthlySavings >= 0 ? "green" : "red.400"}
                >
                  ${Math.abs(monthlySavings).toLocaleString()}
                </Text>
              </Box>

              {/* Annual Savings */}
              <Box
                bg="white"
                borderRadius="xl"
                p={4}
              >
                <Text fontSize="sm" color="black" mb={1}>
                  Annual Savings
                </Text>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="black"
                >
                  ${Math.abs(annualSavings).toLocaleString()}
                </Text>
              </Box>

              {/* Savings Percentage */}
              <Box
                bg={monthlySavings >= 0 ? "white" : "white"}
                borderRadius="xl"
                p={6}
                textAlign="left"
              >
                <Text fontSize="sm" color="black" mb={2} opacity={0.9}>
                  You Save
                </Text>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color={savingsPercent >= 0 ? "green" : "red.400"}
                >
                  {savingsPercent >= 0 ? '' : '-'}{Math.abs(savingsPercent)}%
                </Text>
              </Box>
            </VStack>
          </Box>
        </Flex>

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
                These Are Conservative Estimates
              </Heading>
              <Text fontSize="lg" color="fg.muted" maxW="4xl" mx="auto">
                Most teams save even more when factoring in reduced onboarding time, no annual price increases,
                and the ability to cancel services you don&apos;t need anymore without losing data or functionality.

              </Text>
            </Stack>
          </Box>

        </Stack>

        {/* Custom Slider Styles */}
        <style jsx>{`
          .custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            border: 3px solid #023E8A;
          }

          .custom-slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            border: 3px solid #023E8A;
          }
        `}</style>
      </Container>
    </Box>
  );
}

