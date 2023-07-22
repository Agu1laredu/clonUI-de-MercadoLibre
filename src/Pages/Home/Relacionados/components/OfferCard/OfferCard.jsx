import { Stack, Image, Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import Favorite from '../../../../../Components/Icons/Favorite'
const OfferCard = ({ imgUrl, imgAlt, idArt, children, setCart }) => {
  const [favorites, setFavorites] = useState(false)

  const handleFavoriteClick = () => {
    setFavorites((prev) => !prev)
  }

  const cartMethods = {
    addToCart(prev) {
      return [...prev, { imgUrl: imgUrl, imgAlt: imgAlt, idArt: idArt }]
    },
    deleteToCart(prev) {
      return prev.filter((element) => element.idArt !== idArt)
    },
  }

  useEffect(() => {
    if (favorites) {
      setCart((prev) => cartMethods.addToCart(prev))
    } else {
      setCart((prev) => cartMethods.deleteToCart(prev))
    }
  }, [favorites])
  return (
    <Box
      cursor={'pointer'}
      position="relative"
      zIndex="1"
      h="395px"
      style={{ margin: '10px auto' }}
    >
      <Box borderRadius="full" boxShadow="md" onClick={handleFavoriteClick}>
        <Favorite
          props={{
            favorites: favorites.toString(),
            position: 'absolute',
            right: '3',
            top: '3',
          }}
        />
      </Box>
      <Link to={`/${idArt}`}>
        <Stack
          borderRadius="md"
          w="224px"
          overflow="hidden"
          h={{ base: '392px', md: '330px' }}
          zIndex="10"
          whiteSpace={'normal'}
          transition={{ height: '.1s ease-out' }}
          _hover={{
            boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.3)',
          }}
          style={{ height: '100%' }}
        >
          <Image
            src={imgUrl}
            alt={imgAlt}
            zIndex="15"
            borderBottom="1px solid #ececec"
          />

          {children}
        </Stack>
      </Link>
    </Box>
  )
}

export default OfferCard
