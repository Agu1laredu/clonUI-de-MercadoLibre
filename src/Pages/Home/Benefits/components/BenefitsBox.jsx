import { Stack, Image } from "@chakra-ui/react";
import React from "react";

const BenefitsBox = ({ backgrounImg, backgrounImgAlt, children }) => {
  return (
    <Stack  boxSize='inherit' position='relative' borderRadius={"xl"}>
      <Image borderRadius={"xl"} src={backgrounImg} alt={backgrounImgAlt} />
      <>{children}</>
    </Stack>
  );
};

export default BenefitsBox;
