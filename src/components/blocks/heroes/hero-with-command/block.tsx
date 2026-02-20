'use client';

import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuArrowDown, LuArrowRight, LuCheck, LuStar } from 'react-icons/lu'

export const Block = () => {
  const handleScrollDown = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      const navbarHeight = 1850; // Approximate navbar height
      const targetPosition = solutionsSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Container maxW="7xl" py={{ base: '16', md: '16' }}>
      <Stack gap="12" align={{ sm: 'center' }} textAlign="center">
        <Stack gap="6" maxW={{ md: '4xl' }}>

          <Flex justifyContent={'center'} alignItems={'center'} direction={{ base: 'row', sm: 'row' }} gap="3" align={{ md: 'center' }}>
            <HStack textStyle="sm" fontWeight="medium" justifyContent="center" gap="3">
              <Box
                bg="brand.solid"
                color="white"
                fontWeight="bold"
                fontSize="md"
                width="8"
                height="8"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="md"
              >
                M
              </Box>
              <Text fontWeight="bold" fontSize="lg" color="brand.solid">
                toolshub.builders
              </Text>
            </HStack>
          </Flex>
          <Stack gap="4">
            <Heading size={{ base: '4xl', md: '5xl' }} fontWeight="bold" lineHeight="1.1">
              Your Entire AI Stack. No Monthly Limits. No Vendor Lock-In.
            </Heading>
            <Text fontSize="xl" color="fg.muted" maxW="3xl" mx="auto">
              Five AI-powered tools that actually work. Built by operators who got tired of overpaying for software that under-delivers.
            </Text>
          </Stack>
        </Stack>

        <Flex direction={{ base: 'column', sm: 'row' }} gap="3" align={{ md: 'center' }}>
          <Button
            size="lg"
            px="8"
            bg="brand.solid"
            color="white"
            _hover={{ bg: "brand.emphasized" }}
            _active={{ bg: "brand.700" }}
          >
            Start Free Trial <LuArrowRight />
          </Button>

          <Button size="lg" px="8" variant="outline" colorPalette="gray" asChild>
            <a href="#products">
              See All Products <LuArrowDown />
            </a>
          </Button>
        </Flex>

        <Stack gap="6" align="center">
          <HStack gap="4" wrap="wrap" justify="center">
            <AvatarGroup gap="0" spaceX="-3" size="lg">
              <Avatar.Root>
                <Avatar.Fallback name="Uchiha Sasuke" />
                <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd" />
              </Avatar.Root>
              <Avatar.Root>
                <Avatar.Fallback name="Baki Ani" />
                <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c" />
              </Avatar.Root>
              <Avatar.Root>
                <Avatar.Fallback name="Uchiha Chan" />
                <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863" />
              </Avatar.Root>
              <Avatar.Root variant="solid">
                <Avatar.Fallback>+3</Avatar.Fallback>
              </Avatar.Root>
            </AvatarGroup>

            <Stack flexDirection="row" gap="1" align={{ base: 'center', sm: 'flex-start' }}>
              <HStack gap="1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} fontSize="lg" color="orange.400">
                    <LuStar fill="currentColor" />
                  </Icon>
                ))}
              </HStack>
              <Text textStyle="sm" fontWeight="medium" color="fg.muted">
                Trusted by 10,000+ users worldwide
              </Text>
            </Stack>
          </HStack>

          <HStack gap="3" wrap="wrap" justify="center">
            <Badge
              size="lg"
              variant="subtle"
              colorPalette="gray"
              display="flex"
              alignItems="center"
              gap="2"
            >
              <Icon color="green.600">
                <LuCheck />
              </Icon>
              No Credit Card Required
            </Badge>
            <Badge
              size="lg"
              variant="subtle"
              colorPalette="gray"
              display="flex"
              alignItems="center"
              gap="2"
            >
              <Icon color="green.600">
                <LuCheck />
              </Icon>
              Cancel Anytime
            </Badge>
            <Badge
              size="lg"
              variant="subtle"
              colorPalette="gray"
              display="flex"
              alignItems="center"
              gap="2"
            >
              <Icon color="green.600">
                <LuCheck />
              </Icon>
              Setup in 5 Minutes
            </Badge>
          </HStack>

          <Box
            bg="gray.100"
            borderRadius="full"
            cursor="pointer"
            p="3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={handleScrollDown}
            _hover={{ bg: 'gray.200' }}
            transition="background-color 0.2s"
            style={{
              animation: 'bounce-down 2s ease-in-out infinite',
            }}
          >
            <Icon fontSize="xl" color="gray.600">
              <LuArrowDown />
            </Icon>
          </Box>
        </Stack>

      </Stack>
    </Container>
  )
}
