import { Heading, Stack, Text, chakra } from "@chakra-ui/react";
import { Link } from "wouter";

const PriceProduct = ({ price }) => {
  const parseCurrency = price.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
  return (
    <Stack spacing="none">
      <Heading fontWeight="normal" fontSize="3xl">
        {parseCurrency}
      </Heading>
      <Text fontWeight="normal" fontSize="md">
        en 6x{" "}
        <chakra.span fontWeight="semibold">
          {(price / 6).toLocaleString("es-ar", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 2,
          })}
        </chakra.span>
      </Text>

      <Link to={"/tarjeta/all"}>
        <Text
          sx={{ marginTop: "10px" }}
          as="a"
          cursor="pointer"
          color="ml.blue"
        >
          Ver los medios de pago
        </Text>
      </Link>
    </Stack>
  );
};

export default PriceProduct;
