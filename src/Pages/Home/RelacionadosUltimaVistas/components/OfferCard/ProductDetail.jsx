import { Stack } from '@chakra-ui/react'
import { Link, Route, Switch, useParams } from 'react-router-dom'
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
    <Router>
      <Stack w="full" maxW="full" minH={{ base: 'auto', md: '20vh' }} gap="4">
        <SectionRoute title="Ofertas" cta="Ver Todas" />

        <Switch>
          <Route exact path="/products">
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
          </Route>

          <Route path="/products/:productId">
            <ProductDetail dataProduct={dataProduct} />
          </Route>
        </Switch>
      </Stack>
    </Router>
  )
}

const ProductDetail = ({ dataProduct }) => {
  const { productId } = useParams()
  const product = dataProduct.find((element) => element.idArt === productId)

  if (!product) {
    return <p>Producto no encontrado</p>
  }

  return (
    <div>
      <Link to="/products">Volver a la lista de ofertas</Link>
      <h2>{product.title}</h2>
      <img src={product.imgUrl} alt={product.imgAlt} />
      <p>Precio: {product.price}</p>
      <p>Descripción: {product.description}</p>
      {/* Agrega más detalles del producto si es necesario */}
    </div>
  )
}

export default Offers
