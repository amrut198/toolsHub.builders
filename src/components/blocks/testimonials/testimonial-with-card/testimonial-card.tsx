import { Avatar, Blockquote, Box, Text } from '@chakra-ui/react'

interface TestimonialCardProps {
  data: {
    quote: string
    authorName: string
    authorImage: string
    authorRole: string
  }
}

export const TestimonialCard = (props: TestimonialCardProps) => {
  const { data } = props
  return (
    <Blockquote.Root
      display="flex"
      flexDirection="column"
      variant="plain"
      borderWidth="1px"
      bg="bg.panel"
      rounded="l2"
      p="6"
    >
      <Blockquote.Caption display="flex" gap="3" alignItems="center">
        <Avatar.Root background="linear-gradient(135deg, var(--chakra-colors-brand-50) 0%, var(--chakra-colors-brand-100) 100%)"
        >
          <Avatar.Fallback name={data.authorName} color='brand.600' />
        </Avatar.Root>
        <Box>
          <Text fontWeight="medium" color="brand.600" fontSize={'md'}>
            {data.authorName}
          </Text>
          <Text color="fg" fontSize={'sm'}>{data.authorRole}</Text>
        </Box>
      </Blockquote.Caption>
      <Blockquote.Content mt="4" flex="1" fontSize={'md'}>
        "{data.quote}"
      </Blockquote.Content>
    </Blockquote.Root>
  )
}
