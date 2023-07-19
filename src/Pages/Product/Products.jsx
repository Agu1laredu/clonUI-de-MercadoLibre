import { Grid, Heading, HStack, Image, chakra, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { dataCardBrand } from "../../Constant";
import ProductDescription from "./components/ProductDescription";
import ProductIcon from "./components/ProductIcon";

const Products = ({ params }) => {
  const { brand, id } = params;
  const initalize = () =>
    dataCardBrand.filter((element) => element.brand.brand === brand);

  const [dataFilled, setDataFilled] = useState(initalize);

  const dataResult =
    dataFilled && dataFilled[0].icon?.filter((element) => element.id === id);

  if (dataFilled.length === 0 || !dataResult) {
    return <Heading>No Hay resultados en este momento...</Heading>;
  }
  console.log(dataResult);

  return (
    <>
      {dataResult?.map((element) => (
        <Grid
          gridTemplateColumns={{ base: "none", md: "1fr .5fr" }}
          gridAutoRows={"auto"}
          w="full"
          p={{ base: 1, md: 2, lg: 4 }}
          gap="2"
          key={id}
        >
          <Stack
            spacing="none"
            direction="row"
            flexWrap="wrap"
            alignContent="flex-start"
            justifyContent="center"
            gap="4"
            bg="#fff"
            px="2"
            py="4"
            borderRadius="lg"
          >
            <chakra.figure
              order={{ base: 0, md: 2 }}
              w={{ base: "full", lg: "700px" }}
              maxW="500px"
              minW="350px"
            >
              <Image
                w="full"
                objectFit="cover"
                src={element.imgUrl}
                alt={element.iconThumbnailAlt}
              />{" "}
            </chakra.figure>
            <ProductIcon icons={element.icons} />
          </Stack>
          <ProductDescription
            id={element.id}
            iconUrl={element.iconThumbnailUrl}
            price={element.price}
            description={element.description}
            shipping={element.shipping}
          />{" "}
        </Grid>
      ))}
    </>
  );
};

export default Products;
