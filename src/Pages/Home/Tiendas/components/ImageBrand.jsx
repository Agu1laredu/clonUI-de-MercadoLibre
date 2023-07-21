import { Image, Link } from '@chakra-ui/react'
import handleScrollToTop from '../../../../utils/handleScrollToTop'

const ImageBrand = ({ imgBrand, imgBrandAtl }) => {
  return (
    <Link>
      <Image
        onClick={handleScrollToTop}
        position="absolute"
        left="0"
        right="0"
        top="45px"
        margin="0 auto"
        boxSize="88px"
        borderRadius="xl"
        src={imgBrand}
        alt={imgBrandAtl}
      />
    </Link>
  )
}

export default ImageBrand
