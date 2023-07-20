import { Image } from '@chakra-ui/react'
import Logo from '../../assets/Images/Logo.png'

const LogoIcon = () => {
  return (
    <Image
      src={Logo}
      alt="Logo de Mercado Libre"
      boxSize={{ base: '88px', md: '100px' }}
      objectFit="contain"
      style={{ borderRadius: 50, width: 50, height: 80 }}
    />
  )
}

export default LogoIcon
