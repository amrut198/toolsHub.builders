'use client';

import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    Button,
} from '@chakra-ui/react';
import { LuArrowRight } from 'react-icons/lu';

interface JoinCommunityCTAProps {
    tagline?: string;
    subline?: string;
    buttonText?: string;
}

export function Block({
    tagline = "Get New Tools Before Anyone Else",
    subline = "Join 15,000+ members. Weekly tool drops. Tips & tricks. Zero spam.",
    buttonText = "Join Free"
}: JoinCommunityCTAProps) {
    return (
        <Box
            background="linear-gradient(135deg, var(--chakra-colors-brand-50) 0%, var(--chakra-colors-brand-100) 100%)"
        >
            <Container maxW="7xl" py={{ base: '12' }}>
                <Box
                    position="relative"
                    p={{ base: '8', md: '12' }}
                    textAlign="center"
                    overflow="hidden"
                >
                    <Stack gap="6" align="center" position="relative" maxW="4xl" mx="auto">
                        <Heading
                            size={{ base: 'xl', md: '2xl' }}
                            fontWeight="bold"
                            color="brand.900"
                            lineHeight="1.2"
                        >
                            {tagline}
                        </Heading>
                        <Text 
                            fontSize={{ base: 'lg', md: 'xl' }} 
                            color="brand.700" 
                            fontWeight="medium"
                            maxW="2xl"
                        >
                            {subline}
                        </Text>
                        <Button
                            asChild
                            size="lg"
                            colorPalette="brand"
                            bg="brand.500"
                            color="white"
                            _hover={{ bg: "brand.600" }}
                            _active={{ bg: "brand.700" }}
                        >
                            <a href="https://forms.toolshub.builders/join" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {buttonText}
                                <LuArrowRight size="20" />
                            </a>
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

