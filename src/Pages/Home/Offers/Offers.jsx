import { Stack } from '@chakra-ui/react'
import { OfferCard, OfferFees, OfferPrice } from './components'
import { Router } from 'wouter'
import { dataProduct } from '../../../Constant'
import { SectionRoute, CustomSlider } from '../../../Components'
import { useEffect, useState } from 'react'

const Offers = () => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    console.log(cart)
  }, [cart])
  return (
    <Router base="/products">
      <Stack w="full" maxW="full" minH={{ base: 'auto', md: '20vh' }} gap="4">
        <SectionRoute title="Basado en tu última visita" cta="Ver historial" />
        <CustomSlider>
          {dataProduct.map((element) => (
            <OfferCard
              key={element.idArt}
              imgUrl={element.imgUrl}
              imgAlt={element.imgAlt}
              idArt={element.idArt}
              setCart={setCart}
            >
              <OfferPrice
                price={element.price}
                discount={element.discount}
                prevPrice={element.prevPrice}
                description={element.description}
              >
                <OfferFees price={element.price} />
              </OfferPrice>
            </OfferCard>
          ))}
        </CustomSlider>
      </Stack>
    </Router>
  )
}

export default Offers
