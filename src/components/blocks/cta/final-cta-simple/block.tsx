'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu'

export const Block = () => {
  return (
    <Box bg="brand.500" py={{ base: '16', md: '20' }}>
      <Container maxW="4xl">
        <Stack gap="6" align="center" textAlign="center">
          <Heading
            size="2xl"
            fontWeight="extrabold"
            color="white"
          >
            Ready to Work Smarter?
          </Heading>
          <Text
            fontSize="lg"
            color="white/90"
            maxW="2xl"
          >
            All tools are free. No registration required. Start using them right now.
          </Text>
          <Link href={'/tools'}>
            <Button
              size="lg"
              bg="white"
              color="brand.500"
              fontWeight="semibold"
              borderRadius="md"
              px="8"
              _hover={{ bg: "gray.50" }}
              _active={{ bg: "gray.100" }}
              className="btn-press"
            >
              Start Using Tools
              <HStack gap="2">
                <LuArrowRight />
              </HStack>
            </Button>
          </Link>

        </Stack>
      </Container>
    </Box>
  )
}
