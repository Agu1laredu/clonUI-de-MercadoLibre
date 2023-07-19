import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ProductPrice = ({ price = 1000, description, children }) => {
  const parsePrice = (price) => {
    const result = price.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
    return result;
  };
  return (
    <Stack
      py="20px"
      px="16px"
      margin="0 !important"
      bg="#fff"
      borderBottomRadius={'md'}
    >
      {/* <Text postition='absolute' as="s">{parsePrice(prevPrice)}</Text> */}
      <HStack>
        <Text fontSize="xl" fontWeight="semibold">
          {parsePrice(price)}
        </Text>
        {/* <Text fontSize="xs" color="ml.green">
          {discount}
        </Text> */}
      </HStack>
      {children}
      <Text>{description}</Text>
    </Stack>
  );
};

export default ProductPrice;
