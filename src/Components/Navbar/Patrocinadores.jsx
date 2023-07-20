import { Stack, Image } from '@chakra-ui/react'

const Patrocinadores = () => {
  const Logo =
    'https://http2.mlstatic.com/D_NQ_957153-MLA69318147677_052023-OO.webp'
  return (
    <Stack
      direction="row"
      wrap={'wrap'}
      gap="2"
      align={{ base: 'flex-start', md: 'center' }}
    >
      <Image
        src={Logo}
        alt={'StarLogo'}
        h="10"
        w="200"
        style={{ cursor: 'pointer' }}
      />
    </Stack>
  )
}

export default Patrocinadores
