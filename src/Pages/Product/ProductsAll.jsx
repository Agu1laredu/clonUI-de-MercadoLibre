import { Box, Grid, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { dataCardBrand } from "../../Constant";
import ProductFees from "./components/ProductItem/ProductFees";
import ProductItem from "./components/ProductItem/ProductItem";
import ProductPrice from "./components/ProductItem/ProductPrice";

const ProductsAll = ({ params }) => {
  const initalize = () =>
    dataCardBrand.filter((element) => element.brand.brand === params.id);
  const [productsAll, setProductAll] = useState(initalize);
  console.log(productsAll);

  return (
    <>
      <Image
        src={productsAll[0].bgHeader}
        alt={productsAll[0].title}
        w="full"
        h="35vh"
        margin='0 !important'
        objectFit='cover'
        objectPosition={{base:'-9rem 0',sm:'0 0'}}
      />
      <HStack justifyContent='center' w="full" alignItems="flex-start" p='4'flexWrap={{base:'wrap',md:'nowrap'}} gap='4'>
        <Box>
          <Image
            boxSize="8rem"
            border='1px solid #ccc'
            borderRadius="md"
            objectFit="cover"
            src={productsAll[0].brand.imgBrand}
            alt={productsAll[0].brand.imgBrandAlt}
          />
        </Box>
        <Grid
          gridTemplateColumns="repeat(auto-fill,minmax(280px,1fr))"
          w="full"
          gap="10"
          minH="100vh"
          px="2"
        >
          {productsAll[0]?.icon?.map((product) => (
            <ProductItem
              brand={params.id}
              key={product.id}
              idArt={product.id}
              imgUrl={product.iconThumbnailUrl}
              imgAlt={product.iconThumbnailAlt}
            >
              <ProductPrice
                price={product.price}
                description={product.description}
              >
                <ProductFees price={product.price} />
              </ProductPrice>
            </ProductItem>
          ))}
        </Grid>
      </HStack>{" "}
    </>
  );
};

export default ProductsAll;
