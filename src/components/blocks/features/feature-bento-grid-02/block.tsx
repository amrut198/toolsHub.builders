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
import { LuCalendar, LuShieldAlert, LuTrendingUp, LuUsers } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container maxW="7xl" pb={{ base: '16', md: '16' }}>
      <Stack gap={{ base: '12', md: '12' }}>
        <Stack gap="6" align="center" textAlign="center">
          <Badge variant="subtle" size="lg" colorPalette="blue">
            The Problem
          </Badge>
          <Heading size={{ base: '4xl', md: '5xl' }} fontWeight="bold" lineHeight="1.1">
            The SaaS Subscription Trap
          </Heading>
          <Text color="fg.muted" textStyle="xl" maxW="3xl">
            You're paying for software that started affordable, became essential, then became expensive.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
          {problems.map((problem) => (
            <Box
              key={problem.title}
              p="8"
              bg="bg.muted"
              borderRadius="xl"
              borderWidth="1px"
              _hover={{ borderColor: 'brand.solid', shadow: 'md' }}
              transition="all 0.2s"
            >
              <Stack gap="4">
                <Icon fontSize="4xl" color="brand.solid">
                  {problem.icon}
                </Icon>
                <Heading size="lg">{problem.title}</Heading>
                <Text color="fg.muted" fontSize="lg">
                  {problem.description}
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
          And you can't cancel because your team depends on them. Sound familiar?
        </Text>
      </Stack>
    </Container>
  )
}

interface Problem {
  title: string
  description: string
  icon: React.ReactNode
}

const problems: Problem[] = [
  {
    title: 'Rising Costs, Shrinking Features',
    description: "Your SaaS bill went from $99 to $299. Then $499. Features you paid for? Now 'Enterprise only.'",
    icon: <LuTrendingUp />,
  },
  {
    title: 'Annual Lock-In Traps',
    description: "Save 20% if you pay annually! But next year they raise prices 40% and you're stuck.",
    icon: <LuCalendar />,
  },
  {
    title: 'Per-Seat Pricing That Scales Linearly',
    description: "$50/user/month. Want to add 3 team members? That's $1,800/year. Forever.",
    icon: <LuUsers />,
  },
  {
    title: 'Vendor Lock-In Nightmares',
    description: "Your data is hostage. Migration costs thousands. Support tickets take days. You're trapped.",
    icon: <LuShieldAlert />,
  },
]
