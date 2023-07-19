import { Grid } from '@chakra-ui/react'
import React from 'react'
import Card from './components/Card'

const Descubrí = () => {
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
        urlImg="https://http2.mlstatic.com/D_NQ_936663-MLA70377484803_072023-C.webp"
        topHeading={'Es el momento'}
        heading="Aprovecha precios justos"
      />
      <Card
        urlImg="https://http2.mlstatic.com/D_NQ_634493-MLA70515543712_072023-C.webp"
        topHeading={'Especial computacion'}
        heading="hasta 35% off y 6 cuotas sin interés"
      />
    </Grid>
  )
}

export default Descubrí
