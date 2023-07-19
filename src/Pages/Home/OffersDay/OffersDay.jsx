import { Grid, Image } from '@chakra-ui/react'
import React from 'react'
import TextCard from './components/TextCard'

const OffersDay = () => {
  return (
    <Grid
      my="10"
      gridTemplateColumns={{
        base: 'none',
        md: 'repeat(auto-fit,minmax(330px,1fr))',
      }}
      w="full"
      minH="30vh"
      bg="#bcac93"
      style={{ marginTop: -150, marginBottom: 10 }}
    >
      <Image
        src="https://http2.mlstatic.com/D_NQ_646774-MLA54956489751_042023-OO.jpg"
        alt="Offers Day"
        objectFit="cover"
        boxSize="full"
      />
      <TextCard />
    </Grid>
  )
}

export default OffersDay
