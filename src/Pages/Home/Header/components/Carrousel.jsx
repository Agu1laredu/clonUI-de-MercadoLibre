import { chakra, Image, Button } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const Carrousel = () => {
  const dataImage = [
    'https://http2.mlstatic.com/D_NQ_603773-MLA70481175520_072023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_755326-MLA70516180908_072023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_867446-MLA70532417040_072023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_702182-MLA70435050360_072023-OO.webp',
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dataImage.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? dataImage.length - 1 : prevIndex - 1,
    )
  }

  return (
    <chakra.picture
      w="full"
      margin="0 !important"
      style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}
    >
      <Button
        onClick={previousImage}
        zIndex="1"
        style={{
          alignSelf: 'center',
          justifySelf: 'start',
          width: '10px',
        }}
      >
        <ChevronLeftIcon
          color="ml.blue"
          cursor="pointer"
          width="4.5rem"
          height="4.5rem"
          borderRadius="full"
          bg="#fff"
          boxShadow="lg"
          display={{ base: 'none', md: 'block' }}
        />
      </Button>
      <Image
        w="full"
        blockSize="auto"
        maxHeight="65vh"
        src={dataImage[currentImageIndex]}
        alt="Carrousel"
        style={{ width: '100%', margin: 'auto' }}
      />
      <Button
        onClick={nextImage}
        zIndex="1"
        style={{
          alignSelf: 'center',
          justifySelf: 'end',
          width: '10px',
        }}
      >
        <ChevronRightIcon
          color="ml.blue"
          cursor="pointer"
          width="4.5rem"
          height="4.5rem"
          borderRadius="full"
          bg="#fff"
          boxShadow="lg"
          display={{ base: 'none', md: 'block' }}
        />
      </Button>
    </chakra.picture>
  )
}

export default Carrousel
