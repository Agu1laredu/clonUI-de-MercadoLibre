import { Text } from "@chakra-ui/react";
import React from "react";

const ProductFees = ({price}) => {
  const feesPrice = (price) => {
    const result = (price / 6).toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
    return result;
  };

  return (
    <>
      <Text color="ml.green" fontWeight="light">{`6x${feesPrice(
        price
      )} sin interés`}</Text>
      <Text color="ml.green" fontWeight="semibold">
        Envio Gratis
      </Text>
    </>
  );
};

export default ProductFees;
