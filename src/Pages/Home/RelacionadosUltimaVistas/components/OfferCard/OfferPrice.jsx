import { HStack, Stack, Text } from '@chakra-ui/react'

const OfferPrice = ({ price, discount, description, children }) => {
  const parsePrice = (price) => {
    const result = price.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    })
    return result
  }
  return (
    <Stack
      py="20px"
      px="16px"
      position="relative"
      top="-13px"
      bg="#fff"
      margin="0 !important"
    >
      <HStack>
        <Text fontSize="xl" fontWeight="semibold">
          {parsePrice(price)}
        </Text>
        <Text fontSize="xs" color="ml.green">
          {discount}
        </Text>
      </HStack>
      {children}
      <Text>{description}</Text>
    </Stack>
  )
}

export default OfferPrice
