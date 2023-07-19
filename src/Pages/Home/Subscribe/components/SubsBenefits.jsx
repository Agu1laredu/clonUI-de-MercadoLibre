import { Box, HStack, Image, Text } from '@chakra-ui/react'
import { Link } from 'wouter'

const SubsBenefits = ({ props: { imgUrl, altImg, caption, id } }) => {
  return (
    <Link href={`/subscribe/${id}`}>
      <HStack cursor="pointer">
        <Image
          borderRadius="full"
          p={1}
          border="1px solid #cecece"
          boxSize={{ base: '62px', md: '88px' }}
          src={imgUrl}
          alt={altImg}
          style={{ border: 'none' }}
        />
        <Box>
          <Text fontWeight="light">{caption}</Text>
        </Box>
      </HStack>
    </Link>
  )
}

export default SubsBenefits
