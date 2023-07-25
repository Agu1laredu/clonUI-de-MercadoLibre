import { Image } from '@chakra-ui/react'

const LogoIcon = () => {
  const LogoMercadoLibre =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGrrxUY-Lvl7t4t83sYqo1nb1XvKWAfSgSZfZbx15NnAao9e5e-W50kvjAa2mQh1I6EQ&usqp=CAU'
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
