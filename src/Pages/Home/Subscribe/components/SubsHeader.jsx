import { Text, Stack, Divider, Button } from '@chakra-ui/react'
import { Link } from 'wouter'

const SubsHeader = ({ children }) => {
  return (
    <Stack gap={2} py={6} px={8}>
      <Text>
        Conseguí los mejores beneficios en Mercado Libre y Mercado Pago
      </Text>
      <>{children}</>
      <Divider />
      <Link href={'/subscribe/'}>
        <Button
          alignSelf={'flex-end'}
          w="fit-content"
          size="lg"
          color="#fff"
          bg={'ml.blue'}
          _hover={{ backgroundColor: 'ml.blueHover' }}
        >
          Suscribite
        </Button>
      </Link>
    </Stack>
  )
}
export default SubsHeader
