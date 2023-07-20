import { Box, Grid, Text } from '@chakra-ui/react'
import { Link } from 'wouter'

export const CardCategories = ({ props }) => {
  return (
    <Link href={props.route}>
      <Grid
        bg="#fafafa"
        placeContent="center"
        justifyItems="center"
        p={4}
        minH="170px"
        cursor="pointer"
        textAlign="center"
        transition="background-color 0.3s, color 0.3s"
        _hover={{ bg: '#93a7c5', color: '#fafafa' }} // Estilos en hover para Link y sus elementos hijos
      >
        {/* <Image src={cardCategoriesImg} alt={cardCategoriesAlt} /> */}
        <Box boxSize="68px">{props.icon()}</Box>
        <Text fontSize="md" textTransform="capitalize" fontWeight="semibold">
          {props.heading}
        </Text>
      </Grid>
    </Link>
  )
}
