import { Box, Grid, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'wouter'
import { ArrowReturnIcon, TruckIcon } from '../../../Components'

const ShippingCard = ({ shippingDescription, devolutions }) => {
  const [modal, setModal] = useState(false)
  return (
    <Stack gap="4">
      <HStack gap="2">
        <TruckIcon />
        <Stack spacing="0" gap="1">
          <Text
            color="ml.green"
            fontSize="md"
            fontWeight="semibold
          "
            as="h6"
          >
            {shippingDescription === 'free'
              ? 'Llega gratis el martes'
              : 'Llega el martes con cargo adicional'}
          </Text>
          <Link to={'/tarjeta/all'}>
            <Text
              as="button"
              textAlign="start"
              cursor="pointer"
              color="ml.blue"
              fontSize="sm"
            >
              Ver más formas de entrega
            </Text>
          </Link>
        </Stack>
      </HStack>

      <HStack gap="2" alignItems="flex-start">
        <ArrowReturnIcon position="relative" top="6px" />
        <Stack spacing="0" gap="1">
          <Text
            color="ml.green"
            fontSize="md"
            fontWeight="semibold
          "
            as="h6"
          >
            {devolutions.status
              ? 'Devolución gratis'
              : 'Devolución con recargo adicional'}
          </Text>
          {devolutions.text && (
            <Text color="blackAlpha.700" fontSize="sm">
              {devolutions.text}
            </Text>
          )}
          <Text
            textAlign="start"
            as="button"
            cursor="pointer"
            onClick={() => setModal((prev) => !prev)}
            color="ml.blue"
            fontSize="sm"
          >
            Conocer más
          </Text>
        </Stack>

        {modal && (
          <Grid
            placeContent="center"
            bg="blackAlpha.400"
            position="absolute"
            w="full"
            h="100vh"
            top="0"
            right="0"
            onClick={() => setModal((prev) => !prev)}
          >
            <Box boxSize="425px" bg="#fff">
              <Heading>dassadasdasdasadasdas</Heading>
              <Heading>dassadasdasdasadasdas</Heading>
              <Heading>dassadasdasdasadasdas</Heading>
              <Heading>dassadasdasdasadasdas</Heading>
            </Box>
          </Grid>
        )}
      </HStack>
    </Stack>
  )
}

export default ShippingCard
