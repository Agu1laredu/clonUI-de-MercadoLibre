import { Stack, Image, Box, Text, chakra } from '@chakra-ui/react'
import StarLogo from '../../assets/Star+_logo.svg'

const Patrocinadores = () => {
  return (
    <Stack
      direction="row"
      wrap={'wrap'}
      gap="2"
      align={{ base: 'flex-start', md: 'center' }}
    >
      <Box display={{ base: 'none', lg: 'contents' }}>
        <Image src={StarLogo} alt={'StarLogo'} h="4" w="16" />
        <Text textAlign="center" fontSize="2xs" fontWeight="light">
          INCLUIDO
        </Text>
      </Box>
      <Box
        minW="192px"
        px="2"
        py="0.5"
        borderRadius="md"
        margin="0 !important"
        bgGradient="linear(to-r, #320057, #b515c9)"
        fontSize={{ base: 'xs', md: 'sm' }}
      >
        <Text color="#fff" textTransform="capitalize" fontWeight="400">
          {' '}
          Por <chakra.span fontWeight="500">$999</chakra.span> ¡Suscribite a
          nivel <chakra.span fontWeight="500">6</chakra.span> !
        </Text>
      </Box>
    </Stack>
  )
}

export default Patrocinadores
