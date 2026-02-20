import {
  Badge,
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuZap, LuShieldCheck, LuTrophy, LuWrench } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container maxW="7xl" pb={'10'}>
      <Stack gap={{ base: '12', md: '16' }}>
        <Stack gap="6" align="center" textAlign="center">
          <Badge variant="subtle" size="lg" colorPalette="brand">
            The Mission
          </Badge>
          <Heading size={{ base: '4xl', md: '5xl' }} fontWeight="bold" lineHeight="1.1">
            Why toolshub-builders Exists
          </Heading>
          <Text color="fg.muted" textStyle="xl" maxW="3xl">
            Build affordable AI agents-enabled SaaS products for companies of all sizes.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
          {missions.map((mission) => (
            <Box
              key={mission.title}
              p="8"
              bg="bg.muted"
              borderRadius="xl"
              borderWidth="1px"
              _hover={{ borderColor: 'brand.solid', shadow: 'md' }}
              transition="all 0.2s"
            >
              <Stack gap="4">
                <Icon fontSize="4xl" color="brand.solid">
                  {mission.icon}
                </Icon>
                <Heading size="lg">{mission.title}</Heading>
                <Text color="fg.muted" fontSize="lg">
                  {mission.description}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>

        <Text
          textAlign="center"
          fontSize="xl"
          fontWeight="semibold"
          color="fg.muted"
          maxW="3xl"
          mx="auto"
        >
          We're tired of software that promises everything and delivers confusion. Tired of pricing that starts reasonable and becomes predatory. Tired of support that's outsourced and unhelpful. So we built something different.
        </Text>
      </Stack>
    </Container>
  )
}

interface Mission {
  title: string
  description: string
  icon: React.ReactNode
}

const missions: Mission[] = [
  {
    title: 'Operator-First Approach',
    description: "We build tools we use ourselves. Every feature solves a real problem we've faced.",
    icon: <LuWrench />,
  },
  {
    title: 'Simple & Powerful',
    description: "No bloat. No unnecessary complexity. Just tools that work the way you expect them to.",
    icon: <LuZap />,
  },
  {
    title: 'Fair & Transparent',
    description: "Clear pricing. No hidden fees. No surprise charges. Cancel anytime without penalty.",
    icon: <LuShieldCheck />,
  },
  {
    title: 'Customer Success = Our Success',
    description: "We win when you win. That's why support is first-party, fast, and actually helpful.",
    icon: <LuTrophy />,
  },
]

