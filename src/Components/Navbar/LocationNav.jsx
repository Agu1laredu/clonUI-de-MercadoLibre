import { Stack, Text, Image, Box } from '@chakra-ui/react'
import Location from '../../assets/location-svgrepo-com.svg'

const LocationNav = () => {
  return (
    <Stack
      display={{ base: 'none', md: 'flex' }}
      position="relative"
      top="6px"
      as="a"
      direction="row"
      gap="1"
      align={'flex-start'}
    >
      <Image
        boxSize="22px"
        src={Location}
        alt="LocationIcon"
        position="relative"
        top="2px"
        left="2px"
      />
      <Box margin="0 !important">
        <Text color="ml.greyAlpha" fontSize="xs">
          Enviar a:
        </Text>
        <Text position="relative" top="-4px" fontSize="sm">
          Santa Fe - Coronda
        </Text>
      </Box>
    </Stack>
  )
}

export default LocationNav
