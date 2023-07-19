import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { ImageBrand, ImageIcons, ImageHeader } from "./index";
import { Link } from "wouter";
import handleScrollToTop from "../../../../utils/handleScrollToTop";

const TiendaCard = ({ props }) => {
  return (
    <Stack
      borderRadius="md"
      justifyItems="center"
      alignItems="center"
      textAlign="center"
      bg="#fafafa"
      width="full"
      gap={8}
      _hover={{boxShadow: "xl" }}
    >
      <ImageHeader props={props}>
        <ImageBrand
          imgBrand={props.brand.imgBrand}
          imgBrandAtl={props.brand.imgBrandAlt}
        />
      </ImageHeader>

      <Stack p="8" gap={4}>
        <Heading fontSize="lg" textTransform="capitalize">
          {props.title}
        </Heading>
        <HStack>
          {props.icon.map((element) => (
            <ImageIcons
              key={element.id}
              props={element}
              brand={props.brand.brand}
            />
          ))}
        </HStack>
        <Link onClick={handleScrollToTop} href={`/products/${props.brand.brand}`}>
          <Text  cursor="pointer" as="a" color="#ccc" fontWeight='semibold' _hover={{color: 'black'}} fontSize="md">
            Ver tienda
          </Text>
        </Link>
      </Stack>
    </Stack>
  );
};

export default TiendaCard;
