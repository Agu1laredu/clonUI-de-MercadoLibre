import { Image } from '@chakra-ui/react'

const LogoIcon = () => {
  const LogoMercadoLibre =
    'https://premioseikon.com/wp-content/uploads/2021/10/Logo_Meli-2048x803.png'
  return (
    <Image
      src={LogoMercadoLibre}
      alt="Logo de Mercado Libre"
      boxSize={{ base: '88px', md: '100px' }}
      objectFit="contain"
      style={{
        width: 90,
        height: 90,
      }}
    />
  )
}

export default LogoIcon
