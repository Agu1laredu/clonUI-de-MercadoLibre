import { Image } from '@chakra-ui/react'
import { Link } from 'wouter'

const ImageIcons = ({ props, brand }) => {
  const { iconThumbnailUrl, iconAlt, id } = props
  return (
    <Link href={`/products/${brand.trim()}/${id}`}>
      <Image
        cursor="pointer"
        boxSize="68px"
        src={iconThumbnailUrl}
        alt={iconAlt}
      />
    </Link>
  )
}

export default ImageIcons
