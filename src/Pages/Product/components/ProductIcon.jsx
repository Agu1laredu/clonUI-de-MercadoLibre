import { Image, Stack } from '@chakra-ui/react'

const ProductIcon = ({ icons }) => {
  return (
    <Stack
      maxW="350px"
      justifyContent="center"
      spacing="none"
      gap="2"
      direction={{ base: 'row', lg: 'column' }}
      order={{ base: 2, lg: 1 }}
    >
      {icons?.map((element) => (
        <Image
          key={element.id}
          border="1px solid #ccc"
          minW="68px"
          boxSize="68px"
          borderRadius="md"
          _hover={{ boxShadow: 'xl' }}
          src={element}
        />
      ))}
    </Stack>
  )
}

export default ProductIcon
