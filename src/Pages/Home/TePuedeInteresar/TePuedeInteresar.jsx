import { Grid } from '@chakra-ui/react'
import React from 'react'
import Card from './components/Cards'

const TePuedeInteresar = () => {
  return (
    <Grid
      my="10"
      gap="2"
      gridTemplateColumns={{
        base: 'none',
        md: 'repeat(auto-fit,minmax(330px,1fr))',
      }}
      w="full"
    >
      <Card
        urlImg="https://http2.mlstatic.com/D_NQ_948577-MLA70554662312_072023-C.webp"
        topHeading={'ESPECIAL SALUD'}
        heading="hasta 30% off y 6 cuotas sin interés"
      />
      <Card
        urlImg="https://http2.mlstatic.com/D_NQ_934195-MLA70582184693_072023-C.webp"
        topHeading={'TODO PARA TU BEBÉ'}
        heading="hasta 35% off y 6 cuotas sin interés"
      />
    </Grid>
  )
}

export default TePuedeInteresar
