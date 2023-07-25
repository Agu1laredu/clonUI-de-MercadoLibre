import { Stack } from '@chakra-ui/react'
import { OfferCard, OfferFees, OfferPrice } from './components'
import { Router } from 'wouter'
import { UltimasVistasHogarYJardin } from '../../../Constant'
import { SectionRoute, CustomSlider } from '../../../Components'
import { useEffect, useState } from 'react'

const RelacionadosUltimaVistas = () => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    console.log(cart)
  }, [cart])
  return (
    <Router base="/products">
      <Stack
        w="full"
        maxW="full"
        minH={{ base: 'auto', md: '20vh' }}
        gap="4"
        style={{ overflow: 'hidden' }}
      >
        <SectionRoute
          title="Relacionado con tus visitas en Hogar, Muebles y Jardín"
          cta="Ver historial"
        />
        <CustomSlider>
          {UltimasVistasHogarYJardin.map((element) => (
            <OfferCard
              key={element.idArt}
              imgUrl={element.imgUrl}
              imgAlt={element.imgAlt}
              idArt={element.idArt}
              setCart={setCart}
              style={{
                width: element.width,
                height: element.height,
                padding: element.padding,
                margin: element.margin,
              }}
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

export default RelacionadosUltimaVistas
