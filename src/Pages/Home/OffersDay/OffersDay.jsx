import { Grid, Image } from "@chakra-ui/react";
import React from "react";
import TextCard from "./components/TextCard";

const OffersDay = () => {
  return (
    <Grid
      my="10"
      gridTemplateColumns={{
        base: "none",
        md: "repeat(auto-fit,minmax(330px,1fr))",
      }}
      w="full"
      minH="50vh"
      bg="#000"
    >
      <Image
        src="https://http2.mlstatic.com/D_NQ_983640-MLA51373568766_092022-OO.jpg"
        alt="Offers Day"
        objectFit="cover"
        boxSize="full"
      />
      <TextCard />
    </Grid>
  );
};

export default OffersDay;
