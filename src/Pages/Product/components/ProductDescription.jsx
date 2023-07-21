import { Button, HStack, Stack, StackDivider, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import FavoriteProduct from './FavoriteProduct'
import PriceProduct from './PriceProduct'
import ShippingCard from './ShippingCard'

const ProductDescription = ({ description, price, shipping, id }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Stack
      borderRadius="md"
      border={{ base: 'none', md: '1px solid rgba(0,0,0,.15)' }}
      boxShadow="md"
      bg="#fff"
      p="4"
      w="full"
      minW="22rem"
      gap="2"
    >
      <HStack spacing="2" fontSize="sm" color="ml.greyAlpha">
        <Text>Nuevo</Text>
        <StackDivider w="2px" bg="#ccc" />
        <Text>{id} Vendidos</Text>
      </HStack>

      <FavoriteProduct description={description} />

      <PriceProduct price={price} />

      <ShippingCard
        shippingDescription={shipping.send}
        devolutions={shipping.devolution}
      />

      <Stack pt="10">
        <Button
          _hover={{ bg: '#599afd' }}
          fontSize="md"
          color="#fff"
          bg="ml.blue"
          size="lg"
        >
          Comprar ahora
        </Button>
        <Button color="ml.blue" fontSize="md" size="lg">
          Agregar al carrito
        </Button>
      </Stack>
    </Stack>
  )
}

export default ProductDescription
