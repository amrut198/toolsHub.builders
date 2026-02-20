'use client';

import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    Button,
    SimpleGrid,
    HStack,
    Badge,
    Flex,
} from '@chakra-ui/react';
import { LuArrowRight, LuCheck } from 'react-icons/lu';

const features = [
    'No credit card required',
    'Setup in 5 minutes',
    'Cancel anytime',
    'First-party support',
];

const stats = [
    {
        value: '10,000+',
        label: 'Active Users',
    },
    {
        value: '99.9%',
        label: 'Uptime SLA',
    },
    {
        value: '4.8/5',
        label: 'Average Rating',
    },
];

export function Block() {
    return (
        <Box
            background="linear-gradient(135deg, var(--chakra-colors-brand-50) 0%, var(--chakra-colors-brand-100) 100%)">
            <Container maxW="7xl">
                <Box
                    position="relative"
                    p={{ base: '8', md: '12' }}
                    textAlign="center"
                    overflow="hidden"
                >

                    <Stack gap="8" align="center" position="relative" maxW="5xl" mx="auto">
                        {/* Heading Section */}
                        <Stack gap="4" align="center">
                            <Heading
                                size={{ base: 'xl', md: '2xl' }}
                                fontWeight="bold"
                                color="brand.900"
                                lineHeight="1.2"
                                maxW="3xl"
                            >
                                Stop Overpaying for Software That Under-Delivers
                            </Heading>
                            <Text fontSize="xl" color="brand.700" fontWeight="medium">
                                You have two choices:
                            </Text>
                        </Stack>

                        {/* Features with Checkmarks */}
                        <Box
                            w="full"
                        >
                            <Stack gap="6">
                                <Flex
                                    wrap="wrap"
                                    gap="3"
                                    justify="center"
                                    align="center"
                                >
                                    {features.map((feature) => (
                                        <Badge
                                            key={feature}
                                            variant="plain"
                                            colorPalette="brand"
                                            size="lg"
                                            px="4"
                                            py="2"
                                        >
                                            <HStack gap="2">
                                                <Box
                                                    as={LuCheck}
                                                    fontSize="md"
                                                    flexShrink={0}
                                                />
                                                <Text fontSize="sm" fontWeight="medium">
                                                    {feature}
                                                </Text>
                                            </HStack>
                                        </Badge>
                                    ))}
                                </Flex>

                                {/* CTA Button */}
                                <Button
                                    size={'md'}
                                    variant={'subtle'}
                                    width={'auto'}
                                    display={'flex'}
                                    alignSelf={'center'}
                                >
                                    Start Free Trial
                                    <LuArrowRight size="20" />
                                </Button>
                            </Stack>
                        </Box>

                        {/* Stats Section */}
                        <SimpleGrid
                            columns={{ base: 1, sm: 3 }}
                            gap={{ base: '6', md: '12' }}
                            w="full"
                            maxW="3xl"
                        >
                            {stats.map((stat) => (
                                <Stack key={stat.label} gap="2" align="center">
                                    <Text
                                        fontSize={{ base: '3xl', md: '4xl' }}
                                        fontWeight="bold"
                                        color="brand.solid"
                                        letterSpacing="-0.02em"
                                    >
                                        {stat.value}
                                    </Text>
                                    <Text
                                        fontSize="sm"
                                        color="brand.700"
                                        fontWeight="semibold"
                                        textTransform="uppercase"
                                        letterSpacing="wide"
                                    >
                                        {stat.label}
                                    </Text>
                                </Stack>
                            ))}
                        </SimpleGrid>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

