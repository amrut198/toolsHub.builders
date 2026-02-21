import { HStack, Text, Box } from '@chakra-ui/react'
import { LuSparkles } from 'react-icons/lu'
import Link from 'next/link'

export const Logo = () => (
  <Link href="/" style={{ textDecoration: 'none' }}>
    <HStack gap="2" _hover={{ cursor: 'pointer' }}>
      <Box
        bg="brand.500"
        color="white"
        fontWeight="bold"
        fontSize="md"
        width="9"
        height="9"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
      >
        <LuSparkles size={18} />
      </Box>
      <Text fontWeight="extrabold" fontSize="lg" color="gray.800">
        ToolsHub<span style={{ color: '#1E92E6' }}>.builders</span>
      </Text>
    </HStack>
  </Link>
)
