import { Box, Heading, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import Favorite from '../../../Components/Icons/Favorite'

const FavoriteProduct = ({ description }) => {
  const [favorites, setFavorites] = useState(false)

  const handleFavoriteClick = () => setFavorites((prev) => !prev)

  return (
    <HStack gap="2" alignItems="flex-start">
      <Heading
        fontSize="1.35rem"
        fontWeight="medium"
        textTransform="capitalize"
      >
        {description}
      </Heading>
      <Box borderRadius="full" boxShadow="md" onClick={handleFavoriteClick}>
        <Favorite props={{ favorites: favorites.toString() }} />
      </Box>
    </HStack>
  )
}

export default FavoriteProduct
